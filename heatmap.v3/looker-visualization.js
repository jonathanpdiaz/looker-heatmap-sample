(function() {
  var viz = {
    id: "kelsus_heatmap",
    label: "Kelsus Heatmap",
    options: {
      legend: {
        section: "Legend",
        type: "boolean",
        label: "Enable Legend",
        default: false,
        order: 1
      },
      legendEmptyPast: {
        label: "Past Empty cell Legend",
        section: "Legend",
        type: "string",
        placeholder: "Provide a text ...",
        default: "No Value",
        order: 2
      },
      legendEmptyFuture: {
        label: "Future Empty cell Legend",
        section: "Legend",
        type: "string",
        placeholder: "Provide a text ...",
        default: "No Value",
        order: 2
      },
      legendMin: {
        label: "Min Value cell Legend",
        section: "Legend",
        type: "string",
        placeholder: "Provide a text ...",
        default: "Min",
        order: 3
      },
      legendMid: {
        label: "Mid Value cell Legend",
        section: "Legend",
        type: "string",
        placeholder: "Provide a text ...",
        default: "Mid",
        order: 4
      },
      legendMax: {
        label: "Max Value cell Legend",
        section: "Legend",
        type: "string",
        placeholder: "Provide a text ...",
        default: "Max",
        order: 5
      },
      chartName: {
        section: "Chart",
        label: "Chart Name",
        type: "string"
      },
      fillEmpty: {
        section: "Empty",
        type: "boolean",
        label: "Fill empty cells",
        default: false,
        order: 1
      },
      emptyColorFuture: {
        section: "Empty",
        type: "string",
        label: "Empty cell Color",
        display: "color",
        default: "#fff",
        order: 2
      },
      emptyColorPast: {
        section: "Empty",
        type: "string",
        label: "Empty cell Color",
        display: "color",
        default: "#eee",
        order: 2
      },
      emptyTooltip: {
        label: "Empty cell Tooltip",
        section: "Empty",
        type: "string",
        placeholder: "Provide an text ...",
        default: "No Service",
        order: 3
      },
      minColor: {
        section: "Chart",
        type: "string",
        label: "Minimum Color",
        display: "color",
        default: "#c97489"
      },
      midColor: {
        section: "Chart",
        type: "string",
        label: "Middle Color",
        display: "color",
        default: "#fcedbf"
      },
      maxColor: {
        section: "Chart",
        type: "string",
        label: "Maximum Color",
        display: "color",
        default: "#7aaa85"
      },
      minThreshold: {
        section: "Chart",
        type: "number",
        label: "Minimum Threshold",
        display: "number",
        default: 0
      },
      midThreshold: {
        section: "Chart",
        type: "number",
        label: "Middle Threshold",
        display: "number",
        default: 0.5
      },
      maxThreshold: {
        section: "Chart",
        type: "number",
        label: "Maximum Threshold",
        display: "number",
        default: 1
      },
      labels: {
        section: "Label",
        type: "boolean",
        label: "Data Labels",
        default: false
      },
      labelColor: {
        section: "Label",
        type: "string",
        label: "Label Color",
        display: "color",
        default: "#000"
      },
      xAxisName: {
        label: "Axis Name",
        section: "X",
        type: "string",
        placeholder: "Provide an axis name ..."
      },
      yAxisName: {
        label: "Axis Name",
        section: "Y",
        type: "string",
        placeholder: "Provide an axis name ..."
      }
    },

    groupBy: function(xs, key) {
      const reduced = xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
      const array = [];
      for (item in reduced) {
        array.push({
          name: item,
          categories: reduced[item].map(item => item.detail)
        });
      }
      return array;
    },

    // Set up the initial state of the visualization

    create: function(element, config) {
      element.innerHTML = "";
    },

    // Render in response to the data or settings changing

    update: function(data, element, config, queryResponse) {
      if (
        !handleErrors(this, queryResponse, {
          min_pivots: 0,
          max_pivots: 0,
          min_dimensions: 2,
          max_dimensions: 2,
          min_measures: 1,
          max_measures: 1
        })
      )
        return;
      let d3 = d3v4;

      let measure_1 = config.query_fields.measures[0].name;
      let measure_2 = config.query_fields.measures[1].name;

      let x = queryResponse.fields.dimension_like[0];
      let y = queryResponse.fields.dimension_like[1];
      let z = queryResponse.fields.measure_like[0];

      let zFormat = formatType(z.value_format);

      function aesthetic(datum, field) {
        let value = datum[field.name].value;
        return value;
      }

      function fieldExtent(data, field, reverse) {
        let categories = null;
        let fieldScale = null;

        categories = d3
          .map(data, function(d) {
            return aesthetic(d, field);
          })
          .keys();
        categories = reverse ? categories.sort().reverse() : categories;
        fieldScale = d3
          .scaleOrdinal()
          .domain(categories)
          .range(d3.range(0, categories.length, 1));
        return {
          categories: categories,
          fieldScale: fieldScale
        };
      }

      let xExtent = fieldExtent(data, x, true);
      let yExtent = fieldExtent(data, y);

      let [minz, maxz] = d3.extent(data, function(d) {
        return aesthetic(d, z);
      });

      function scaledAesthetic(d, field, fieldScale) {
        let value = aesthetic(d, field);
        if (fieldScale != null) {
          return fieldScale(value);
        }
        return value;
      }

      function aesthetics(data) {
        return {
          x: scaledAesthetic(data, x, xExtent.fieldScale),
          y: scaledAesthetic(data, y, yExtent.fieldScale),
          value: aesthetic(data, z),
          data
        };
      }

      // [{x: , y:, z:}, ...]
      let series = data.map(aesthetics);

      const minColor = config.minColor;
      const midColor = config.midColor;
      const maxColor = config.maxColor;
      const emptyColorPast = config.emptyColorPast;
      const emptyColorFuture = config.emptyColorFuture;

      const minThreshold = config.minThreshold;
      const midThreshold = config.midThreshold;
      const maxThreshold = config.maxThreshold;

      const labels = config.labels;
      const labelColor = config.labelColor;

      const emptyTooltip = config.emptyTooltip;
      const fillEmpty = config.fillEmpty;

      const legend = config.legend;
      const legendEmptyPast = config.legendEmptyPast;
      const legendEmptyFuture = config.legendEmptyFuture;
      const legendMin = config.legendMin;
      const legendMid = config.legendMid;
      const legendMax = config.legendMax;

      const isToday = td => {
        if (td) {
          const d = new Date();
          const date = td.split("-");
          console.log("->", date);
          console.log(d.getDate(), d.getMonth(), d.getFullYear());
          return (
            date[2] == d.getDate() &&
            date[1] == d.getMonth() + 1 &&
            date[0] == d.getFullYear()
          );
        } else {
          return false;
        }
      };

      if (fillEmpty) {
        for (let xIndex = 0; xIndex < xExtent.categories.length; xIndex++) {
          for (let yIndex = 0; yIndex < yExtent.categories.length; yIndex++) {
            const item = series.find(function(element) {
              return element.x === xIndex && element.y === yIndex;
            });
            if (!item) {
              const date = xExtent.categories[xIndex];
              if (isToday(date)) {
                series.push({
                  x: xIndex,
                  y: yIndex,
                  value: -100
                });
              } else {
                series.push({
                  x: xIndex,
                  y: yIndex,
                  value: -1
                });
              }
            }
          }
        }
      }

      dataLabels = {
        enabled: labels,
        color: labelColor,
        formatter: function() {
          const value =
            this.point.data &&
            this.point.data[measure_2] &&
            this.point.data[measure_2].value;
          return value > 0 ? value : null;
        }
      };

      let options = {
        credits: {
          enabled: false
        },
        chart: {
          type: "heatmap"
        },
        title: { text: config.chartName },
        legend: {
          enabled: legend,
          verticalAlign: "top"
        },
        xAxis: {
          labels: {
            align: "right",
            reserveSpace: true
          },
          gridLineWidth: 0,
          type: "category",
          title: {
            text: config.xAxisName
              ? config.xAxisName
              : x.label_short
                ? x.label_short
                : x.label
          },
          min: xExtent.min,
          max: xExtent.max,
          categories: xExtent.categories
        },
        yAxis: {
          labels: {
            x: -5,
            groupedOptions: [
              {
                // rotation: -90
              },
              {}
            ]
          },
          tickWidth: 1,
          gridLineWidth: 0,
          type: "category",
          title: {
            text: config.yAxisName
              ? config.yAxisName
              : y.label_short
                ? y.label_short
                : y.label
          },
          categories: yExtent.categories
        },
        colorAxis: {
          dataClasses: [
            {
              color: emptyColorFuture,
              from: -100,
              to: -10,
              name: legendEmptyFuture
            },
            {
              color: emptyColorPast,
              from: -10,
              to: 0,
              name: legendEmptyPast
            },
            {
              color: minColor,
              from: minThreshold,
              to: midThreshold,
              name: legendMin
            },
            {
              color: midColor,
              from: midThreshold,
              to: maxThreshold,
              name: legendMid
            },
            {
              color: maxColor,
              from: maxThreshold,
              name: legendMax
            }
          ]
        },
        series: [
          {
            data: series,
            borderWidth: 2,
            borderColor: "#fff",
            nullColor: emptyColorPast,
            borderRadius: 4,
            dataLabels,
            events: {
              click: function(event) {
                if (drillEnabled) {
                  let links = [];
                  for (item in event.point.data) {
                    const itemLinks = event.point.data[item].links;
                    for (link in itemLinks) {
                      if (itemLinks[link].type !== "measure_default") {
                        links.push(itemLinks[link]);
                      }
                    }
                  }
                  LookerCharts.Utils.openDrillMenu({
                    event,
                    links
                  });
                }
              }
            },
            tooltip: {
              headerFormat: "",
              pointFormatter: function() {
                if (this.data) {
                  let x = xExtent.fieldScale
                    ? xExtent.categories[this.x]
                    : this.x;
                  let y = yExtent.fieldScale
                    ? yExtent.categories[this.y]
                    : this.y;
                  let expected = this.data[measure_1].value;
                  let missing = this.data[measure_2].value;
                  return `${x} ${y} <b>${expected - missing}/${expected}</b>`;
                } else {
                  return emptyTooltip;
                }
              }
            }
          }
        ]
      };

      let myChart = Highcharts.chart(element, options);
    }
  };
  looker.plugins.visualizations.add(viz);
})();
