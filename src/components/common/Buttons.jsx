import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function AuthButtons() {
  const location = useLocation();

  // Common button style
  const baseButton = {
    padding: "12px 48px",
    borderRadius: "9999px",
    fontWeight: "700",
    fontSize: "18px",
    transition: "all 0.3s ease",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    margin: "0 10px",
    textAlign: "center",
  };

  // Sign Up button style
  const signUpStyle =
    location.pathname === "/signup"
      ? {
          ...baseButton,
          background: "linear-gradient(to right, #facc15, #f59e0b)",
          color: "#000",
          boxShadow: "0 8px 20px rgba(250, 204, 21, 0.5)",
          transform: "scale(1.05)",
        }
      : {
          ...baseButton,
          background: "linear-gradient(to right, #fde68a, #fcd34d)",
          color: "#000",
        };

  // Log In button style
  const logInStyle =
    location.pathname === "/login"
      ? {
          ...baseButton,
          background: "linear-gradient(to right, #374151, #1f2937)",
          color: "#fff",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
          transform: "scale(1.05)",
        }
      : {
          ...baseButton,
          background: "linear-gradient(to right, #4b5563, #374151)",
          color: "#fff",
        };

  // Hover effect handlers
  const handleHover = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.4)";
  };
  const handleLeave = (e, isSignUp) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow =
      isSignUp && location.pathname !== "/signup"
        ? "none"
        : !isSignUp && location.pathname !== "/login"
        ? "none"
        : e.currentTarget.style.boxShadow;
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <Link
        to="/signup"
        style={signUpStyle}
        onMouseEnter={handleHover}
        onMouseLeave={(e) => handleLeave(e, true)}
      >
        Sign Up
      </Link>

      <Link
        to="/login"
        style={logInStyle}
        onMouseEnter={handleHover}
        onMouseLeave={(e) => handleLeave(e, false)}
      >
        Log In
      </Link>
    </div>
  );
}
