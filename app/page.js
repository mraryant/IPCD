'use client'
import About from "@/components/home/About";
import Hero from "../components/home/Hero";
import Image from "next/image";
import WhayChoose from "@/components/home/WhayChoose";
import Contract from "@/components/home/Contract";
import Usecase from "@/components/home/Usecase";
import Roadmap from "@/components/home/Roadmap";
import Tokenomics from "@/components/home/Tokenomics";// it is inside the roadmap 
import Listing from "@/components/home/Listing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhayChoose />
      <Contract />
      <Usecase />
      <Roadmap />
      <Footer />


    </>
  );
}
