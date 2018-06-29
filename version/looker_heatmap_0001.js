(function() {
    var viz = {
      id: "highcharts_heatmap",
      label: "Heatmap",
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
          default: "#f66364"
        },
        midColor: {
          section: "Chart",
          type: "string",
          label: "Middle Color",
          display: "color",
          default: "#f5b04d"
        },
        maxColor: {
          section: "Chart",
          type: "string",
          label: "Maximum Color",
          display: "color",
          default: "#71c989"
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
  
        function aesthetics(d) {
          return [
            scaledAesthetic(d, x, xExtent.fieldScale),
            scaledAesthetic(d, y, yExtent.fieldScale),
            aesthetic(d, z)
          ];
        }
  
        // [{x: , y:, z:}, ...]
        let series = data.map(aesthetics);
  
        const minColor = config.minColor || "#f66364";
        const midColor = config.midColor || "#f5b04d";
        const maxColor = config.maxColor || "#71c989";
  
        const minValue = yExtent.min || 0;
        const maxValue = yExtent.max || 1;
        const midValue = (minValue + maxValue) / 2;
  
        let options = {
          credits: {
            enabled: false
          },
          chart: {
            type: "heatmap",
            plotBorderWidth: 1
          },
          title: { text: config.chartName },
          legend: { enabled: false },
          xAxis: {
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
            type: "category",
            title: {
              text: config.yAxisName
                ? config.yAxisName
                : y.label_short
                  ? y.label_short
                  : y.label
            },
            min: yExtent.min,
            max: yExtent.max,
            categories: yExtent.categories
          },
          colorAxis: {
            min: minz,
            max: maxz,
            stops: [
              [minValue, minColor],
              [midValue, midColor],
              [maxValue, maxColor]
            ]
          },
          series: [
            {
              data: series,
              borderWidth: 1,
              borderColor: "#bac1c4",
              dataLabels: {
                enabled: config.dataLabels,
                color: "#000000",
                formatter: function() {
                  return zFormat(this.point.value);
                }
              },
              tooltip: {
                headerFormat: z.label_short
                  ? z.label_short + "<br/>"
                  : z.label + "<br/>",
                pointFormatter: function() {
                  let x = xExtent.fieldScale
                    ? xExtent.categories[this.x]
                    : this.x;
                  let y = yExtent.fieldScale
                    ? yExtent.categories[this.y]
                    : this.y;
                  let z = zFormat(this.value);
                  return `${x} ${y} <b>${z}</b>`;
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
  