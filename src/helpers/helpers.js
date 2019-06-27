import axios from "axios";
const BASE_URL = "https://misocho01-questioner.herokuapp.com/api/v2";

export const Post = (data, url) => {
    return axios
        .post(`${BASE_URL + url}`, {
            ...data
        })
}