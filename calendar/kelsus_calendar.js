/*!
 * An implementation of Mike Bostock's Calendar View within the Looker custom visualization API
 *
 * https://bl.ocks.org/mbostock/4063318
 */

looker.plugins.visualizations.add({
  id: "kelsus_calendar",
  label: "Kelsus Calendar",
  options: {
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
    }
  },
  create: function(element, config) {
    element.innerHTML = "";
  },
  prepare: function(data, config, queryResponse) {
    let x = queryResponse.fields.dimension_like[0];
    let y = queryResponse.fields.measure_like[0];
    let measure_1 = config.query_fields.measures[0];
    let measure_2 = config.query_fields.measures[1];
    let dimension_1 = config.query_fields.dimensions[0];
    let series = [];
    data
      .filter(function(d) {
        return d3v4.timeParse("%Y-%m-%d")(d[x.name]["value"]);
      })
      .forEach(function(d) {
        series.push(d);
      });

    return {
      data: series,
      x,
      y,
      dimension_1,
      measure_1,
      measure_2
    };
  },
  handleErrors(queryResponse) {
    if (
      !(
        queryResponse.fields.dimensions[0].is_timeframe &&
        queryResponse.fields.dimensions[0].time_interval.name === "day"
      )
    ) {
      this.addError({
        group: "date-req",
        title: "Incompatible Data",
        message: "Calendar Visualization Requires a Date Dimension"
      });
      return false;
    } else {
      this.clearErrors("date-req");
    }
    return true;
  },

  color(config) {
    return function(value) {
      switch (true) {
        case value < 0.1:
          return config.minColor;
          break;
        case value >= 0.1 && value < 0.96:
          return config.midColor;
          break;
        case value >= 0.96:
          return config.maxColor;
          break;
        default:
          break;
      }
    };
  },
  update: function(data, element, config, queryResponse) {
    if (
      !handleErrors(this, queryResponse, {
        min_pivots: 0,
        max_pivots: 0,
        min_dimensions: 1,
        max_dimensions: 1,
        min_measures: 1,
        max_measures: 1
      })
    )
      return;
    if (!this.handleErrors(queryResponse)) return;
    this.create(element, config);
    let formattedData = this.prepare(data, config, queryResponse);
    return kelsusCalendarView(element, formattedData, this.color(config));
  }
});
