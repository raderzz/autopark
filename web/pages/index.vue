<template lang="pug">
  div.container
     pie-chart(:chartdata="chart.data" :options="chart.options")  
</template>

<script>
import Logo from "~/components/Logo.vue";
import PieChart from "~/components/charts/Pie.vue";

export default {
  layout: "main",
  data() {
    return {
      chart: {
        data: {
          datasets: [
            {
              data: [10, 20, 30],
              backgroundColor: [
                '#d10a0a',
                '#efca43',
                '#4286f4'
              ]
            }
          ],
          labels: ["A", "B", "C"]
        },
        options: {
          titie: 'Vagas alugadas'
        }
      }
    };
  },
  components: {
    PieChart
  }
};
</script>

<style lang='scss' scoped>
.container {
  margin: 0 auto;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
