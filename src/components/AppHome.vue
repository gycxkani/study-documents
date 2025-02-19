<template>
  <el-container id="container">
    <el-header style="width: 100%" height="120px">
      <Header :items="navItems"></Header>
    </el-header>
    <el-main>
      <Body :items="bodyItems"></Body>
    </el-main>
    <el-footer>
      <div id="footer">{{ desc }}</div>
    </el-footer>
  </el-container>
</template>

<script>
import Header from "./AppHeader.vue";
import Body from "./AppBody.vue";

export default {
  components: {
    Header,
    Body,
  },
  data() {
    return {
      navItems: [
        { index: 0, title: "HTML专题" },
        { index: 1, title: "CSS专题" },
        { index: 2, title: "JavaScript专题" },
        { index: 3, title: "Vue专题" },
        { index: 4, title: "Element Plus专题" },
      ],
      bodyItems: [
        { index: 0, title: "HTML简介" },
        { index: 1, title: "HTML编辑器" },
        { index: 2, title: "JavaScript" },
        { index: 3, title: "Vue" },
        { index: 4, title: "Element Plus" },
      ],
      desc: "版权所有，仅限学习使用，禁止商业用途",
    };
  },
};
</script>

<style scoped>
#container {
  height: 800px;
  margin-left: 150px;
  margin-right: 150px;
  margin-top: 30px;
}
#footer {
  text-align: center;
  background-color: bisque;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  color: #717171;
}
</style>
