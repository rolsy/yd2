<template>
  <div id="Right_2_1" class="bg">
    <p class="fl">本月报警类型分布</p>
    <div id="ringDiagram" :style="{}"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: 'ringDiagram',
    data() {
      return {}
    },
    mounted() {
      this.ringDrag();
    },
    methods: {
      ringDrag() {
        const _dataList = this.dataList;
        //console.log(_dataList)
        // 基于准备好的dom，初始化echarts实例
        const myChart = this.$echarts.init(document.getElementById('ringDiagram'));
        const option = {
          backgroundColor: '',

          tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
          },

          visualMap: {
            show: false,
            min: 500,
            max: 600,
            inRange: {
              //colorLightness: [0, 1]
            }
          },
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5', '#fbaa30'], //'#FBFE27','rgb(11,228,96)','#FE5050'
            data: [{
              value: 10,
              name: '入侵报警'
            },
              {
                value: 14,
                name: '应急报警'
              },
              {
                value: 20,
                name: '门禁报警'
              },
              {
                value: 25,
                name: '消防报警'
              },
              {
                value: 21,
                name: '视频报警'
              }
            ].sort(function (a, b) {
              return a.value - b.value
            }),
            roseType: 'radius',

            label: {
              normal: {
                formatter: ['{c|{c}次}', '{b|{b}}'].join('\n'),
                rich: {
                  c: {
                    color: 'rgb(241,246,104)',
                    fontSize: 10,
                    fontWeight: 'bold',
                    lineHeight: 5
                  },
                  b: {
                    color: 'rgb(98,137,169)',
                    fontSize: 10,
                    height: 40
                  },
                },
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgb(98,137,169)',
                },
                smooth: 0.2,
                length: 5,
                length2: 5,

              }
            },
            itemStyle: {
              normal: {
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowBlur: 50,
              }
            }
          }]
        };

// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    }
  }
</script>

<style scoped>
  .fl {
    color: #35D4E7;
    font-size: 12px;
    margin-left: 1em;
    margin-top: 2em;
    text-align: left;
  }

  .bg {
    background: #081c44;
    background: -webkit-linear-gradient(to bottom, #081c44, #0a143700); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(to bottom, #081c44, #0a143700); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(to bottom, #081c44, #0a143700); /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom, #081c44, #060d19); /* 标准的语法 */
    border-radius: 20px;
    display: inline-block;
    height: 265px;
    width: 250px;
  }

  #ringDiagram {
    width: 250px;
    height: 230px;
  }

  @media screen and (min-width: 1365px) and (max-width: 1600px) {
    #ringDiagram {
      width: 250px;
      height: 230px;
      margin-top: -1em;
    }
  }
</style>
