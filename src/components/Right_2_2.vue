<template>
  <div id="right_2_2" class="bg">
    <p class="fl">告警处理状态统计</p>
    <div id="watch_pie" :style="{}"></div>
  </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: 'watch_pie',
        data () {
            return {
                dataList:[
                    {value:50, name:'待处理'},
                    {value:28, name:'处理中'},
                    {value:22, name:'已处理'},
                ]
            }
        },
        mounted () {
            this.ringDrag();
        },
        methods:{
            ringDrag(){
                const _dataList=this.dataList;
                // 基于准备好的dom，初始化echarts实例
                const myChart = this.$echarts.init(document.getElementById('watch_pie'));
                const option = {
                    tooltip: {
                        show:true,
                        trigger: 'item',
                        formatter: "{a} <br/> {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left:90,
                        y:'center',
                        top:35,
                        data:this.dataList.name,
                        selectedMode:false,
                        itemWidth:12,
                        itemHeight:12,
                        icon:'square',
                        padding: 12,
                        itemGap:12,
                        textStyle:{
                            color: '#fff',
                            fontSize:10,
                            width:100,
                            rich:{
                                // a:{
                                //     fontSize:16,
                                //     color:"#EA5504",
                                //     padding:10
                                // },
                                // 可控制renturn数据，a| variable

                            }
                        },
                        tooltip: {
                            show: true
                        },
                        formatter: function (name) {
                            let data = _dataList;
                            let total = 0;
                            let tarValue = 0;
                            for (let i = 0, l = data.length; i < l; i++) {
                                total += data[i].value;
                                if (data[i].name == name) {
                                    tarValue = data[i].value;
                                }
                            }
                            let p = (tarValue / total * 100).toFixed(2);
                            return name + ' ' + ' '+tarValue+'件';
                            // 注意，换行仍是使用 '\n'
                        }
                    },
                    series: [
                        {
                            name:'',
                            type:'pie',
                            radius: ['30%', '40%'],
                            // 绝对位置，相对于容器左侧 10px, 上侧 10 px
                            // position: [0, -50],
                            center: [50, 80],
                            avoidLabelOverlap: false,
                            hoverAnimation: false,
                            legendHoverLink:false,
                            silent:false,
                            label: {
                                normal:{
                                    show: false,
                                    position:'center',
                                    formatter:(params)=>{
                                        //var _total=0;
                                        // _total+=params.data.value;
                                        // dataTextArry.forEach((item,i)=>{
                                        // _total+=item.value
                                        // console.log(_total)
                                        // });
                                        //console.log(1);
                                        // console.log(set)
                                    },
                                },
                                textStyle:{
                                    fontSize:14,
                                    color:'green'
                                },
                                emphasis: {
                                    show: false,
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            itemStyle:{
                                color:function(params){
                                    //console.log('1',params)
                                    var colorList=['#cc4040','#189ac1','#4c923d']
                                    return colorList[params.dataIndex];
                                }
                            },
                            data:this.dataList
                        }
                    ]
                };

// 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
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
  #watch_pie{
    width: 250px;
    height:150px;
  }
  @media screen and (min-width: 1365px) and (max-width: 1600px) {
    #watch_pie{
      width: 250px;
      height:150px;
      margin-left: 1.5em;
    }
  }
</style>
