import Image from "next/image";
import Footer from '@/components/Footer'; 
import HeroSection from '@/components/HeroSection';
import Navibar from '@/components/Navibar';
import CreatevSection from '@/components/CreatevSection';
import tools from '@/components/Tools';
import Tools from "@/components/Tools";
import ClientPitching from "@/components/ClientPitching";
import HiringSection from "@/components/HiringSection";
import Business from "@/components/Business";
import Feedback from "@/components/Feedback";
import Advantage from "@/components/Advantage"
import Portfolio from "@/components/Portfolio"
import Intern from "@/components/Intern"
import Model from "@/components/Model"
export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '3rem', color: '#0070f3' }}></h1>
      <p style={{ fontSize: '1.5rem', color: '#333' }}>
      </p>
      <Navibar/>
      <HeroSection />
      <Advantage/>
      <Tools/>
      <CreatevSection />
      <Portfolio/>
      <Intern/>
      <ClientPitching/>
      <Business/>
      <Model/>
      <Feedback/>
      <HiringSection/>
      <Footer /> 
       {/* Properly calling Footer component */}
    </div>
  );
}
