<template>
  <div>
    <el-dialog
      :title="obj.isAdd ? '上传' : '编辑'"
      :visible.sync="obj.isShow"
      width="40%"
      :before-close="Close"
    >
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item label="腾讯视频链接">
          <el-col :span="16" style="display:flex">
            <el-input v-model="form.tencent_video_url" placeholder="输入腾讯视频链接"></el-input>
            <el-button>采集视频</el-button>
          </el-col>
        </el-form-item>

        <el-form-item label="视频标题">
          <el-col :span="8">
            <el-input v-model="form.title" placeholder="输入视频标题"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="视频封面图">
          <v-upload :Show="obj.isShow" :src="form.img_url" @change="change"></v-upload>
        </el-form-item>

        <el-form-item label="发布时间">
          <el-col :span="8">
            <el-input v-model="form.title" placeholder="输入发布时间"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="是否上架">
          <el-col :span="8">
            <el-select v-model="form.shelf">
              <el-option :key="1" label="上架" :value="1"></el-option>
              <el-option :key="2" label="下架" :value="0"></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item label="视频链接">
          <el-col :span="12">
            <el-input v-model="form.video_url" placeholder="视频链接输入内容"></el-input>
          </el-col>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="Close">取 消</el-button>
        <el-button type="primary" v-if="obj.isAdd" @click="add">确 定</el-button>
        <el-button type="primary" v-else @click="edit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["obj"],
  components: {},
  data() {
    return {
      
      form: {
        tencent_video_url: "",
        title: "",
        shelf: "",
        time: "",
        video_url: "",
      },
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
    //清空
    empty(){

    },
    //关闭
    Close(){
      this.obj.isShow = false;
      //清空
      this.empty();
    },
    change(e){
      console.log(e);
    },
    edit(){
      console.log('edit');
    },
    add(){
      console.log('add');
    }
  },
  mounted() {},
};
</script>
<style scoped></style>
