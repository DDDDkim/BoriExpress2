import fetch from "node-fetch";
import FormData from "form-data";
import axios from "axios";
import qs from "qs";
import { loggedUser } from "../data/user.js";
import { boriLogin } from "../services/boripharms.js";

export async function main(req, res, next) {
  if (!loggedUser.cookie) {
    res.send("not loggedin");
    return;
  }
  console.log(`you are ${loggedUser.cookie}`);
  res.send("Hi");
  return;
}

export async function loginBori(req, res, next) {
  const id = "pholy9on";
  const pw = "0000";
  const cookie = await boriLogin(id, pw);
  loggedUser.id = id;
  loggedUser.cookie = cookie;
  res.send(cookie ? "you Logged in" : "wrong");
}

export async function indexBori(req, res, next) {
  console.log(loggedUser.cookie);
  var config = {
    method: "get",
    url: "http://boripharma.com/Service/Order/Order.asp",
    headers: {
      "Upgrade-Insecure-Requests": "1",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      Cookie: loggedUser.cookie,
    },
  };

  const response = await axios(config);
  console.log(response);
  const result = await JSON.stringify(response.data);
  console.log(result);

  res.send(result);
}

// 검색 예시
// fetch("http://boripharma.com/Service/Order/Order.asp?saveNumOrders=&adminDabindo=&so=0&so2=0&currMkind=&df=t&sDate=2021-12-24&eDate=2021-12-24&tx_maker=&tx_physic=%EC%B9%B8%EB%8D%B0%ED%83%80&x=35&y=17", {
//   "headers": {
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//     "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
//     "upgrade-insecure-requests": "1",
//     "cookie": "ASPSESSIONIDSQSBSATT=GKKLCEKCCDFBBGJBGJPGEPGE; boripharma=align=phy&memCd=16&venNm=%EB%B3%B4%EB%9E%8C%EC%95%BD%EA%B5%AD%28%EC%A3%BC%EB%AC%B8%EC%A7%84%29&venTel=033%2D662%2D8242&LoginNm=%EA%B9%80%EB%AF%BC%EC%A7%80&LoginVenNm=%EB%B3%B4%EB%9E%8C%EC%95%BD%EA%B5%AD%28%EC%A3%BC%EB%AC%B8%EC%A7%84%29&salesNm=%EB%B0%B1%EC%8A%B9%ED%98%84&memNm=%EA%B9%80%EB%AF%BC%EC%A7%80&salesPhone=&venCd=50169&memId=pholy9on&memKind=U&stockCd=&listCnt=10&venGroup=9999",
//     "Referer": "http://boripharma.com/Service/Order/Order.asp?saveNumOrders=&adminDabindo=&so=0&so2=0&currMkind=&df=t&sDate=2021-12-24&eDate=2021-12-24&tx_maker=&tx_physic=%EC%B9%B8%EB%8D%B0%ED%83%80&x=23&y=18",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": null,
//   "method": "GET"
// });
