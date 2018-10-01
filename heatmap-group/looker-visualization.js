(function() {
  let rect;

  function drawRect(chart) {
    if (rect) {
      rect.element.remove();
    }

    var xAxis = chart.yAxis[0];
    var pixStart = xAxis.toPixels(xAxis.tickPositions[0], false);
    var pixEnd = xAxis.toPixels(xAxis.tickPositions[3], false);
    rect = chart.renderer
      .rect(
        pixStart,
        chart.chartHeight - xAxis.bottom,
        pixEnd - pixStart,
        25,
        00
      )
      .attr({
        "stroke-width": 0,
        stroke: "#888888",
        fill: "#888888",
        zIndex: 9876
      })
      .add();
  }

  var viz = {
    id: "kelsus_heatmap",
    label: "Kelsus Heatmap",
    options: {
      chartName: {
        section: "Chart",
        label: "Chart Name",
        type: "string"
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
      dataLabels: {
        section: "Chart",
        type: "boolean",
        label: "Data Labels",
        default: true
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

      function fieldExtent(data, field) {
        let [min, max] = [null, null];
        let categories = null;
        let fieldScale = null;

        categories = d3
          .map(data, function(d) {
            return aesthetic(d, field);
          })
          .keys();
        fieldScale = d3
          .scaleOrdinal()
          .domain(categories)
          .range(d3.range(0, categories.length, 1));

        return {
          min: min,
          max: max,
          categories: categories,
          fieldScale: fieldScale
        };
      }

      let xExtent = fieldExtent(data, x);
      let yExtent = fieldExtent(data, y);

      yExtent.categories = [
        {
          name: " DEN6",
          categories: ["21:00", "13:00", "07:00", "05:00"]
        },
        {
          name: " DAL6",
          categories: ["22:00", "14:30", "14:00", "08:00", "06:00"]
        }
      ];

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

      let options = {
        credits: {
          enabled: false
        },
        chart: {
          type: "heatmap",
          events: {
            load: function() {
              drawRect(this);
            },
            redraw: function() {
              drawRect(this);
            }
          }
        },
        title: { text: config.chartName },
        legend: { enabled: false },
        xAxis: {
          labels: {
            align: "right",
            reserveSpace: true
          },
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
            rotation: -90,
          },
          tickWidth: 1,
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
              color: minColor,
              from: 0,
              to: 0.5,
              name: "min"
            },
            {
              color: midColor,
              from: 0.5,
              to: 1,
              name: "min"
            },
            {
              color: maxColor,
              from: 1,
              to: 1,
              name: "min"
            }
          ]
        },
        series: [
          {
            data: series,
            borderWidth: 2,
            borderColor: "#fff",
            borderRadius: 4,
            tooltip: {
              headerFormat: "",
              pointFormatter: function() {
                let x = xExtent.fieldScale
                  ? xExtent.categories[this.x]
                  : this.x;
                let y = yExtent.fieldScale
                  ? yExtent.categories[this.y]
                  : this.y;
                let z = zFormat(this.value);
                let expected = this.data[measure_1].value;
                let missing = this.data[measure_2].value;
                return `${x} ${y} <b>${expected - missing}/${expected}</b>`;
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
