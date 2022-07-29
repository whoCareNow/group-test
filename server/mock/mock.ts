import Mock from "mockjs";
import mall from "./mall";

/* Mock.setup({
  timeout: "300-600",
}); */

// mall 相关
const mailTest = Mock.mock(mall.getBanners);
const postTest = Mock.mock({
  code: 200,
  message: "success",
  "data|2-6": [
    {
      id: "@id()",
      title: "@ctitle(8)",
      content: "@cparagraph(1,3)",
      userId: "@id()",
      date: "@datetime('yyyy-MM-dd HH:mm:ss')",
      reactions: {
        "thumbsUp|0-10": 0,
        "hooray|0-10": 0,
        "heart|0-10": 0,
        "rocket|0-10": 0,
        "eyes|0-10": 0,
      },
    },
  ],
});
export { mailTest, postTest };
