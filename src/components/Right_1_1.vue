<template>
  <div id="right_1_1" class="bg">
    <p class="fl">事件总览 </p>
    <div class="div_p">
      <p style="font-size: 12px;position: relative;left: -4em;top: 1em;"> <span style="color: #35D4E7; ">2</span>
        <br>今日事件
      </p>
      <p style="font-size: 12px;position: relative;left: 4em;top: -3.3em;"> <span style="color: #35D4E7; ">18</span>
        <br>总事件
      </p>
    </div>
    <div class="div_p">
      <p style="font-size: 12px;position: relative;left: -4em;top: -2em;"> <span style="color: #AD5264 ">3</span>
        <br>待处理
      </p>
      <p style="font-size: 12px;position: relative;left: 4em;top: -6.3em;"> <span style="color: #AD5264; ">2</span>
        <br>严重事件
      </p>
    </div>
    <div class="div_p">
      <p style="font-size: 12px;position: relative;left: -4em;top: -4.6em;"> <span style="color: #5cb85c; ">3</span>
        <br>已处理
      </p>
      <p style="font-size: 12px;position: relative;left: 4em;top: -8.9em;"> <span style="color: #C5CA91; ">1</span>
        <br>处理中
      </p>
    </div>





  </div>
</template>

<script>
  export default {
    name: "right_1_1"
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
    color: #fff;
  }

  @media screen and (min-width: 1365px) and (max-width: 1600px) {
  .div_p{
    margin-top: -2em;
  }
  }
</style>
