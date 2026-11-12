import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../services/apiSlice";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const response = await login({ email, password }).unwrap();
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      window.dispatchEvent(new Event("gameportal-auth-change"));
      navigate("/dashboard");
    } catch (err) {
      setErrorMsg(err.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="content-width auth-page">
      <div className="auth-card">
        <p className="eyebrow"><span className="eyebrow-line" /> WELCOME BACK</p>
        <h1>Log in to your account.</h1>

        {errorMsg && (
          <div className="auth-error">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email address</label>
          <input
            id="login-email"
            type="email"
            placeholder="Enter email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            placeholder="Enter password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="auth-submit"
            disabled={isLoading}
          >
            {isLoading ? "Logging in…" : "Log in"}
          </button>
        </form>

        <div className="auth-footer">
          <span>Don't have an account?</span>
          <Link to="/register">Create one</Link>
        </div>
      </div>
    </div>
  );
}