import React from 'react';
import Navbar from '../components/Navbar';
import TeamHero from '../components/TeamHero';
import TeamMembers from '../components/TeamMembers';
import TeamCTA from '../components/TeamCTA';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans relative overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <TeamHero />

      <TeamMembers />

      <section className="w-full h-screen flex flex-col snap-center overflow-hidden">
        <TeamCTA />
        <Footer />
      </section>
    </div>
  );
};

export default TeamPage;
