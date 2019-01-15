<template>
  <div id="wrapper">
    <img  style="-webkit-app-region: drag" id="logo" src="~@/assets/logo.png" alt="electron-vue">
    <main>
      <div class="left-side">
        {{osInfo}} 
        <span class="title" @click="open(url)">
          Welcome to your new project!
        </span>
        {{main}}
        <a :href="url" target="_blank">外部链接</a>
        <div class="block">
          <span class="demonstration">默认</span>
          123 <br>
          {{topicData}}
        </div>
      </div>
      
    </main>
    <webview src="https://www.baidu.com/"
      style="width: 100%;height: 300px;"></webview>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState('operate', ['main'])
    },
    data () {
      return {
        url: 'https://en.wikipedia.org/wiki/A',
        value1: '',
        osInfo: 'dafa',
        topicData: ''
      }
    },
    mounted () {
      // console.log(this.$store)
      // this.getAllTopics()
      // this.$store.commit('change', 55)
    },
    methods: {
      getAllTopics () {
        this.$store.dispatch('FETCH_GET_ALL', {
          api: 'topics',
          data: {
            page: 1,
            tab: 'job',
            limit: 100,
            mdrender: true
          }
        }).then((res) => {
          this.topicData = res
        })
      },
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
