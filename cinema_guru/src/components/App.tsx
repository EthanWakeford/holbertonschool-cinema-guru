import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUserName, setUserUserName] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;

    axios({
      method: "post",
      url: "localhost:8000/api/auth",
      headers: { authorization: `Bearer ${accessToken}` },
    })
      .then((res) => {
        if (res.status === 200) {
          setIsLoggedIn(true);
          setUserUserName(res.data.username);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  if (isLoggedIn) {
    return (
      <>
        <div className="App">logged in: {userUserName}</div>
      </>
    );
  } else {
    return (
      <>
        <div className="App">logged out</div>
      </>
    );
  }
}

export default App;
