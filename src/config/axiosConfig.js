import axios from "axios";
const instance = axios.create({
    // baseURL: process.env.baseURL
    baseURL: "https://ps-skb.herokuapp.com/api"
});

instance.defaults.headers.common["Accept"] = "application/json";
instance.defaults.headers.common["Content-Type"] = "application/json";

export default instance;