function kelsusCalendarView(element, meta, color) {
  let { data, x, y, dimension_1, measure_1, measure_2 } = meta;

  function monthPath(t0) {
    let t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
      d0 = t0.getDay(),
      w0 = d3v4.timeWeek.count(d3v4.timeYear(t0), t0);
    (d1 = t1.getDay()), (w1 = d3v4.timeWeek.count(d3v4.timeYear(t1), t1));
    return (
      "M" +
      (w0 + 1) * cellSize +
      "," +
      d0 * cellSize +
      "H" +
      w0 * cellSize +
      "V" +
      7 * cellSize +
      "H" +
      w1 * cellSize +
      "V" +
      (d1 + 1) * cellSize +
      "H" +
      (w1 + 1) * cellSize +
      "V" +
      0 +
      "H" +
      (w0 + 1) * cellSize +
      "Z"
    );
  }

  function aesthetic(datum, field) {
    let value = datum[field.name].value;
    return value;
  }

  function fieldExtent(data, field) {
    let [min, max] = [null, null];
    let categories = null;
    let fieldScale = null;

    categories = d3v4
      .map(data, function(d) {
        return aesthetic(d, field);
      })
      .keys();
    fieldScale = d3v4
      .scaleOrdinal()
      .domain(categories)
      .range(d3v4.range(0, categories.length, 1));
    return {
      min: min,
      max: max,
      categories: categories,
      fieldScale: fieldScale
    };
  }

  let xExtent = fieldExtent(data, x);
  let yExtent = fieldExtent(data, y);

  let format = d3v4.timeFormat("%Y-%m-%d");
  let parseDate = d3v4.timeParse("%Y-%m-%d");

  let [minYear, maxYear] = d3v4.extent(data, function(d) {
    return parseDate(aesthetic(d, x)).getFullYear();
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
      y: aesthetic(data, y),
      data
    };
  }

  let yearLength = maxYear - minYear + 1;

  let heightCellRatio = 9;
  widthCellRatio = 55;

  let cellSize = d3v4.max([
    d3v4.min([
      (element.offsetWidth - 20) / widthCellRatio,
      element.offsetHeight / yearLength / heightCellRatio
    ]),
    1
  ]);
  width = cellSize * widthCellRatio;
  yearHeight = cellSize * heightCellRatio;
  height = yearHeight * yearLength;

  let svg = d3v4
    .select(element)
    .selectAll("svg")
    .data(d3v4.range(minYear, maxYear + 1))
    .enter()
    .append("svg")
    .style("display", "block")
    .style("margin", "0 auto")
    .attr("width", width)
    .attr("height", yearHeight)
    .attr("year", function(d) {
      return d;
    })
    .append("g")
    .attr("transform", "translate(" + (width - cellSize * 53) / 2 + ",0)");

  svg
    .append("text")
    .attr("transform", "translate(-6," + cellSize * 3.5 + ")rotate(-90)")
    .style("font-family", "sans-serif")
    .style("font-size", 10)
    .style("text-anchor", "middle")
    .text(function(d) {
      return d;
    });

  let rect = svg
    .append("g")
    .attr("fill", "none")
    .attr("stroke", "#ccc")
    .selectAll("rect")
    .data(function(d) {
      return d3v4.timeDays(new Date(d, 0, 1), new Date(d + 1, 0, 1));
    })
    .enter()
    .append("rect")
    .attr("width", cellSize)
    .attr("height", cellSize)
    .attr("x", function(d) {
      return d3v4.timeWeek.count(d3v4.timeYear(d), d) * cellSize;
    })
    .attr("y", function(d) {
      return d.getDay() * cellSize;
    })
    .datum(format);

  svg
    .append("g")
    .attr("fill", "none")
    .attr("stroke", "#000")
    .selectAll("path")
    .data(function(d) {
      return d3v4.timeMonths(new Date(d, 0, 1), new Date(d + 1, 0, 1));
    })
    .enter()
    .append("path")
    .attr("d", monthPath);

  let tooltip = d3v4
    .select(element)
    .append("div")
    .attr("id", "tooltip")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("padding", "2px")
    .style("font-size", "10px")
    .style("color", "#333333")
    .style("fill", "#333333")
    .style("background-color", "#fff");

  rect
    .filter(function(d) {
      return data.find(function(item) {
        return item[x.name].value === d;
      });
    })
    .attr("fill", function(d) {
      const item = data.find(function(item) {
        return item[x.name].value === d;
      });
      return color(item[y.name].value);
    });

  rect
    .on("mouseenter", function(d) {
      const item = data.find(function(item) {
        return item[x.name].value === d;
      });
      if (item) {
        tooltip.style("visibility", "visible");
        const border = `1px solid ${color(item[y.name].value)}`;
        tooltip
          .transition()
          .duration(10)
          .style("opacity", 0.9)
          .style("visibility", "visible")
          .style("border", border);
        tooltip
          .text(function(_) {
            return `${
              item[dimension_1.name].value
            } ${item[measure_1.name].value - item[measure_2.name].value}/${item[measure_1.name].value}`;
          })
          .style("left", d3v4.event.pageX + 10 + "px")
          .style("top", d3v4.event.pageY + "px");
      }
    })
    .on("mouseleave", function(d) {
      tooltip.text("").style("visibility", "hidden");
    });
}
