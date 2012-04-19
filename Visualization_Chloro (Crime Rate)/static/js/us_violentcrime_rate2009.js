var r = d3.scale.sqrt()
          .domain([0, 1e6])
          .range([0, 10]);
          
var xy = d3.geo.albersUsa();

var map = d3.select("div#four")
            .append("svg");
            
map.append("g")
   .attr("id", "states");
   
map.append("g")
   .attr("id", "state-centroids");
   
d3.json("preprocessed-data/usStates.json", function(collection) {
  map.select("#states")
     .selectAll("path")
     .data(collection.features)
     .enter().append("path")
     .attr("d", d3.geo.path().projection(xy));
});

d3.json("preprocessed-data/usStatesViolentCrime2009.json", function(collection) {
  map.select("#state-centroids")
     .selectAll("circle")
     .data(collection.features.sort(function(a, b) { return b.properties.total - a.properties.total; }))
     .enter().append("circle")
     .attr("transform", function(d) { return "translate(" + xy(d.geometry.coordinates) + ")"; })
     .attr("r", 0)
   .transition()
     .duration(2000)
     .delay(function(d, i) { return i * 100; })
     .attr("r", function(d) { return r(d.properties.total)*20; });
});