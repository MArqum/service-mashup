import { Box } from "@mui/material";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Use react-spring for animation
  const slideIn = useSpring({
    opacity: action === "Login" ? 1 : 0,
    transform: action === "Login" ? "translateX(0)" : "translateX(100%)",
    config: { tension: 220, friction: 120 },
  });

  const slideOut = useSpring({
    opacity: action === "SignUp" ? 1 : 0,
    transform: action === "SignUp" ? "translateX(0)" : "translateX(-100%)",
    config: { tension: 220, friction: 120 },
  });

  const handleSubmit = async () => {
    try {
      if (action === "Login") {
        const res = await axios.post("http://localhost:3000/auth/login", {
          email,
          password,
        });

        if (res.data && res.data._id) {
          console.log("Login success:", res.data);

          // Save user id to localStorage
          localStorage.setItem("userId", res.data._id);

          navigate("/home"); // Navigate only if user is authenticated
        } else {
          console.error("Login failed: Invalid response");
          // Optionally show error message to user
        }
      } else {
        const res = await axios.post("http://localhost:3000/auth/signup", {
          name,
          email,
          password,
        });

        if (res.data && res.data._id) {
          console.log("Signup success:", res.data);

          // Save user id to localStorage
          localStorage.setItem("userId", res.data._id);

          navigate("/home"); // Navigate only if signup was successful
        } else {
          console.error("Signup failed: Invalid response");
          // Optionally show error message to user
        }
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Something went wrong";

      // Reset previous errors
      setErrors({ name: "", email: "", password: "" });

      if (action === "Login") {
        if (errorMsg.includes("email")) {
          setErrors((prev) => ({ ...prev, email: errorMsg }));
        } else if (errorMsg.includes("password")) {
          setErrors((prev) => ({ ...prev, password: errorMsg }));
        } else {
          setErrors((prev) => ({
            ...prev,
            email: errorMsg,
            password: errorMsg,
          }));
        }
      } else {
        if (errorMsg.includes("name")) {
          setErrors((prev) => ({ ...prev, name: errorMsg }));
        }
        if (errorMsg.includes("email")) {
          setErrors((prev) => ({ ...prev, email: errorMsg }));
        }
        if (errorMsg.includes("password")) {
          setErrors((prev) => ({ ...prev, password: errorMsg }));
        }
      }
    }
  };

  return (
    <Box sx={{ backgroundColor: "#444658", py: "1rem", minHeight: "100vh" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            mt: "34px",
            mb: "27px",
            pt: "30px",
            px: "20px",
            width: {
              xs: "90%",
              sm: "400px",
              md: "410px",
            },
            borderRadius: "12px",
            boxShadow: 3,
          }}
        >
          <Box
            sx={{ textAlign: "center", fontSize: "39px", fontWeight: "bold" }}
          >
            {action}
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              mt: "28px",
              mb: "20px",
              flexWrap: "wrap",
            }}
          >
            <Box
              onClick={() => setAction("Login")}
              sx={{
                width: "140px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50px",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
                backgroundColor: action === "Login" ? "#eaeaea" : "#444658",
                color: action === "Login" ? "black" : "#fff",
              }}
            >
              Login
            </Box>
            <Box
              onClick={() => setAction("SignUp")}
              sx={{
                width: "140px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50px",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
                backgroundColor: action === "SignUp" ? "#eaeaea" : "#444658",
                color: action === "SignUp" ? "black" : "#fff",
              }}
            >
              SignUp
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <animated.div style={slideIn}>
              {action === "Login" && (
                <>
                  <Box sx={inputStyle}>
                    <EmailIcon sx={iconStyle} />
                    <input
                      placeholder="Email"
                      type="email"
                      style={inputFieldStyle}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Box>
                  {errors.email && (
                    <Box
                      sx={{
                        color: "red",
                        fontSize: "12px",
                        ml: "20px",
                        mt: "5px",
                      }}
                    >
                      {errors.email}
                    </Box>
                  )}

                  <Box sx={inputStyle}>
                    <LockIcon sx={iconStyle} />
                    <input
                      placeholder="Password"
                      type="password"
                      style={inputFieldStyle}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Box>
                  {errors.password && (
                    <Box
                      sx={{
                        color: "red",
                        fontSize: "12px",
                        ml: "20px",
                        mt: "-10px",
                      }}
                    >
                      {errors.password}
                    </Box>
                  )}
                </>
              )}
            </animated.div>

            <animated.div style={slideOut}>
              {action === "SignUp" && (
                <>
                  <Box sx={inputStyle}>
                    <PersonIcon sx={iconStyle} />
                    <input
                      placeholder="Name"
                      type="text"
                      style={inputFieldStyle}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Box>
                  {errors.name && (
                    <Box
                      sx={{
                        color: "red",
                        fontSize: "12px",
                        ml: "20px",
                        mt: "-10px",
                      }}
                    >
                      {errors.name}
                    </Box>
                  )}
                  <Box sx={inputStyle}>
                    <EmailIcon sx={iconStyle} />
                    <input
                      placeholder="Email"
                      type="email"
                      style={inputFieldStyle}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Box>
                  {errors.email && (
                    <Box
                      sx={{
                        color: "red",
                        fontSize: "12px",
                        ml: "20px",
                        mt: "5px",
                      }}
                    >
                      {errors.email}
                    </Box>
                  )}
                  <Box sx={inputStyle}>
                    <LockIcon sx={iconStyle} />
                    <input
                      placeholder="Password"
                      type="password"
                      style={inputFieldStyle}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Box>
                  {errors.password && (
                    <Box
                      sx={{
                        color: "red",
                        fontSize: "12px",
                        ml: "20px",
                        mt: "-10px",
                      }}
                    >
                      {errors.password}
                    </Box>
                  )}
                </>
              )}
            </animated.div>
          </Box>

          {action === "Login" && (
            <Box
              sx={{
                mt: "20px",
                fontSize: "14px",
                color: "#797979",
                textAlign: "center",
              }}
            >
              Haven't Registered Yet?{" "}
              <button
                style={{
                  background: "none",
                  color: "#4c00b4",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                SignUp!
              </button>
            </Box>
          )}

          <Box sx={{ textAlign: "center", mt: "20px", mb: "25px" }}>
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                width: "150px",
                height: "47px",
                color: "#fff",
                backgroundColor: "#444658",
                borderRadius: "55px",
                fontSize: "17px",
                fontWeight: "650",
                cursor: "pointer",
                border: "none",
                outline: "none",
              }}
              onClick={handleSubmit}
            >
              Submit <ArrowForwardIcon />
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const inputStyle = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: "380px",
  height: "60px",
  backgroundColor: "#eaeaea",
  borderRadius: "6px",
  margin: "10px auto",
};

const iconStyle = {
  marginLeft: "20px",
  marginRight: "20px",
  fontSize: "28px",
};

const inputFieldStyle = {
  height: "50px",
  width: "100%",
  background: "transparent",
  border: "none",
  outline: "none",
  color: "#797979",
  fontSize: "16px",
};
