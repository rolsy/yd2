<template>
  <div class="iframeDiv">
    <iframe src="http://223.78.120.36:8803/Content/drives/hik/web3/ViewVideo1.html" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" style="width:860px;height:644px;"></iframe>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                // iframe里监控ip地址，可以到36服务器里
            }
        },
        methods:{
        },
    }
</script>
<style scoped>
*{
  margin:0;
  padding:0;
}
.iframeDiv{
  width: 860px;
  height: 644px;
  border-radius: 10px;
  overflow: hidden;
  margin-left: -20px;
  margin-top: 50px;
}
</style>
