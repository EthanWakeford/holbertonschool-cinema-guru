interface LoginProps {
  username: string;
  password: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const Login: React.FC<LoginProps> = ({
  username,
  password,
  setUsername,
  setPassword,
}) => {
  return (
    <>
      <label htmlFor="username"></label>
      <input type="text" name="username" />
      <label htmlFor="password"></label>
      <input type="password" name="password" />
      <button>Sign Up</button>
    </>
  );
};

export default Login;
