// const chart_data= {data,tojson}
  
// //    console.log (chart_data)

function init() {
    d3.json(chart_data).then((data) => {
      let counties = data.counties;
      let selector = d3.select("#selDataset");
  
      for (let i = 0; i < counties.length; i++){
        selector
          .append("option")
          .text(counties[i])
          .property("value", counties[i]);
      };
        counties.forEach((id) => {
        console.log(id);
  
        selector.append("option")
        .text(id)
        .property("value",id);
      });
  
    //   let sample_name = samplenames[0];
    //   buildCharts(sample_name);
    //   buildMetadata(sample_name);
    //   buildBubbleChart(sample_name);
    });
  };
  function optionChanged (datavalue) {
    // console.log(value); 
  
    buildCharts(datavalue);
    buildMetadata(datavalue);
    buildBubbleChart(datavalue);
  };
//   init();