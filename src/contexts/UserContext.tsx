import { createContext } from "react";

const user = {
  name: "",
  avatar_url: "",
};
const UserContext = createContext(user);

export default UserContext;
