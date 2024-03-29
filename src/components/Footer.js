import React, { useContext } from "react";
import UserContext from "../../utilities/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  return <h4 className="p-10 m-10"> This site is maintained by {user.name}</h4>;
};

export default Footer;
