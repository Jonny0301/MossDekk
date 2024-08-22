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
                    <div className="product-detail-pan flex flex-row pt-[24px] pl-[309px] pr-[389px] pb-[91px] gap-[105px] bg-[#F7F7F7] max-[1848px]:px-[80px] max-[1848px]:justify-center max-[1340px]:gap-[6px] max-[1340px]:pt-[35px] max-[1340px]:pb-[68px] max-[900px]:flex-col max-[900px]:items-center max-[900px]:px-[16px] max-[900px]:pt-[13px] max-[900px]:gap-[22px] max-[900px]:pb-[19px]">
                        <div className="product-detail-image-pan flex flex-col gap-[13px] max-[1340px]:gap-[6px] max-[520px]:gap-[4px]">
                            <div className="pd-image w-[640px] h-[700px] flex justify-center items-center bg-white max-[1340px]:w-[474px] max-[1340px]:h-[519px] max-[520px]:w-[343px] max-[520px]:h-[375px]">
                                <Image src={Product_detail} alt="Car accessories image" className="w-[306px] h-[478px] max-[1340px]:w-[228px] max-[1340px]:h-[356px] max-[520px]:w-[164px] max-[520px]:h-[257px]"></Image>
                            </div>
                            <div className="pd-carsouel flex flex-row gap-[12px] justify-between max-[520px]:gap-[8px]">
                                <div className="pd-carsouel-item w-[149px] h-[150px] border-[#73C018] border-[1px] bg-white flex justify-center items-center max-[1340px]:w-[110px] max-[1340px]:h-[112px] max-[520px]:w-[80px] max-[520px]:h-[81px]">
                                    <Image src={Product_detail} alt="Car accessories image" className="w-[82px] h-[128px] max-[1340px]:w-[61px] max-[1340px]:h-[96px] max-[520px]:w-[44px] max-[520px]:h-[69px]" />
                                </div>
                                <div className="pd-carsouel-item w-[149px] h-[150px] border-[#D6D6D6] border-[1px] bg-white flex justify-center items-center max-[1340px]:w-[110px] max-[1340px]:h-[112px] max-[520px]:w-[80px] max-[520px]:h-[81px]">
                                    <Image src={Product_detail} alt="Car accessories image" className="w-[82px] h-[128px] max-[1340px]:w-[61px] max-[1340px]:h-[96px] max-[520px]:w-[44px] max-[520px]:h-[69px]" />
                                </div>
                                <div className="pd-carsouel-item w-[149px] h-[150px] border-[#D6D6D6] border-[1px] bg-white flex justify-center items-center max-[1340px]:w-[110px] max-[1340px]:h-[112px] max-[520px]:w-[80px] max-[520px]:h-[81px]">
                                    <Image src={Product_detail} alt="Car accessories image" className="w-[82px] h-[128px] max-[1340px]:w-[61px] max-[1340px]:h-[96px] max-[520px]:w-[44px] max-[520px]:h-[69px]" />
                                </div>
                                <div className="pd-carsouel-item w-[149px] h-[150px] border-[#D6D6D6] border-[1px] bg-white flex justify-center items-center max-[1340px]:w-[110px] max-[1340px]:h-[112px] max-[520px]:w-[80px] max-[520px]:h-[81px]">
                                    <Image src={Product_detail} alt="Car accessories image" className="w-[82px] h-[128px] max-[1340px]:w-[61px] max-[1340px]:h-[96px] max-[520px]:w-[44px] max-[520px]:h-[69px]" />
                                </div>
                            </div>
                        </div>
                        <div className="product-detail-infor-pan flex flex-col w-[475px] max-[1340px]:w-[384px] max-[520px]:w-[342px]">
                            <div className="pdi-title pt-[42px] max-[1340px]:pt-[0px]">
                                <p className="text-2xl leading-8 font-semi-bold text-[#73C018] max-[1340px]:text-lg">SAILUN - ATREZZO ELITE - V</p>
                            </div>
                            <div className="pdi-price pt-[15px] max-[1340px]:pt-[19px] max-[520px]:pt-[4px]">
                                <p className="text-2xl leading-8 font-semi-bold text-black">Pris: kr 1016 / stk</p>
                            </div>
                            <div className="pdi-description pt-[25px] w-[477px] max-[1340px]:w-[384px] max-[520px]:w-[342px] max-[520px]:pt-[11px]">
                                <p className="text-lg leading-7 font-normal font-['Inter'] text-black max-[1340px]:text-sm">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem udantium, totam rem aperiam, eaque ipsa quae abventore veritatis et quasi architecto beatae vitae dicta sunt explicabomo enim</p>
                            </div>
                            <div className="pdi-info-list flex flex-row gap-[10px] pt-[15px] max-[1340px]:pt-[51px] max-[1340px]:gap-[6px] max-[520px]:pt-[25px]">
                                <div className="pdi-info-item flex flex-col bg-white border-[#D6D6D6] border-[1px] max-[1340px]:justify-between">
                                    <div className="pdi-info-item-img h-[118.93px] w-[150px] flex justify-center items-center max-[1340px]:w-[121px] max-[1340px]:h-[96px] max-[520px]:w-[107.83px] max-[520px]:h-[85.56px]">
                                        <Tyre_Info_first />
                                    </div>
                                    <div className="w-full pt-[5px] pb-[3px] flex flex-row gap-[9px] justify-center items-center bg-[#F2F2F2] border-t-[#D6D6D6] border-[1px] max-[1340px]:pt-[7.5px] max-[1340px]:pb-[5.5px] max-[520px]:pt-[7.81px] max-[520px]:pb-[6.03px]">
                                        <p className="text-sm leading-5 font-normal font-['Inter'] text-[#6D6D6D] max-[1340px]:text-xs max-[520px]:text-sml">Drivstofforbruk</p>
                                        <p className="text-lg leading-7 font-medium text-[#000000] uppercase max-[1340px]:text-sm max-[520px]:text-xs">C</p>
                                    </div>
                                </div>
                                <div className="pdi-info-item flex flex-col bg-white border-[#D6D6D6] border-[1px] max-[1340px]:justify-between">
                                    <div className="pdi-info-item-img h-[118.93px] w-[150px] flex justify-center items-center max-[1340px]:w-[121px] max-[1340px]:h-[96px] max-[520px]:w-[107.83px] max-[520px]:h-[85.56px]">
                                        <Tyre_Infor_second />
                                    </div>
                                    <div className="w-full pt-[5px] pb-[3px] flex flex-row gap-[9px] justify-center items-center bg-[#F2F2F2] border-t-[#D6D6D6] border-[1px] max-[1340px]:pt-[7.5px] max-[1340px]:pb-[5.5px] max-[520px]:pt-[7.81px] max-[520px]:pb-[6.03px]">
                                        <p className="text-sm leading-5 font-normal font-['Inter'] text-[#6D6D6D]  max-[1340px]:text-xs  max-[520px]:text-sml">Våtgrep</p>
                                        <p className="text-lg leading-7 font-medium text-[#000000] uppercase max-[1340px]:text-sm max-[520px]:text-xs">B</p>
                                    </div>
                                </div>
                                <div className="pdi-info-item flex flex-col bg-white border-[#D6D6D6] border-[1px] max-[1340px]:justify-between">
                                    <div className="pdi-info-item-img h-[118.93px] w-[150px] flex justify-center items-center max-[1340px]:w-[121px] max-[1340px]:h-[96px] max-[520px]:w-[107.83px] max-[520px]:h-[85.56px]">
                                        <Tyre_Infor_third />
                                    </div>
                                    <div className="w-full pt-[5px] pb-[3px] flex flex-row gap-[9px] justify-center items-center bg-[#F2F2F2] border-t-[#D6D6D6] border-[1px] max-[1340px]:pt-[7.5px] max-[1340px]:pb-[5.5px] max-[520px]:pt-[7.81px] max-[520px]:pb-[6.03px]">
                                        <p className="text-sm leading-5 font-normal font-['Inter'] text-[#6D6D6D]  max-[1340px]:text-xs  max-[520px]:text-sml">Støynivå</p>
                                        <p className="text-lg leading-7 font-medium text-[#000000] uppercase max-[1340px]:text-sm max-[520px]:text-xs">70DB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pdi-infor-figure flex flex-col mt-[4px] border-[#D6D6D6] border-[1px] max-[1340px]:mt-[33px] max-[520px]:mt-[29.41px]">
                                <div className="grid grid-cols-2">
                                    <div className="p-[10px] bg-white text-black text-lg leading-7 font-semi-bold max-[1340px]:text-sm">Load</div>
                                    <div className="py-[10px] bg-white flex pl-[70px] text-[#6D6D6D] text-lg leading-7 font-medium max-[1340px]:text-sm max-[1340px]:pl-[15px] max-[520px]:pl-[35px]">99</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="p-[10px] bg-[#F8F8F8] text-black text-lg leading-7 font-semi-bold max-[1340px]:text-sm">Eu Klasse</div>
                                    <div className="py-[10px] bg-[#F8F8F8] flex pl-[70px] text-[#6D6D6D] text-lg leading-7 font-medium max-[1340px]:text-sm max-[1340px]:pl-[15px] max-[520px]:pl-[35px]">C1</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="p-[10px] bg-white text-black text-lg leading-7 font-semi-bold max-[1340px]:text-sm">Bredde</div>
                                    <div className="py-[10px] bg-white flex pl-[70px] text-[#6D6D6D] text-lg leading-7 font-medium max-[1340px]:text-sm max-[1340px]:pl-[15px] max-[520px]:pl-[35px]">205</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="p-[10px] bg-[#F8F8F8] text-black text-lg leading-7 font-semi-bold max-[1340px]:text-sm">Season</div>
                                    <div className="py-[10px] bg-[#F8F8F8] flex pl-[70px] text-[#6D6D6D] text-lg leading-7 font-medium max-[1340px]:text-sm max-[1340px]:pl-[15px] max-[520px]:pl-[35px]">Sommerdekk</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="p-[10px] bg-white text-black text-lg leading-7 font-semi-bold max-[1340px]:text-sm">Profil</div>
                                    <div className="py-[10px] bg-white flex pl-[70px] text-[#6D6D6D] text-lg leading-7 font-medium max-[1340px]:text-sm max-[1340px]:pl-[15px] max-[520px]:pl-[35px]">55</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="p-[10px] bg-[#F8F8F8] text-black text-lg leading-7 font-semi-bold max-[1340px]:text-sm">Diameter</div>
                                    <div className="py-[10px] bg-[#F8F8F8] flex pl-[70px] text-[#6D6D6D] text-lg leading-7 font-medium max-[1340px]:text-sm max-[1340px]:pl-[15px] max-[520px]:pl-[35px]">16</div>
                                </div>

                            </div>
                            <div className="pdi-left-amount pt-[31px] flex flex-row items-center max-[1340px]:pt-[13px] max-[520px]:pt-[12px]">
                                <p className="text-lg leading-7 font-medium text-black  max-[1340px]:text-sm">På lager <span className="text-lg leading-7 font-medium text-[#6D6D6D]  max-[1340px]:text-sm">- </span><span className="text-lg leading-7 font-medium text-[#6D6D6D]  max-[1340px]:text-sm">Levering ca. 3-5 dager</span></p>
                            </div>
                            <div className="pdi-choose-amount flex flex-row gap-[12px] pt-[23px]  max-[1340px]:pt-[8px]  max-[1340px]:gap-[6px] max-[520px]:pt-[35px] max-[520px]:gap-[4.91px]">
                                <div className="choose-amount-pan flex flex-row gap-[2px]">
                                    <div className="choose-item flex justify-center items-center w-[56px] h-[55px] text-4xl leading-7 text-black font-normal font-['Inter'] bg-white border-[#D6D6D6] border-[1px] max-[1340px]:h-[44px] max-[1340px]:text-2xl max-[520px]:w-[49.91px] max-[520px]:h-[39.21px]">-</div>
                                    <div className="choose-item flex justify-center items-center w-[56px] h-[55px] text-lg leading-7 text-black font-normal font-['Inter'] bg-white border-[#D6D6D6] border-[1px] max-[1340px]:h-[44px] max-[1340px]:text-sm max-[520px]:w-[49.91px] max-[520px]:h-[39.21px]">1</div>
                                    <div className="choose-item flex justify-center items-center w-[56px] h-[55px] text-4xl leading-7 text-black font-normal font-['Inter'] bg-white border-[#D6D6D6] border-[1px] max-[1340px]:h-[44px] max-[1340px]:text-2xl max-[520px]:w-[49.91px] max-[520px]:h-[39.21px]" >+</div>
                                </div>
                                <div className="choose-amount-btn-group flex flex-row gap-[11px] max-[1340px]:gap-[6px] max-[520px]:gap-[5.35px]">
                                    <div className="px-[10px] py-[13.5px] flex justify-center items-center bg-[#73C018] max-[1340px]:px-[15px] max-[1340px]:py-[12px] max-[520px]:py-[9.61px] max-[520px]:px-[9.18px]">
                                        <p className="text-lg leading-7 font-normal font-['Inter'] max-[1340px]:text-sm">KJØP DEKK</p>
                                    </div>
                                    <div className="px-[10px] py-[13.5px] flex justify-center items-center bg-[#AAAAAA] max-[1340px]:px-[12px] max-[1340px]:py-[12px] max-[520px]:py-[9.61px] max-[520px]:px-[7.39px]">
                                        <p className="text-lg leading-7 font-normal font-['Inter'] max-[1340px]:text-sm">Gå tilbake</p>
                                    </div>

                                </div>
                            </div>
                            <div className="pdi-category flex flex-row pt-[22px] gap-[7px] max-[1340px]:pt-[11px] max-[1340px]:gap-[5px] max-[520px]:pt-[11.79px]">
                                <p className="text-lg leading-7 font-medium text-black max-[1340px]:text-sm">Kategorier:</p>
                                <p className="text-lg leading-7 font-medium text-[#6D6D6D] max-[1340px]:text-sm">Budget</p>
                            </div>
                            <div className="pdi-chare flex flex-row gap-[13px] pt-[6px] max-[520px]:pt-[5px+]">
                                <p className="text-base font-medium text-[#000000] leading-5 max-[1340px]:text-sm">Share</p>
                                <div className="flex flex-row gap-[20px] max-[1340px]:gap-[14px]">
                                    <Dfacebook />
                                    <Dinstagram />
                                    <Dyoutube />
                                    <Dtwitter />
                                    <Dlinkedin />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-detail-description flex flex-col pt-[21px] pl-[304px] pr-[313px] pb-[145px] bg-white max-[1450px]:px-[80px] max-[1450px]:pt-[15px] max-[1450px]:pb-[11px] max-[488px]:pt-[19px] max-[488px]:px-[16px] max-[488px]:pb-[9px]">
                        <div className="pdd-title border-b-[#F7F7F7] border-b-[1px] pb-[18px] max-[1450px]:pb-[11px]">
                            <p className="text-2xl text-black font-semi-bold max-[1450px]:text-lg">Description</p>
                        </div>
                        <div className="pdd-content pt-[32px] max-[1450px]:pt-[15px]">
                            <p className="text-lg leading-7 font-normal font-['Inter'] text-black max-[1450px]:text-sm">Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur xcepteur sint occaecat cupidatat non proident, sunt.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudinInteger in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper</p>
                        </div>

                    </div>
                    <div className="product-detail-related flex flex-col gap-[33px] pl-[310px] pr-[206px] bg-white pb-[23px] max-[1846px]:px-[80px] max-[1024px]:pb-[82px] max-[1024px]:gap-[41px] max-[745px]:px-[16px] max-[643px]:items-center max-[400px]:gap-[25px] max-[1400px]:pb-[46px]">
                        <div className="pdr-title w-full text-start max-[643px]:justify-center max-[643px]:flex max-[400px]:justify-start">
                            <p className="text-2xl text-black font-semi-bold max-[1024px]:text-lg">Related products</p>
                        </div>
                        <div className="pdr-list grid grid-cols-4 gap-[28px] max-[948px]:grid-cols-3 max-[643px]:flex max-[643px]:flex-wrap max-[643px]:justify-center max-[400px]:gap-[14px]">
                            <div className="pp-product-list-main-product-pan flex flex-col">
                                <div className="pp-product-list-mpp-image bg-[#F5F5F5] w-[331px] h-[312px] relative flex justify-center items-center">
                                    <div className="pp-product-list-mpp-image-outback absolute">
                                        <Image alt="Car accessories image" src={Tyre_22} width={176.52} height={238}></Image>
                                    </div>
                                </div>
                                <div className="pp-product-list-mpp-main-info w-[331px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px] px-[34px]">
                                    <div className="pp-product-list-mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                        <div className="pp-product-list-mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                            <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                        </div>
                                    </div>
                                    <div className="pp-product-list-mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                        <p className="text-lg leading-7 font-semi-bold text-black">Linglong</p>
                                        <p className="text-lg leading-7 font-semi-bold text-black">Sport Master</p>
                                        <p className="pp-product-list-mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 V</p>
                                    </div>
                                    <div className="pp-product-list-mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                        <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                <Tyre_Info_first />
                                            </div>
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                <p className="uppercase text-sm leading-5 font-middle text-black">C</p>
                                            </div>
                                        </div>
                                        <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                <Tyre_Infor_second />
                                            </div>
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                <p className="uppercase text-sm leading-5 font-middle text-black">68</p>
                                            </div>
                                        </div>
                                        <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                <Tyre_Infor_third />
                                            </div>
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pp-product-list-mmp-price pt-[19px] flex flex-row justify-center">
                                        <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 944</span></p>
                                    </div>
                                    <div className="pp-product-list-mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                        <div className="pp-product-list-mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                            <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                        </div>
                                        <div className="pp-product-list-mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                            <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pp-product-list-main-product-pan flex flex-col">
                                <div className="pp-product-list-mpp-image bg-[#F5F5F5] w-[331px] h-[312px] relative flex justify-center items-center">
                                    <div className="pp-product-list-mpp-image-outback absolute">
                                        <Image alt="Car accessories image" src={Tyre_22} width={176.52} height={238}></Image>
                                    </div>
                                </div>
                                <div className="pp-product-list-mpp-main-info w-[331px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px] px-[34px]">
                                    <div className="pp-product-list-mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                        <div className="pp-product-list-mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                            <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                        </div>
                                    </div>
                                    <div className="pp-product-list-mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                        <p className="text-lg leading-7 font-semi-bold text-black">Linglong</p>
                                        <p className="text-lg leading-7 font-semi-bold text-black">Sport Master</p>
                                        <p className="pp-product-list-mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 V</p>
                                    </div>
                                    <div className="pp-product-list-mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                        <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                <Tyre_Info_first />
                                            </div>
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                <p className="uppercase text-sm leading-5 font-middle text-black">C</p>
                                            </div>
                                        </div>
                                        <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                <Tyre_Infor_second />
                                            </div>
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                <p className="uppercase text-sm leading-5 font-middle text-black">68</p>
                                            </div>
                                        </div>
                                        <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                <Tyre_Infor_third />
                                            </div>
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pp-product-list-mmp-price pt-[19px] flex flex-row justify-center">
                                        <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 944</span></p>
                                    </div>
                                    <div className="pp-product-list-mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                        <div className="pp-product-list-mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                            <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                        </div>
                                        <div className="pp-product-list-mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                            <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pp-product-list-main-product-pan flex flex-col">
                                <div className="pp-product-list-mpp-image bg-[#F5F5F5] w-[331px] h-[312px] relative flex justify-center items-center">
                                    <div className="pp-product-list-mpp-image-outback absolute">
                                        <Image alt="Car accessories image" src={Tyre_22} width={176.52} height={238}></Image>
                                    </div>
                                </div>
                                <div className="pp-product-list-mpp-main-info w-[331px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px] px-[34px]">
                                    <div className="pp-product-list-mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                        <div className="pp-product-list-mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                            <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                        </div>
                                    </div>
                                    <div className="pp-product-list-mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                        <p className="text-lg leading-7 font-semi-bold text-black">Linglong</p>
                                        <p className="text-lg leading-7 font-semi-bold text-black">Sport Master</p>
                                        <p className="pp-product-list-mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 V</p>
                                    </div>
                                    <div className="pp-product-list-mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                        <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                <Tyre_Info_first />
                                            </div>
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                <p className="uppercase text-sm leading-5 font-middle text-black">C</p>
                                            </div>
                                        </div>
                                        <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                <Tyre_Infor_second />
                                            </div>
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                <p className="uppercase text-sm leading-5 font-middle text-black">68</p>
                                            </div>
                                        </div>
                                        <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                <Tyre_Infor_third />
                                            </div>
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pp-product-list-mmp-price pt-[19px] flex flex-row justify-center">
                                        <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 944</span></p>
                                    </div>
                                    <div className="pp-product-list-mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                        <div className="pp-product-list-mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                            <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                        </div>
                                        <div className="pp-product-list-mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                            <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pp-product-list-main-product-pan flex flex-col">
                                <div className="pp-product-list-mpp-image bg-[#F5F5F5] w-[331px] h-[312px] relative flex justify-center items-center">
                                    <div className="pp-product-list-mpp-image-outback absolute">
                                        <Image alt="Car accessories image" src={Tyre_22} width={176.52} height={238}></Image>
                                    </div>
                                </div>
                                <div className="pp-product-list-mpp-main-info w-[331px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px] px-[34px]">
                                    <div className="pp-product-list-mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                        <div className="pp-product-list-mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                            <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                        </div>
                                    </div>
                                    <div className="pp-product-list-mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                        <p className="text-lg leading-7 font-semi-bold text-black">Linglong</p>
                                        <p className="text-lg leading-7 font-semi-bold text-black">Sport Master</p>
                                        <p className="pp-product-list-mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 V</p>
                                    </div>
                                    <div className="pp-product-list-mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                        <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                <Tyre_Info_first />
                                            </div>
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                <p className="uppercase text-sm leading-5 font-middle text-black">C</p>
                                            </div>
                                        </div>
                                        <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                <Tyre_Infor_second />
                                            </div>
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                <p className="uppercase text-sm leading-5 font-middle text-black">68</p>
                                            </div>
                                        </div>
                                        <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                <Tyre_Infor_third />
                                            </div>
                                            <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pp-product-list-mmp-price pt-[19px] flex flex-row justify-center">
                                        <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 944</span></p>
                                    </div>
                                    <div className="pp-product-list-mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                        <div className="pp-product-list-mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                            <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                        </div>
                                        <div className="pp-product-list-mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                            <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                        </div>
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

