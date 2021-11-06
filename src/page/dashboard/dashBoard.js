// am4core.ready(function() {
    
//     // Themes begin
//     am4core.useTheme(am4themes_animated);
//     // Themes end
    
//     // Create chart instance
//     var chart = am4core.create("chartdiv", am4charts.XYChart);
    
//     // Add data
//     chart.data = [{
//       "country": "2561",
//       "visits": 174562.1443
//     }, {
//       "country": "2562",
//       "visits": 174656.2404
//     }, {
//       "country": "2563",
//       "visits": 174656.2404

//     }, {
//       "country": "2564",
//       "visits": 174116.6475

//     }];
    
//     // Create axes
    
//     var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
//     categoryAxis.dataFields.category = "country";
//     categoryAxis.renderer.grid.template.location = 0;
//     categoryAxis.renderer.minGridDistance = 30;
    
//     categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
//       if (target.dataItem && target.dataItem.index & 2 == 2) {
//         return dy + 25;
//       }
//       return dy;
//     });
    
//     var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    
//     // Create series
//     var series = chart.series.push(new am4charts.ColumnSeries());
//     series.dataFields.valueY = "visits";
//     series.dataFields.categoryX = "country";
//     series.name = "Visits";
//     series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
//     series.columns.template.fillOpacity = .8;
    
//     var columnTemplate = series.columns.template;
//     columnTemplate.strokeWidth = 2;
//     columnTemplate.strokeOpacity = 1;
    
//     });