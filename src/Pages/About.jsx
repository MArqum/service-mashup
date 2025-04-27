import React from "react";
import { Footer } from '../Components/Footer';
import { LoginNavbar } from "../Components/LoginNavbar";

export const About = () => {
  return (
    <>
    <LoginNavbar/>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "50px",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif"
      }}>

          <div style={{ width: "100%", maxWidth: "600px", color: "#333" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "15px", color: "#222" }}>
            Why Choose <span style={{ color: "#444658" }}>API Mashup Composer?</span>
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "15px" }}>
            <strong>API Mashup Composer</strong> is an advanced **API integration tool** that enables **developers, businesses, and AI enthusiasts**  
            to seamlessly combine multiple APIs into one powerful workflow.
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "15px" }}>
            Our **AI-driven recommendation engine** ensures that you get the best-matching APIs for your needs,  
            allowing for a **smooth, efficient, and scalable** experience.
          </p>

          <h3 style={{ fontSize: "22px", marginBottom: "10px", color: "#222" }}>🚀 Key Features:</h3>
          <ul style={{ listStyle: "none", padding: "0" }}>
            {[
              "🔍 AI-Powered API Suggestions",
              "⚡ Lightning-Fast API Integrations",
              "🔗 One-Click API Mashups",
              "📊 Real-Time Data Processing",
              "🛡️ Secure & Reliable Connections",
              "📡 Smart Error Handling & Debugging"
            ].map((feature, index) => (
              <li key={index} style={{
                fontSize: "18px", background: "#444658", color: "white",
                padding: "12px", borderRadius: "8px", marginBottom: "8px",
                transition: "transform 0.3s ease-in-out"
              }}
              onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
              onMouseOut={(e) => e.target.style.transform = "scale(1)"}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

               <div style={{
          width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column",
          justifyContent: "center", alignItems: "center", position: "relative", marginTop: "30px"
        }}>
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "15px",
            justifyContent: "center", alignItems: "center"
          }}>
            {["🔗", "⚡", "📊", "🔍"].map((icon, index) => (
              <div key={index} style={{
                fontSize: "40px", background: "#444658", color: "white",
                padding: "20px", borderRadius: "50%",
                animation: `float${index} 2.5s infinite ease-in-out`
              }}>
                {icon}
              </div>
            ))}
          </div>

                   <div style={{
            position: "absolute", width: "80px", height: "80px", backgroundColor: "#444658",
            borderRadius: "50%", top: "20%", right: "-30px", opacity: "0.5",
            animation: "bounce 3s infinite ease-in-out"
          }}></div>

          <div style={{
            position: "absolute", width: "60px", height: "60px", backgroundColor: "#444658",
            borderRadius: "50%", bottom: "20%", left: "-30px", opacity: "0.5",
            animation: "bounce 4s infinite ease-in-out"
          }}></div>
        </div>

               <style>
          {`
            @keyframes float0 {
              0% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0); }
            }

            @keyframes float1 {
              0% { transform: translateY(0); }
              50% { transform: translateY(-12px); }
              100% { transform: translateY(0); }
            }

            @keyframes float2 {
              0% { transform: translateY(0); }
              50% { transform: translateY(-15px); }
              100% { transform: translateY(0); }
            }

            @keyframes float3 {
              0% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
              100% { transform: translateY(0); }
            }

            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-15px); }
            }

            @media (max-width: 768px) {
              div[style*="width: 50%"] {
                width: 100% !important;
                text-align: center;
              }

              div[style*="width: 40%"] {
                width: 100% !important;
                margin-top: 20px;
              }
            }
          `}
        </style>
      </div>

          <Footer />
    </>
  );
};
