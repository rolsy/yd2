<template>
  <div class="app-toast"
       v-if="isShow"
       :class="{'info': type=== 'info','success': type=== 'success','wraning': type=== 'wraning','danger': type=== 'danger'}" >
    {{text}}
  <button>处理</button>
  </div>
</template>
<style scoped>
  .app-toast {
    position: fixed;
    left: 95%;
    top: 10%;
    background: #ccc;
    padding: 10px;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    color: #fff;
  }
  .info {
    background: #00aaee;
  }
  .success {
    background: #00ee6b;
  }
  .wraning {
    background: #eea300;
  }
  .danger {
    background: #ee000c;
  }
  button{
    padding: 2px;
    border-radius: 5px;
    font-size: 12px;
    background: #fff;
  }
</style>
