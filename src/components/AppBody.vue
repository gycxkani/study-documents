<template>
  <el-container style="height: 100%">
    <el-aside width="200px" style="background-color: #f1f1f1">
      <div></div>
      <el-menu
        mode="vertical"
        background-color="#f1f1f1"
        text-color="#777777"
        active-text-color="#000000"
        :default-active="0"
        @select="selectItem"
      >
        <el-menu-item
          v-for="item in items"
          :index="item.index"
          :key="item.index"
        >
          <div id="text">{{ item.title }}</div>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <MarkDown :content="content"></MarkDown>
    </el-main>
  </el-container>
</template>

<script>
import MarkDown from "./MarkDown.vue";
import FileManager from "../tools/FileManager.js";
export default {
  mounted() {
    // 组件挂载的时候，加载默认的首篇文章
    // console.log(this.topic, this.items[this.currentIndex].title);
    FileManager.getPostContent(
      this.topic,
      this.items[this.currentIndex].title
    ).then((res) => {
      this.content = res.data;
      // console.log(this.content);
    });
  },
  // topic为当前选中的专题名称
  props: ["items", "topic"],
  data() {
    return {
      active: "0",
      // 在侧边栏上当前选中的文章
      currentIndex: 0,
      // 文档的markdown内容
      content: "",
    };
  },
  components: {
    MarkDown: MarkDown,
  },
  methods: {
    selectItem(index) {
      this.currentIndex = index;
    },
  },
  watch: {
    // 监听选中的文章变化
    currentIndex: function (val) {
      FileManager.getPostContent(this.topic, this.items[val].title).then(
        (res) => {
          this.content = res.data;
        }
      );
    },
    // 监听选中的主题变化
    topic: function (val) {
      FileManager.getPostContent(val, this.items[this.currentIndex].title).then(
        (res) => {
          this.content = res.data;
        }
      );
    },
  },
};
</script>
<style scoped>
.el-menu-item.is-active {
  background-color: #ffffff !important;
}
</style>
