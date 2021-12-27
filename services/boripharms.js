import axios from "axios";
import qs from "qs";

export async function boriLogin(id, pw) {
  // id, pw를 받아서 로그인 요청을 하고
  // 쿠키를 반환한다.
  const data = qs.stringify({
    tx_id: id,
    tx_pw: String(pw),
  });

  const config = {
    method: "post",
    url: "http://boripharma.com/Common/Certify/Login.asp",
    headers: {
      "Upgrade-Insecure-Requests": "1",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    },
    data: data,
  };
  //헤더 설정하고 axios로 요청
  const result = await axios(config);
  const cookieList = result.headers["set-cookie"];
  const cookie = cookieList.find((cookie) => cookie.startsWith("boripharma="));

  return cookie;
}
