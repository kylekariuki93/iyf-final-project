import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthButtons from "../components/common/Buttons";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Inline styles
  const pageContainer = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #1f2937, #374151)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "20px",
  };
  const cardStyle = {
    background: "#111827",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    maxWidth: "400px",
    width: "100%",
    color: "#fff",
  };
  const inputStyle = {
    padding: "12px 16px",
    borderRadius: "12px",
    border: "2px solid #374151",
    outline: "none",
    transition: "all 0.3s",
  };
  const buttonStyle = {
    padding: "12px 0",
    borderRadius: "9999px",
    fontWeight: "700",
    fontSize: "18px",
    background: "linear-gradient(to right, #facc15, #f59e0b)",
    color: "#000",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s",
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("token", data.token);
        setMessage(`Welcome back, ${data.user.name}!`);
        setEmail("");
        setPassword("");
        navigate("/");
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      setMessage("Error connecting to server");
    }
  };

  return (
    <div style={pageContainer}>
      <div style={cardStyle}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
            background: "linear-gradient(to right, #facc15, #f59e0b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Welcome Back
        </h2>

        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#facc15")}
            onBlur={(e) => (e.target.style.borderColor = "#374151")}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#facc15")}
            onBlur={(e) => (e.target.style.borderColor = "#374151")}
            required
          />

          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(250,204,21,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Sign In
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Don’t have an account?{" "}
          <Link to="/signup" style={{ color: "#facc15", fontWeight: "600", textDecoration: "underline" }}>
            Sign Up
          </Link>
        </p>

        <div style={{ marginTop: "30px" }}>
          <AuthButtons />
        </div>

        {message && (
          <p style={{ marginTop: "20px", color: "#facc15", fontWeight: "600", textAlign: "center" }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
