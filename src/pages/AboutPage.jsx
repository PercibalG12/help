// AboutPage.jsx

import React from 'react';
import Header from '../components/common/Header';
import AboutSection from '../components/AboutPage/AboutSection';
import ContactForm from '../components/ContactPage/ContactForm';
import Footer from '../components/common/Footer';

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutSection />
      <ContactForm />
      <Footer />
    </>
  );
};

export default AboutPage;
