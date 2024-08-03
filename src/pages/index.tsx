import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });
import Partner from '../components/Partner';
import GetInTouch from '../components/GetInTouch';
import Footer from "../components/Footer"
import React from "react";
import background_image from "../../public/image/Backgroun_image(tire).png"
import responsive_tire_image from "../../public/image/responsive_tire_image.png"
import tires_guide_image from "../../public/image/Tires guide 1.png"
import Hjulksift from "../svg/Hjulksift";
import Dekkmlegg from "../svg/Dekkmlegg";
import Avbalansering from "../svg/Avbalansering"
import Reperasjon from "../svg/Reperasjon"
import Dekkhotell from "../svg/Dekkhotell"
import Tiresize from "../svg/Tiresize"
import Desiredtire from "../svg/Desiredtire"
import Numbertire from '../svg/Numbertire';
import Selecttime from '../svg/Selecttime';
import Paymethod from '../svg/Union';
import Union from '../svg/Paymethod';
import Human from "../../public/image/human.png"
import Tpms from "../../public/image/Tpms.png"

import Nh220 from "../../public/image/Nh220.png"
import Nuts from "../../public/image/Nuts.png"
import Rings from "../../public/image/Rings.png"
import Felg from "../../public/image/Felg.png"
import Ellipse from "../../public/image/Ellipse 11.png"
import Comma from '../svg/comma';
import Star from '../svg/Star';
import Left_arrow from '../svg/Left_arrow';
import Right_arrow from '../svg/Right_arrow';

import Link from "next/link";

export default function Home() {
  return (
    <div className='home-container justify-around'>
    <Header />
    <main style={{ width: "100%" }}>
        <div className='main-container'>
            <div className='w-full relative'>
                <div className='relative w-full h-[801px] top-[0px] right-[0px] responsive-tire-image'>
                    <Image alt="" src={background_image} className='w-full h-full' style={{ zIndex: -10 }} />
                    <Image alt="" src={responsive_tire_image} className='w-full h-full responsive-rti-image' style={{ zIndex: -10 }} />
                    <div className='background-gradient'></div>
                </div>
                <div className='absolute top-0 flex flex-col pt-[321px] pl-[208px] z-10 responsive-image-text-content'>
                    <div className="w-[608px] text-white text-6xl font-semi-bold leading-[60px] z-10 responsive-itc-ad">Norway&apos;s first fully automated tire sales</div>
                    <div className="w-[493px] text-[#73c018] text-lg font-medium leading-7 pt-[28px] pb-[44px] pl-[4px] z-10 responsive-itc-text">Order – Pay – Exchange with a few simple keystrokes.</div>
                    <div className="py-[18.5px] w-[277px] bg-[#73c018] rounded-sm justify-center items-center inline-flex z-10 responsive-itc-button">
                        <div className="text-center text-white text-lg font-semi-bold leading-7 z-10">SERVICE</div>
                    </div>
                </div>
            </div>
            <div className='tire-finder-pan pl-[208px] flex flex-row bg-[#101010]'>
                <div className='tfp-main-content flex flex-col  pt-[57px] pb-[31px] relative'>
                    <div className="w-[348px] text-white text-4xl font-semi-bold leading-10 tmc-header">QUICK TIRE FINDER</div>
                    <div className="w-[451px] h-[43px] pt-[15px] pb-[17px] text-[#aaaaaa] text-lg font-normal font-['Inter'] leading-7 tmc-text">Want to find the perfect fitment for your car wheels? </div>
                    <div className='flex flex-col pb-[17px] tire-style-input responsive-tire-style-input'>
                        <div className="text-white text-xl font-normal font-['Inter'] leading-7 mb-[5px] tsi-header">Sesong</div>
                        <div className='flex flex-row relative'>
                            <div className="tsi-input-header w-[81px] h-16 px-8 py-2.5 bg-[#d6d6d6] rounded-tl-lg rounded-bl-lg flex-col justify-center items-start gap-2.5 inline-flex">
                                <div className="text-center text-black text-lg font-semibold font-['Inter'] leading-7">1.</div>
                            </div>
                            <div className="w-[445px] absolute left-[77px] tsi-input-tag">
                                <select
                                    className="h-[64px] block w-full px-[18px] py-[11px] border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-0 rounded-tr-lg rounded-br-lg text-black text-lg font-medium leading-7 appearance-none"
                                >
                                    <option value="usa" className='text-black text-lg font-medium leading-7'>SUMMER TIRES</option>
                                    <option value="canada" className='text-black text-lg font-medium leading-7'>Canada</option>
                                    <option value="uk" className='text-black text-lg font-medium leading-7'>UK</option>
                                    <option value="australia" className='text-black text-lg font-medium leading-7'>Australia</option>
                                    <option value="germany" className='text-black text-lg font-medium leading-7'>Germany</option>
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
                    </div>
                    <div className='flex flex-col pb-[17px] tire-style-input'>
                        <div className="text-white text-xl font-normal font-['Inter'] leading-7 mb-[5px] tsi-header">Width</div>
                        <div className='flex flex-row relative'>
                            <div className="tsi-input-header w-[81px] h-16 px-8 py-2.5 bg-[#d6d6d6] rounded-tl-lg rounded-bl-lg flex-col justify-center items-start gap-2.5 inline-flex">
                                <div className="text-center text-black text-lg font-semibold font-['Inter'] leading-7">2.</div>
                            </div>
                            <div className="w-[445px] absolute left-[77px] tsi-input-tag">
                                <select
                                    className="h-[64px] block w-full px-[18px] py-[11px] border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-0 rounded-tr-lg rounded-br-lg text-black text-lg font-medium leading-7 appearance-none"
                                >
                                    <option value="usa" className='text-black text-lg font-medium leading-7'>145</option>
                                    <option value="canada" className='text-black text-lg font-medium leading-7'>Canada</option>
                                    <option value="uk" className='text-black text-lg font-medium leading-7'>UK</option>
                                    <option value="australia" className='text-black text-lg font-medium leading-7'>Australia</option>
                                    <option value="germany" className='text-black text-lg font-medium leading-7'>Germany</option>
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
                    </div>
                    <div className='flex flex-col pb-[17px] tire-style-input'>
                        <div className="text-white text-xl font-normal font-['Inter'] leading-7 mb-[5px] tsi-header">Profile</div>
                        <div className='flex flex-row relative'>
                            <div className="tsi-input-header w-[81px] h-16 px-8 py-2.5 bg-[#d6d6d6] rounded-tl-lg rounded-bl-lg flex-col justify-center items-start gap-2.5 inline-flex">
                                <div className="text-center text-black text-lg font-semibold font-['Inter'] leading-7">3.</div>
                            </div>
                            <div className="w-[445px] absolute left-[77px] tsi-input-tag">
                                <select
                                    className="h-[64px] block w-full px-[18px] py-[11px] border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-0 rounded-tr-lg rounded-br-lg text-black text-lg font-medium leading-7 appearance-none"
                                >
                                    <option value="usa" className='text-black text-lg font-medium leading-7'>145</option>
                                    <option value="canada" className='text-black text-lg font-medium leading-7'>Canada</option>
                                    <option value="uk" className='text-black text-lg font-medium leading-7'>UK</option>
                                    <option value="australia" className='text-black text-lg font-medium leading-7'>Australia</option>
                                    <option value="germany" className='text-black text-lg font-medium leading-7'>Germany</option>
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
                    </div>
                    <div className='flex flex-col pb-[17px] tire-style-input'>
                        <div className="text-white text-xl font-normal font-['Inter'] leading-7 mb-[5px] tsi-header">Demension</div>
                        <div className='flex flex-row relative'>
                            <div className="tsi-input-header w-[81px] h-16 px-8 py-2.5 bg-[#d6d6d6] rounded-tl-lg rounded-bl-lg flex-col justify-center items-start gap-2.5 inline-flex">
                                <div className="text-center text-black text-lg font-semibold font-['Inter'] leading-7">4.</div>
                            </div>
                            <div className="w-[445px] absolute left-[77px] tsi-input-tag">
                                <select
                                    className="h-[64px] block w-full px-[18px] py-[11px] border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-0 rounded-tr-lg rounded-br-lg text-black text-lg font-medium leading-7 appearance-none"
                                >
                                    <option value="usa" className='text-black text-lg font-medium leading-7'>13</option>
                                    <option value="canada" className='text-black text-lg font-medium leading-7'>Canada</option>
                                    <option value="uk" className='text-black text-lg font-medium leading-7'>UK</option>
                                    <option value="australia" className='text-black text-lg font-medium leading-7'>Australia</option>
                                    <option value="germany" className='text-black text-lg font-medium leading-7'>Germany</option>
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
                    </div>
                    <div className='flex flex-row justify-between w-[518.62px] tsi-footer'>
                        <div className="cursor-pointer text-center text-white text-xs font-normal font-['Inter'] underline leading-7">Help with ordering?</div>
                        <div className="tsi-footer-go-btn cursor-pointer w-[163px] h-[65px] p-2.5 bg-[#73c018] rounded-sm justify-center items-center gap-2.5 inline-flex">
                            <div className="text-center text-white text-lg font-semibold font-['Inter'] leading-7">GO</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col pt-[152px] w-full pr-[208px] tire-size-guide-pan'>
                    <div className='flex flex-row justify-between tsg-text-pan'>
                        <div className='flex flex-col tsgtp-pan'>
                            <div className="w-[263px] ml-[35.4px] pb-[11px] text-white text-4xl font-semibold font-['Inter'] leading-10 tsg-title">Tire Size Guide</div>
                            <div className="w-[717px] h-[84px] ml-[37.4px] text-white text-lg font-normal font-['Inter'] leading-7 tsg-text">Once you have determined it’s time to buy tires, you’ll need to know what size tires are correct for your vehicle. Depending on what you drive, you may be interested in how to find the right tire for your</div>
                        </div>
                        <div className="w-[151px] h-[65px] p-2.5 bg-[#3a6113] rounded-lg justify-center items-center gap-2.5 inline-flex tsg-help-btn">
                            <div className="text-center text-white text-lg font-semibold font-['Inter'] leading-7">GET HELP</div>
                        </div>
                    </div>
                    <div className='pt-[59px] ml-[29.4px] tsg-image'>
                        <Image alt="" className="w-[956px] h-[364px]" src={tires_guide_image} />
                    </div>
                </div>
            </div>
            <div className='service-pan flex flex-col items-center pt-[67px] pb-[113px]'>
                <div className="w-[223px] text-white text-3xl font-semibold font-['Inter'] leading-9 service-title">OUR SERVICES</div>
                <div className="text-white text-lg font-normal font-['Inter'] leading-7 pb-[57px] pt-[24px] service-text">Premium long lasting performance for your car</div>
                <div className='flex relative flex-row w-full justify-between pl-[304px] pr-[276px] service-item'>
                    <div className='flex flex-col justify-center items-center z-10 service-item-tag'>
                        <div className="sit-tag w-[84px] h-[84px] bg-[#f6f6f6] flex flex-row justify-center items-center rounded-full">
                            <Hjulksift />
                        </div>
                        <div className="pt-[10px] text-[#73c018] text-lg font-semibold font-['Inter'] leading-7">Hjulskift</div>
                    </div>
                    <div className='flex flex-col justify-center items-center z-10 service-item-tag'>
                        <div className="sit-tag w-[84px] h-[84px] bg-[#f6f6f6] flex flex-row justify-center items-center rounded-full">
                            <Dekkmlegg />
                        </div>
                        <div className="pt-[10px] text-[#73c018] text-lg font-semibold font-['Inter'] leading-7">Dekkomlegg</div>
                    </div>
                    <div className='flex flex-col justify-center items-center z-10 service-item-tag'>
                        <div className="sit-tag w-[84px] h-[84px] bg-[#f6f6f6] flex flex-row justify-center items-center rounded-full">
                            <Avbalansering />
                        </div>
                        <div className="pt-[10px] text-[#73c018] text-lg font-semibold font-['Inter'] leading-7">Avbalansering</div>
                    </div>
                    <div className='flex flex-col justify-center items-center z-10 service-item-tag'>
                        <div className="sit-tag w-[84px] h-[84px] bg-[#f6f6f6] flex flex-row justify-center items-center rounded-full">
                            <Reperasjon />
                        </div>
                        <div className="pt-[10px] text-[#73c018] text-lg font-semibold font-['Inter'] leading-7">Reperasjon av dekk</div>
                    </div>
                    <div className='flex flex-col justify-center items-center z-10 service-item-tag'>
                        <div className="sit-tag w-[84px] h-[84px] bg-[#f6f6f6] flex flex-row justify-center items-center rounded-full">
                            <Dekkhotell />
                        </div>
                        <div className="pt-[10px] text-[#73c018] text-lg font-semibold font-['Inter'] leading-7">Dekkhotell</div>
                    </div>
                    <div className="w-[65%] left-[371px] top-[41px] h-[0px] z-0 border border-[#aaaaaa] absolute service-cross-bar"></div>

                </div>
                <div className="h-[11px] pt-[21.84px] justify-center items-center gap-[13px] inline-flex service-pan-slide-item">
                    <div className="w-[11px] h-[11px] bg-[#73c018] rounded-full"></div>
                    <div className="w-[11px] h-[11px] bg-white rounded-full"></div>
                    <div className="w-[11px] h-[11px] bg-white rounded-full"></div>
                </div>
            </div>
            <div className='bg-[#101010] flex flex-col pt-[126px] pl-[108px] pb-[32px] relative tire-change-pan'>
                <div className="w-[467px] text-white text-4xl font-semibold font-['Inter'] leading-10 tcp-title">Our routines for tire changes</div>
                <div className="w-[752px] pt-[57px] pb-[15px] text-white text-lg font-normal font-['Inter'] leading-7 tcp-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh ipsum, tempor vitae sem vel, consectetur facilisis risus. Donec sodales ex ex, ac tempor massa viverra eu.</div>
                <div className='responsive-tire-change-human'>
                    <Image alt="" className="w-[613px] h-[877px]" src={Human} />
                </div>
                <div className="w-[750px] h-7 mt-[56px] relative flex flex row tire-change-pan-list-first">
                    <div className="w-2.5 h-2.5 left-0 top-[11px] mt-[5px] bg-[#73c018] rounded-full tcpl-item"></div>
                    <div className="w-[732px] h-14 left-[18px] pl-[8px] text-white text-lg font-normal font-['Inter'] leading-7 tcpl-text-small">We lift the car on approved lifting tables.<br /></div>
                </div>
                <div className="w-[750px] h-7 mt-[16px] flex flex row tire-change-pan-list">
                    <div className="w-2.5 h-2.5 left-0 top-[11px] mt-[5px] bg-[#73c018] rounded-full tcpl-item"></div>
                    <div className="w-[732px] h-14 left-[18px] top-0 pl-[8px] text-white text-lg font-normal font-['Inter'] leading-7 tcpl-text-small">The wheel bolts are pulled out with a nut puller (normal pipe)<br /></div>
                </div>
                <div className="w-[750px] h-7 mt-[16px] flex flex row tire-change-pan-list">
                    <div className="w-2.5 h-2.5 left-0 top-[11px] mt-[5px] bg-[#73c018] rounded-full tcpl-item"></div>
                    <div className="w-[732px] h-14 left-[18px] top-0 pl-[8px] text-white text-lg font-normal font-['Inter'] leading-7 tcpl-text-small">The wheels are taken off and then put back on when they are ready.<br /></div>
                </div>
                <div className="w-[750px] h-14 mt-[16px] flex flex row tire-change-pan-list-big  ">
                    <div className="w-2.5 h-2.5 left-0 top-[11px] mt-[5px] bg-[#73c018] rounded-full tcpl-item"></div>
                    <div className="w-[732px] h-14 left-[18px] top-0 pl-[8px] text-white text-lg font-normal font-['Inter'] leading-7 tcpl-text-big">The wheels are taken off and then put back on when they are ready.(in some cases the tire must be beaten with a rubber hammer).<br /></div>
                </div>
                <div className="w-[750px] h-14 mt-[16px] flex flex row tire-change-pan-list-large">
                    <div className="w-2.5 h-2.5 left-0 top-[11px] mt-[5px] bg-[#73c018] rounded-full tcpl-item"></div>
                    <div className="w-[732px] h-14 left-[18px] top-0 pl-[8px] text-white text-lg font-normal font-['Inter'] leading-7 tcpl-text-large">the wheel bolts are put back using a nut driver and torque wrench.(correct torque according to the car, we use Koken torque pipes and calibrated torque wrenches).<br /></div>
                </div>
                <div className=" h-7 mt-[16px] flex flex row tire-change-pan-list-big especially-tcplb">
                    <div className="w-2.5 h-2.5 left-0 top-[11px] mt-[5px] bg-[#73c018] rounded-full tcpl-item"></div>
                    <div className="h-14 left-[18px] top-0 pl-[8px] text-white text-lg font-normal font-['Inter'] leading-7 tcpl-text-big">the air pressure is checked and topped up to the correct pressure according to the car.<br /></div>
                </div>
                <div className="w-[750px] h-14 mt-[16px] flex flex row tire-change-pan-list-big">
                    <div className="w-2.5 h-2.5 left-0 top-[11px] mt-[5px] bg-[#73c018] rounded-full tcpl-item"></div>
                    <div className="w-[732px] h-14 left-[18px] top-0 pl-[8px] text-white text-lg font-normal font-['Inter'] leading-7 tcpl-text-big">Remember to re-tighten the bolts after 60km or visit us and we will re-tighten them at no charge.<br /></div>
                </div>
                <div className='absolute bottom-0 right-[184px] tire-change-human'>
                    <Image alt="" className="w-[613px] h-[877px]" src={Human} />
                </div>
            </div>
            <div className='it-service-pan flex flex-col items-center pt-[91px] grow pb-[29px]'>
                <div className="w-[228px] text-white text-3xl font-semibold font-['Inter'] leading-9 it-service-title">HOW IT WORK?</div>
                <div className="text-white pt-[7px] text-lg font-normal font-['Inter'] leading-7 it-service-text">Simple process with 6 steps</div>
                <div className='flex flex-row pl-[190px] pr-[195px] pt-[56px] relative it-service-pan-list'>
                    <div className="h-[197px] pr-[60px] flex-col justify-start items-start gap-6 inline-flex z-10 ispl-item">
                        <div className="justify-start items-start gap-2.5 inline-flex ispl-item-number">
                            <div className="w-14 h-14 bg-[#f6f6f6] rounded-full flex align-center items-center justify-center text-[#6d6d6d] text-3xl font-semi-bold">1</div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 flex ispl-content">
                            <Tiresize />
                            <div className="h-20 flex-col justify-start items-start gap-2.5 flex ispl-content-main">
                                <div className="w-[187px] text-white text-sm font-semibold font-['Inter'] leading-tight isplcm-tit-first">Choose The Right Tire Size</div>
                                <div className="w-[181px] text-[#d1d1d1] text-sm font-normal font-['Inter'] leading-tight isplcm-text-first">Tempor vitae sem vel, consectetur facilisis risus.</div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[197px] pr-[60px] flex-col justify-start items-start gap-6 inline-flex z-10 ispl-item">
                        <div className="justify-start items-start gap-2.5 inline-flex ispl-item-number">
                            <div className="w-14 h-14 bg-[#f6f6f6] rounded-full flex align-center items-center justify-center text-[#6d6d6d] text-3xl font-semi-bold">2</div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 flex ispl-content">
                            <Desiredtire />
                            <div className="h-20 flex-col justify-start items-start gap-2.5 flex ispl-content-main">
                                <div className="w-[187px] text-white text-sm font-semibold font-['Inter'] leading-tight isplcm-tit-second">Choose Your Desired Tire</div>
                                <div className="w-[181px] text-[#d1d1d1] text-sm font-normal font-['Inter'] leading-tight isplcm-text-second">budgetdekk, kvalitetsdekk eller premiumdekk</div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[197px] pr-[60px] flex-col justify-start items-start gap-6 inline-flex z-10 ispl-item">
                        <div className="justify-start items-start gap-2.5 inline-flex ispl-item-number">
                            <div className="w-14 h-14 bg-[#f6f6f6] rounded-full flex align-center items-center justify-center text-[#6d6d6d] text-3xl font-semi-bold">3</div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 flex ispl-content">
                            <Numbertire />
                            <div className="h-20 flex-col justify-start items-start gap-2.5 flex ispl-content-main">
                                <div className="w-[187px] text-white text-sm font-semibold font-['Inter'] leading-tight isplcm-tit-third">Fill In The Info And Select The Number Of Tires</div>
                                <div className="w-[181px] text-[#d1d1d1] text-sm font-normal font-['Inter'] leading-tight isplcm-text-third">Tempor vitae sem vel, consectetur facilisis risus.</div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[197px] pr-[60px] flex-col justify-start items-start gap-6 inline-flex z-10 ispl-item">
                        <div className="justify-start items-start gap-2.5 inline-flex ispl-item-number">
                            <div className="w-14 h-14 bg-[#f6f6f6] rounded-full flex align-center items-center justify-center text-[#6d6d6d] text-3xl font-semi-bold">4</div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 flex ispl-content">
                            <Selecttime />
                            <div className="h-20 flex-col justify-start items-start gap-2.5 flex ispl-content-main">
                                <div className="w-[187px] text-white text-sm font-semibold font-['Inter'] leading-tight isplcm-tit-fourth">Select Time And Date</div>
                                <div className="w-[181px] text-[#d1d1d1] text-sm font-normal font-['Inter'] leading-tight isplcm-text-fourth">Tempor vitae sem vel, consectetur facilisis risus.</div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[197px] pr-[60px] flex-col justify-start items-start gap-6 inline-flex z-10 ispl-item">
                        <div className="justify-start items-start gap-2.5 inline-flex ispl-item-number">
                            <div className="w-14 h-14 bg-[#f6f6f6] rounded-full flex align-center items-center justify-center text-[#6d6d6d] text-3xl font-semi-bold">5</div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 flex ispl-content">
                            <Paymethod />
                            <div className="h-20 flex-col justify-start items-start gap-2.5 flex ispl-content-main">
                                <div className="w-[187px] text-white text-sm font-semibold font-['Inter'] leading-tight isplcm-tit-fifth">Choose Payment Method</div>
                                <div className="w-[181px] text-[#d1d1d1] text-sm font-normal font-['Inter'] leading-tight isplcm-text-fifth">Tempor vitae sem vel, consectetur facilisis risus.</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-6 inline-flex z-10 ispl-item" style={{ "paddingRight": '0' }}>
                        <div className="justify-start items-start gap-2.5 inline-flex ispl-item-number">
                            <div className="w-14 h-14 bg-[#f6f6f6] rounded-full flex align-center items-center justify-center text-[#6d6d6d] text-3xl font-semi-bold">6</div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 flex ispl-content">
                            <Union />
                            <div className="h-20 flex-col justify-start items-start gap-2.5 flex ispl-content-main">
                                <div className="w-[273px] text-white text-sm font-semibold font-['Inter'] leading-tight isplcm-tit-sixth">Meet With Us At Skredderveien 5,1537 Moss At The Appointed Time.</div>
                                <div className="w-[233 px] text-[#d1d1d1] text-sm font-normal font-['Inter'] leading-tight isplcm-text-sixth">Tempor vitae sem vel, consectetur facilisis risus.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[63%] top-[84px] left-[241px] z-0 h-[0px] border border-[#aaaaaa] absolute it-service-cross-bar"></div>
                </div>
                <div className="h-[11px] pt-[21.84px] justify-center items-center gap-[13px] inline-flex service-pan-slide-item it-service-pan-slide-item">
                    <div className="w-[11px] h-[11px] bg-[#73c018] rounded-full"></div>
                    <div className="w-[11px] h-[11px] bg-white rounded-full"></div>
                    <div className="w-[11px] h-[11px] bg-white rounded-full"></div>
                </div>
            </div>
            <div className='passenger-tire bg-[#151515] pt-[8px] pb-[53px] flex flex-col items-center justify-center'>
                <div className="w-[full] text-white text-3xl font-semibold font-['Inter'] leading-9 passenger-tire-title">BEST SELLING PASSENGER TIRES</div>
                <div className="w-[full] text-white text-3xl font-semibold font-['Inter'] leading-9 responsive-passenger-tire-title">Popular Products</div>
                <div className="w-[full] pt-[21px] pb-[50px] text-center text-white text-base font-normal font-['Inter'] leading-normal passenger-tire-text">Don’t hold off for too long. Inventory and pricing changes daily.</div>
                <div className="w-[full] pt-[21px] pb-[50px] text-center text-white text-base font-normal font-['Inter'] leading-normal responsive-passenger-tire-text">Nb: our online prices only apply to the procedure mentioned above. Customer reception is not available for online customers.</div>
                <div className='passenger-tire-list w-[100%] overflow-hidden gap-[32px] flex flex-row px-[208px]'>
                    <div className=" flex-col justify-start items-start inline-flex">
                        <div className="justify-start items-start gap-2.5 relative inline-flex">
                            <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                    <Image alt="" className="" src={Tpms} />
                                </div>
                            </div>

                        </div>
                        <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                            <div className="flex-col justify-start items-center gap-6 flex">
                                <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">TPMS – TIRE PRESSURE SENSORS<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="justify-start items-start gap-2.5 relative inline-flex">
                            <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                    <Image alt="" className="" src={Nh220} />
                                </div>
                            </div>

                        </div>
                        <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                            <div className="flex-col justify-start items-center gap-6 flex">
                                <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">ENGINE PISTON NH220<br />-<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="justify-start items-start gap-2.5 relative inline-flex">
                            <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                    <Image alt="" className="" src={Nuts} />
                                </div>
                            </div>

                        </div>
                        <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                            <div className="flex-col justify-start items-center gap-6 flex">
                                <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">WHEEL BOLTS/NUTS<br />-<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="justify-start items-start gap-2.5 relative inline-flex">
                            <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                    <Image alt="" className="" src={Rings} />
                                </div>
                            </div>

                        </div>
                        <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                            <div className="flex-col justify-start items-center gap-6 flex">
                                <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">CENTER RINGS<br />-<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="justify-start items-start gap-2.5 relative inline-flex">
                            <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                    <Image alt="" className="" src={Felg} />
                                </div>
                            </div>

                        </div>
                        <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                            <div className="flex-col justify-start items-center gap-6 flex">
                                <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">Felg<br />-<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex-col justify-start items-start inline-flex">
                        <div className="justify-start items-start gap-2.5 relative inline-flex">
                            <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                    <Image alt="" className="" src={Tpms} />
                                </div>
                            </div>

                        </div>
                        <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                            <div className="flex-col justify-start items-center gap-6 flex">
                                <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">TPMS – TIRE PRESSURE SENSORS<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="justify-start items-start gap-2.5 relative inline-flex">
                            <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                    <Image alt="" className="" src={Nh220} />
                                </div>
                            </div>

                        </div>
                        <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                            <div className="flex-col justify-start items-center gap-6 flex">
                                <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">ENGINE PISTON NH220<br />-<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="justify-start items-start gap-2.5 relative inline-flex">
                            <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                    <Image alt="" className="" src={Nuts} />
                                </div>
                            </div>

                        </div>
                        <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                            <div className="flex-col justify-start items-center gap-6 flex">
                                <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">WHEEL BOLTS/NUTS<br />-<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="justify-start items-start gap-2.5 relative inline-flex">
                            <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                    <Image alt="" className="" src={Rings} />
                                </div>
                            </div>

                        </div>
                        <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                            <div className="flex-col justify-start items-center gap-6 flex">
                                <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">CENTER RINGS<br />-<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="justify-start items-start gap-2.5 relative inline-flex">
                            <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                    <Image alt="" className="" src={Felg} />
                                </div>
                            </div>

                        </div>
                        <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                            <div className="flex-col justify-start items-center gap-6 flex">
                                <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">Felg<br />-<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="h-[11px] pt-[21.84px] justify-center items-center gap-[13px] inline-flex passenger-tire-item">
                    <div className="w-[11px] h-[11px] bg-[#73c018] rounded-full"></div>
                    <div className="w-[11px] h-[11px] bg-white rounded-full"></div>
                    <div className="w-[11px] h-[11px] bg-white rounded-full"></div>
                </div>
            </div>
            <div className='testimonials-pan flex flex-col pt-[39px] justify-center items-center pb-[42px] pl-[155px] pr-[164px]'>
                <div className="w-[221px] text-white text-4xl font-semibold font-['Inter'] leading-10 testimonials-pan-title">Testimonials</div>
                <div className="w-[532px] pt-[14px] text-center text-white text-base font-normal font-['Inter'] testimonials-pan-text leading-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </div>
                <div className='testimonials-pan-list gap-[40px] relative flex flex-row justify-center items-center mt-[40px] w-[1504px]'>
                    <div className='tetp-left-arrow absolute left-[-53px]'>
                        <Left_arrow/>
                    </div>
                    <div className='tetp-right-arrow absolute right-[-53px]'>
                        <Right_arrow />
                    </div>

                    <div className="w-[732px] h-[315px] px-[21px] py-[58px] bg-white rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex testimonials-pan-list-item">
                        <div className="justify-start items-start gap-[23px] inline-flex tpli-content">
                            <div className="w-[199px] h-[199px] relative tplic-info">
                                <Image alt="" className="w-[199px] h-[199px] left-0 top-0 absolute rounded-full" src={Ellipse} />
                                <div className="w-11 h-11 left-[4.23px] top-[7.62px] absolute">
                                    <div className="w-11 h-11 left-0 top-0 absolute bg-[#d6d6d6] rounded-full border-2 border-white tplic-info-tick-back"></div>
                                    <div className="w-[22.86px] h-[20.32px] left-[11.01px] top-[11.86px] absolute tplic-info-tick">
                                        <div className="w-[22.86px] h-[20.32px] left-0 top-0 absolute">
                                        <Comma />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-[22px] inline-flex">
                                <div className="justify-start items-center gap-1.5 inline-flex">
                                    <div className="text-[#73c018] text-xl font-normal font-['Inter'] leading-7">4.7</div>
                                    <div className="justify-start items-start gap-[9px] flex">
                                        <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                        <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                        <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                        <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                        <div className="w-[15px] h-[15px] justify-center items-start gap-[0px] flex"><Star /></div>
                                    </div>
                                </div>
                                <div className="flex-col justify-start items-start flex tpli-recommend-content">
                                    <div className="w-[428px] h-[79px] text-black text-base font-normal font-['Inter'] leading-normal tplirc-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                    <div className="flex-col justify-start items-start flex">
                                        <div className="text-black text-xl font-semibold font-['Inter'] leading-7">Ronald Richards</div>
                                        <div className="text-black text-base font-normal font-['Inter'] leading-normal">President of Guitar</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[732px] h-[315px] px-[21px] py-[58px] bg-white rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex testimonials-pan-list-item">
                        <div className="justify-start items-start gap-[23px] inline-flex tpli-content">
                            <div className="w-[199px] h-[199px] relative tplic-info">
                                <Image alt="" className="w-[199px] h-[199px] left-0 top-0 absolute rounded-full" src={Ellipse} />
                                <div className="w-11 h-11 left-[4.23px] top-[7.62px] absolute">
                                    <div className="w-11 h-11 left-0 top-0 absolute bg-[#d6d6d6] rounded-full border-2 border-white tplic-info-tick-back"></div>
                                    <div className="w-[22.86px] h-[20.32px] left-[11.01px] top-[11.86px] absolute tplic-info-tick">
                                        <div className="w-[22.86px] h-[20.32px] left-0 top-0 absolute">
                                        <Comma />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-[22px] inline-flex">
                                <div className="justify-start items-center gap-1.5 inline-flex">
                                    <div className="text-[#73c018] text-xl font-normal font-['Inter'] leading-7">4.7</div>
                                    <div className="justify-start items-start gap-[9px] flex">
                                        <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                        <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                        <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                        <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                        <div className="w-[15px] h-[15px] justify-center items-start gap-[0px] flex"><Star /></div>
                                    </div>
                                </div>
                                <div className="flex-col justify-start items-start flex tpli-recommend-content">
                                    <div className="w-[428px] h-[79px] text-black text-base font-normal font-['Inter'] leading-normal tplirc-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                    <div className="flex-col justify-start items-start flex">
                                        <div className="text-black text-xl font-semibold font-['Inter'] leading-7">Ronald Richards</div>
                                        <div className="text-black text-base font-normal font-['Inter'] leading-normal">President of Guitar</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="h-[11px] pt-[20px] justify-center items-center gap-[13px] inline-flex testimonials">
                    <div className="w-[11px] h-[11px] bg-[#73c018] rounded-full"></div>
                    <div className="w-[11px] h-[11px] bg-white rounded-full"></div>
                    <div className="w-[11px] h-[11px] bg-white rounded-full"></div>
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
