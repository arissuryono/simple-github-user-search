import React from "react";
import useGithubUser from "hooks/useGithubUser";
import { useParams } from "react-router-dom";
// import PropTypes from 'prop-types'
type MyParams = {
  userName: string;
};
function Profile() {
  const { userName } = useParams<keyof MyParams>() as MyParams;

  const { user } = useGithubUser(userName);

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

Profile.propTypes = {};

export default Profile;
