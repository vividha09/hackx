import React from "react";
import {useEffect} from "react";

import heroImg01 from "../assets/images/hero-img01.png";
// import heroImg01 from "../assets/images/hospimg05.jpg";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import faqImg from "../assets/images/faq-img.png";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
import alanBtn from "@alan-ai/alan-sdk-web";

const Home = () => {

  useEffect(() => {
    alanBtn({
      key: "ecc5936429f8831a0a3f3bd73ff973822e956eca572e1d8b807a3e2338fdd0dc/stage",
    });
  }, []);
  return (
    
    <>
    
      {/* Hero Section */}
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container flex sm:flex-col lg:flex-row gap-[90px] items-center justify-between">
          {/* Hero content */}
          <div>
            <div className="lg:w-[570px]">
              <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                We help patients live a healthy, longer life.
              </h1>
              <p className="text_para" style={{paddingBottom: "50px"}}>
              AI-enabled triage systems are transforming the healthcare industry by leveraging artificial intelligence and advanced algorithms to streamline patient assessment and improve healthcare outcomes. These systems serve as invaluable tools for healthcare providers, offering faster, more accurate assessments, and enhancing patient care.
              </p>
              {/* <button className="btn" href={"/doctors"}>Locate a Hospital</button> */}
              <Link to="/doctors" className="btn">
            Locate a Hospital
          </Link>
            </div>

            {/* Hero Counter */}
            <div className="mt-[30px] lg:mt-[70px] flex flex-col sm:items-center lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                  30+
                </h2>
                <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                <p className="text_para">Years of Experience</p>
              </div>

              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                  1000+
                </h2>
                <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                <p className="text_para">Hospital Location</p>
              </div>

              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                  100%
                </h2>
                <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                <p className="text_para">Patient Satisfaction</p>
              </div>
            </div>
          </div>
          {/* Hero content */}
          <div className="flex gap-[30px] justify-center items-center">
            <div>
              <img className="w-full" src={heroImg01} alt="" style={{borderRadius: "10px"}}/>
            </div>
            <div className="mt-[30px]">
              <img src={heroImg02} alt="" className="w-full mb-[30px]"/>
              <img src={heroImg03} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt=""></img>
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Hospital
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From the clinic to the hospital
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt=""></img>
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From the lab to the clinic
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt=""></img>
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From the lab to the clinic
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <About /> */}


      {/* Services section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto ">
            <h2 className="heading text-center">Our Key Features</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.{" "}
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/* Services section end */}
      {/* Feature section */}
      <section>
        <div className="container flex items-center justify-between flex-col lg:flex-row">
          {/* Feature content */}
          <div className="xl:w-[670px]">
            <h2 className="heading">
              {/* Get virtual treatment <br /> anytime. */}
              Benefits
            </h2>
            <ul className="pl-4">
              <li className="text_para">
                1. Timely Care: AI triage systems expedite patient assessment, reducing waiting times and ensuring that critical cases are addressed promptly.
              </li>
              <li className="text_para">
                2. Improved Accuracy: AI algorithms enhance diagnostic accuracy, minimizing misdiagnoses and improving treatment outcomes.
              </li>
              <li className="text_para">
                3. Resource Optimization: Hospitals can allocate resources more efficiently, reducing overcrowding and ensuring that healthcare professionals focus on patients who need immediate attention.
              </li>
              <li className="text_para">
                4. Patient Empowerment: Patients gain access to valuable healthcare information and guidance, empowering them to make informed decisions about their health.
              </li>
            </ul>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>

          {/* Feature img */}
          <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={featureImg} alt=""></img>
            {/* <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
              <div className="flex items-center justify-between gap-[6px] lg:gap-3">
                <div className="flex items-center">
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                    Tue, 24
                  </p>
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                    10:00AM
                  </p>
                </div>
                <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                  <img src={videoIcon} alt=""></img>
                </span>
              </div>

              <div className="w-[65px] lg:w-[96px] bg-[#CCD0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                Consultaion
              </div>

              <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px] ">
                <img src={avatarIcon} alt="" />
                <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                  Wayne Collins
                </h4>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* Feature section end */}
      {/* Our great doctors */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Famous Hospital</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* Our great doctors */}
      {/* faq section */}
      <section>
        <div className="container flex justify-between gap-[50px] lg:gap-0">
          <div className="w-1/2 hidden md:block">
            <img src={faqImg} alt=""></img>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="heading">Most questions by our Users</h2>
            <FaqList />
          </div>
        </div>
      </section>
      {/* faq section end */}
      {/* testimonial */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our User say</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* testimonial end */}
    </>
  );
};

export default Home;
