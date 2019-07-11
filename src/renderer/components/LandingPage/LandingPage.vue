<template>
  <div id="wrapper">
    <!-- <img  style="-webkit-app-region: drag" id="logo" src="~@/assets/logo.png" alt="electron-vue"> -->
    <main class="content-wrap">
      <div class="navList">
        <a-menu
          :defaultSelectedKeys="['1']"
          :defaultOpenKeys="['sub1']"
          mode="inline"
          theme="dark"
          :inlineCollapsed="collapsed"
        >
          <a-menu-item v-for="(item, key) in allSort" :key="key" @click="getAllTopics(key)">
            <a-icon type="pie-chart" />
            <span>{{item}}</span>
          </a-menu-item>
        </a-menu>
      </div>
      <div class="content-main">
        <div class="data-list">
          <a-list
            itemLayout="horizontal"
            :dataSource="topicData"
          >
            <a-list-item slot="renderItem" slot-scope="item, index">
              <a-list-item-meta
                :description="`${item.reply_count}/${item.visit_count}`"
              >
                <a slot="title" href="">{{item.title}}</a>
                <a-avatar slot="avatar" :src="item.author.avatar_url" />
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </div>
        <div class="data-pagination">
          <a-pagination 
            :defaultCurrent="1" 
            :pageSize="pageInfo.pageSize"
            :total="pageInfo.dataTotal" 
            :hideOnSinglePage='true'
            @change="changePage"
          />
        </div>
      </div>
    </main>
    getAllSort: {{getAllSort}}  <br>
    {{test}}
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  export default {
    computed: {
      ...mapGetters('operate', ['getAllSort']),
      dataSort() {
        return this.$store.state.counter.test
      }
    },
    data () {
      return {
        topicData: '',
        topicType: 'ask',
        pageInfo: {
          pageCount: 8,
          pageSize: 10,
          dataTotal: 5000
        }
      }
    },
    mounted () {
      this.getAllTopics()
    },
    methods: {
      changePage(index, pagesize) {
        this.getAllTopics(this.topicType, index)
      },
      // ...mapActions(['FETCH_GET_ALLdafa']),
      getAllTopics (type, index) {
        if (!index) {
          index = 1
        }
        this.topicType = type || this.topicType
        this.$store.dispatch('FETCH_GET_ALL', {
          api: 'topics',
          data: {
            page: index || 1,
            tab: this.topicType,
            limit: this.pageInfo.pageCount,
            mdrender: true
          }
        }).then((res) => {
          if (res.success) {
            this.topicData = res.data
          } else {
            this.$message.error(res)
          }
        }).catch((error) => {
          this.$message.error(error)
        })
      }
      // open (link) {
      //   debugger
      //   this.$electron.shell.openExternal(link)
      //   this.$electron.shell.openItem(link)
      // }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  body { font-family: 'Source Sans Pro', sans-serif; padding: 0;margin: 0;}

  #wrapper {
    box-sizing: border-box;
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    // height: 100vh;
    // width: 100vw;
    .content-wrap{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .navList{
        width: 240px;
        display: block;
      }
      .content-main{
        width: 100%;
        padding: 15px;
        .data-list{}
        .data-pagination{
          text-align: left;
          margin: 15px 0;
        }
      }
    }
  }
</style>

master