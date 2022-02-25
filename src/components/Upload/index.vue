<template>
  <!-- 
  本地上传组件   文件流
  调用时自定义text属性不定义的话placeholder为默认内容

  Show：控制是否禁用上传功能

  eg： <v-upload :Show="false" :src="form.cover_url" @change="change" ></v-upload>
 -->
  <ul class="file_ul">
    <li>
      <p v-if="Show">+</p>
      <input v-if="Show" @change="change" type="file" />
      <!-- 本地上传和赋值链接显示图片 -->
      <img v-if="src || imgUrl" :src="src || imgUrl" />
    </li>
  </ul>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["Show", "src"],
  components: {},
  data() {
    return {
      imgUrl: "",
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
    change(a) {
      let file = a.target.files[0];

      //拟定几个img格式
      let imgArr = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
      if (!imgArr.includes(file.type)) {
        warningAlert("请上传规定图片类型");
        return;
      }
      // 限制图片大小
      if (file.size > 2 * 1024 * 1024) {
        warningAlert("图片大小超出限制");
        return;
      }

      //给imgUrl赋值让页面img显示
      this.imgUrl = URL.createObjectURL(file);

      this.$emit("change", file);
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
//文件上传全局样式
.file_div {
  font-size: 14px;
  color: #606266;
  font-weight: bold;
  margin-bottom: 1.5vh;
}
//文件上传全局样式
.file_ul {
  width: 150px;
  height: 150px;
  border: 1px dashed #dcdfe6;
  border-radius: 10px;
  text-align: center;
  line-height: 150px;
  font-size: 30px;
  font-weight: bold;
  position: relative;
  overflow: hidden;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 999;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 998;
    border-radius: 10px;
    // opacity: 0;
  }
}
</style>
