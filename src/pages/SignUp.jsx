import React from "react";
import { Link } from "react-router-dom";
import AuthButtons from "../components/common/Buttons";

export default function SignUp() {
  // Inline style objects (matching Sign In page)
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
          Create Account
        </h2>

        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <input
            type="text"
            placeholder="Name"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#facc15")}
            onBlur={(e) => (e.target.style.borderColor = "#374151")}
          />
          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#facc15")}
            onBlur={(e) => (e.target.style.borderColor = "#374151")}
          />
          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#facc15")}
            onBlur={(e) => (e.target.style.borderColor = "#374151")}
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
            Sign Up
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ color: "#facc15", fontWeight: "600", textDecoration: "underline" }}
          >
            Sign In
          </Link>
        </p>

        <div style={{ marginTop: "30px" }}>
          <AuthButtons />
        </div>
      </div>
    </div>
  );
}
