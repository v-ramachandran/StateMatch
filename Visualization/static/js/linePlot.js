points = null;

function drawLine(state) {
          
d3.csv("preprocessed-data/lifeExpectancy(1990-2009).csv", function handleCSV(csv) {
      var points = csv.filter(function(el) { return el.State == state })
                .map(function(el) { return parseFloat(el.Male_le); });      
      console.log(points);
      var p = 20,
          w = 960 - 2 * p,
          h = 350 - 2 * p,
          r = 2.0,
          labelpad = -10,
          m = ["1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009"],
          ymax = 80,
          ymin = 70;
      
      var x = d3.scale.ordinal()
                      .domain(m);
    
      x.rangePoints([0,w]);
      
      var y = d3.scale.linear()
                      .domain([ymin, ymax])
                      .range([h, 0]);
    
      var vis = d3.select("div #line")
                  .data([points])
                  .append("svg")
                  .attr("width", w + p * 2)
                  .attr("height", h + p * 2)
                  .append("g")
                  .attr("transform", "translate(" + p + "," + p + ")");
    
      vis.append("svg:path")
             .attr("fill", "red")
             .attr("stroke", "red")
             .attr("stroke-width", 2)
             .attr("opacity", ".7")
             .attr("d", d3.svg.line()
               .x(function(d, i) { return x(i); })
               .y(function(d) {return y(d); }));

    var temp = vis.selectAll("circle")
       .data(points)
       .enter();
    temp.append("circle")
       .attr("cx", (function(d, i) {return x(i); }))
       .attr("cy", (function(d) {return y(d); }))     
       .attr("r", r*2)
       .attr("fill", "#ffcc00");
      var xrule = vis.selectAll("g.xrule")
                   .data(y.ticks(7))
                   .enter()
                   .append("svg:g")
                   .attr("class", "xrule")
                   .attr("transform", function(d) { return "translate(0,"+y(d)+")"; });

      xrule.append("line")
         .attr("y1", 0)
         .attr("y2", 0)
         .attr("x1", 0)
         .attr("x2", w+2)
         .attr("stroke", "#777")
         .attr("stroke-opacity", ".25");

      xrule.append("text")
         .attr("x", labelpad)
         .attr("text-anchor", "end")
         .attr("font-size", "9px")
         .text(function(d, i) {if (i==0) return d; else return d ;});
      var yrule = vis.selectAll("g.yrule")
                   .data(m)
                   .enter()
                   .append("svg:g")
                   .attr("class", "yrule")
                   .attr("transform", function(d) { return "translate("+x(d)+",0)"; });
      yrule.append("line")
         .attr("y1", h+10)
         .attr("y2", h+2)
         .attr("x1", 0)
         .attr("x2", 0)
         .attr("stroke", "#777")
         .attr("stroke-opacity", ".25");

      yrule.append("text")
         .attr("y", h+16)
         .attr("dx", -10)
         .attr("font-size", "8px")
         .text(function(d, i) {return m[i];});     
});
}
function drawLine2(state) {
d3.csv("preprocessed-data/UnemploymentStates.csv", function handleCSV(csv) {
      points = csv.filter(function(el) { return el.State == state });
      temp = [];
      for(i=1990;i<2011;i++){
        temp.push(parseFloat(points[0][i]));
      }
      points = temp;
      //          .map(function(el) { return parseFloat(el.Male_le); }); 
      console.log(points);
      var p = 20,
          w = 960 - 2 * p,
          h = 350 - 2 * p,
          r = 2.0,
          labelpad = -10,
          m = ["1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010"],
          ymax = 20,
          ymin = 0;
      
      var x = d3.scale.ordinal()
                      .domain(m);
    
      x.rangePoints([0,w]);
      
      var y = d3.scale.linear()
                      .domain([ymin, ymax])
                      .range([h, 0]);
    
      var vis = d3.select("div #line")
                  .data([points])
                  .append("svg")
                  .attr("width", w + p * 2)
                  .attr("height", h + p * 2)
                  .append("g")
                  .attr("transform", "translate(" + p + "," + p + ")");
    
      vis.append("svg:path")
             .attr("fill", "red")
             .attr("stroke", "red")
             .attr("stroke-width", 2)
             .attr("opacity", ".7")
             .attr("d", d3.svg.line()
               .x(function(d, i) { return x(i); })
               .y(function(d) {return y(d); }));

    var temp = vis.selectAll("circle")
       .data(points)
       .enter();
    temp.append("circle")
       .attr("cx", (function(d, i) {return x(i); }))
       .attr("cy", (function(d) {return y(d); }))     
       .attr("r", r*2)
       .attr("fill", "#ffcc00");
      var xrule = vis.selectAll("g.xrule")
                   .data(y.ticks(7))
                   .enter()
                   .append("svg:g")
                   .attr("class", "xrule")
                   .attr("transform", function(d) { return "translate(0,"+y(d)+")"; });

      xrule.append("line")
         .attr("y1", 0)
         .attr("y2", 0)
         .attr("x1", 0)
         .attr("x2", w+2)
         .attr("stroke", "#777")
         .attr("stroke-opacity", ".25");

      xrule.append("text")
         .attr("x", labelpad)
         .attr("text-anchor", "end")
         .attr("font-size", "9px")
         .text(function(d, i) {if (i==0) return d; else return d ;});
      var yrule = vis.selectAll("g.yrule")
                   .data(m)
                   .enter()
                   .append("svg:g")
                   .attr("class", "yrule")
                   .attr("transform", function(d) { return "translate("+x(d)+",0)"; });
      yrule.append("line")
         .attr("y1", h+10)
         .attr("y2", h+2)
         .attr("x1", 0)
         .attr("x2", 0)
         .attr("stroke", "#777")
         .attr("stroke-opacity", ".25");

      yrule.append("text")
         .attr("y", h+16)
         .attr("dx", -10)
         .attr("font-size", "8px")
         .text(function(d, i) {return m[i];});     
});
}
drawLine2("California");
//drawLine("CALIFORNIA");