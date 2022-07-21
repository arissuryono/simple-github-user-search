import React from "react";
import useGithubUser from "hooks/useGithubUser";
import { useParams } from "react-router-dom";
import useUserRepos from "hooks/useUserRepos";
import UserCard from "components/Profile/UserCard";
import ReposList from "components/Profile/ReposList";
import UserContext from "contexts/UserContext";
// import PropTypes from 'prop-types'

import styles from "./styles.module.scss";
type MyParams = {
  userName: string;
};
function Profile() {
  const { userName } = useParams<keyof MyParams>() as MyParams;

  const { user } = useGithubUser(userName);
  const { repos } = useUserRepos(userName);

  const UserCardProps = { user };
  return (
    <div className={styles.profile__container}>
      <UserContext.Provider value={user}>
        <UserCard {...UserCardProps} />
        <ReposList repos={repos} />
      </UserContext.Provider>
    </div>
  );
}

Profile.propTypes = {};

export default Profile;
