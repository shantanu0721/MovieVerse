import { useState } from "react";
import api from "../services/api";
// import { useNavigate } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post(
      "/auth/login",
      new URLSearchParams({
        username: email,
        password: password,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    localStorage.setItem("token", response.data.access_token);

    navigate("/");
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-700 text-white outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-gray-700 text-white outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold"
          >
            Login
          </button>
          <div className="mt-6 text-center">
  <p className="text-zinc-400">
    Don't have an account?{" "}
    <Link
      to="/register"
      className="text-red-500 hover:text-red-400 font-semibold"
    >
      Register
    </Link>
  </p>
</div>
        </form>
      </div>
    </div>
  );
}

export default Login;