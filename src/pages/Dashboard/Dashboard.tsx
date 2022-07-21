import SearchInput from "components/SearchInput/SearchInput";
import useSearchUserList from "hooks/useSearchUserList";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'

import styles from "./styles.module.scss";
function Dashboard() {
  const { userList, search } = useSearchUserList();
  const handleSearch = () => search({ q: query });
  const [query, setQuery] = useState("");

  const renderUser = (user: any, index: number) => {
    return (
      <div className={styles.user__record} key={index}>
        <Link to={`/profile/${user.login}`}>{user?.login}</Link>
      </div>
    );
  };

  return (
    <div className={styles.dashboard__container}>
      <SearchInput onSearch={handleSearch} query={query} setQuery={setQuery} />
      <div className={styles.user__list}>
        {userList.length > 0 && userList.map(renderUser)}
      </div>
    </div>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
