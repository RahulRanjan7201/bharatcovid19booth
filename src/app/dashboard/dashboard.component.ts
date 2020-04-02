import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { Covid19Service } from "../covid19.service";
import { ChartComponent } from "ng-apexcharts";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexResponsive,
} from "ng-apexcharts";
import * as moment from "moment";
export type PieChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
export type PositiviChartOptions = {
   series: ApexAxisChartSeries;
 chart: ApexChart;
 dataLabels: ApexDataLabels;
 markers: ApexMarkers;
 title: ApexTitleSubtitle;
 fill: ApexFill;
 yaxis: ApexYAxis;
   xaxis: ApexXAxis;
 tooltip: ApexTooltip;
};
export type RecoveredChartOptions = {
  series: ApexAxisChartSeries;
 chart: ApexChart;
 dataLabels: ApexDataLabels;
 markers: ApexMarkers;
 title: ApexTitleSubtitle;
 fill: ApexFill;
 yaxis: ApexYAxis;
   xaxis: ApexXAxis;
 tooltip: ApexTooltip;
};
export type DeathChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  yaxis: ApexYAxis;
    xaxis: ApexXAxis;
  tooltip: ApexTooltip;
};
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild("pieChart") pieChart: ChartComponent;
  @ViewChild("postiviechart") postiviechart: PositiviChartOptions;
  @ViewChild("recoveredchart") recoveredchart: RecoveredChartOptions;
  @ViewChild("deathchart") deathchart: DeathChartOptions;
  public chartOptions: Partial<PieChartOptions>;
  public positiviChartOptions: Partial<PositiviChartOptions>;
  public recoveredChartOptions: Partial<RecoveredChartOptions>;
  public deathChartOptions: Partial<DeathChartOptions>;
  public globalData: any;
  public isDataLoaded: boolean;
  constructor(private service: Covid19Service) {}
  public indiaData : any;
  async ngOnInit() {
    await this.loadCovid19Information();
    this.isDataLoaded = true;
    this.initChartData();
    this.initPieChart();
    this.initRecoveredChart();
    this.initDeathChartData();
  }
  ngAfterViewInit(): void {}
  async loadCovid19Information() {
    this.globalData = await this.service.loadInformation();
  }
  public initPieChart() :  void {
    const [data] = this.globalData.cases_time_series.slice(Math.max(this.globalData.cases_time_series.length - 1, 0))
    const _series = [];
    const _labels = [];
    for (const property in data) {
      if(property === "totalconfirmed" || property === "totaldeceased" || property === "totalrecovered") {
        _series.push(property);
      _labels.push(Number(data[property]))
      }
    }
    this.chartOptions = {
      series: _labels,
      chart: {
        type: "donut"
      },
      labels:_series,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
  public initRecoveredChart() : void {
    const _data = this.globalData.cases_time_series.map(item => {
      let obj = {};
      obj["x"] =new Date(item.date.trim()).setFullYear(2020) + 86400000
      obj["y"] = item.dailyrecovered;
      return obj;
    });
    this.recoveredChartOptions = {
    series : [
      {
        name: "cases",
        data: _data
      }
    ],
    chart : {
      type: "area",
      stacked: false,
      height: 480,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: "zoom"
      }
    },
    dataLabels : {
      enabled: false
    },
    markers : {
      size: [4,7],
      colors: ['#9C27B0','#E91E63','#F44336']
    },
    title : {
      text: "Covid19 Recovered Cases",
      align: "left"
    },
    fill : {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    },
    yaxis : {
      labels: {
        formatter: function(val) {
          return val.toFixed(0);
        }
      },
      title: {
        text: "Number of Cases"
      }
    },
    xaxis : {
      type: "datetime"
    },
    tooltip : {
      shared: false,
      y: {
        formatter: function(val) {
          return (val).toFixed(0);
        }
      }
    }
  }
  }
  public initDeathChartData() : void {
    const _data = this.globalData.cases_time_series.map(item => {
      let obj = {};
      obj["x"] =new Date(item.date.trim()).setFullYear(2020) + 86400000
      obj["y"] = item.dailydeceased;
      return obj;
    });
    this.deathChartOptions = {
    series : [
      {
        name: "cases",
        data: _data
      }
    ],
    chart : {
      type: "area",
      stacked: false,
      height: 480,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: "zoom"
      }
    },
    dataLabels : {
      enabled: false
    },
    markers : {
      size: [4,7],
      colors: ['#F44336','#9C27B0','#E91E63']
    },
    title : {
      text: "Covid19 Deceased Cases",
      align: "left"
    },
    fill : {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    },
    yaxis : {
      labels: {
        formatter: function(val) {
          return val.toFixed(0);
        }
      },
      title: {
        text: "Number of Cases"
      }
    },
    xaxis : {
      type: "datetime"
    },
    tooltip : {
      shared: false,
      y: {
        formatter: function(val) {
          return (val).toFixed(0);
        }
      }
    }
  }
  }
  public initChartData(): void {
    const _data = this.globalData.cases_time_series.map(item => {
      let obj = {};
      obj["x"] =new Date(item.date.trim()).setFullYear(2020) + 86400000
      obj["y"] = item.dailyconfirmed;
      return obj;
    });

  this.positiviChartOptions  = {
     series : [
      {
        name: "cases",
        data: _data
      }
    ],
    chart :{
      type: "area",
      stacked: false,
      height: 480,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: "zoom"
      }
    },
    dataLabels : {
      enabled: false
    },
    markers : {
      size: [4,7],
      colors: ['#E91E63','#F44336','#9C27B0',]
    },
    title : {
      text: "Covid19 Positive Cases",
      align: "left"
    },
    fill : {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    },
    yaxis : {
      labels: {
        formatter: function(val) {
          return val.toFixed(0);
        }
      },
      title: {
        text: "Number of Cases"
      }
    },
    xaxis : {
      type: "datetime"
    },
    tooltip : {
      shared: false,
      y: {
        formatter: function(val) {
          return (val).toFixed(0);
        }
      }
    }
  }
  }
}
