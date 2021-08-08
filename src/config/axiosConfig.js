import axios from "axios";
const instance = axios.create({
    // baseURL: "http://localhost:3001/api",
    // baseURL: "http://localhost:3001",
    // baseURL: process.env.baseURL
    baseURL: "https://ps-skb.herokuapp.com/api",
});

instance.defaults.headers.common["Accept"] = "application/json";
instance.defaults.headers.common["Content-Type"] = "application/json";

export default instance;
