import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import apis from "services/axios";
import {
  submitSearch,
  submitSearchFailed,
  submitSearchSuccess,
} from "store/actions/data";

function useSearchUserList() {
  const [userList, setUserList] = useState([]);
  const dispatch = useDispatch();

  const search = useCallback(({ q }: { q: string }) => {
    const params = `q=${q}+in:name`;
    dispatch(submitSearch(q));
    apis
      .searchUser(params)
      .then((response) => {
        dispatch(submitSearchSuccess(response.data.items));
        setUserList(response.data.items);
      })
      .catch((err) => {
        dispatch(submitSearchFailed());
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {}, []);

  return {
    userList,
    search,
  };
}

export default useSearchUserList;
