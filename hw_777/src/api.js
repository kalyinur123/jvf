import axios from "axios";

export const getApi =axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/posts'
})