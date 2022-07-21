import { useEffect, useState } from "react";
import apis from "services/axios";

function useUserRepos(userName: string) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    apis
      .getUserRepos(userName)
      .then((response) => {
        setRepos(response.data || []);
      })
      .catch((err) => console.log(err));
  }, [userName]);

  return { repos };
}

useUserRepos.propTypes = {};

export default useUserRepos;
