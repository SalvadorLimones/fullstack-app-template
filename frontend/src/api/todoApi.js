import axios from "axios";

export const todoApi = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_TODOAPI,
    timeout: 3000,
  });

  const post = async (path, data) => {
    try {
      const resp = await instance.post(path, data, {
        headers: { authorization: localStorage.getItem("token") },
      });
      return resp;
    } catch (err) {
      return err.response;
    }
  };

  const get = async (path) => {
    try {
      const resp = await instance.get(path, {
        headers: { authorization: localStorage.getItem("token") },
      });
      return resp;
    } catch (err) {
      return err.response;
    }
  };

  return { post, get, _instance: instance };
};
