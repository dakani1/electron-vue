<template>
  <div id="wrapper">
    <img  style="-webkit-app-region: drag" id="logo" src="~@/assets/logo.png" alt="electron-vue">
    <main>
      <div class="left-side">
        <span class="title" @click="open(url)">
          Welcome to your new project!
        </span>
        <a :href="url" target="_blank">外部链接</a>
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        url: 'https://en.wikipedia.org/wiki/A',
        value1: ''
      }
    },
    methods: {
      open (link) {
        // this.$electron.shell.openExternal(link)
        this.$electron.shell.openItem(link)
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  body { font-family: 'Source Sans Pro', sans-serif; padding: 0;margin: 0;}

  #wrapper {
    box-sizing: border-box;
    border: 1px solid red;
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
    #logo {
      height: auto;
      margin-bottom: 20px;
      width: 420px;
      display: block;
    }
  }
</style>
