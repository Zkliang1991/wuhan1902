import { axios } from "@/utils";

export const GETLYRAS = "GETLYRAS";
export async function getLyras({ url, params }) {
  const res = await axios.get(url, { params });
  return {
    type: GETLYRAS,
    lyras: res.data.result
  };
}

export const GETNEWS = "GETNEWS";
export async function getNews({ url }) {
  const res = await axios.get(url);
  return {
    type: GETNEWS,
    news: res.data.result
  };
}

export const GETSEARCHLYRAS = "GETSEARCHLYRAS";
export async function getSearchLyras({ url, params }) {
  const res = await axios.get(url, { params });
  // console.log(res);
  return {
    type: GETSEARCHLYRAS,
    data: res.data.result
  };
}

export const CHANGECLASSNAME = "CHANGECLASSNAME";
export const changeClassName = (className1, className2) => {
  return {
    type: CHANGECLASSNAME,
    className: {
      className1,
      className2
    }
  };
};

export const UPLOADIMG = "UPLOADIMG";
export async function upLoadImg1(parent) {
  console.log(parent);
  const res = await axios(parent);
  var userPic = res.data.avatarurl.replace(/public/, "http://47.93.13.72:1902/");
  localStorage.userPic = userPic;
  console.log(userPic);
  return {
    type: UPLOADIMG,
    userPic
  };
}
