import axios from "axios";

const locator = axios.create({
    baseURL: "https://api.zippopotam.us/us/",
    timeout: 1000
});


export default locator;
