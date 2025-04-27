import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from './Pages/Home'
import { SignupPage } from "./Pages/SignupPage";
import { Contact } from "./Pages/Contact";
import { About } from "./Pages/About";
import { LoginSignup } from "./Pages/LoginSignup";
import { TermsOfServices } from "./Pages/TermsOfServices";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage/>} />
        <Route path="/home" element={<Home />} />
        <Route path='/LoginSignup' element={<LoginSignup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/termsofservices" element={<TermsOfServices/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
      </Routes>
    </Router> 
    
  );
}

export default App;