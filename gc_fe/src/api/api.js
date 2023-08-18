import axios from "axios";
import store from "../store/store";

const baseURL = process.env.REACT_APP_URL;

const instanceUtil = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

const instanceMultipart = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

instanceUtil.interceptors.request.use(
  (config) => {
    const token = store.getState().token.token;
    const expirationTime = store.getState().token.expirationTime;

    if (!!token && expirationTime > new Date().getTime()) {
      config.headers.Authorization = token;
    } else {
      sessionStorage.clear();
      window.location.replace("/");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const signUp = async (data) => {
  try {
    const response = await axios.post(
      `${baseURL}/app/member/sign-up`,
      { 
        username: data.username,
        password: data.password,
        age: data.age,
      },
    );
    return response.data
  } catch (error) {
    console.error(error);
    return "error";
  }
};

export const signIn = async (data) => {
  try {
    const response = await axios.get(
      `${baseURL}/app/member/sign-in`,
      {
        params: {
          username: data.username,
          password: data.password,
        },
      },
    );
    return response.data
  } catch (error) {
    console.error(error);
    return "error";
  }
};

export const getAllLecture = async () => {
  try {
    const response = await axios.get(
      `${baseURL}/app/video/getAll`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return "error";
  }
};

export const lectureUpload = async(data) => {
  try {
    const response = await instanceMultipart.post(`/app/video/upload`, data);

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}