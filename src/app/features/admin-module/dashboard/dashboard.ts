import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexNonAxisChartSeries
} from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {

  // ===============================
  // TOP CARDS
  // ===============================
  topCards = [
    { title: "Tổng số đơn", value: "1000" },
    { title: "Doanh thu", value: "1.000.000" },
    { title: "Người dùng mới", value: "100" },
    { title: "Tổng tài khoản", value: "1000" }
  ];

  // ===============================
  // BAR CHART — Revenue
  // ===============================
  barChart: ApexChart = {
    type: 'bar',
    height: 220,
    toolbar: { show: false },
    foreColor: '#7a0b2e',
    animations: { enabled: true }
  };

  revenueSeries: ApexAxisChartSeries = [
    { 
      name: "Revenue",
      data: [1200, 1500, 2000, 800, 2200, 1000, 1800, 1300, 1600, 2100, 1400, 1700],
      color: "#ff97b7"
    }
  ];

  revenueXAxis: ApexXAxis = {
    categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    labels: { style: { fontSize: "11px" } }
  };

  // ===============================
  // TRAFFIC (Bar Chart)
  // ===============================
  trafficSeries: ApexAxisChartSeries = [
    { name: '2024', data: [200,180,250,300,220,260,240,230,250,300,320,280], color: '#ff97b7' },
    { name: '2025', data: [150,140,220,260,180,200,210,270,260,310,280,240], color: '#ffd1dc' }
  ];

  trafficXAxis: ApexXAxis = {
    categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    labels: { style: { fontSize: "11px" } }
  };

  // ===============================
  // PIE CHART — Category
  // ===============================
  pieChart: ApexChart = {
    type: "donut",
    height: 240
  };

  categoryLabels = ["Loại A", "Loại B", "Loại C"];
  categorySeries: ApexNonAxisChartSeries = [740, 737, 144];

  // ===============================
  // LINE — New Users
  // ===============================
  lineChart: ApexChart = {
    type: "line",
    height: 220,
    toolbar: { show: false }
  };

  newUsersSeries = [
    { name: 'New Users', data: [80,60,150,70,90,120,85,100,110,95,105,98], color: '#ff5f8c' }
  ];

  newUsersXAxis = {
    categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    labels: { style: { fontSize: "11px" } }
  };

  // ===============================
  // DONUT – New vs Old
  // ===============================
  donutChart: ApexChart = {
    type: "donut",
    height: 240
  };

  donutLabels = ["New", "Old"];
  donutSeries = [120, 30];

  // ===============================
  // LINE — Orders
  // ===============================
  ordersSeries = [
    { name: '2024', data: [300,270,350,400,300,320,330,310,340,360,380,350], color: '#ff5f8c' },
    { name: '2025', data: [250,200,300,350,250,280,290,270,300,330,320,310], color: '#7a0b2e' }
  ];

  ordersXAxis = {
    categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    labels: { style: { fontSize: "11px" } }
  };
}
