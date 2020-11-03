<template>
  <div id="left" class="bg">
    <div class="nwwest-roll" id="nwwest-roll">
      <ul id="top_ul">
        <li>
          <span>

              <div class="dropdown">
                <div class="dropdown-toggle" id="dropdownMenu0" data-toggle="dropdown" aria-haspopup="true"
                     aria-expanded="true">
                  列表
                  <!--                 <i class="iconfont">&#xe727;</i>-->
                </div>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu0">
                  <li><a href="#">事件</a></li>
                  <li><a href="#">监控</a></li>
                  <li><a href="#">报警</a></li>
                </ul>
              </div>

            </span>
          <span>

              <div class="dropdown">
                <div class="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                     aria-expanded="true">
                  级别
                  <!--                <i class="iconfont">&#xe727;</i>-->
                </div>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                </ul>
              </div>

            </span>
          <span>

              <div class="dropdown">
                <div class="dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true"
                     aria-expanded="true">
                  状态
                  <!--                 <i class="iconfont">&#xe727;</i>-->
                </div>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                </ul>
              </div>

            </span>
          <span>

              <div class="dropdown">
                <div class="dropdown-toggle" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true"
                     aria-expanded="true">
                  类型
                  <!--                  <i class="iconfont">&#xe727;</i>-->
                </div>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu3">
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                </ul>
              </div>

            </span>
        </li>
      </ul>
                     
      <ul id="roll-ul">

        <li v-for="item in list" ref="rollul" :class="{anim:animate==true}">
          <!--          @click="$emit('leftIp',item.ip)"-->
                                <router-link v-bind:to="{name:'cL',params:{leftIP:item.ip}}">
                                  <span class="name">
                                    <img :src="item.img" alt="">
                                  </span>
                                </router-link>
                                <span class="site">
                                  <div class="content_left">
                                  <div class="content_left_div_h">
                                    {{item.title}}
                                  </div>
                                    <div class="content_left_div_h">
                                      {{item.time}}
                                    </div>
                                  <div class="content_left_div_h">
                                    {{item.site}}
                                  </div>
                                  </div>
                                  <div class="content_right">
                                    <div class="content_right_div_h">
                                      <p>{{item.type}}</p>
                                    </div>
                                    <div class="content_right_div_h">
                                      <b>{{item.states}}</b>
                                    </div>
                                  </div>
                                </span>                                     
                             
        </li>
                         

      </ul>
    </div>
  </div>
</template>
<!--单个监控流程：left.vue向APP.vue传监控ip，APP.vue通过routerLink传给iframe组件，iframe通过message获取-->
<!--子=>父，父=>子，父=>子，message获取-->
<script>
    export default {
        name: "left",
        data() {
            return {
                leftIP: '',
                animate: true,
                list: [{
                    "img": "../../static/images/机房2.png",
                    "states": "已处理",
                    "type": "重要",
                    "title": "机房2",
                    "time": "2019-8-20  19:52",
                    "site": "机房2",
                    "ip": "192.168.254.121",
                },
                    {
                        "img": "../../static/images/机房3.png",
                        "states": "已处理",
                        "type": "重要",
                        "title": "机房3",
                        "time": "2019-8-20  19:52",
                        "site": "机房3",
                        "ip": "192.168.254.122",
                    },
                    {
                        "img": "../../static/images/CBD南门.png",
                        "states": "已处理",
                        "type": "重要",
                        "title": "CBD南门",
                        "time": "2019-8-20  19:52",
                        "site": "CBD南门",
                        "ip": "192.168.200.168",
                    },
                    {
                        "img": "../../static/images/CBD南广场球机.png",
                        "states": "已处理",
                        "type": "重要",
                        "title": "CBD南广场球机",
                        "time": "2019-8-20  19:52",
                        "site": "CBD南广场球机",
                        "ip": "192.168.209.10",
                    }, {
                        "img": "../../static/images/孵化器C_南门.png",
                        "states": "已处理",
                        "type": "重要",
                        "title": "孵化器C_南门",
                        "time": "2019-8-20  19:52",
                        "site": "孵化器C_南门",
                        "ip": "192.168.203.178",
                    }, {
                        "img": "../../static/images/孵化器C_北门.png",
                        "states": "已处理",
                        "type": "重要",
                        "title": "孵化器C_北门",
                        "time": "2019-8-20  19:52",
                        "site": "孵化器C_北门",
                        "ip": "192.168.203.179",
                    },
                    {
                        "img": "../../static/images/专家-JK1-05西北.png",
                        "states": "已处理",
                        "type": "重要",
                        "title": "专家-JK1-05西北",
                        "time": "2019-8-20  19:52",
                        "site": "专家-JK1-05西北",
                        "ip": "192.168.204.105",
                    },
                    {
                        "img": "../../static/images/专家-JK1-03东南.png",
                        "states": "已处理",
                        "type": "重要",
                        "title": "专家-JK1-03东南",
                        "time": "2019-8-20  19:52",
                        "site": "专家-JK1-03东南",
                        "ip": "192.168.204.103",
                    },
                    {
                        "img": "../../static/images/孵化器A2.png",
                        "states": "已处理",
                        "type": "重要",
                        "title": "孵化器A2",
                        "time": "2019-8-20  19:52",
                        "site": "孵化器A2",
                        "ip": "192.168.201.218",
                    }, {
                        "img": "../../static/images/CBD北门.png",
                        "states": "已处理",
                        "type": "重要",
                        "title": "CBD北门",
                        "time": "2019-8-20  19:52",
                        "site": "CBD北门",
                        "ip": "192.168.200.169",
                    },
                    {
                        "img": "../../static/images/电梯厅.png",
                        "states": "已处理",
                        "type": "重要",
                        "title": "电梯厅",
                        "time": "2019-8-20  19:52",
                        "site": "电梯厅",
                        "ip": "192.168.207.124",
                    }, {
                        "img": "../../static/images/孵化器B1.png",
                        "states": "已处理",
                        "type": "重要",
                        "title": "孵化器B1",
                        "time": "2019-8-20  19:52",
                        "site": "孵化器B1",
                        "ip": "192.168.202.231",
                    }, {
                        "img": "../../static/images/专家-JK1-08.png",
                        "states": "已处理",
                        "type": "重要",
                        "title": "专家-JK1-08",
                        "time": "2019-8-20  19:52",
                        "site": "专家-JK1-08",
                        "ip": "192.168.204.108",
                    }, {
                        "img": "../../static/images/专家-JK1-09.png",
                        "states": "已处理",
                        "type": "重要",
                        "title": "专家-JK1-09",
                        "time": "2019-8-20  19:52",
                        "site": "专家-JK1-09",
                        "ip": "192.168.204.109",
                    }, {
                        "img": "../../static/images/孵化器A1.png",
                        "states": "已处理",
                        "type": "重要",
                        "title": "孵化器A1",
                        "time": "2019-8-20  19:52",
                        "site": "孵化器A1",
                        "ip": "192.168.201.217",
                    }, {
                        "img": "../../static/images/专家-JK1-01西南.png",
                        "states": "已处理",
                        "type": "重要",
                        "title": "专家-JK1-01西南",
                        "time": "2019-8-20  19:52",
                        "site": "专家-JK1-01西南",
                        "ip": "192.168.204.101",
                    },]
            };


        },
        created() {
            setInterval(this.scroll, 4000)
        },
        methods: {
            scroll() {
                let con1 = this.$refs.rollul;
                this.animate = !this.animate;
                var that = this;
                setTimeout(function () {
                        that.list.push(that.list[0]);
                        that.list.shift();
                        con1[0].style.marginTop = '0px';
                        that.animate = !that.animate;
                    },
                    0)
            },
        }

    }
</script>

<style scoped>
  .bg {
    background: #081c44;
    background: -webkit-linear-gradient(to bottom, #081c44, #0a143700); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(to bottom, #081c44, #0a143700); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(to bottom, #081c44, #0a143700); /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom, #081c44, #060d19); /* 标准的语法 */
    border-radius: 20px;
    display: inline-block;
    height: 740px;
    width: 470px;
    list-style-type: none;
    overflow: hidden;
    font-size: 14px;
  }

  .staus_0 {
    color: #47E9F4 !important;
  }

  .staus_1 {
    color: #AD5264 !important;
  }

  .newest-bill .nwwest-roll {
    padding-left: 15px;
    height: 210px;
    margin: 10px auto;
    overflow: hidden;
     transition: all 0.5s;
  }

  .newest-bill .nwwest-roll li {
    height: 35px;
    line-height: 35px;

  }

  .anim {
    transition: all 0.5s;

  }

  li {
    list-style-type: none;
    color: #fff;
  }

  li span {
    display: block;
    float: left;
    margin-left: 2em;
    margin-top: 2em;
    width: 75px;
    height: 50px;
    cursor: pointer;
  }

  .name {
    width: 150px;
    height: 130px;
  }

  .site {
    width: 210px;
    height: 130px;
  }

  .dropdown-menu {
    min-width: 75px;
  }

  img {
    width: 140px;
    height: 110px;
  }

  .content_left {
    width: 150px;
  }

  .content_right {
    width: 50px;
    float: right;
    position: relative;
    top: -125px;
  }

  .content_left_div_h {
    height: 3em;
  }

  .content_right_div_h {
    height: 6em;
  }

  .content_right_div_h p {
    background: #a94442;
    display: inline-block;
    width: 50px;
    border-radius: 5px;
  }

  .content_right_div_h b {
    background: #00cae4;
    display: inline-block;
    width: 50px;
    border-radius: 5px;
    font-weight: 300;
  }

  /*图标字*/
  @font-face {
    font-family: 'iconfont';  /* project id 1366239 */
    src: url('//at.alicdn.com/t/font_1366239_epvvthbjena.eot');
    src: url('//at.alicdn.com/t/font_1366239_epvvthbjena.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1366239_epvvthbjena.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1366239_epvvthbjena.woff') format('woff'),
    url('//at.alicdn.com/t/font_1366239_epvvthbjena.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1366239_epvvthbjena.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  .dropdown-menu li {
    text-align: center;
  }

  .dropdown-menu a {
    color: #212529;
  }

  .dropdown-toggle {
    margin-left: 4em;
  }

  @media screen and (min-width: 1365px) and (max-width: 1600px) {
    #nwwest-roll {
      margin-top: -1em;
      margin-left: -1.5em;
    }

    .content_right_div_h b {
      background: #00cae4;
      display: inline-block;
      width: 60px;
      border-radius: 5px;
      font-weight: 300;
    }

    .content_right_div_h {
      height: 5.5em;
    }

    .content_right {
      width: 50px;
      float: right;
      position: relative;
      top: -150px;
    }
  }

  #top_ul {
    margin-left: -2em;
    margin-bottom: 2em;
    z-index: 9999;
  }
</style>
