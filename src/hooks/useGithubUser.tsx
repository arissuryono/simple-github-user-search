import { useEffect, useState } from "react";
import apis from "services/axios";

// import PropTypes from 'prop-types'
function useGithubUser(userName: string) {
  const [user, setUser] = useState({ name: "", avatar_url: "" });

  useEffect(() => {
    apis
      .getUser(userName)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  }, [userName]);

  return {
    user,
  };
}

useGithubUser.propTypes = {};

export default useGithubUser;
