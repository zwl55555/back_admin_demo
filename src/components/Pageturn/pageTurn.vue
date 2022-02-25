<template>
  <el-pagination
    style="text-align: center; margin-top: 4vh"
    background
    :page-sizes="[10, 15, 20, 25, 50, 100]"
    layout="sizes,total,prev, pager, next,jumper"
    :total="sum"
    :page-size="10"
    @current-change="change"
    :current-page="page"
    @size-change="changeSize"
  >
  </el-pagination>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["sum", "page"],
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
    change(num) {
      //  num   分页组件传进来的页码
      this.$emit("change", num);
    },
    //切换每页显示多少条
    changeSize(size){
      //  size  分页组件传进来的每页条数
      this.$emit("changeSize", size);
    }
  },
  mounted() {},
};
</script>
<style scoped></style>
