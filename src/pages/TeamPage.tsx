import React from 'react';
import Navbar from '../components/Navbar';
import TeamHero from '../components/TeamHero';
import TeamMembers from '../components/TeamMembers';
import TeamCTA from '../components/TeamCTA';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="snap-start snap-always w-full shrink-0">
        <TeamHero />
      </div>

      <div className="snap-start snap-always w-full shrink-0">
        <TeamMembers />
      </div>

      <div className="snap-start snap-always w-full shrink-0">
        <section className="w-full h-screen flex flex-col snap-center overflow-hidden">
          <TeamCTA />
          <Footer />
        </section>
      </div>
    </>
  );
};

export default TeamPage;
