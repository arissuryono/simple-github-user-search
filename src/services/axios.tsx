import axios from "axios";

const token = process.env.REACT_APP_TOKEN;
const options = {
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `token ${token}`,
  },
};
const baseUrl = "https://api.github.com";

const apis = {
  searchUser: (params: string) =>
    axios.get(`${baseUrl}/search/users?${params}`, options),
  getUser: (userName: string) =>
    axios.get(`${baseUrl}/users/${userName}`, options),
  getUserRepos: (userName: string) =>
    axios.get(`${baseUrl}/users/${userName}/repos`, options),
  getReadme: (url: string) => axios.get(url),
};

export default apis;
