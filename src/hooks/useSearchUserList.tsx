import { useCallback, useEffect, useState } from "react";
import apis from "services/axios";

function useSearchUserList() {
  const [userList, setUserList] = useState([]);

  const search = useCallback(({ q }: { q: string }) => {
    const params = `q=${q}+in:name`;
    apis
      .searchUser(params)
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
