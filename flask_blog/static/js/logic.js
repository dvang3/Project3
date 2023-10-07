//d3.json(chart_data).then(function(data) {
//   console.log(data);
// });
// function init() {
//   d3.json(chart_data).then((data) => {
//     let area = data.county;
//     let selector = d3.select("#selDataset");

//     for (let i = 0; i < area.length; i++){
//       selector
//         .append("option")
//         .text(area[i])
//         .property("value", county[i]);
//     };
//       county.forEach((id) => {
//       console.log(id);

//       selector.append("option")
//       .text(id)
//       .property("value",id);
//     });

//     let area_name = area[0];
//     buildCharts(area_name);
//     buildMetadata(area_name);
//     buildBubbleChart(area_name);
//   });
// };

// init();

// function buildMetadata(sample) {
//   d3.json(bellybutton).then((data) => {

//       let metadata = data.metadata;
//       let value = metadata.filter(result => result.id == sample);
//       console.log(value)

//       let valueData = value[0];
//       d3.select("#sample-metadata").html("");
//       Object.entries(valueData).forEach(([key,value]) => {
//       console.log(key,value);

//       d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
//       });
//   });
// };

// function optionChanged(value) {
//   // console.log(value); 

//   buildCharts(value);
//   // buildMetadata(datavalue);
//   // buildBubbleChart(datavalue);
// };
