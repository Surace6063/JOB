import axios from "axios";

const BASE_URL = "http://localhost:4001"

export const newRequest = axios.create({
    baseURL: BASE_URL
})