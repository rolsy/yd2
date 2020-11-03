<template>
  <div id="right_3_1" class="bg">
    <p class="fl">本月区域告警排行</p>
    <div id="room_echart" style=""></div>
  </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: 'room_echart',
        data() {
            return {
                charts: '',
                /*  opinion: ["1", "3", "3", "4", "5"],*/
                // opinionData: ["3", "2", "4", "4", "5"]
            }
        },
        methods: {
            drawLine(id) {
                this.charts = echarts.init(document.getElementById('room_echart'));
                var data = [30, 23, 20, 15, 20]
                var titlename = ['A区', 'B区', 'C区', 'D区', 'E区'];
                var valdata = [30, 23, 20, 15, 20]
                var myColor = ['#56D0E3', '#56D0E3', '#56D0E3', '#56D0E3', '#56D0E3'];
                this.charts.setOption({
                    backgroundColor: '',
                    grid: {//设置图表位置
                        left: '3%',
                        top:'-10',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        show: false
                    },
                    yAxis: [{
                        show: true,
                        data: titlename,
                        inverse: true,
                        axisLine: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: function(value, index) {
                                    var num = myColor.length;
                                    return myColor[index % num]
                                }
                            },
                            formatter: function(value, index) {
                                return [
                                    '{title|' + value + '} '
                                ].join('\n')
                            },
                            rich: {}
                        },

                    }, {
                        show: true,
                        inverse: true,
                        data: valdata,
                        axisLabel: {
                            textStyle: {
                                color: function(value, index) {
                                    var num = myColor.length;
                                    return myColor[index % num]
                                }
                            }
                        },
                        axisLine: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },

                    }],
                    series: [{
                        name: '条',
                        type: 'bar',
                        yAxisIndex: 0,
                        data: data,
                        barWidth: 10,
                        itemStyle: {
                            normal: {
                                barBorderRadius: 30,
                                color: function(params) {
                                    var num = myColor.length;
                                    return myColor[params.dataIndex % num]
                                },
                            }
                        },
                        // label: {
                        //     normal: {
                        //         show: false,
                        //         position: 'inside',
                        //         formatter: '{c}%'
                        //     }
                        // },
                    }]
                })
            }
        },
        //调用
        mounted() {
            this.$nextTick(function() {
                this.drawLine('room_echart')
            })
        }
    }
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
  #room_echart{
    width: 250px;
    height: 230px;
  }
  @media screen and (min-width: 1365px) and (max-width: 1600px) {
    #room_echart{
      width: 250px;
      height: 230px;
      margin-top: -1em;
    }
  }
</style>
