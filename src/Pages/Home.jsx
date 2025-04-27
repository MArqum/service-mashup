import React, { useState, useEffect, useCallback } from "react";
import { FaBars, FaUserCircle, FaSearch, FaFileContract, FaEllipsisV, FaTrash, FaTimes } from "react-icons/fa";
import { Footer } from '../Components/Footer';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from 'axios';
import { debounce } from 'lodash';
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("name");
  const [recentSearches, setRecentSearches] = useState([]);
  const [savedAPIs, setSavedAPIs] = useState([]);
  const [showDropdown, setShowDropdown] = useState(null);
  const [showSavedDropdown, setShowSavedDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedAPI, setSelectedAPI] = useState(null);
  const [apiResults, setApiResults] = useState([]); // Store search results
  const [loading, setLoading] = useState(false); // Handle loading state
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const trendingAPIs = [
    "Chatbot API", "Weather API", "Finance Data API",
    "Stock Market API", "AI Text Generation API",
    "Movie Database API", "E-commerce API"
  ];

  const apiKey = "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";

  const handleAPISelect = (api) => {
    console.log("data of this api", api); // Log the selected API data

    setSelectedAPI(api); // Set the selected API data to state
  };

  const handleCloseModal = () => {
    setIsModalVisible(false); // Close the box when the red cross is clicked
  };

  useEffect(() => {
    // Fetch saved APIs when the component mounts
    if (userId) {
      fetchSavedAPIs(userId);
    }
  }, [userId]);

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) return;

      try {
        const res = await axios.get(`http://localhost:3000/auth/user/${userId}`);
        setUserName(res.data.name); // Assuming your API returns { name: "..." }
      } catch (error) {
        console.error('Error fetching user:', error.response?.data || error.message);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const debouncedSearch = useCallback(
    debounce(async (value) => {
      setLoading(true); // Start loading indicator
      try {
        // Send the search query to your backend
        const response = await axios.post("http://127.0.0.1:5000/recommend", {
          query: value, // Send the search query
        });

        if (response.status === 200) {
          setApiResults(response.data.results); // Update the results in state

          // Add the search query to recent searches
          setRecentSearches((prevSearches) => {
            // Avoid duplicating recent search queries
            const updatedSearches = [value, ...prevSearches.filter((item) => item !== value)];
            if (updatedSearches.length > 5) {
              updatedSearches.pop(); // Limit recent searches to 5 items
            }
            return updatedSearches;
          });
        } else {
          console.error("Error fetching search results:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false); // End loading indicator
      }
    }, 500), // Delay of 500ms for debounce
    []
  );

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value); // Update the search input
    debouncedSearch(value); // Trigger the debounced search function
  };


  const deleteRecentSearch = (index) => {
    setRecentSearches(recentSearches.filter((_, i) => i !== index));
    setShowDropdown(null);
  };

  const saveAPI = async (api) => {
    const userId = localStorage.getItem("userId"); // Get the user ID from localStorage

    if (!userId) {
      console.error("User ID not found in localStorage");
      return;
    }

    const apiData = {
      userId: userId, // Send the user ID
      apiUrl: api.api_url,
      description: api.description,
      name: api.name,
      score: api.score,
    };

    try {
      // Make a POST request to your Nest.js backend to save the API
      const response = await axios.post("http://localhost:3000/saved-apis/save", apiData);

      if (response.status === 201) {
        console.log(`API saved successfully: ${api.name}`);

        // After successful save, fetch updated saved APIs from the backend
        fetchSavedAPIs(userId); // Fetch the updated list of saved APIs
      } else {
        console.error("Failed to save API:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving API:", error);
    }
  };



  const deleteSavedAPI = (index) => {
    setSavedAPIs(savedAPIs.filter((_, i) => i !== index));
    setShowSavedDropdown(null);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    // Remove userId from localStorage
    localStorage.removeItem('userId');
    navigate('/'); // Navigate to the landing page
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const fetchSavedAPIs = async (userId) => {
    try {
      // Make the GET request to fetch saved APIs
      const response = await axios.get(`http://localhost:3000/saved-apis/${userId}`);

      if (response.status === 200) {
        setSavedAPIs(response.data); // Update state with the saved APIs
      } else {
        console.error("Error fetching saved APIs:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching saved APIs:", error);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          minHeight: "100vh",
          backgroundColor: "#f4f4f4",
          fontFamily: "sans-serif",
        }}
      >
        {/* Sidebar or Dropdown Toggle */}
        {isMobile && (
          <div
            style={{
              backgroundColor: "#444658",
              color: "white",
              padding: "15px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2 style={{ fontSize: "20px", margin: 0 }}>API Mashup Composer</h2>
            <FaBars
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ cursor: "pointer", fontSize: "24px" }}
            />
          </div>
        )}

        {/* Sidebar */}
        {(menuOpen || !isMobile) && (
          <aside
            style={{
              width: isMobile ? "100%" : "280px",
              backgroundColor: "#444658",
              color: "white",
              padding: "20px",
              textAlign: "left",
            }}
          >
            {!isMobile && (
              <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>
                API Mashup Composer
              </h2>
            )}

            {/* Recent Searches */}
            <div>
              <h3 style={{ fontSize: "17px", fontWeight: "bold", marginBottom: "10px" }}>
                Recent Searches
              </h3>
              {recentSearches.length > 0 ? (
                recentSearches.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "6px 0",
                      position: "relative",
                    }}
                  >
                    <span>{item}</span>
                    <FaEllipsisV
                      onClick={() =>
                        setShowDropdown(index === showDropdown ? null : index)
                      }
                      style={{ cursor: "pointer" }}
                    />
                    {showDropdown === index && (
                      <div
                        style={{
                          position: "absolute",
                          right: 0,
                          top: "100%",
                          background: "white",
                          color: "black",
                          padding: "5px",
                          borderRadius: "5px",
                          boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                          zIndex: 1000,
                        }}
                      >
                        <div
                          onClick={() => deleteRecentSearch(index)}
                          style={{ cursor: "pointer", padding: "5px" }}
                        >
                          <FaTrash /> Delete
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p>No recent searches</p>
              )}
            </div>

            {/* Trending APIs */}
            <div style={{ marginTop: "25px" }}>
              <h3 style={{ fontSize: "17px", fontWeight: "bold", marginBottom: "10px" }}>
                Trending APIs
              </h3>
              {trendingAPIs.map((api, index) => (
                <div key={index} style={{ padding: "6px 0", cursor: "pointer" }}>
                  {api}
                </div>
              ))}
            </div>

            {/* Saved APIs */}
            <div style={{ marginTop: "23px" }}>
              <h3 style={{ fontSize: "17px", fontWeight: "bold", marginBottom: "10px" }}>
                Saved APIs
              </h3>
              {savedAPIs.length > 0 ? (
                savedAPIs.map((api, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "6px 0",
                      position: "relative",
                    }}
                  >
                    <span>{api.name}</span> {/* Assuming 'name' is a property */}
                    <FaEllipsisV
                      onClick={() =>
                        setShowSavedDropdown(index === showSavedDropdown ? null : index)
                      }
                      style={{ cursor: "pointer" }}
                    />
                    {showSavedDropdown === index && (
                      <div
                        style={{
                          position: "absolute",
                          right: 0,
                          top: "100%",
                          background: "white",
                          color: "black",
                          padding: "5px",
                          borderRadius: "5px",
                          boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                          zIndex: 1000,
                        }}
                      >
                        {/* Delete button */}
                        <div
                          onClick={() => deleteSavedAPI(index)}
                          style={{ cursor: "pointer", padding: "5px" }} // Make it match the button style
                        >
                          <FaTrash /> Delete
                        </div>

                        {/* View Details button */}
                        <div
                          onClick={() => handleAPISelect(api)} // When clicked, update selectedAPI
                          style={{
                            cursor: "pointer",
                            padding: "5px",
                            borderRadius: "15px",
                            color: "red", // Make it match the button style
                          }}
                        >
                          View Details
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p>No saved APIs</p>
              )}
            </div>


            {/* Links */}
            <div style={{ marginTop: "40px" }}>
              <Link
                to="/termsofservices"
                style={{
                  display: "block",
                  marginBottom: "10px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <FaFileContract /> Terms of Services
              </Link>
              <Link to="/privacypolicy" style={{ color: "white", textDecoration: "none" }}>
                <FaFileContract /> Privacy Policy
              </Link>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: isMobile ? "20px 10px" : "40px",
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'center',
              marginBottom: '1rem',
            }}
          >
            <FaUserCircle
              style={{ fontSize: '32px', color: '#444658', cursor: 'pointer' }}
              onClick={toggleDropdown} // Toggle dropdown on icon click
            />
            <span
              style={{
                marginLeft: '12px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
              onClick={toggleDropdown}
            >
              {userName || 'Loading...'}
            </span>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100px', // Adjust this based on your layout
                  right: '170px', // Adjust as needed
                  backgroundColor: '#fff',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  padding: '10px',
                  zIndex: '1000',
                }}
              >
                <div style={{ padding: '8px 0', cursor: 'pointer' }} onClick={() => alert('Reset password option')}>
                  Reset Password
                </div>
                <div
                  style={{ padding: '8px 0', cursor: 'pointer', color: 'red' }}
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>

          <Typography
            sx={{
              fontSize: isMobile ? "24px" : "35px",
              fontWeight: "bolder",
              textAlign: "center",
              margin: "2rem 0",
            }}
          >
            What are you Looking for!
          </Typography>

          {/* Search Section */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem", width: "100%" }}>
            {/* Search bar */}
            <div style={{ display: "flex", alignItems: "center", backgroundColor: "white", padding: "12px", borderRadius: "8px", boxShadow: "0px 0px 8px rgba(0,0,0,0.2)", width: "60%" }}>
              <FaSearch style={{ marginRight: "10px", color: "gray" }} />
              <input
                type="text"
                placeholder={`Search by ${filter}`}
                value={search}
                onChange={handleSearch}
                style={{ width: "100%", border: "none", outline: "none", fontSize: "16px" }}
                onKeyPress={(e) => e.key === "Enter" && debouncedSearch(search)} // Ensure Enter key works too
              />
            </div>

            {/* Filter dropdown */}
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{ padding: "8px", borderRadius: "5px", fontSize: "16px" }}
            >
              <option value="name">Name</option>
              <option value="type">Type</option>
            </select>
          </div>

          {/* Loading state */}
          {loading && <div>Loading...</div>}

          {/* Displaying API Results in a Dropdown */}
          {Array.isArray(apiResults) && apiResults.length > 0 && search && ( // Check if search is not empty
            <div
              style={{
                maxHeight: "200px",
                overflowY: "hidden",
                marginTop: "5px",
                backgroundColor: "white",
                boxShadow: "0px 10px 10px rgba(0,0,0,0.1)",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {apiResults.map((result, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  <div>{result.name}</div>
                  <div>{result.api_url}</div>
                  <button
                    onClick={() => saveAPI(result)} // Pass the whole result object
                    style={{
                      backgroundColor: "#007bff",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Save
                  </button>
                </div>
              ))}
            </div>
          )}


          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "3rem 0",
              animation: "fadeIn 1.5s ease-out",
            }}
          >
            {isModalVisible && selectedAPI && (
              <div
                style={{
                  width: "100%",
                  maxWidth: "42rem", // 2xl max-width
                  backgroundColor: "white",
                  borderRadius: "1rem",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                  padding: "2.5rem",
                  border: "1px solid #e2e8f0", // Gray border
                  transform: "translateY(0)",
                  animation: "float 3s ease-in-out infinite",
                  transition: "transform 0.3s ease",
                  position: "relative", // To position the close button
                }}
              >

                <FaTimes
                  onClick={handleCloseModal}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    cursor: "pointer",
                    color: "red",
                    fontSize: "20px",
                  }}
                />
                <h2
                  style={{
                    fontSize: "2.25rem", // 4xl font-size
                    fontWeight: "bold",
                    color: "#2d3748", // Gray 800
                    marginBottom: "2rem",
                    textAlign: "center",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {selectedAPI.name} Details
                </h2>

                <div style={{ marginBottom: "1.5rem" }}>
                  <div>
                    <p
                      style={{
                        color: "#718096", // Gray 500
                        fontSize: "0.75rem", // XS font size
                        fontWeight: "600", // Semi-bold
                        textTransform: "uppercase",
                        marginBottom: "0.25rem",
                      }}
                    >
                      API Name
                    </p>
                    <p
                      style={{
                        fontSize: "1.125rem", // LG font size
                        fontWeight: "600", // Semi-bold
                        color: "#4a5568", // Gray 700
                        marginBottom: "1rem",
                      }}
                    >
                      {selectedAPI.name}
                    </p>
                  </div>

                  <div>
                    <p
                      style={{
                        color: "#718096", // Gray 500
                        fontSize: "0.75rem", // XS font size
                        fontWeight: "600", // Semi-bold
                        textTransform: "uppercase",
                        marginBottom: "0.25rem",
                      }}
                    >
                      API URL
                    </p>
                    <p
                      style={{
                        fontSize: "1.125rem", // LG font size
                        fontWeight: "600", // Semi-bold
                        color: "#3182ce", // Blue 600
                        wordBreak: "break-word",
                        marginBottom: "1rem",
                      }}
                    >
                      {selectedAPI.apiUrl}
                    </p>
                  </div>

                  <div>
                    <p
                      style={{
                        color: "#718096", // Gray 500
                        fontSize: "0.75rem", // XS font size
                        fontWeight: "600", // Semi-bold
                        textTransform: "uppercase",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Description
                    </p>
                    <p
                      style={{
                        fontSize: "1.125rem", // LG font size
                        fontWeight: "600", // Semi-bold
                        color: "#3182ce", // Blue 600
                        wordBreak: "break-word",
                        marginBottom: "1rem",
                      }}
                    >
                      {selectedAPI.description}
                    </p>
                  </div>

                  <div>
                    <p
                      style={{
                        color: "#718096", // Gray 500
                        fontSize: "0.75rem", // XS font size
                        fontWeight: "600", // Semi-bold
                        textTransform: "uppercase",
                        marginBottom: "0.25rem",
                      }}
                    >
                      API Score
                    </p>
                    <p
                      style={{
                        fontSize: "1.125rem", // LG font size
                        fontWeight: "600", // Semi-bold
                        color: "#3182ce", // Blue 600
                        wordBreak: "break-word",
                        marginBottom: "1rem",
                      }}
                    >
                      {selectedAPI.score}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );

};
