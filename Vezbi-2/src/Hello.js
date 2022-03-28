import React, { useEffect, useState } from "react";

function Hello() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setProfilePic(localStorage.getItem("profilePic"));
  }, []);

  return (
    <div>
      {" "}
      <h1>{name}</h1>
      <h1>{email}</h1>
      {profilePic && <img src={profilePic} alt="profilePic" />}
    </div>
  );
}

export default Hello;
