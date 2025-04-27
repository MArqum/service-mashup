import React, { useEffect, useState } from "react";
import { Footer } from "../Components/Footer";
import { Link } from "react-router-dom";
import { LoginNavbar } from "../Components/LoginNavbar";

export const PrivacyPolicy = () => {
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
          Privacy <span style={{ color: "#444658", fontWeight: "bold" }}>Policy</span>
        </h2>
        <p style={{
          textAlign: "center",
          fontSize: "15px",
          color: "#666",
          marginBottom: "20px",
        }}>
          Your privacy is important to us. This policy explains how we handle your data.
        </p>

        <div style={{ borderBottom: "3px solid #444658", width: "50px", margin: "0 auto 20px" }}></div>

              {[
          {
            title: "1. Information We Collect",
            content: "We may collect personal information such as your name, email address, and usage data when you interact with our platform.",
          },
          {
            title: "2. How We Use Your Data",
            content: "Your information is used to improve our services, provide personalized recommendations, and enhance user experience.",
          },
          {
            title: "3. Data Protection & Security",
            content: "We implement strong security measures to protect your personal data from unauthorized access, loss, or misuse.",
          },
          {
            title: "4. Cookies & Tracking Technologies",
            content: "We use cookies to analyze site traffic, enhance functionality, and deliver personalized content.",
          },
          {
            title: "5. Third-Party Services",
            content: "We may work with third-party services to provide enhanced features, but we ensure they adhere to privacy standards.",
          },
          {
            title: "6. Your Rights",
            content: "You have the right to access, update, or delete your personal data at any time. Contact us for any requests.",
          },
          {
            title: "7. Policy Updates",
            content: "We may update this Privacy Policy periodically. Any changes will be posted here for transparency.",
          },
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
          Have privacy concerns? <span style={{ color: "gold", cursor: "pointer" }}>
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
