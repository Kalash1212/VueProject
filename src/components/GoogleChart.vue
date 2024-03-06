<template>
    <GChart :type='charType' :data='this.$store.getters.getChartData' :options='chartOptions' />
  </template>
  
  <script>
  import { GChart } from 'vue-google-charts/legacy';
  
  export default {
    name: 'GoogleChart',
    components: {
      GChart,
    },
    data() {
      return {
        charType: 'PieChart',
        chartOptions: {
          title: 'Costs by categories',
          fontSize: 14,
          height: 400,},
      }
    },
  };
  </script>