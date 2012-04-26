function stateExpand(obj)
{
  //window.open("file:////home/hokadiri/Desktop/cs194/finalProject/display.html?url=me", "_blank");
  //alert(obj.childNodes(1).innerHTML);
  document.getElementById("d3").innerHTML = obj.childNodes(1).innerHTML;
}
function process()
{
  var stateRes = {};
  var cr = document.getElementById("cr");
  var crVal = parseInt(cr.options[cr.selectedIndex].value);
  
  var bl = document.getElementById("bl");
  var blVal = parseInt(bl.options[bl.selectedIndex].value);    
  
  var un = document.getElementById("un");
  var unVal = parseInt(un.options[un.selectedIndex].value);  

  var coefArr = [crVal, blVal, unVal];
  //alert(coefArr[0]);
  for(key in States)
  {
    var resultArr = States[key]; 
    var sum = 0;
    for(i = 0; i < 3; i++)
    {
      sum +=  coefArr[i] * resultArr[i]; 
    }
    stateRes[key] = sum; 
  }
  stateRes = stateSort(stateRes);
  var str = "";
  var i = 1;
  for(key in stateRes)
  {
    switch(i)
    {
      case 1:
        document.getElementById("one").childNodes(1).childNodes(1).innerHTML = key  ;
        document.getElementById("one").childNodes(1).childNodes(3).innerHTML = " - " + stateRes[key];    
	i++;
        break;
      case 2:
        document.getElementById("two").childNodes(1).childNodes(1).innerHTML = key;
        document.getElementById("two").childNodes(1).childNodes(3).innerHTML = " - " + stateRes[key];  
	i++;
        break;
      case 3: 
        document.getElementById("three").childNodes(1).childNodes(1).innerHTML = key;
        document.getElementById("three").childNodes(1).childNodes(3).innerHTML = " - " + stateRes[key];  
	i++;
        break;
   
    }
  }
  stateExpand(document.getElementById("one").childNodes(1));
  //s.childNodes(1).innerHTML = "HUSSEIN";  
}

function stateSort(States)
{
  var sortable = [];
  var Result = {};
  for (var state in States)
  {
    sortable.push([state, States[state]]);
  }
  
  sortable.sort(function(a,b) { return a[1] - b[1] });
  sortable = sortable.slice(0,3);
  for(i = 0; i < sortable.length; i++)
  {
    Result[sortable[i][0]] = sortable[i][1];
  }
  
  return Result;
}
