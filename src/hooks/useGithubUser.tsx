import axios from "axios";
import { useEffect, useState } from "react";

// import PropTypes from 'prop-types'

const token = process.env.REACT_APP_TOKEN;
const options = {
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `token ${token}`,
  },
};
const baseUrl = "https://api.github.com";

function useGithubUser(username: string) {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`${baseUrl}/users/${username}`, options)
      .then((response) => {
        console.log(response.data);

        setUser(response.data);
      })
      .catch((err) => console.log(err));
  }, [username]);

  return {
    user,
  };
}

useGithubUser.propTypes = {};

export default useGithubUser;