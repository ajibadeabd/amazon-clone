import axios from "axios"

const API = axios.create({
    baseURL:"http://localhost:5001/clone-c6663/us-central1/api"
})
export default API;
