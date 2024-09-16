import React from 'react';
import Navbar from '../components/Navbar';
import HeadSection from '../components/homeComponent/HeadSection';
import ExplanSection from '../components/homeComponent/ExplanSection';
import FeaturesSection from '../components/homeComponent/FeaturesSection';
import HowItWorksSection from '../components/homeComponent/HowItWorksSection';
import ContactSection from '../components/homeComponent/ContactSection';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeadSection />
      <ExplanSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
