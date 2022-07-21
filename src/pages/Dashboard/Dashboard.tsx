import React, { useState } from "react";

import SearchInput from "components/SearchInput/SearchInput";
import useSearchUserList from "hooks/useSearchUserList";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'

import styles from "./styles.module.scss";
function Dashboard() {
  const { userList, search } = useSearchUserList();
  const [query, setQuery] = useState("");

  const handleSearch = () => search({ q: query });

  const renderUserLink = (user: any, index: number) => {
    return (
      <div className={styles.user__record} key={index}>
        <Link to={`/profile/${user.login}`}>
          <img
            className={styles.user__avatar}
            src={user.avatar_url}
            alt="avatar"
          />
          <p>{user?.login}</p>
        </Link>
      </div>
    );
  };

  return (
    <div className={styles.dashboard__container}>
      <SearchInput onSearch={handleSearch} query={query} setQuery={setQuery} />
      <div className={styles.user__list}>
        {userList.length > 0 && userList.map(renderUserLink)}
      </div>
    </div>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
