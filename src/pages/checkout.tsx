import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/Partner";
import GetInTouch from "@/components/GetInTouch";
import Main_Image from "@/components/Main_Image";
import Tyre_Info_first from "@/svg/Tyre_Infor_first";
import Tyre_Infor_second from "@/svg/Tyre_Infor_second";
import Tyre_Infor_third from "@/svg/Tyre_Infor_third";
import Tyre_22 from "../../public/image/tyre(22).png"
import Product_detail from "../../public/image/product_detail.png"
import { SetStateAction, useState } from "react";
import { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation } from "swiper/modules";
import { Thumbs } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import Dfacebook from "@/svg/Dfacebook";
import Dinstagram from "@/svg/Dinstagram";
import Dlinkedin from "@/svg/Dlinkedin";
import Dtwitter from "@/svg/Dtwitter";
import Dyoutube from "@/svg/Dyoutube";

const inter = Inter({ subsets: ["latin"] });

export default function Pricing() {
    // Swiper.use([Navigation, Thumbs]);  
    //     useEffect(() => {  
    //           const swiperThumbs = new Swiper('.nav-for-slider', {  
    //               loop: true,  
    //               spaceBetween: 30,  
    //               slidesPerView: 5,  
    //             });  

    //             const swiper = new Swiper('.main-slide-carousel', {  
    //             slidesPerView: 1,  
    //             thumbs: {  
    //                 swiper: swiperThumbs,  
    //             },  
    //         });  

    //         // Cleanup function to destroy swipers on component unmount  
    //         return () => {  
    //             swiper.destroy();  
    //             swiperThumbs.destroy();  
    //         };  
    //     }, []); 
    // var swiper_thumbs = new swiper(".nav-for-slider", {
    //     loop: true,
    //     spaceBetween: 30,
    //     slidesPerView: 5,
    //   });
    //   var swiper = new swiper(".main-slide-carousel", {
    //     slidesPerView: 1,
    //     thumbs: {
    //       swiper: swiper_thumbs,
    //     },
    //   });
    return (
        <div className="home-container flex flex-col">
            <Header />
            <main style={{ "width": '100%' }}>
                <div className="main-container flex flex-col justify-center w-[100%]">
                    <Main_Image />
                    <div className="checkout-pan flex flex-col bg-white pt-[66px] pb-[84px] pl-[306px] pr-[255px]">
                        <div className="checkout-pan-title">
                            <p className="text-4xl leading-10 font-semi-bold text-black">Kjøp dekk</p>
                        </div>
                        <div className="pt-[20px]">
                            <p className="text-lg leading-7 font-nomal font-['Inter'] text-[#6D6D6D]">Fill in all fields below and select a service (optional)</p>
                        </div>
                        <div className="pt-[29px]">
                            <p className="text-xl leading-7 font-semi-bold text-black">Pris: <span className="text-4xl leading-10 font-semi-bold text-[#73C018]">Kr6052</span></p>
                        </div>
                        <div className="gap-[14px] flex flex-col pt-[26px]">
                            <div className="flex flex-row">
                                <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Reg Nr:</p>
                                <p className="text-lg leading-7 font-normal font-['Inter'] text-[#E21632]">*</p>
                            </div>
                            <input className="w-[633px] py-[14px] px-[10px] border-[#AAAAAA] border-[2px] text-black outline-none text-lg leading-7 font-normal font-['Inter']"></input>
                        </div>
                        <div className="gap-[14px] flex flex-col pt-[14px]">
                            <div className="flex flex-row">
                                <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Navn:</p>
                                <p className="text-lg leading-7 font-normal font-['Inter'] text-[#E21632]">*</p>
                            </div>
                            <input className="w-[633px] py-[14px] px-[10px] border-[#AAAAAA] border-[2px] text-black outline-none text-lg leading-7 font-normal font-['Inter']"></input>
                        </div>
                        <div className="gap-[14px] flex flex-col pt-[14px]">
                            <div className="flex flex-row">
                                <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Mobil nr:</p>
                                <p className="text-lg leading-7 font-normal font-['Inter'] text-[#E21632]">*</p>
                            </div>
                            <input className="w-[633px] py-[14px] px-[10px] border-[#AAAAAA] border-[2px] text-black outline-none text-lg leading-7 font-normal font-['Inter']"></input>
                        </div>
                        <div className="gap-[14px] flex flex-col pt-[14px]">
                            <div className="flex flex-row">
                                <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Email</p>
                                <p className="text-lg leading-7 font-normal font-['Inter'] text-[#E21632]">*</p>
                            </div>
                            <input className="w-[633px] py-[14px] px-[10px] border-[#AAAAAA] border-[2px] text-black outline-none text-lg leading-7 font-normal font-['Inter']"></input>
                        </div>
                        <div className="pt-[14px] flex flex-col gap-[2px]">
                            <div className="flex flex-row">
                                <p className="w-[58px] text-sm leading-5 font-normal font-['Inter'] text-[#6D6D6D]">Location</p>
                                <p className="text-lg leading-7 font-normal font-['Inter'] text-[#E21632]">*</p>
                            </div>
                            <div className="relative w-[392px]">

                                <select
                                    className="h-[56px] block w-[392px] px-[10px] py-[18px] text-black text-sm text-lg font-normal font-['Inter'] leading-5 rounded-none border-[#AAAAAA] border-[2px] focus:outline-none focus:ring-0 focus:border-[#73C018]"
                                    style={{ outline: "#73C018" }}
                                >
                                    <option value="usa" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">Moss dekk AS</option>
                                    <option value="canada" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">Canada</option>
                                    <option value="uk" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">UK</option>
                                    <option value="australia" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">Australia</option>
                                    <option value="germany" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">Germany</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-[11px] flex items-center pl-3">
                                    <svg
                                        className="w-5 h-5 text-gray-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="pt-[14px] flex flex-col gap-[2px]">
                            <p className="text-sm leading-5 font-normal font-['Inter'] text-[#6D6D6D]">Velg antall Dekk</p>
                            <div className="relative w-[392px]">
                                <select
                                    className="h-[56px] block w-[392px] px-[10px] py-[18px] text-black text-sm text-lg font-normal font-['Inter'] leading-5 rounded-none border-[#AAAAAA] border-[2px] focus:outline-none focus:ring-0 focus:border-[#73C018]"
                                    style={{ outline: "#73C018" }}
                                >
                                    <option value="usa" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">4</option>
                                    <option value="canada" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">Canada</option>
                                    <option value="uk" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">UK</option>
                                    <option value="australia" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">Australia</option>
                                    <option value="germany" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">Germany</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-[11px] flex items-center pl-3">
                                    <svg
                                        className="w-5 h-5 text-gray-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                                        />
                                    </svg>
                                </div>
                            </div>

                        </div>
                        <div className="pt-[18px] flex flex-col gap-[16px] w-[1104px]">
                            <div className="w-full pl-[170px] pr-[157px] flex flex-row">
                                <p className="text-base leading-6 font-medium mr-[375px] text-black">Services</p>
                                <p className="text-base leading-6 font-medium mr-[231px] text-black">Quantity</p>
                                <p className="text-base leading-6 font-medium text-black">Total</p>
                            </div>
                            <div className="flex flex-row py-[15px] pl-[40px] pr-[140px] bg-[#F7F7F7]">
                                <div className="flex space-x-4">
                                    <div>
                                    <label className="flex items-center">
                                        <input type="radio" name="option" value="no" className="form-radio h-[24px] w-[24px] text-[#73C018] focus:ring-[#73C018]" checked />
                                    </label>

                                    <label className="flex items-center">
                                        <input type="radio" name="option" value="yes" className="form-radio h-[24px] w-[24px] text-[#73C018] focus:ring-[#73C018]" />
                                    </label>

                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Partner />
                    <GetInTouch />
                    <Footer />
                </div>
            </main>
        </div>

    );
}

