import React, { useState } from "react";
import { Footer } from "../Components/Footer";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "50px",
          marginBottom: "-4rem",
          background: "#ffffff",
          minHeight: "100vh",
          fontFamily: "Arial, sans-serif",
          color: "#333",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            background: "#444658",
            padding: "30px",
            borderRadius: "24px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
            position: "relative",
            zIndex: "2",
            color: "white",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "15px",
              textAlign: "center",
            }}
          >
            Contact <span style={{ color: "#ffcc00" }}>Us</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Have any questions or need assistance? Fill out the form and we will
            get back to you shortly.
          </p>

          <form
            action="https://formsubmit.co/minahil.rizwan96@gmail.com"
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            {" "}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                borderRadius: "12px",
                border: "none",
                fontSize: "16px",
                outline: "none",
                background: "white",
                color: "#333",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                borderRadius: "12px",
                border: "none",
                fontSize: "16px",
                outline: "none",
                background: "white",
                color: "#333",
              }}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                borderRadius: "12px",
                border: "none",
                fontSize: "16px",
                outline: "none",
                background: "white",
                color: "#333",
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                borderRadius: "12px",
                border: "none",
                fontSize: "16px",
                outline: "none",
                background: "white",
                color: "#333",
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                padding: "12px",
                backgroundColor: "#ffcc00",
                color: "#444658",
                border: "none",
                borderRadius: "12px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
                fontWeight: "bolder",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#e6b800")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#ffcc00")}
            >
              Submit
            </button>
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>

        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            marginTop: "30px",
            zIndex: "1",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {["📧", "📞", "💬", "🛠️"].map((icon, index) => (
              <div
                key={index}
                style={{
                  fontSize: "40px",
                  background: "#444658",
                  color: "white",
                  padding: "20px",
                  borderRadius: "50%",
                  boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
                  animation: `float${index} 2.5s infinite ease-in-out`,
                }}
              >
                {icon}
              </div>
            ))}
          </div>

          <div
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              backgroundColor: "rgba(68, 70, 88, 0.2)",
              borderRadius: "50%",
              top: "20%",
              right: "-30px",
              animation: "bounce 3s infinite ease-in-out",
            }}
          ></div>

          <div
            style={{
              position: "absolute",
              width: "80px",
              height: "80px",
              backgroundColor: "rgba(68, 70, 88, 0.2)",
              borderRadius: "50%",
              bottom: "10%",
              left: "-30px",
              animation: "bounce 4s infinite ease-in-out",
            }}
          ></div>
        </div>
        <style>
          {`
            @keyframes float0 { 0% { transform: translateY(0); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0); } }
            @keyframes float1 { 0% { transform: translateY(0); } 50% { transform: translateY(-12px); } 100% { transform: translateY(0); } }
            @keyframes float2 { 0% { transform: translateY(0); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0); } }
            @keyframes float3 { 0% { transform: translateY(0); } 50% { transform: translateY(-8px); } 100% { transform: translateY(0); } }
            @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
          `}
        </style>
      </div>
      <Footer />
    </>
  );
};
