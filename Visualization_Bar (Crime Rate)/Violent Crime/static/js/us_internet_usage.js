hdebug = true;
d3.csv("preprocessed-data/USInternetUsage.csv", function handleCSV(csv) {
    var data = csv.map(function(el) {return parseInt(el.TotalUsers) }),
        statelist = csv.map(function(el) {return el.State;});
    var colorlist = ["#ccff00", "darkblue", "red"];
    var selectColor = function (state) {
        if (state == "California") { 
          return "darkblue";
        } else if (state == "New York") {
          return "green";
        } else {
          return "red";
        }
    };
    var swap = false;
    var p = 10,
        w = 800 - 2 * p,
        h = 600 - 2 * p,
        xmin = 0,
        xmax = 50000,
        labelpad = 100,
        x = d3.scale.linear().domain([xmin, xmax]).range([0, w]),
        y = d3.scale.ordinal().domain(statelist).rangeBands([0, h], .2);

    var vis = d3.select("div #one")
        .append("svg")
        .attr("width", w + p * 2)
        .attr("height", h + p * 2)
        .append("g")
        .attr("transform", "translate(" + p + "," + p + ")");

    var bars = vis.selectAll("g.bar")
        .data(data)
        .enter()
        .append("svg:g")
        .attr("transform", function(d, i) { return "translate(" + (labelpad) + "," + y(i) + ")"; });

        bars.append("svg:rect")
        .attr("opacity", ".75")
        .attr("fill", function(d, i) { return selectColor(i); } )
        .attr("width", function (d) {return x(d);})
        .attr("height", y.rangeBand())
        .on("mouseover", function (d, i) {
            var temp =d3.select(this);
            temp.attr("opacity", "1");})
        .on("mouseout", function (d, i) {d3.select(this).attr("opacity", ".75")})
;
        
        bars.append("svg:text")
        .attr("x", -9)
        .attr("y", 2 + y.rangeBand() / 2)
        .attr("dx", 8)
        .attr("dy", ".22em")
        .attr("text-anchor", "end")
        .text(function(d, i) { return statelist[i]; });
        
        bars.on("mouseover", function (d, i) {
            temp = d3.select(this);
            temp.append("svg:text")
            .attr("id", "datum")
            .attr("font-size", "9px")
            .attr("x", x(d)+1)
            .attr("y", y.rangeBand()-2)
            .text(d);
        });

        bars.on("mouseout", function (d, i) {
            d3.select("#datum").remove();
        });
        
        var rules = vis.selectAll("g.rule")
        .data(x.ticks(5))
        .enter().append("svg:g")
        .attr("class", "rule")
        .attr("transform", function(d) { var y = 0; if (swap) {y=0; swap=false;} else {swap=true;} return "translate(" + x(d) + "," + y +")"; });

        rules.append("svg:line")
        .attr("y1", h-10)
        .attr("y2", h-5)
        .attr("x1", labelpad)
        .attr("x2", labelpad)
        .attr("stroke-opacity", .3)
        .attr("stroke", "black");

        rules.append("svg:line")
        .attr("y1", h-10)
        .attr("y2", h-5)
        .attr("x1", 3*labelpad/2)
        .attr("x2", 3*labelpad/2)
        .attr("stroke-opacity", .3)
        .attr("stroke", "black");
        

        rules.append("svg:line")
        .attr("y1", 0)
        .attr("y2", h-4)
        .attr("x1", 3*labelpad/2)
        .attr("x2", 3*labelpad/2)
        .attr("stroke", "white")
        .attr("stroke-opacity", .3);


        rules.append("svg:line")
        .attr("y1", 0)
        .attr("y2", h-4)
        .attr("x1", labelpad)
        .attr("x2", labelpad)
        .attr("stroke", "white")
        .attr("stroke-opacity", .3);
        rules.append("svg:text")
        .attr("y", h)
        .attr("x", labelpad)
        .attr("dy", ".71em")
        .attr("font-size", "9px")
        .attr("text-anchor", "middle")
        .attr("class", "tickLabel")
        .text(x.tickFormat(5))
  }
)
