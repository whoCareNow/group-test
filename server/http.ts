import { mailTest, postTest } from "./mock/mock";
import { Request } from "koa";
/* 解析请求 */
const httpResolve = (req: Request): any => {
  /* url 为请求的地址，method为方法 */
  const { method, url } = req;
  if (method === "GET") {
    return GetResolve(req, url);
  } else if (method === "POST") {
    return PostResolve(req, url);
  }
};
/* Post 方法 */
const PostResolve = (req: Request, url: string) => {
  if (url === "/fetchPost") {
    return postTest;
  } else if (url === "/fetchMail") {
    return mailTest;
  } else {
    return null;
  }
};
/* Get 方法 */
const GetResolve = (req: Request, url: string) => {
  if (url === "/fetchPost") {
    return postTest;
  } else if (url === "/fetchMail") {
    return mailTest;
  } else {
    return null;
  }
};

export default httpResolve;
