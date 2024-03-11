import axios from "axios";
import { ReqParams } from "@/app/types/postTypes";

export const fetchPosts = async (params: ReqParams) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: params,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchPostItem = async (param: string) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts${param}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
