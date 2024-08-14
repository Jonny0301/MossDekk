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
import { SetStateAction, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Pricing() {

    // const [selectedItems, setSelectedItems] = useState([]);
    // const [inputValue, setInputValue] = useState('');
    // const suggestions = ['Winter', 'Spring', 'Summer', 'Autumn', 'Rainy', 'Dry'];

    // const addItem = (item: string) => {
    //     if (!selectedItems.includes(item)) {
    //         setSelectedItems([...selectedItems, item]);
    //     }
    //     setInputValue('');
    // };

    // const removeItem = (item: never) => {
    //     setSelectedItems(selectedItems.filter(i => i !== item));
    // };

    // const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    //     setInputValue(e.target.value);
    // };

    // const handleKeyDown = (e: { key: string; }) => {
    //     if (e.key === 'Enter' && inputValue) {
    //         addItem(inputValue);
    //     }
    // };
    // const [tyres, setTyres] = useState<any>(null);
    // const [error, setError] = useState<string | null>(null);

    // const fetchTyres = async () => {
    //     const season = 'summer'; // Example value, replace as needed
    //     const sizeOne = '205'; // Example value, replace as needed
    //     const sizeTwo = '55'; // Example value, replace as needed
    //     const sizeThree = '16'; // Example value, replace as needed

    //     try {
    //         const response = await fetch('/api/fetchTyres', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ season, sizeOne, sizeTwo, sizeThree }),
    //         });

    //         const data = await response.json();
    //         if (data[0] === 'success') {
    //             setTyres(data);
    //         } else {
    //             setError('No tyres found');
    //         }
    //     } catch (err) {
    //         console.error('Error fetching tyres:', err);
    //         setError('Failed to fetch tyres');
    //     }
    // };
    // useEffect(()=>{
    //     fetchTyres();
    // }, [])
    return (
        <div className="home-container flex flex-col">
            <Header />
            <main style={{ "width": '100%' }}>
                <div className="main-container flex flex-col justify-center w-[100%]">
                    <Main_Image />
                    <div className="products-pan flex flex-col pt-[55px] pr-[243px] pl-[240px] pb-[63px] w-full">
                        <div className="products-pan-title flex flex-row pb-[39px]">
                            <div className="ppt-main-title pr-[439px]">
                                <p className="text-5xl leading-none font-medium text-[#73C018]">Shop</p>
                            </div>
                            <div className="ppt-cat-type flex flex-row gap-[8px]">
                                <div className="ppt-cat-type-title p-[10px] border-b-[1px] border-[#73C018]">
                                    <p className="text-2xl leading-8 font-semi-bold text-[#73C018]">Winter tires</p>
                                </div>
                                <div className="ppt-cat-type-title p-[10px]">
                                    <p className="text-2xl leading-8 font-semi-bold">Summer tires</p>
                                </div>
                            </div>
                        </div>

                        <div className="main-product-pan flex flex-row gap-[37px]">
                            <div className=" flex flex-col main-ppp-pan">
                                <div className="products-total-amount pb-[61px]">
                                    <p className="text-lg leading-7 font-normal font-['Inter']">Showing all 9 results</p>
                                </div>
                                <div className="pp-product-list flex flex-row flex-wrap grid grid-cols-3 gap-x-[38px] gap-y-[35px]">
                                    <div className="pp-product-list-main-product-pan flex flex-col">
                                        <div className="pp-product-list-mpp-image bg-[#F5F5F5] w-[331px] h-[312px] relative flex justify-center items-center">
                                            <div className="pp-product-list-mpp-image-outback absolute">
                                                <Image alt="" src={Tyre_22} width={176.52} height={238}></Image>
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
                                                <Image alt="" src={Tyre_22} width={176.52} height={238}></Image>
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
                                                <Image alt="" src={Tyre_22} width={176.52} height={238}></Image>
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
                                                <Image alt="" src={Tyre_22} width={176.52} height={238}></Image>
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
                                                <Image alt="" src={Tyre_22} width={176.52} height={238}></Image>
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
                                                <Image alt="" src={Tyre_22} width={176.52} height={238}></Image>
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
                                                <Image alt="" src={Tyre_22} width={176.52} height={238}></Image>
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
                                                <Image alt="" src={Tyre_22} width={176.52} height={238}></Image>
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
                                                <Image alt="" src={Tyre_22} width={176.52} height={238}></Image>
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
                            <div className="mpp-category-control-pan flex flex-col gap-[19px]">
                                <div className="category-control-main-cat-info flex flex-col gap-[19px]">
                                    <div className="main-cat-search-title">
                                        <p className="text-2xl leading-8 font-semi-bold text-[#73C018]">Search Tires</p>
                                    </div>
                                    <div className="main-cat-select-cat flex flex-col gap-[7px]">
                                        <div className="mcscat-title">
                                            <p className="text-xl leading-7 font-normal font-['Inter'] text-[#73C018]">Kategorier</p>
                                        </div>
                                        <div className="mcscat-select-tag flex flex-row w-[333px] h-[44px] py-[5px] pl-[9px] gap-[7px] bg-[#F4F4F7] rounded-[4px]">
                                            <div className="mcscat-select-tag-item bg-[#73C018] rounded-[4px] py-[3px] px-[10px]">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] text-white">Budget</p>
                                            </div>
                                            <div className="mcscat-select-tag-item bg-white rounded-[4px] py-[3px] px-[10px]">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Quality</p>
                                            </div>
                                            <div className="mcscat-select-tag-item bg-white rounded-[4px] py-[3px] px-[10px]">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Premium</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="category-exact-cat-info flex flex-col gap-[16px]">
                                    <div className="cat-info-item flex flex-col gap-[10px]">
                                        <div className="cat-info-item-title">
                                            <p className="text-xl leading-7 font-normal font-['Inter'] text-[#73C018]">Min Hastighet</p>
                                        </div>
                                        <div className="cat-info-input relative">
                                            <select
                                                className="h-[52px] block w-full pr-[13px] pl-[10px] py-[12px] border border-gray-300 shadow-sm focus:outline-none bg-[#EEF2F3] uppercase focus:border-indigo-0 rounded-[4px] text-black text-lg font-norml font-['Inter'] leading-7 appearance-none"
                                            >
                                                <option value="k" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>K</option>
                                                <option value="L" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>L</option>
                                                <option value="m" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>M</option>
                                                <option value="n" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>N</option>
                                                <option value="o" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>O</option>
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
                                    <div className="cat-info-item flex flex-col gap-[10px]">
                                        <div className="cat-info-item-title">
                                            <p className="text-xl leading-7 font-normal font-['Inter'] text-[#73C018]">Min Lasting</p>
                                        </div>
                                        <div className="cat-info-input relative">
                                            <select
                                                className="h-[52px] block w-full pr-[13px] pl-[10px] py-[12px] border border-gray-300 shadow-sm focus:outline-none bg-[#EEF2F3] uppercase focus:border-indigo-0 rounded-[4px] text-black text-lg font-norml font-['Inter'] leading-7 appearance-none"
                                            >
                                                <option value="50" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>50</option>
                                                <option value="51" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>51</option>
                                                <option value="52" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>52</option>
                                                <option value="53" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>53</option>
                                                <option value="54" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>54</option>
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
                                    <div className="cat-info-item flex flex-col gap-[10px]">
                                        <div className="cat-info-item-title">
                                            <p className="text-xl leading-7 font-normal font-['Inter'] text-[#73C018]">Type</p>
                                        </div>
                                        <div className="cat-info-input cat-info-input-special relative max-w-[333px]">
                                            <div className="h-[52px] block w-full pr-[13px] pl-[10px] py-[10px] border border-gray-300 shadow-sm bg-[#EEF2F3] rounded-[4px] flex">
                                                <div className="flex flex-row bg-white border border-[#222222]-300 px-[8px] py-[5px] rounded-[4px] gap-[10px]">
                                                    <button className="text-red-500 hover:text-red-700">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#73C018" />
                                                            <path d="M15 9L9 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M9 9L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </button>
                                                    <span className="text-base leading-6 font-normal font-['Inter'] text-black">Winter</span>
                                                </div>
                                                {/* <input
                                                    className="pl-[10px] flex-1 focus:outline-none uppercase focus:border-indigo-0 rounded-[4px] text-black text-lg font-norml bg-[#EEF2F3] font-['Inter'] leading-7 appearance-none"
                                                /> */}

                                            </div>

                                        </div>
                                    </div>
                                    <div className="cat-info-btn-group flex flex-row gap-[4px]">
                                        <div className="py-[12px] px-[107px] rounded-[4px] bg-[#73C018] cat-info-search-btn">
                                            <p className="text-xl leading-7 font-normal font-['Inter']">Search</p>
                                        </div>
                                        <div className="cat-info-reset-btn py-[14px] px-[13px] rounded-[4px] bg-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M1 4V10H7" stroke="#6D6D6D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3.51 14.9999C4.15839 16.8403 5.38734 18.4201 7.01166 19.5013C8.63598 20.5825 10.5677 21.1065 12.5157 20.9944C14.4637 20.8823 16.3226 20.1401 17.8121 18.8797C19.3017 17.6193 20.3413 15.9089 20.7742 14.0063C21.2072 12.1037 21.0101 10.1119 20.2126 8.33105C19.4152 6.55019 18.0605 5.07674 16.3528 4.13271C14.6451 3.18868 12.6769 2.82521 10.7447 3.09707C8.81245 3.36892 7.02091 4.26137 5.64 5.63995L1 9.99995" stroke="#6D6D6D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
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


