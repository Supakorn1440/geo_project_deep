// import Sidebar from "../side-bar-page/side-bar-page";
import './dashboard-page.css';
import React, { useState } from "react";
import axios from 'axios';
// import { Autorenew } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));






const Dashboard = () => {
  


  //  FakeDashBoard()

  am4core.useTheme(am4themes_animated);

  var chart = am4core.create("chartdiv", am4charts.XYChart);

  // Add data
  

 


    axios.get("http://localhost:3002/fake-dataDashboard").then((res, err) => {
      console.log(res.data);

      let data = (res.data);
      data.map((item) => {
        item.deep = parseFloat(item.deep);
      })
      chart.data = data;
    });



  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 30;

  categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
    if (target.dataItem && target.dataItem.index & 2 == 2) {
      return dy + 25;
    }
    return dy;
  });

  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

  // Create series
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = "deep";
  series.dataFields.categoryX = "year";
  series.name = "deep";
  series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
  series.columns.template.fillOpacity = .8;

  var columnTemplate = series.columns.template;
  columnTemplate.strokeWidth = 2;
  columnTemplate.strokeOpacity = 1;







  am4core.useTheme(am4themes_animated);


  const classes = useStyles();




  return (
    <>
      <div className='bg-content-db'>
        <div className='cardContent'>
          <div className='card card-content'>
            <div style={{ padding: 20 }}>
              <h1 className="font-header1">Dashboard</h1>
              <hr />
            </div>
            <div className="barCharts">
              <Grid container spacing={3}>

                <Grid item xs={6} sm={3}>
                  <Paper className={classes.paper}>
                    <Typography>Played</Typography>
                    <Typography variant="h3">568</Typography>
                  </Paper>

                </Grid>
                <Grid item xs={6} sm={3}>
                  <Paper className={classes.paper}>
                    <Typography >Finished</Typography>
                    <Typography variant="h3" >809</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Paper className={classes.paper}>
                    <Typography>Likes</Typography>
                    <Typography variant="h3">114</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Paper className={classes.paper}>
                    <Typography>Comment</Typography>
                    <Typography variant="h3" color="red">27</Typography>
                  </Paper>
                </Grid>
              </Grid>
              <br />
              <hr />

              <br />
              <h2 >Amount of water / Year</h2>
              <div className=" row chart-year-content"  >
                <br />

                <div className="chartdiv cal-6" id="chartdiv" />

                {/* <div className="chartline cal-6" id="chartline" /> */}
                {/* <AreaChart width={730} height={250} data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    
                  </defs>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                  
                </AreaChart> */}


              </div>

            </div>
          </div>

        </div>

      </div>

    </>
  );
}

export default Dashboard;
