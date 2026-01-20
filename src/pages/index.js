import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import CampaignInfo from "@/components/home/CampaignInfo";
import RegisterForm from "@/components/home/RegisterForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CampaignInfo />
      <RegisterForm />
    </>
  );
}
