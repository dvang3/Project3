d3.csv("flask_blog/Resources/crash_data.csv", function(chart_data) {
    
    d3.select("body")
        .selectAll("p")
        .data(chart_data)
        .enter()
        .append("p")
        .text(function(d) {
            return d.county + ", " + d.value;
        });

});
// Initialized arrays
let county = []
let total_fatal_crashes = []
let total_injury_crashes = []
let alcohol_involved_fatal = []
let alcohol_involved_injury = []

// For loop to populate arrays

for (let i = 0; i < chart_data.length; i++) {
  row = chart_data[i];
  county.push(row.county);
  total_fatal_crashes.push(row.alcohol_involved_injury);
  total_injury_crashes.push(row.total_injury_crashes);
  alcohol_involved_fatal.push(row.alcohol_involved_fatal);
  alcohol_involved_injury.push(row.alcohol_involved_injury);
};

// Trace1 for the Greek Data
let trace1 = {
  x: county,
  y: total_fatal_crashes,
  text: total_fatal_crashes,
  name: "Total Fatal",
  type: "bar"
};

// Trace 2 for the Roman Data
let trace2 = {
  x: county,
  y: alcohol_involved_fatal,
  text: alcohol_involved_fatal,
  name: "Alcohol Fatal",
  type: "bar"
};

let trace3 = {
  x: county,
  y: total_injury_crashes,
  text: total_injury_crashes,
  name: "Total Injury",
  type: "bar"
};

let trace4 = {
  x: county,
  y: alcohol_involved_injury,
  text: alcohol_involved_injury,
  name: "Alcohol Injury",
  type: "bar"
};
// Create data array
let resultdata = [trace1, trace2, trace3, trace4];

// Apply a title to the layout
let layout = {
  title: "California Crash Data Reports",
  barmode: "group",
  // Include margins in the layout so the x-tick labels display correctly
  margin: {
    l: 50,
    r: 50,
    b: 200,
    t: 50,
    pad: 4
  }
};
function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  // const value = Object.fromEntries(data.entries());

  const value = data.get('county');

  console.log({ value });
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", chart_data, layout);


