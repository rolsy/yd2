<template>
  <div id="Center_Left" class="bg">
    <router-link to="/" style="text-decoration:none">
      <div class="x">X</div>
    </router-link>
    <div class="content">
<!--      {{leftIP}}-->
      <iframe :src="`http://223.78.120.36:8803/Content/drives/hik/web3/singlevideo.html?ip=${this.leftIP}`" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" style="width:860px;height:644px;"></iframe>

    </div>

  </div>
</template>

<script>
    export default{
        name:'Center_Left',
        data(){
            return{
                leftIP:this.$route.params.leftIP,
            }
        },
        mounted(){
        },
        methods: {
        },
        beforeCreate(){ this.leftIP="11"; }
    }
</script>

<style scoped>
  .bg{
    /*background:url(../../static/images/bg.jpg) no-repeat;*/
    display: inline-block;
    color: #fff;
  }
  .x{
    color: #fff;
    position: relative;
    left: 51em;
    top: 0em;
    text-decoration: none;
    width: 50px;
    height: 50px;
  }
  .content{
    width: 880px;
    height: 705px;
    border-radius: 10px;
    overflow: hidden;
    margin-left: -20px;
  }
  @media screen and (min-width: 1365px) and (max-width: 1600px) {
    .x{
      color: #fff;
      position: relative;
      left: 48em;
      top: 0em;
      text-decoration: none;
      width: 50px;
      height: 50px;
    }
  }
</style>
