import React, { useContext } from "react";
import Avatar from "components/Avatar/Avatar";
import UserContext from "contexts/UserContext";
// import PropTypes from 'prop-types'

function UserCard() {
  const user: any = useContext(UserContext);

  return (
    <div>
      <div>
        <Avatar url={user.avatar_url} alt="avatar" />
        <div>{user.name}</div>
      </div>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
    </div>
  );
}

UserCard.propTypes = {};

export default UserCard;
