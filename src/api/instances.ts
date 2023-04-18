import axios from "axios";
import { apiUrl } from "./apiUrl";

export const quotesInstance = axios.create({
    baseURL: apiUrl
})

