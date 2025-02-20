import axios from "axios";
const FileManager = {
  path: process.env.BASE_URL + "post/", // 项目public文件夹下的post文件夹路径
  // 获取所有的主题栏目，后续增加可以继续配置
  getAllTopic: function () {
    return ["HTML专题", "JavaScript专题", "Vue专题"];
  },
  // 获取某个主题下的所有文章，后续增加可以继续配置
  getPosts: function (topic) {
    switch (topic) {
      case 0:
        return ["文本标签", "HTML基础元素"];
      case 1:
        return ["方法与属性", "语句与数据类型", "怎样生成Promise实例"];
      case 2:
        return ["Vuex 全局状态", "路由管理"];
    }
  },
  // 获取某个文章的详细内容
  getPostContent: function (topicName, postName) {
    let url = this.path + topicName + "/" + postName + ".md";
    return new Promise((resolve, reject) => {
      axios.get(url).then((response) => {
        // console.log(response.data);
        resolve(response);
      }, reject);
    });
  },
};
export default FileManager;
