import { useState } from "react";
import "./auth.css";

interface AuthenticationProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserUsername: React.Dispatch<React.SetStateAction<string>>;
}

const Authentication: React.FC<AuthenticationProps> = ({
  setIsLoggedIn,
  setUserUsername,
}) => {
  const [_switch, set_switch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signInClicked = () => {
    set_switch(true);
  };

  const signOutClicked = () => {
    set_switch(false);
  };

  return (
    <>
      <form action="sign-in">
        <button onClick={signInClicked}>Sign In</button>
        <button onClick={signOutClicked}>Sign Up</button>
      </form>
    </>
  );
};

export default Authentication;
