import Koa from "koa";
import cors from "@koa/cors";
import httpResolve from "./http";
import createRouter from "koa-router";
import bodyParser from "koa-bodyparser";
import { mailTest, postTest } from "./mock/mock";
const app = new Koa();
app.use(cors());
const router = new createRouter();
// 配置中间件(bodyParser一定要在router前面插入)
app.use(bodyParser());
// 调用路由中间件
app.use(router.routes());
/* app.use(async (ctx, next) => {
  await next();
  ctx.body = JSON.stringify(httpResolve(ctx.request));
}); */

router.get("/", async (ctx, next) => {
  ctx.body = "welcome to koa";
});

//当使用ajax()时,参数contentType使用默认值"application/x-www-form-urlencoded",即使type设置为"GET",也应该用下面方法
router.get("/fetchPost", async (ctx, next) => {
  const { param1, param2 } = ctx.request.body;
  ctx.body = JSON.stringify(postTest);
});

router.post("/shortestPath", async (ctx, next) => {
  const { param1, param2 } = ctx.request.body;
});

router.get("/test", async (ctx, next) => {
  let url = ctx.url;
  let request = ctx.request;
  let req_query = request.query; //获取query,使用键值
  let req_querystring = request.querystring;

  let ctx_query = ctx.query;
  let ctx_querystring = ctx.querystring;
  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring,
  };
});

console.log("listen", "http://localhost:8079");

app.listen(8079);
