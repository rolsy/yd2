<template>
    <div id="right_1_2" class="bg">
        <p class="fl">告警统计</p>
        <div id="visitor_echart" style="width: 250px;height: 230px;" ref="chart_wrap" class="chart_wrap"></div>
    </div>
</template>

<script>
    export default {
        name: "visitor_echart",
        computed: {},
        data() {
            return {
                seriesData: [],
            };
        },

        created() {},
        mounted() {
            this.initCharts();
            setInterval(() => {
                this.seriesData=[];
                this.seriesData.push ({
                    data: [100+Math.floor(Math.random()*10), 100+Math.floor(Math.random()*10), 100+Math.floor(Math.random()*10), 100+Math.floor(Math.random()*10), 100+Math.floor(Math.random()*10), 100+Math.floor(Math.random()*10), 100+Math.floor(Math.random()*10)],
                    type:'bar',
                    barWidth:10,
                    barGap:'80%',
                    itemStyle : {
                        normal : {
                            color:'#77FDFD',
                            lineStyle:{
                                color:'#77FDFD'
                            }
                        }
                    },
                });
            }, 4000);
        },
        watch: {
            seriesData(val, oldVal) {
                // console.log(1111, val, oldVal);
                this.setOptions(val);
            }
        },
        methods: {
            initCharts() {
                this.chart = this.$echarts.init(this.$refs.chart_wrap);
                this.setOptions();
            },

            setOptions(series) {
                // console.log(22222,this.chart,series);
                this.chart.setOption({
                    grid: {
                        left: '3%',
                        top:'3%',
                        right: '10%',
                        bottom: '23%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {

                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        // data: ['1','2','3','4','5','6','7'],
                        data: (function (){
                            var now = new Date();
                            var res = [];
                            var len = 7;
                            while (len--) {
                                res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                                now = new Date(now - 4000);
                            }
                            return res;
                        })(),
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                    },
                    series: series,
                },false);
            },

        }
    };
</script>

<style scoped>
    .fl{
      color: #35D4E7;
      font-size: 12px;
      margin-left: 1em;
      margin-top: 2em;
      text-align: left;
    }
    .bg{
      background: #081c44;
      background: -webkit-linear-gradient(to bottom,#081c44, #0a143700); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(to bottom,#081c44, #0a143700); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(to bottom,#081c44, #0a143700); /* Firefox 3.6 - 15 */
      background: linear-gradient(to bottom,#081c44, #060d19); /* 标准的语法 */
      border-radius: 20px;
      display: inline-block;
      height: 265px;
      width: 250px;
    }
</style>
