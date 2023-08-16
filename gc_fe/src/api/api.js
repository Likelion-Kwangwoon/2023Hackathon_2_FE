import axios from "axios";

const baseURL = process.env.REACT_APP_URL;

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