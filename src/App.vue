<template>
  <div id="app">
    <index :wendu="wendu" :shidu="shidu" :xikeli="xikeli" :weather="weather" :air="air"></index>
    <div class="content_flexbox">
      <div class="left_flexbox">
        <!--        左-->
          <left></left>
<!--        @leftIp="getIP"-->

      </div>
      <div class="center_flexbox">
        <!--            <center_img></center_img>-->
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
        <!--            <iframe src="http://223.78.120.36:8803/Content/drives/hik/web3/ViewVideo.html?ip=192.168.203.163" frameborder="0"></iframe>-->
      </div>
      <div class="right_flexbox">
        <!--        右-->
        <right_1_1 class="bounce-enter-active6"></right_1_1>
        <right_1_2 class="bounce-enter-active5"></right_1_2>
        <right_2_1 class="bounce-enter-active3"></right_2_1>
        <right_2_2 class="bounce-enter-active4"></right_2_2>
        <right_3_1 class="bounce-enter-active2"></right_3_1>
        <right_3_2 class="bounce-enter-active1"></right_3_2>
      </div>
    </div>




  </div>
</template>

<script>
    import Index from "./components/index.vue"
    import Right_2_1 from "./components/Right_2_1"
    import Right_1_2 from "./components/Right_1_2"
    import Left from "./components/Left"
    import Right_3_2 from "./components/Right_3_2"
    import Right_1_1 from "./components/Right_1_1.vue"
    import Center_img from "./components/Center_img.vue"
    import Right_2_2 from "./components/Right_2_2.vue"
    import Right_3_1 from "./components/Right_3_1.vue"

    export default {
        name: 'App',
        data: function () {
            return {
                wendu: "",
                shidu: "",
                xikeli: "",
                weather: "",
                air: "",
                leftIP:'',
            };
        },
        components: {
            right_2_1: Right_2_1,
            right_1_2: Right_1_2,
            left: Left,
            right_3_2: Right_3_2,
            index: Index,
            right_1_1: Right_1_1,
            center_img: Center_img,
            right_2_2: Right_2_2,
            right_3_1: Right_3_1,
        },
        mounted() {
            this.$nextTick(() => {
                var that = this;
                var path = window.location.href;
                path = path.split('//')[0] + '//' + path.split('//')[1].split('/')[0] + '/';
                $.ajax({
                    type: "post",
                    dataType: "json",
                    async: false,
                    url: path + "MyProject/IndexAPI/GetIndexApiData", //项目地址
                    // url: "api/MyProject/IndexAPI/GetIndexApiData",//dev地址 同源在config/index.js proxyTable
                    success: function (data) {
                        var json_weather = JSON.parse(data.info).wea;
                        //天气
                        if (json_weather != "{}") {
                            var jweather = JSON.parse(JSON.parse(json_weather).wea);
                            if (jweather != undefined) {
                                var wendu = jweather.tem + "℃";
                                var shidu = jweather.humidity + "HR";
                                var xikeli = jweather.air_pm25 + "ug";
                                var weather = jweather.wea;
                                var air = decodeURI(jweather.air_level);
                                that.wendu = wendu;
                                that.shidu = shidu;
                                that.xikeli = xikeli;
                                that.weather = weather;
                                that.air = air;
                            }
                        }
                    },
                    error: function (e) {
                        console.log(e);
                    }
                })
            })
        },
        methods:{
            // getIP(data){
            //     this.leftIP = data
            //     console.log(this.leftIP);
            // }
        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width: 100%;
    height: 100%;
  }

  /*主页组件进场动画*/
  /*.bounce-enter-active1 {*/
  /*  animation: bounce-in1 1s linear;*/
  /*}*/
  /*@keyframes bounce-in1 {*/
  /*  0% {*/
  /*    transform: translateY(300px);*/
  /*    background: #0a143700;*/
  /*  }*/
  /*  50% {*/
  /*    transform: translateY(0px);*/
  /*    opacity:.5;*/
  /*    background: #081c44;*/
  /*  }*/
  /*  100% {*/
  /*    transform: translateY(0px);*/
  /*    background: -webkit-linear-gradient(to bottom,#081c44, #0a143700); !* Safari 5.1 - 6.0 *!*/
  /*    background: -o-linear-gradient(to bottom,#081c44, #0a143700); !* Opera 11.1 - 12.0 *!*/
  /*    background: -moz-linear-gradient(to bottom,#081c44, #0a143700); !* Firefox 3.6 - 15 *!*/
  /*    background: linear-gradient(to bottom,#081c44, #0a143700); !* 标准的语法 *!*/
  /*  }*/
  /*}*/
  /*  .bounce-enter-active2{*/
  /*    animation: bounce-in2 1s linear;*/
  /*    animation-delay:1s;*/
  /*    -webkit-animation-delay:1s; !* Safari 和 Chrome *!*/
  /*    animation-fill-mode:both*/
  /*  }*/
  /*@keyframes bounce-in2 {*/
  /*  0% {*/
  /*    transform: translateX(300px);*/
  /*    background: #0a143700;*/
  /*    opacity:0;*/
  /*  }*/
  /*  50% {*/
  /*    transform: translateY(0px);*/
  /*    opacity:.5;*/
  /*    background: #081c44;*/
  /*  }*/
  /*  100% {*/
  /*    transform: translateX(0px);*/
  /*    opacity:1;*/
  /*    background: -webkit-linear-gradient(to bottom,#081c44, #0a143700); !* Safari 5.1 - 6.0 *!*/
  /*    background: -o-linear-gradient(to bottom,#081c44, #0a143700); !* Opera 11.1 - 12.0 *!*/
  /*    background: -moz-linear-gradient(to bottom,#081c44, #0a143700); !* Firefox 3.6 - 15 *!*/
  /*    background: linear-gradient(to bottom,#081c44, #0a143700); !* 标准的语法 *!*/
  /*  }*/
  /*}*/
  /*.bounce-enter-active3{*/
  /*  animation: bounce-in3 1s linear;*/
  /*  animation-delay:2s;*/
  /*  -webkit-animation-delay:2s; !* Safari 和 Chrome *!*/
  /*  animation-fill-mode:both*/
  /*}*/
  /*@keyframes bounce-in3 {*/
  /*  0% {*/
  /*    transform: translateY(300px);*/
  /*    background: #0a143700;*/
  /*    opacity:0;*/
  /*  }*/
  /*  50% {*/
  /*    transform: translateY(0px);*/
  /*    opacity:.5;*/
  /*    background: #081c44;*/
  /*  }*/
  /*  100% {*/
  /*    transform: translateY(0px);*/
  /*    opacity:1;*/
  /*    background: -webkit-linear-gradient(to bottom,#081c44, #0a143700); !* Safari 5.1 - 6.0 *!*/
  /*    background: -o-linear-gradient(to bottom,#081c44, #0a143700); !* Opera 11.1 - 12.0 *!*/
  /*    background: -moz-linear-gradient(to bottom,#081c44, #0a143700); !* Firefox 3.6 - 15 *!*/
  /*    background: linear-gradient(to bottom,#081c44, #0a143700); !* 标准的语法 *!*/
  /*  }*/
  /*}*/
  /*.bounce-enter-active4{*/
  /*  animation: bounce-in4 1s linear;*/
  /*  animation-delay:3s;*/
  /*  -webkit-animation-delay:3s; !* Safari 和 Chrome *!*/
  /*  animation-fill-mode:both*/
  /*}*/
  /*@keyframes bounce-in4 {*/
  /*  0% {*/
  /*    transform: translateX(-300px);*/
  /*    background: #0a143700;*/
  /*    opacity:0;*/
  /*  }*/
  /*  50% {*/
  /*    transform: translateY(0px);*/
  /*    opacity:.5;*/
  /*    background: #081c44;*/
  /*  }*/
  /*  100% {*/
  /*    transform: translateX(0px);*/
  /*    opacity:1;*/
  /*    background: -webkit-linear-gradient(to bottom,#081c44, #0a143700); !* Safari 5.1 - 6.0 *!*/
  /*    background: -o-linear-gradient(to bottom,#081c44, #0a143700); !* Opera 11.1 - 12.0 *!*/
  /*    background: -moz-linear-gradient(to bottom,#081c44, #0a143700); !* Firefox 3.6 - 15 *!*/
  /*    background: linear-gradient(to bottom,#081c44, #0a143700); !* 标准的语法 *!*/
  /*  }*/
  /*}*/
  /*.bounce-enter-active5{*/
  /*  animation: bounce-in5 1s linear;*/
  /*  animation-delay:4s;*/
  /*  -webkit-animation-delay:4s; !* Safari 和 Chrome *!*/
  /*  animation-fill-mode:both*/
  /*}*/
  /*@keyframes bounce-in5 {*/
  /*  0% {*/
  /*    transform: translateY(300px);*/
  /*    background: #0a143700;*/
  /*    opacity:0;*/
  /*  }*/
  /*  50% {*/
  /*    transform: translateY(0px);*/
  /*    opacity:.5;*/
  /*    background: #081c44;*/
  /*  }*/
  /*  100% {*/
  /*    transform: translateY(0px);*/
  /*    opacity:1;*/
  /*    background: -webkit-linear-gradient(to bottom,#081c44, #0a143700); !* Safari 5.1 - 6.0 *!*/
  /*    background: -o-linear-gradient(to bottom,#081c44, #0a143700); !* Opera 11.1 - 12.0 *!*/
  /*    background: -moz-linear-gradient(to bottom,#081c44, #0a143700); !* Firefox 3.6 - 15 *!*/
  /*    background: linear-gradient(to bottom,#081c44, #0a143700); !* 标准的语法 *!*/
  /*  }*/
  /*}*/
  /*.bounce-enter-active6{*/
  /*  animation: bounce-in6 1s linear;*/
  /*  animation-delay:5s;*/
  /*  -webkit-animation-delay:5s; !* Safari 和 Chrome *!*/
  /*  animation-fill-mode:both*/
  /*}*/
  /*@keyframes bounce-in6 {*/
  /*  0% {*/
  /*    transform: translateX(300px);*/
  /*    background: #0a143700;*/
  /*    opacity:0;*/
  /*  }*/
  /*  50% {*/
  /*    transform: translateY(0px);*/
  /*    opacity:.5;*/
  /*    background: #081c44;*/
  /*  }*/
  /*  100% {*/
  /*    transform: translateY(0px);*/
  /*    opacity:1;*/
  /*    background: -webkit-linear-gradient(to bottom,#081c44, #0a143700); !* Safari 5.1 - 6.0 *!*/
  /*    background: -o-linear-gradient(to bottom,#081c44, #0a143700); !* Opera 11.1 - 12.0 *!*/
  /*    background: -moz-linear-gradient(to bottom,#081c44, #0a143700); !* Firefox 3.6 - 15 *!*/
  /*    background: linear-gradient(to bottom,#081c44, #0a143700); !* 标准的语法 *!*/
  /*  }*/
  /*}*/

  /*router过度动画*/
  .slide-fade {
    position: absolute;
    left: 0;
    right: 0;
  }

  .slide-fade-enter-active {
    transition: all 1.2s ease;
  }

  .slide-fade-leave-active {

    transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to {
    left: 0;
    right: 0;
    transform: translateX(50px);
    opacity: 0;
  }
  .content_flexbox{
    display: flex;
  }
  .left_flexbox{
    display: inline-flex;
    justify-content: space-around;
    width: 30%;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  .center_flexbox{
    display: inline-flex;
    justify-content: space-around;
    width: 45%;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  .right_flexbox{
    display: inline-flex;
    justify-content: space-around;
    width: 30%;
    flex-wrap: wrap;
    align-items: flex-start;
  }
</style>

