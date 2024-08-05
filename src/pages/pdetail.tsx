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
import { Navigation} from "swiper/modules";
import { Thumbs } from "swiper/modules";
import 'swiper/swiper-bundle.css'; 
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
                    <div className="product-detail-pan flex flex-row pt-[24px] pl-[309px] pr-[389px] pb-[91px] gap-[105px] bg-[#F7F7F7]">
                        <div className="product-detail-image-pan flex flex-col gap-[13px]">
                            <div className="pd-image w-[640px] h-[700px] flex justify-center items-center bg-white">
                                <Image src={Product_detail} alt="" className="w-[306px] h-[478px]"></Image>
                            </div>
                            <div className="pd-carsouel flex flex-row gap-[12px] justify-between">
                                <div className="pd-carsouel-item w-[149px] h-[150px] border-[#73C018] border-[2px] bg-white flex justify-center items-center">
                                    <Image src={Product_detail} alt="" className="w-[82px] h-[128px]" />
                                </div>
                                <div className="pd-carsouel-item w-[149px] h-[150px] bg-white flex justify-center items-center">
                                    <Image src={Product_detail} alt="" className="w-[82px] h-[128px]" />
                                </div>
                                <div className="pd-carsouel-item w-[149px] h-[150px] bg-white flex justify-center items-center">
                                    <Image src={Product_detail} alt="" className="w-[82px] h-[128px]" />
                                </div>
                                <div className="pd-carsouel-item w-[149px] h-[150px] bg-white flex justify-center items-center">
                                    <Image src={Product_detail} alt="" className="w-[82px] h-[128px]" />
                                </div>
                            </div>
                        </div>
                        <div className="product-detail-infor-pan flex flex-col">
                            
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

