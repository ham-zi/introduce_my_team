import axios from "axios";

//url 베이스를 깔아준다.
const BASE_URL = "http://localhost/api";
const api = axios.create({ baseURL: BASE_URL });

/* 인터셉터 -> 작업해두면 요청 시 accessToken이 있다면 자동으로 첨부*/
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

/*
  응답 인터셉터
  함수 두개를 받는데, 모든 응답이 여기 지나가면서 결과 따라 갈림
  첫번째 : 응답이 성공(2XX)했을 때,
  두번째 : 응답이 실패(2XX아님 / 네트워크에러)일때 실행
*/
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    console.log(err.response);
    //err.config => "방금 실패한 요청에 대한 설정 정보 전체"
    //               url, method, header, params, data(body)
    //               이 정보를 갖고 있어야 우리가 실패한 요청 URL로 다시 요청을 보낼 수 있음.
    const { config: original, response } = err;
    console.log(original);
    console.log(response);
    // 401이 아니면 그냥 에러 반환
    if (response.status !== 401) {
      return Promise.reject(err);
    }
    // 만료가 아닌 401이 오면 return
    const isExpired = String(response.data).includes("토큰만료");

    if (!isExpired || original._retry) {
      return Promise.reject(err);
    }

    original._retry = true;
    // _retry : 관례, 재시도한 요청이 또 401로 오면 이미 refresh 한것이다.
    //               ->알아채서 무한루프 막는 용도.

    try {
      const refreshToken = localStorage.getItem("refreshToken");

      //순수 axios를 실행함
      // 왜냐하면 api로 하면, 무한 재귀발생함
      const { data } = await axios.post(`${BASE_URL}/auth/refresh`, {
        refreshToken,
      });
      localStorage.setItem("token", data.data.accessToken);
      localStorage.setItem("refreshToken", data.data.refreshToken);

      //막혔던 원래 요청을 시도
      original.headers.Authorization = `Bearer ${data.data.accessToken}`;

      return api(original);
    } catch (e) {
      //refresh토큰도 만료 // 이상한게 -> 로그아웃
      ["token", "refreshToken", "memberId", "memberName", "role"].forEach((k) =>
        localStorage.removeItem(k),
      );
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }
  },
);

export default api;
