import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-78fdd/us-central1/api",
  //The API (cloud function) urlhttp://localhost:5001/clone-78fdd/us-central1/api
});

export default instance;
