import Koa from "koa";
const app = new Koa();
import { mailTest, postTest } from "./mock/mock";
app.use(async (ctx, next) => {
  await next();
  ctx.body = JSON.stringify(ctx.request);
  /*  ctx.body = JSON.stringify(httpResolve(ctx.request)); */
});

const httpResolve = (req: Koa.Request): any => {
  const { method, url } = req;
  if (method === "GET") {
    return GetResolve(req, url);
  } else if (method === "POST") {
    return PostResolve(req, url);
  }
};

const PostResolve = (req: Koa.Request, url: string) => {
  if (url === "/fetchPost") {
    return postTest;
  } else if (url === "/fetchMail") {
    return mailTest;
  } else {
    return null;
  }
};

const GetResolve = (req: Koa.Request, url: string) => {
  if (url === "/fetchPost") {
    return postTest;
  } else if (url === "/fetchMail") {
    return mailTest;
  } else {
    return null;
  }
};

console.log("listen", "http://localhost:8079");

app.listen(8079);
