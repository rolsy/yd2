<template>
  <div id="right_3_2" class="bg">
    <p class="fl">历史告警时段分布</p>
    <div id="parking_pie" :style="{}"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: 'parking_pie',
    data() {
      return {
        // dataList:[
        //     {value:542, name:'空闲车位'},
        //     {value:126, name:'占用车位'},
        // ]
      }
    },
    mounted() {
      this.ringDrag();
    },
    methods: {
      ringDrag() {
        // const _dataList=this.dataList;
        //console.log(_dataList)
        // 基于准备好的dom，初始化echarts实例
        const myChart = this.$echarts.init(document.getElementById('parking_pie'));
        var dataIPSxAxis = ['2019 05/20  ', '2019 05/24', '2019 05/27', '2019 05/29 ', '2019 05/02 ', '2019 05/08'];
        var dataIPS2 = [20, 70, 60, 80, 100, 90];
        const option = {
          backgroundColor: "",
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985',
              },
            }
          },
          color: ["#0080ff"],
          toolbox: {
            // feature: {
            //     saveAsImage: {}
            // }
          },
          grid: {
            left: '5%',
            right: '5%',
            top: '10%',
            bottom: '5%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: dataIPSxAxis,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#6ba1bb',
                fontSize: 12,
              },
              formatter: function (value) {
                //debugger
                var ret = ""; //拼接加\n返回的类目项
                var maxLength = 5; //每项显示文字个数
                var valLength = value.length; //X轴类目项的文字个数
                var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                if (rowN > 1) //如果类目项的文字大于3,
                {
                  for (var i = 0; i < rowN; i++) {
                    var temp = ""; //每次截取的字符串
                    var start = i * maxLength; //开始截取的位置
                    var end = start + maxLength; //结束截取的位置
                    //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                    temp = value.substring(start, end) + "\n";
                    ret += temp; //凭借最终的字符串
                  }
                  return ret;
                } else {
                  return value;
                }
              },
            },
            axisLine: {
              lineStyle: {
                color: '#0a2b52',
                width: 0.5, //这里是为了突出显示加上的
              }
            }
          }],
          yAxis: [{
            type: 'value',
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#0a2b52',
                width: 1, //这里是为了突出显示加上的
              }
            },

            axisLabel: {
              formatter: function (val) {
                return val + '';
              },
              show: true,
              textStyle: {
                color: '#6ba1bb' //字体颜色
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed'

              }

            },
          }],
          series: [
            {
              name: '告警',
              type: 'line',
              smooth: true,
              symbol: "none", //去掉折线点
              stack: 100,
              itemStyle: {
                normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#64CAFA' // 0% 处的颜色
                  }, {
                    offset: 0.5,
                    color: '#64CAFA' // 100% 处的颜色
                  }, {
                    offset: 1,
                    color: '#0078D7' // 100% 处的颜色
                  }]), //背景渐变色
                  lineStyle: { // 系列级个性化折线样式
                    width: 0.5,
                    type: 'solid',
                    color: "#0078D7"
                  }
                },
                emphasis: {
                  color: '#02675f',
                  lineStyle: { // 系列级个性化折线样式
                    width: 0.5,
                    type: 'dotted',
                    color: "#02675f" //折线的颜色
                  }
                }
              }, //线条样式
              symbolSize: 5, //折线点的大小
              areaStyle: {
                normal: {}
              },
              data: dataIPS2,
            },


          ]
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

  #parking_pie {
    width: 230px;
    height: 230px;
  }

  @media screen and (min-width: 1365px) and (max-width: 1600px) {
    #parking_pie {
      width: 230px;
      height: 230px;
      margin-top: -1em;
    }
  }
</style>
