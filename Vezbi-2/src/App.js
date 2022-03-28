import "./App.css";
import { signInWithGoogle } from "./Firebase";
import { useNavigate, Route, Routes } from "react-router-dom";
import Hello from "./Hello";

function App() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    signInWithGoogle();
    navigate("/hello");
  };

  return (
    <div className="App">
      <button className="login-with-google-btn" onClick={handleSignIn}>
        Sign in with Google
      </button>
      <Routes>
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </div>
  );
}

export default App;
