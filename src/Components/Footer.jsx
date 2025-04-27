import React from 'react'
import { Box, Typography } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import GavelIcon from '@mui/icons-material/Gavel';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Styled image (hidden on mobile)
const StyledImage = styled.img`
  width: 240px;
  height: 150px;
  margin-top: 2rem;
  margin-left: 2rem;
  
  @media (max-width: 1040px) {
    display: none;
  }
`;

// Container box with responsive padding
const FooterContainer = styled(Box)`
  background-color: #444658;
  color: white;
  margin-top: 2rem;
  padding: 2rem 2rem 2rem 2rem;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'flex-start' },
          flexWrap: 'wrap',
          gap: { xs: '1.5rem', md: '0' }
        }}
      >
        {/* Description Section */}
        <Box sx={{ flex: '1 1 250px', paddingRight: { md: '2rem' } }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: '20px', pb: 1 }}>
            API Mashup Composer
          </Typography>
          <Typography sx={{ fontSize: '16px', textAlign: 'justify' }}>
            Where Data-Driven Insights Meet API Integration for Smarter Development.
          </Typography>
        </Box>

        {/* Links Section */}
        <Box sx={{ flex: '1 1 250px' }}>
          <ul style={{ padding: 0 }}>
            {[
              { to: '/contact', icon: <ContactPageIcon />, text: 'Contact Us' },
              { to: '/about', icon: <InfoIcon />, text: 'About Us' },
              { to: '/termsofservices', icon: <GavelIcon />, text: 'Terms of Services' },
              { to: '/privacypolicy', icon: <PrivacyTipIcon />, text: 'Privacy Policy' }
            ].map(({ to, icon, text }) => (
              <li key={to} style={{ listStyle: 'none', padding: '0.5rem 0' }}>
                <Link
                  to={to}
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '16px'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'lightgray')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'white')}
                >
                  {React.cloneElement(icon, { sx: { fontSize: '18px', mr: 1 } })}
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </Box>

        {/* Logo (Hidden on smaller screens) */}
        <StyledImage src='src/Assets/logo.png' alt='logo' />
      </Box>

      {/* Bottom Text */}
      <Typography sx={{ textAlign: 'center', fontSize: '14px', mt: 3 }}>
        &copy; 2025 API Mashup Composer. All Rights Reserved
      </Typography>
    </FooterContainer>
  )
}
