import React from "react";
import { useNavigate } from "react-router-dom";
import LSPU_LOGO from '../../public/lspu_logo.png';
import CCS_LOGO from '../../public/ccs_logo.png';

const Home = ({ onLoginClick }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden", // Prevent scrolling
        fontFamily: "'Roboto', sans-serif" // Set the Roboto font globally here
      }}
    >
      <header
        style={{
          flex: "0 1 auto",
          textAlign: "center",
          padding: "0 20px", // Reduced padding to avoid overflow
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        {/* Add logos to both sides */}
        <img
          src={LSPU_LOGO}
          alt="Left Logo"
          style={{ height: "80px" }}
        />
        <h1
          style={{
            flexGrow: 1,
            textAlign: "center",
            fontSize: "36px",
            fontWeight: "bold", // Super bold text
            margin: "0" // Remove default margin
          }}
        >
          Laguna State Polytechnic University
        </h1>
        <img
          src={CCS_LOGO}
          alt="Right Logo"
          style={{ height: "80px" }}
        />
      </header>

      <main
        style={{
          flex: "1 0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <h2
          style={{
            color: "#034FAF",
            fontWeight: "900", // Super bold text
            fontSize: "24px",
            margin: "0" // Remove default margin
          }}
        >
          AI-Powered Meeting Assistant
        </h2>
      </main>
    </div>
  );
};

const SplashScreen = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the dashboard route
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden", // Prevent scrolling
        fontFamily: "'Roboto', sans-serif" // Set the Roboto font globally here
      }}
    >
      <Home onLoginClick={handleLoginClick} />

      {/* Inline CSS for .gradient-line */}
      <style>
        {`
          .gradient-line {
            width: 100%;
            height: 120px;
            background: linear-gradient(to right, #57D7E2, #034FAF);
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: absolute;
            bottom: 0;
            padding: 0; // Remove padding to avoid overflow
            box-sizing: border-box;
          }
          
          .gradient-line button {
            padding: 15px 30px;
            border-radius: 20px;
            border: 2px solid #000000;
            background-color: white;
            color: #034FAF;
            font-weight: 900; /* Super bold text */
            font-size: 16px;
            cursor: pointer;
            margin: 10px;
            transition: all 0.3s ease;
          }
          
          .gradient-line button:hover {
            background-color: #57D7E2;
            color: white;
          }
        `}
      </style>

      <div className="gradient-line">
        <button>DEMO</button>
        <button>ABOUT</button>
        <button>SIGN UP</button>
        <button onClick={handleLoginClick}>LOGIN</button>
      </div>
    </div>
  );
};

export default SplashScreen;
