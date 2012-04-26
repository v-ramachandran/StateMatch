var r = d3.scale.sqrt()
          .domain([0, 1e6])
          .range([0, 10]);
          
var xy = d3.geo.albersUsa();

var map = d3.select("div#one")
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

d3.json("preprocessed-data/usStatesCentroids.json", function(collection) {
    map.select("#state-centroids")
     .append("text")
        .attr("text-anchor", "middle")
        .attr("x", 800)
        .attr("y", 330)
        .text("Internet Usage:");
     map.select("#state-centroids").selectAll("circle")
    .data(collection.features.sort(function(a, b) { return b.properties.total - a.properties.total; }))
    .enter().append("circle")
    .attr("opacity", ".65")
    .on("mouseover", function(d, i) {
         var temp = d3.select(this);
         var og = map.select("#state-centroids")
         temp.attr("opacity", "1");
         og.append("text")
             .attr("id", "sometext")
             .attr("text-anchor", "middle")
             .attr("x", 800)
             .attr("y", 350)
             .text(d.properties.total);})
     .on("mouseout", function (d, i) {
        d3.select(this).attr("opacity", "0.65")
        d3.select("#sometext").remove()})
        .attr("transform", function(d) { return "translate(" + xy(d.geometry.coordinates) + ")"; 
        
     })
     .attr("r", 1)
   .transition()
     .duration(1500)
     .delay(function(d, i) { return i * 100; })
     .attr("r", function(d) { return r(d.properties.total)*27; });
});