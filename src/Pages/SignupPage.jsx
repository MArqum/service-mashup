import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Footer } from '../Components/Footer';
import { LoginNavbar } from '../Components/LoginNavbar';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StyledImage = styled.img`
  width: 45%;
  height: auto;
  max-width: 100%;
  margin-top: 2rem;
  display: block;
  margin: 2rem 0 0 2rem;

  @media (max-width: 1040px) {
    width: 80%;
    height: auto;
    margin: 1rem auto;
  }
`;

export const SignupPage = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false, // Trigger only once when the section comes into view
    threshold: 0.1, // Trigger when 10% of the section is in view
  });
  return (
    <div>
      <LoginNavbar />
      <Box sx={{
        display: 'flex',
        backgroundColor: '#444658',
        width: '100%',
        height: '90vh',
        marginTop: '4rem',
        '@media(max-width:600px)': { display: 'grid', flexDirection: 'column', height: '110vh' },
        '@media(min-width:600px) and (max-width:1080px)': { display: 'grid', flexDirection: 'column', height: '85vh' },
        '@media(min-width:1080px) and (max-width:1200px)': { height: '97vh' }
      }}>
        <Box>
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 1, y: 0 }} // Set opacity to 1 and y to 0 initially
            animate={{ opacity: inView ? 1 : 1, y: inView ? 0 : 0 }} // Keep opacity 1 and y 0 after animation
            transition={{ duration: 0.5 }}
          >
            <Typography
              color='white'
              textAlign={'left'}
              sx={{
                marginTop: '4.5rem',
                marginLeft: '2rem',
                marginRight: '0.4rem',
                fontSize: '45px',
                fontWeight: 'bolder',
                paddingRight: '1rem',
                '@media(max-width:1040px)': { marginLeft: '2rem', fontSize: '40px', marginRight: '1rem', marginTop: '2rem' }
              }}
            >
              Data Driven Services Mashup Composer
            </Typography>
          </motion.div>
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 1, y: 0 }} // Set opacity to 1 and y to 0 initially
            animate={{ opacity: inView ? 1 : 1, y: inView ? 0 : 0 }} // Keep opacity 1 and y 0 after animation
            transition={{ duration: 0.5 }}
          >
            <Typography
              color='white'
              textAlign={'left'}
              sx={{
                marginTop: '1.5rem',
                marginLeft: '2rem',
                marginRight: '0.4rem',
                fontSize: '18px',
                justifyContent: 'center',
                paddingRight: '2rem',
                textAlign: 'justify',
                '@media(max-width:1040px)': { marginLeft: '2rem', paddingRight: '1rem', marginRight: '1rem' }
              }}
            >
              Your development needs and the vast world of Web APIs converge seamlessly. Harness our lightweight recommendation system to discover and integrate precisely the APIs you require—faster, smarter, and hassle-free. Explore our platform to drive innovation, streamline projects, and elevate your software.
            </Typography>
          </motion.div>
          <Link to="./LoginSignup">
            <motion.button
              className="unlock_suggestions"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Unlock Smart Suggestions
            </motion.button>
          </Link>
        </Box>
        <Box sx={{ '@media(max-width:1120px)': { display: 'none' } }}>
          <motion.img
            src='src/Assets/Api img.jpg'
            alt='apiimg1'
            style={{ height: "70vh", width: '80vh', marginTop: '4rem', marginRight: '2rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </Box>
      </Box>
      <Box>
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.75 }}
        >
          <Typography sx={{
            textAlign: 'center', color: 'black', marginTop: '3rem', fontSize: '40px', fontWeight: 'bolder'
          }}>
            Elevate your workflow with Data-Driven API integration.
          </Typography>
        </motion.div>
        <Box sx={{
          display: 'flex', marginTop: '3rem', '@media(max-width:1040px)': { display: "flex", flexDirection: 'column' }
        }}>
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.75 }}
          >
            <Typography sx={{
              fontSize: '18px', textAlign: 'left', color: 'black', textAlign: 'justify', '@media(min-width:1040px)': { marginRight: "1.5rem" }
            }}>
              Welcome to our Data-Driven Services Mashup Composer, where we bridge the gap between your development needs and the vast world of Web APIs. By fusing modern technology with a fresh, lightweight recommendation approach, we empower you to discover and integrate precisely the APIs you need—quickly, efficiently, and without the usual hassle of rigid keyword searches. Whether you’re mapping out a new application, exploring video or photo functionalities, or simply looking for innovative ways to streamline your workflow, our system ensures you find the best fit for your project. We invite you to explore our platform, learn about our cutting-edge methods, and see how this seamless, adaptable tool can save you time and effort while positioning your software solutions at the forefront of technological progress. Dive in and let us help you create smarter, faster, and more impactful applications.
            </Typography>
          </motion.div>
          <StyledImage
            src='src/Assets/API mashup.png'
            alt="api mashup composer for developers"
            style={{ width: '330px', height: '300px', marginTop: '-0.7rem', borderRadius: '100%' }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          />
        </Box>
      </Box>
      <Box sx={{ backgroundColor: '#444658', width: '100%', height: 'auto' }}>
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.75 }}
        >
          <Typography sx={{
            textAlign: 'justify', margin: '1em 2rem', paddingTop: '2rem', color: 'white', fontSize: '30px', fontWeight: 'bolder',
            marginTop: '3rem', '@media(max-width:900px)': { fontSize: "23px" }
          }}>
            "Empowering developers to unlock the full potential of web APIs—build, innovate, and transform ideas into impactful solutions."
          </Typography>
        </motion.div>
        <Link to='/home'>
          <motion.button
            style={{
              color: 'white', marginBottom: '2rem', backgroundColor: 'red', borderRadius: '5px', width: '135px', height: '52px',
              fontSize: '17px', border: 'none', fontWeight: "bold"
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseOver={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = 'black' }}
            onMouseOut={(e) => { e.target.style.backgroundColor = 'red'; e.target.style.color = 'white' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Explore Now
          </motion.button>
        </Link>
      </Box>

      <div style={{
        display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px", flexWrap: "wrap"
      }}>
        <motion.div
          style={{
            backgroundColor: "#444658", color: "white", padding: "20px", borderRadius: "10px", textAlign: "center", width: "300px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)", transition: "transform 0.3s", cursor: "pointer"
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🔍 Smart API Recommendations</h3>
          <p style={{ fontSize: "14px", opacity: "0.8" }}>
            Get AI-powered API suggestions based on your project requirements, ensuring seamless integration.
          </p>
        </motion.div>

        <motion.div
          style={{
            backgroundColor: "#444658", color: "white", padding: "20px", borderRadius: "10px", textAlign: "center", width: "300px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)", transition: "transform 0.3s", cursor: "pointer"
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🔗 Seamless API Integration</h3>
          <p style={{ fontSize: "14px", opacity: "0.8" }}>
            Effortlessly connect and combine multiple APIs with our user-friendly mashup composer.
          </p>
        </motion.div>

        <motion.div
          style={{
            backgroundColor: "#444658", color: "white", padding: "20px", borderRadius: "10px", textAlign: "center", width: "300px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)", transition: "transform 0.3s", cursor: "pointer"
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚡ Real-time Data Fetching</h3>
          <p style={{ fontSize: "14px", opacity: "0.8" }}>
            Instantly retrieve, process, and display API data without delays, boosting efficiency.
          </p>
        </motion.div>
      </div>

      <Footer />

    </div>
  );
};
