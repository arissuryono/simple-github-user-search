import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const token = "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";
const options = {
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `token ${token}`,
  },
};
const baseUrl = "https://api.github.com";

function useSearchUserList() {
  const [userList, setUserList] = useState([]);

  const search = useCallback(({ q }: { q: string }) => {
    const params = `q=${q}+in:name`;
    axios
      .get(`${baseUrl}/search/users?${params}`, options)
      .then((response) => {
        setUserList(response.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {}, []);

  return {
    userList,
    search,
  };
}

export default useSearchUserList;
