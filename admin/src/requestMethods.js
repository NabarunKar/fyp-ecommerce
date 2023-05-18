import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const step1 = JSON.parse(localStorage.getItem('persist:root')).currentUser;
// const step2 = JSON.parse(step1)
// const TOKEN = step2["accessToken"];
// console.log(step1)

//original
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;
// console.log(TOKEN)
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjI1ZDkzNTM3ZTdjMjYxNWUzNDgzYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDQxNDY3MywiZXhwIjoxNjg0NjczODczfQ.jLNlnWyZ4rU-L9jlgLp0974FX6PBeykDFCafXkAtWso"
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});