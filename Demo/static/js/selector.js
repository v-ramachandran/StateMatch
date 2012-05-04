var states = []
var unemp = []
var crime = []
var lifeExp = []
var States = {}

var mapping = {"Alabama":"AL", "Alaska":"AK", "Arizona":"AZ", "Arkansas":"AR", "California":"CA", "Colorado":"CO", "Connecticut":"CT", "Delaware":"DE", "District of Columbia":"DC", "Florida":"FL", "Georgia":"GA", "Hawaii":"HI", "Idaho":"ID", "Illinois":"IL", "Indiana":"IN", "Iowa":"IA", "Kansas":"KS", "Kentucky":"KY", "Louisiana":"LA", "Maine":"ME", "Maryland":"MD", "Massachusetts":"MA", "Michigan":"MI", "Minnesota":"MN", "Mississippi":"MS", "Missouri":"MO", "Montana":"MT", "Nebraska":"NE", "Nevada":"NV", "New Hampshire":"NH", "New Jersey":"NJ", "New Mexico":"NM", "New York":"NY", "North Carolina":"NC", "North Dakota":"ND", "Ohio":"OH", "Oklahoma":"OK", "Oregon":"OR", "Pennsylvania":"PA", "Rhode Island":"RI", "South Carolina":"SC", "South Dakota":"SD", "Tennessee":"TN", "Texas":"TX", "Utah":"UT", "Vermont":"VT", "Virginia":"VA", "Washington":"WA", "West Virginia":"WV", "Wisconsin":"WI", "Wyoming":"WY"}
function onLoadFunc(){
  d3.csv('./preprocessed-data/unempFINAL_NORMALIZED.csv',function handleCSV(csv){  
    states = csv.map(function(el){
      return el.State
    });
    unemp = csv.map(function(el){
      return parseFloat(el.Unemp)
    }); 
    LifeExp = csv.map(function(el){
      return parseFloat(el.LifeExp)
    }); 
    crime = csv.map(function(el){
      return parseFloat(el.Crime)
    });
 
  });
}

function test() {
  //console.log(crime[9]);	 
  for(i = 0; i < states.length; i++)
  {
    //States[mapping[states[i]]] = [ crime[i], unemp[i], LifeExp[i]];
    States[states[i]] = [ crime[i], unemp[i], LifeExp[i]];
  }
  //console.log(crime[0]);
  //console.log(mapping[states[50]]); 
  //console.log("Hello World!.");
  console.log(States);
}

function stateExpand(obj)
{
  window.open("http://localhost:8000/vis.html?state="+obj.childNodes(1).innerHTML, "_blank");
  //alert(obj.childNodes(1).innerHTML);
  //document.getElementById("d3").innerHTML = obj.childNodes(1).innerHTML;
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
    console.log(key);
    console.log(stateRes[key]);
    switch(i)
    {
      case 1:
        document.getElementById("one").childNodes(1).childNodes(1).innerHTML = key  ;
        //document.getElementById("one").childNodes(1).childNodes(3).innerHTML = " - " + stateRes[key];    
	i++;
        break;
      case 2:
        document.getElementById("two").childNodes(1).childNodes(1).innerHTML = key;
        //document.getElementById("two").childNodes(1).childNodes(3).innerHTML = " - " + stateRes[key];  
	i++;
        break;
      case 3: 
        document.getElementById("three").childNodes(1).childNodes(1).innerHTML = key;
        //document.getElementById("three").childNodes(1).childNodes(3).innerHTML = " - " + stateRes[key];  
	i++;
        break;
   
    }
  }
  //stateExpand(document.getElementById("one").childNodes(1));
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
