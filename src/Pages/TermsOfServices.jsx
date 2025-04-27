import React, { useEffect, useState } from "react";
import { Footer } from "../Components/Footer";
import { Link } from "react-router-dom";
import { LoginNavbar } from "../Components/LoginNavbar";

export const TermsOfServices = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  return (
    <>
    <LoginNavbar/>
      <div style={{
        maxWidth: "800px",
        margin: "50px auto",
        padding: "30px",
        background: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
        position: "relative",
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}>
        <h2 style={{
          fontSize: "30px",
          textAlign: "center",
          color: "#444658",
          marginBottom: "10px",
        }}>
          Terms of <span style={{ color: "#444658", fontWeight: "bold" }}>Service</span>
        </h2>
        <p style={{
          textAlign: "center",
          fontSize: "15px",
          color: "#666",
          marginBottom: "20px",
        }}>
          By using our platform, you agree to the following terms and conditions.
        </p>

        <div style={{ borderBottom: "3px solid #444658", width: "50px", margin: "0 auto 20px" }}></div>

      
        {[
          { title: "1. Acceptance of Terms", content: "By accessing our services, you agree to comply with these terms." },
          { title: "2. User Responsibilities", content: "Users must provide accurate information and comply with regulations." },
          { title: "3. API Usage Policy", content: "Unauthorized use, scraping, or abuse of APIs is strictly prohibited." },
          { title: "4. Privacy & Security", content: "We implement security measures to protect user data and privacy." },
          { title: "5. Service Availability", content: "We strive for uptime but may experience occasional maintenance downtime." },
          { title: "6. Account Termination", content: "Accounts violating terms may be suspended or terminated." },
          { title: "7. Limitation of Liability", content: "We are not responsible for damages resulting from service use." },
          { title: "8. Changes to Terms", content: "We may update these terms periodically. Continued use means acceptance." },
        ].map((section, index) => (
          <div key={index} style={{
            marginBottom: "15px",
            padding: "12px",
            background: "#444658",
            borderRadius: "6px",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(15px)",
            transition: `opacity 0.5s ${0.1 * index}s ease-out, transform 0.5s ${0.1 * index}s ease-out`,
          }}>
            <h3 style={{ fontSize: "18px", color: "#ffffff", marginBottom: "5px" }}>{section.title}</h3>
            <p style={{ fontSize: "14px", color: "#f1f1f1" }}>{section.content}</p>
          </div>
        ))}

     
        <div style={{
          textAlign: "center",
          marginTop: "30px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#444658",
        }}>
          Have questions? <span style={{ color: "yellow", cursor: "pointer" }}>
            <Link to='/contact' style={{ textDecoration: 'none', color: "inherit" }}> Contact Us</Link>
          </span>
        </div>

      
        <div style={{
          position: "absolute",
          width: "80px",
          height: "80px",
          backgroundColor: "rgba(68, 70, 88, 0.15)",
          borderRadius: "50%",
          top: "8%",
          right: "-20px",
          animation: "float 3s infinite ease-in-out",
        }}></div>

        <div style={{
          position: "absolute",
          width: "60px",
          height: "60px",
          backgroundColor: "rgba(68, 70, 88, 0.15)",
          borderRadius: "50%",
          bottom: "8%",
          left: "-20px",
          animation: "float 4s infinite ease-in-out",
        }}></div>

        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }
          `}
        </style>
      </div>

      <Footer />
    </>
  );
};
