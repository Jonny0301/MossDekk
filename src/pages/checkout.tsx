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
import Calendar from "@/components/calendar";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Pricing() {
    const [dateTime, setDateTime] = useState<string>('');
    const [showCalendar, setShowCalendar] = useState(false);

    const handleDateTimeSelected = (dateTime: string) => {
        setDateTime(dateTime);
    };
    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };
    const getServices =async (value:any) => {
        if(value=="none"){
            return;
        }
        try {
            const formDataParams = new URLSearchParams();
            formDataParams.append('method', 'getServices');
            formDataParams.append('type', 'dekk');
            formDataParams.append('workType', 'New Tyre');
            formDataParams.append('locationID', '18');
            const response = await axios.post(
                'http://localhost/query.php',
                formDataParams,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="home-container flex flex-col">
            <Header />
            <main style={{ "width": '100%' }}>
                <div className="main-container flex flex-col justify-center w-[100%]">
                    <Main_Image />
                    <div className="checkout-pan flex flex-col bg-white pt-[66px] pb-[84px] pl-[306px] pr-[255px] max-[1650px]:px-[80px] max-[1650px]:pt-[44px] max-[1650px]:pb-[45px] max-[1650px]:items-center max-[772px]:px-[16px] max-[772px]:pt-[24px] max-[772px]:pb-[26px]">
                        <div className="flex flex-col">

                            <div className="checkout-pan-title">
                                <p className="text-4xl leading-10 font-semi-bold text-black max-[1024px]:text-2xl">Kjøp dekk</p>
                            </div>
                            <div className="pt-[20px] max-[1024px]:pt-[26px] max-[772px]:pt-[9px]">
                                <p className="text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Fill in all fields below and select a service (optional)</p>
                            </div>
                            <div className="pt-[29px] max-[772px]:pt-[13px]">
                                <p className="text-xl leading-7 font-semi-bold text-black max-[1024px]:text-lg">Pris: <span className="text-4xl leading-10 font-semi-bold text-[#73C018] max-[1024px]:text-2xl">Kr6052</span></p>
                            </div>
                            <div className="gap-[14px] flex flex-col pt-[26px] max-[772px]:pt-[14px]">
                                <div className="flex flex-row">
                                    <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Reg Nr:</p>
                                    <p className="text-lg leading-7 font-normal font-['Inter'] text-[#E21632]">*</p>
                                </div>
                                <input className="w-[633px] py-[14px] px-[10px] border-[#AAAAAA] border-[2px] text-black outline-none text-lg leading-7 font-normal font-['Inter'] max-[1024px]:w-[478px] max-[772px]:w-[343px]"></input>
                            </div>
                            <div className="gap-[14px] flex flex-col pt-[14px] max-[772px]:pt-[14px]">
                                <div className="flex flex-row">
                                    <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Navn:</p>
                                    <p className="text-lg leading-7 font-normal font-['Inter'] text-[#E21632]">*</p>
                                </div>
                                <input className="w-[633px] py-[14px] px-[10px] border-[#AAAAAA] border-[2px] text-black outline-none text-lg leading-7 font-normal font-['Inter'] max-[1024px]:w-[478px] max-[772px]:w-[343px]"></input>
                            </div>
                            <div className="gap-[14px] flex flex-col pt-[14px] max-[772px]:pt-[14px]">
                                <div className="flex flex-row">
                                    <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Mobil nr:</p>
                                    <p className="text-lg leading-7 font-normal font-['Inter'] text-[#E21632]">*</p>
                                </div>
                                <input className="w-[633px] py-[14px] px-[10px] border-[#AAAAAA] border-[2px] text-black outline-none text-lg leading-7 font-normal font-['Inter'] max-[1024px]:w-[478px] max-[772px]:w-[343px]"></input>
                            </div>
                            <div className="gap-[14px] flex flex-col pt-[14px] max-[772px]:pt-[14px] max-[772px]:pt-[14px]">
                                <div className="flex flex-row">
                                    <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Email</p>
                                    <p className="text-lg leading-7 font-normal font-['Inter'] text-[#E21632]">*</p>
                                </div>
                                <input className="w-[633px] py-[14px] px-[10px] border-[#AAAAAA] border-[2px] text-black outline-none text-lg leading-7 font-normal font-['Inter'] max-[1024px]:w-[478px] max-[772px]:w-[343px]"></input>
                            </div>
                            <div className="pt-[14px] flex flex-col gap-[2px]">
                                <div className="flex flex-row">
                                    <p className="w-[58px] text-sm leading-5 font-normal font-['Inter'] text-[#6D6D6D]">Location</p>
                                    <p className="text-lg leading-7 font-normal font-['Inter'] text-[#E21632]">*</p>
                                </div>
                                <div className="relative w-[392px] max-[772px]:w-[343px]">

                                    <select
                                        onClick={(e)=>getServices(e.target.value)}
                                        className="h-[56px] block w-[392px] px-[10px] py-[18px] text-black text-sm text-lg font-normal font-['Inter'] leading-5 rounded-none border-[#AAAAAA] border-[2px] focus:outline-none focus:ring-0 focus:border-[#73C018] max-[772px]:w-[343px]"
                                        style={{ outline: "#73C018" }}
                                    >
                                        <option value="none" selected className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">Select a location</option>
                                        <option value="moss" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">Moss Dekk AS</option>
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
                                <div className="relative w-[392px] max-[772px]:w-[343px]">
                                    <select
                                        className="h-[56px] block w-[392px] px-[10px] py-[18px] text-black text-sm text-lg font-normal font-['Inter'] leading-5 rounded-none border-[#AAAAAA] border-[2px] focus:outline-none focus:ring-0 focus:border-[#73C018] max-[772px]:w-[343px]"
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
                            <div className="pt-[18px] flex flex-col gap-[16px] w-[1104px] max-[1230px]:w-[714px] max-[772px]:pt-[24px] max-[772px]:w-[343px] max-[772px]:gap-[10px]">
                                <div className="w-full pl-[170px] pr-[157px] flex flex-row max-[1230px]:pr-[16px] max-[772px]:pl-[6px] max-[772px]:pr-[13px]">
                                    <p className="text-base leading-6 font-medium mr-[375px] text-black max-[1230px]:mr-[271px] max-[772px]:mr-[137px] max-[772px]:text-sm">Services</p>
                                    <p className="text-base leading-6 font-medium mr-[200px] text-black max-[1230px]:mr-[72px] max-[772px]:mr-[37px] max-[772px]:text-sm">Quantity</p>
                                    <p className="text-base leading-6 font-medium text-black max-[772px]:text-sm">Total</p>
                                </div>
                                <div className="flex flex-row py-[15px] pl-[40px] pr-[140px] bg-[#F7F7F7] rounded-[4px] max-[772px]:pl-[6px] max-[772px]:pr-[11px]">
                                    <div className="flex flex-col gap-[4px] w-[526px] max-[1230px]:w-[438px] max-[772px]:w-[183px]">
                                        <div className="flex flex-row gap-[41px] max-[772px]:gap-[0px] max-[772px]:items-center">
                                            <label className="flex items-center max-[772px]:mr-[11px]">
                                                <input type="radio" name="option" value="no" className="form-radio h-[24px] w-[24px] text-[#73C018] focus:ring-[#73C018] focus:outline-[#73C018] appearance-none" checked />
                                            </label>
                                            <p className="text-lg text-[#787881] leading-7 font-medium w-[29px] max-[772px]:mr-[5px] max-[772px]:text-xs max-[772px]:w-[19px]">Nei</p>
                                            <p className="text-lg text-[#787881] leading-7 font-medium w-[393px] whitespace-nowrap overflow-hidden text-ellipsis max-[1230px]:w-[309px] max-[772px]:text-xs">VERKSTED MATRIELL</p>
                                        </div>
                                        <div className="flex flex-row gap-[41px] max-[772px]:gap-[0px] max-[772px]:items-center">
                                            <label className="flex items-center max-[772px]:mr-[11px]">
                                                <input type="radio" name="option" value="yes" className="form-radio h-[24px] w-[24px] text-[#73C018] focus:ring-[#73C018] focus:outline-[#73C018]" />
                                            </label>
                                            <p className="text-lg text-[#787881] leading-7 font-medium w-[29px] max-[772px]:mr-[5px] max-[772px]:text-xs max-[772px]:w-[19px]">Ja </p>
                                            <p className="text-lg text-[#787881] leading-7 font-medium  max-[772px]:text-xs">23&quot;</p>
                                        </div>
                                    </div>
                                    <div className="relative w-[62px] pl-[40px] flex items-center  max-[772px]:pl-[12px]">

                                        <select
                                            className="h-[34px] block w-[62px] rounded-[4px] px-[10px] py-[5px] text-black text-sm text-base font-normal font-['Inter'] leading-6 border-[#AAAAAA] border-[2px] focus:outline-none focus:ring-0 focus:border-[#73C018]"
                                            style={{ outline: "#73C018" }}
                                        >
                                            <option value="1" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">1</option>
                                            <option value="2" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">2</option>
                                            <option value="3" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">3</option>
                                            <option value="4" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">4</option>
                                        </select>
                                        {/* <div className="pointer-events-none absolute inset-y-0 right-[11px] flex items-center pl-3">
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
                                    </div> */}
                                    </div>
                                    <div className="pl-[253px] flex items-center max-[1230px]:pl-[105px]  max-[772px]:pl-[40px]">
                                        <p className="text-lg text-[#787881] leading-7 font-medium  max-[772px]:text-base">1996</p>
                                    </div>
                                </div>
                                <div className="flex flex-row py-[15px] pl-[40px] pr-[140px] bg-[#F7F7F7] rounded-[4px] max-[772px]:pl-[6px] max-[772px]:pr-[11px]">
                                    <div className="flex flex-col gap-[4px] w-[526px] max-[1230px]:w-[438px] max-[772px]:w-[183px]">
                                        <div className="flex flex-row gap-[41px] max-[772px]:gap-[0px] max-[772px]:items-center">
                                            <label className="flex items-center max-[772px]:mr-[11px]">
                                                <input type="radio" name="option1" value="no" className="form-radio h-[24px] w-[24px] text-[#73C018] focus:ring-[#73C018] focus:outline-[#73C018] appearance-none" checked />
                                            </label>
                                            <p className="text-lg text-[#787881] leading-7 font-medium w-[29px] max-[772px]:mr-[5px] max-[772px]:text-xs max-[772px]:w-[19px]">Nei</p>
                                            <p className="text-lg text-[#787881] leading-7 font-medium w-[393px] whitespace-nowrap overflow-hidden text-ellipsis max-[1230px]:w-[309px] max-[772px]:text-xs">KUN AVBALANSERING 1 STK DEKK PÅ BIL 13-</p>
                                        </div>
                                        <div className="flex flex-row gap-[41px] max-[772px]:gap-[0px] max-[772px]:items-center">
                                            <label className="flex items-center max-[772px]:mr-[11px]">
                                                <input type="radio" name="option1" value="yes" className="form-radio h-[24px] w-[24px] text-[#73C018] focus:ring-[#73C018] focus:outline-[#73C018]" />
                                            </label>
                                            <p className="text-lg text-[#787881] leading-7 font-medium w-[29px] max-[772px]:mr-[5px] max-[772px]:text-xs max-[772px]:w-[19px]">Ja </p>
                                            <p className="text-lg text-[#787881] leading-7 font-medium  max-[772px]:text-xs">23&quot;   </p>
                                        </div>
                                    </div>
                                    <div className="relative w-[62px] pl-[40px] flex items-center  max-[772px]:pl-[12px]">

                                        <select
                                            className="h-[34px] block w-[62px] rounded-[4px] px-[10px] py-[5px] text-black text-sm text-base font-normal font-['Inter'] leading-6 border-[#AAAAAA] border-[2px] focus:outline-none focus:ring-0 focus:border-[#73C018]"
                                            style={{ outline: "#73C018" }}
                                        >
                                            <option value="1" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">1</option>
                                            <option value="2" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">2</option>
                                            <option value="3" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">3</option>
                                            <option value="4" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">4</option>
                                        </select>
                                        {/* <div className="pointer-events-none absolute inset-y-0 right-[11px] flex items-center pl-3">
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
                                    </div> */}
                                    </div>
                                    <div className="pl-[253px] flex items-center max-[1230px]:pl-[105px]  max-[772px]:pl-[40px]">
                                        <p className="text-lg text-[#787881] leading-7 font-medium  max-[772px]:text-base">10</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-[36px] max-[1024px]:pt-[29px] max-[772px]:w-[345px] max-[772px]:pt-[19px]">
                                <p className="text-lg leading-7 font-normal text-black font-['Inter'] max-[1024px]:text-sm ">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                            </div>
                            <div className="pt-[20px] flex flex-col gap-[18px] max-[1024px]:pt-[5px]">
                                <div className="">
                                    <p className="text-4xl leading-10 font-semi-bold text-black max-[1024px]:text-2xl  max-[772px]:text-lg">Select time and date</p>
                                </div>
                                <div className="w-[599px] text-black shadow max-[772px]:shadow-none max-[772px]:w-[334px]">
                                    <Calendar onDateTimeSelected={handleDateTimeSelected} closeCalendar={toggleCalendar} />
                                </div>
                            </div>
                            <div className="pt-[19px] max-[1024px]:pt-[15px]">
                                <div className="bg-[#EF4225] py-[11.86px] px-[10px] w-[145.89px]  max-[1024px]:w-[118px]">
                                    <p className="text-lg leading-7 font-semi-bold  max-[1024px]:text-sm">PLACE ORDER</p>
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

