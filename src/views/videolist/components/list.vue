<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="视频标题">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="视频封面" align="center">
        <template slot-scope="scope">
          {{ scope.row.img_url }}
        </template>
      </el-table-column>
      <el-table-column label="分类" align="center">
        <template slot-scope="scope">
          {{ scope.row.type }}
        </template>
      </el-table-column>
      <el-table-column label="视频地址" align="center">
        <template slot-scope="scope">
          {{ scope.row.video_url }}
        </template>
      </el-table-column>
      <el-table-column label="播放量" align="center">
        <template slot-scope="scope">
          {{ scope.row.playback_volume }}w
        </template>
      </el-table-column>
      <el-table-column label="点赞数" align="center">
        <template slot-scope="scope">
          {{ scope.row.pick_num }}w
        </template>
      </el-table-column>
      <el-table-column label="创作者" align="center">
        <template slot-scope="scope">
          {{ scope.row.author }}
        </template>
      </el-table-column>
      <el-table-column label="添加时间" align="center">
        <template slot-scope="scope">
          {{ scope.row.add_time }}
        </template>
      </el-table-column>
      <el-table-column label="是否上架" align="center">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.isShelf"
            :active-value="1"
            :inactive-value="0"
            @change="changeShelf(scope.row.id,scope.row.aut)"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="是否展示" align="center">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.isShow"
            :active-value="1"
            :inactive-value="0"
            @change="changeShow(scope.row.id,scope.row.aut)"
          >
          </el-switch>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center" width="160">
        <template slot-scope="scope">
          <el-button size="small" type="success" @click="edit(scope.row.id)"
            >编辑</el-button
          >
          <v-del @del="del(scope.row.id)"></v-del>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger",
      };
      return statusMap[status];
    },
  },
  props: [],
  components: {},
  data() {
    return {
      listLoading: true,
    };
  },
  computed: {
    ...mapGetters({
      list: "videolist/list",
    }),
  },
  methods: {
    ...mapActions({
      reqList: "videolist/reqList",
    }),
    //是否上架
    changeShelf(id,status){
      console.log(id,status);
    },
    //是否展示
    changeShow(){

    },
    edit(id){
      this.$emit("edit",id)
    },
    del(id){
      console.log(id);
    }
  },
  mounted() {
    this.reqList().then(() => {
      this.listLoading = false;
    });
  },
};
</script>
<style scoped></style>
