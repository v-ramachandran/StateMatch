function onLoadFunc(){
  var query = window.location.search.substring(1);
  console.log(query);   
  document.getElementById("first").innerHTML = query;

}
