interface LoginProps {
  username: string;
  password: string;
  setUsername: React.Dispatch<React.SetStateAction<boolean>>;
  setPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = () => {
  return (
    <>
      <div></div>
    </>
  );
};

export default Login;
