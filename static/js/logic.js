const data = "../static/Resources/crash_data.csv";

function init() {
  d3.csv(data).then(function(data) {
    console.log(data[0].county)
    newdata = data[0]
    var county = newdata.county
    var totalfatalvalue = newdata.total_fatal_crashes;
    var totalinjuryvalue = newdata.total_injury_crashes;
    var alcoholfatalvalue = newdata.alcohol_involved_fatal;
    var alcoholinjuryvalue = newdata.alcohol_involved_injury;

    var countydata = Object(data);
          console.log(countydata)
    var countyvalue = data.map(function(d) {return d.county;});
        console.log(countyvalue)
    let dropdownMenu = d3.select("#selDataset");

  for (let i = 0; i < countyvalue.length; i++) {
    dropdownMenu.append("option").text(countyvalue[i]).property("value", countyvalue[i])};
    
    let values = [totalfatalvalue, totalinjuryvalue, alcoholfatalvalue, alcoholinjuryvalue];
        console.log(values)
        
    let chartdata = [{
      x:  ['Total Fatalities', 'Total Injuries', 'Alcohol Fatalities', 'Alcohol Injuries'],
      y: values,
      type: "bar"
    }];
  
    let layout = {
      height: 600,
      width: 800
    };
  
    Plotly.newPlot("bar", chartdata, layout);
});

}

function optionChanged(newCounty) {
 console.log(newCounty)
  // Call function to update the chart
  updatePlotly(newCounty);
}

// Update the restyled plot's values
function updatePlotly(newCounty) {
  d3.csv(data).then(function(data) {
  let allcounty = data.filter(updatecounty => updatecounty.county == newCounty) 
  newdata = allcounty[0]
  var county = newdata.county
  var totalfatalvalue = newdata.total_fatal_crashes;
  var totalinjuryvalue = newdata.total_injury_crashes;
  var alcoholfatalvalue = newdata.alcohol_involved_fatal;
  var alcoholinjuryvalue = newdata.alcohol_involved_injury;
    console.log(allcounty)
    let values = [totalfatalvalue, totalinjuryvalue, alcoholfatalvalue, alcoholinjuryvalue];
        console.log(values)
        
    let chartdata = [{
      x:  ['Total Fatalities', 'Total Injuries', 'Alcohol Fatalities', 'Alcohol Injuries'],
      y: values,
      type: "bar"
    }];
  
    let layout = {
      height: 600,
      width: 800
    };
    Plotly.newPlot("bar", chartdata, layout);
  });
}

init();