<template>
  <!-- 
  搜索组件
  调用时自定义text属性不定义的话placeholder为默认内容

  sQuery：搜索框切出组件后切回来框内显示内容

  eg：<v-search text="输入小程序名称搜索" class="searchInp" :sQuery="queryMiniApp" @search="search"></v-search>
 -->
  <el-input
    :placeholder="text ? text : '请输入搜索内容'"
    v-model="query"
    @input="search"
    clearable
  >
  </el-input>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["text", "sQuery"],
  components: {},
  data() {
    return {
      query: this.sQuery ? JSON.parse(this.sQuery) : "",
      aaa: 1,
      timer: null,
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
    search() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        //输入框发生变化触发
        this.$emit("search", this.query);
      }, 500);
    },
    localQuery() {
      /* sessionStorage.setItem(this.sQuery,this.query) */
    },
    //移除本地存储
    unlocalQuery() {
      sessionStorage.removeItem(this.sQuery);
    },
  },
  watch: {
    query: {
      handler(newVal, oldVal) {
        /* if(newVal){
          this.localQuery()
        }else{
          this.unlocalQuery()
        } */
        //监听输入框内容是否清空如果清空移除sessionstorage存储
        if (!newVal) {
          this.unlocalQuery();
        }
      },
    },
  },

  mounted() {},
};
</script>
<style scoped></style>
