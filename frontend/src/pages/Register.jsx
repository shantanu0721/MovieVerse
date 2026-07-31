import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    await api.post("/auth/register", {
      username: formData.name,
      email: formData.email,
      password: formData.password,
    });

    alert("Registration Successful! Please login.");
    navigate("/login", { replace: true });
  } catch (error) {
    console.log(error.response?.data);
    alert(JSON.stringify(error.response?.data));
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 rounded-3xl p-8 shadow-2xl">

        <h1 className="text-4xl font-extrabold text-center text-red-600">
          🎬 MovieVerse
        </h1>

        <p className="text-center text-zinc-400 mt-2 mb-8">
          Create your account
        </p>

        <form
  onSubmit={handleSubmit}
  className="space-y-5"
>

          <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Full Name"
  className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-red-500"
/>

          <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email"
  className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-red-500"
/>

          <input
  type="password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  placeholder="Password"
  className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-red-500"
/>

          <input
  type="password"
  name="confirmPassword"
  value={formData.confirmPassword}
  onChange={handleChange}
  placeholder="Confirm Password"
  className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-red-500"
/>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-xl font-semibold"
          >
            Create Account
          </button>

          <p className="text-center text-zinc-400 mt-6">
  Already have an account?{" "}
  <span
    onClick={() => navigate("/login")}
    className="text-red-500 hover:text-red-400 cursor-pointer font-semibold"
  >
    Sign In
  </span>
</p>

        </form>

      </div>
    </div>
  );
}

export default Register;