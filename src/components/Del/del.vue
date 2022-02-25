<template>
  <el-button size="small" type="danger" @click="del">删 除</el-button>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { successAlert, warningAlert } from "@/utils/alert";
export default {
  props: [],
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
    del() {
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 通知父组件我点了确定
          this.$emit("del");
        })
        .catch(() => {
          // 用户点了取消
          warningAlert("已取消删除");
        });
    },
  },
  mounted() {},
};
</script>
<style scoped></style>
