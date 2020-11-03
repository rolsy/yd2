<template>
  <div id="index">
    <div class="left_top">
      <ul>
        <li style="color: #00cae4"><i class="iconfont">&#xe61e;</i>业达科技园区</li>
        <li><span style="color: #63CBDA">{{xikeli}}</span>
          <p style="font-size: 10px;left: -3em;">PM2.5</p></li>
        <li><span style="color: #6DC5BE;left:.7em;">{{air}}</span>
          <p style="font-size: 10px;left: -2em;">空气质量</p></li>
        <li><span style="color: #F7FCAE">{{wendu}}</span>
          <p style="font-size: 10px">温度</p></li>
        <li><span style="color: #83E4E7">{{shidu}}</span>
          <p style="font-size: 10px;left: -3em;">湿度</p></li>
      </ul>
    </div>
    <div class="center_left">
      <ul>
        <li><a href="javascript:void(0);" id="l1">综合态势 |</a></li>
        <li><a href="javascript:void(0);" id="l2">能源管理 |</a></li>
        <li><a href="javascript:void(0);" id="l3">安防管理 |</a></li>
        <li><a href="javascript:void(0);" id="l4">事件管理</a></li>
      </ul>
    </div>
    <div class="center-top">
      <h1 style="color: #00cae4">智谷管控平台</h1>
    </div>
    <div class="center_right">
      <ul>
        <li><a href="javascript:void(0);" id="r1">人员管理 |</a></li>
        <li><a href="javascript:void(0);" id="r2">空间管理 |</a></li>
        <li><a href="javascript:void(0);" id="r3">车辆管理 |</a></li>
        <li><a href="javascript:void(0);" id="r4">后台管理</a></li>
      </ul>
    </div>
    <div class="right_top">
      <ul>
        <li>
          <div class="weather-box">
            <div class="data">
              <p class="time" id="time" style="margin-right: 5px;">00:00:00</p>
              <p id="date"></p>
            </div>
          </div>
        </li>
        <li>
          <div class="weather">
            <!--                    <img id="weatherImg" src="../images/weather_img01.png" alt="" class="img-responsive">-->
            <div id="weather">
              <!--                      <p class="weather_p1">多云</p>-->
              <!--                      <p class="weather_p2">16-22℃</p>-->
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
    //主页头部
    export default {
        name: 'index',
        props: {
            wendu: {
                type: String,
                default: function () {
                    return {
                        wendu: '0℃'
                    }
                }
            },
            shidu: {
                type: String,
                default: function () {
                    return {
                        shidu: 'HR'
                    }
                }
            },
            xikeli: {
                type: String,
                default: function () {
                    return {
                        xikeli: 'ug'
                    }
                }
            },
            weather: {
                type: String,
                default: function () {
                    return {
                        weather: '0'
                    }
                }
            },
            air: {
                type: String,
                default: function () {
                    return {
                        air: '优'
                    }
                }
            },

        }
    }

    function fnW(str) {
        var num;
        str >= 10 ? num = str : num = "0" + str;
        return num;
    }

    //获取当前时间
    var timer = setInterval(function () {
        var date = new Date();
        var year = date.getFullYear(); //当前年份
        var month = date.getMonth(); //当前月份
        var data = date.getDate(); //天
        var hours = date.getHours(); //小时
        var minute = date.getMinutes(); //分
        var second = date.getSeconds(); //秒
        // var day = date.getDay();
        let day = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        let weekday = day[date.getDay()];//获取当前星期几
        var ampm = hours < 12 ? 'am' : 'pm';
        $('#time').html(fnW(hours) + ":" + fnW(minute) + ":" + fnW(second));
        $('#date').html('<span>' + year + '/' + (month + 1) + '/' + data + '</span><span style="margin-right: 15px;">' + ampm + '</span><span>' + weekday + '</span>')

    }, 1000)

    function reimg() {
        document.getElementById()
    }

</script>
<style scoped>
  li {
    list-style-type: none;
    float: left;
    margin-left: 1em;
    color: #fff;
  }

  .center_left {
    /*position: relative;*/
    /*left: 10em;*/
  }

  .center_right {
    /*position: relative;*/
    /*left: 7em;*/
  }

  .bgcenter {
    background: url(~images/header.png) 50% 50% no-repeat;
    background-size: 750px auto;
    position: relative;
    top: -2em;
  }

  @font-face {
    font-family: 'iconfont';  /* project id 1340797 */
    src: url('//at.alicdn.com/t/font_1340797_v5vhtop294f.eot');
    src: url('//at.alicdn.com/t/font_1340797_v5vhtop294f.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1340797_v5vhtop294f.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1340797_v5vhtop294f.woff') format('woff'),
    url('//at.alicdn.com/t/font_1340797_v5vhtop294f.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1340797_v5vhtop294f.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }


  #index {
    margin-top: 0px;
    display: flex;
    align-content: center;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: #fff;
  }
  #time,#date{
    display: inline-block;
  }
  .left_top{
    align-self: flex-start;
  }
  .center_left{
    align-self: center;
  }
  .center_right{
    align-self: center;
  }
  .center-top{
    align-self: center;
    margin-bottom: 15px;
  }
  center-top::before{
    content:"";
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:50px;
    box-sizing:border-box;
    border-bottom:1px solid #00cae4;
    transform-origin:bottom center;
    transform:rotateZ(45deg) scale(1.414);
  }
  @media screen and (min-width: 1365px) and (max-width: 1600px) {
    .center-top{
      align-self: center;
      margin-bottom: 15px;
      margin-left: 4em;
    }
  }
</style>
