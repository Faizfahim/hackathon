import React from "react";
import Banner from "@/components/Banner/banner";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import Section_1 from "@/components/Section/section_1";
import Section_2 from "@/components/Section/section_2";
import Section_3 from "@/components/Section/section_3";
import Section_4 from "@/components/Section/section_4";
import Section_5 from "@/components/Section/section_5";



export default function Home() {
  return (
    <div>
        <Header />
        <Banner />
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Section_5 />

        <Footer />
    </div>
  );
}
