<template>
  <div class="app-container">
    <div class="navBar">
      <el-button class="addBtn" type="success" @click="add">上传视频</el-button>
      <v-search
        class="searchInp"
        :sQuery="videotitle"
        :text="'视频标题'"
        @search="search"
      ></v-search>
      <el-col :span="3">
        <el-select @change="selectShlef" v-model="form.shlef" placeholder="选择类型">
          <el-option :key="0" label="全部显示" :value="null"></el-option>
          <el-option :key="1" label="上架" value="0"></el-option>
          <el-option :key="2" label="下架" value="1"></el-option>
        </el-select>
      </el-col>
    </div>
    <v-list @edit="edit"></v-list>
    <v-add :obj="obj"></v-add>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import vList from "./components/list.vue";
import vAdd from "./components/add.vue";
export default {
  props: [],
  components: {
    vList,
    vAdd,
  },
  data() {
    return {
      obj: {
        isShow: false,
        isAdd: false,
      },
      form: {
        shlef: "",
        show: "",
      },
      videotitle: "",
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
    //搜索
    search() {},
    //添加
    add() {
      this.obj.isShow=true
      this.obj.isAdd=true
    },
    //编辑
    edit(id){
      this.obj.isShow=true
      this.obj.isAdd=false
    },
    //过滤上架状态
    selectShlef() {},
    //过滤展示状态
    selectShow() {},
  },
  mounted() {},
};
</script>
<style scoped></style>
