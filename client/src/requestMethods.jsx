import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjI1ZDkzNTM3ZTdjMjYxNWUzNDgzYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDMwNTAyMCwiZXhwIjoxNjg0NTY0MjIwfQ.dLxP-sUWmfTj2_Q1eeZhd2mSGtAfkyOjRf-kK7U5bIQ";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});