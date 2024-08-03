import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/Partner";
import Main_Image from "@/components/Main_Image"
import Google_map from "../../public/image/googlemap.png"
import Map_pin from "@/svg/Map_pin";
import Phone_Call_One from "@/svg/Phonecall_one";
import Contact_mail from "@/svg/Contact_mail";
import Input_user from "@/svg/Input_User";
import Input_alert from "@/svg/Input_alert";
import Input_mail from "@/svg/Input_Mail";
import Input_pen from "@/svg/Input_pen";
import Input_phone from "@/svg/Input_phone";
import Send from "@/svg/Send";
import { MdCheckBox } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
    return (
        <div className="home-container flex flex-col">
            <Header />
            <main style={{ "width": '100%' }}>
                <div className="main-container flex flex-col justify-center w-[100%]">
                    <Main_Image />
                    <div className="google-map w-full">
                        <div className='relative w-full h-[655px] top-0 right-0 google-image'>
                            <Image
                                alt="Background"
                                src={Google_map}
                                fill
                                style={{ objectFit: 'cover' }}
                                className='w-full h-full'
                            />

                        </div>
                    </div>
                    <div className="contact-pan flex flex-col px-[208px] pt-[125px] pb-[132px] gap-[23px] bg-white">
                        <div className="contact-pan-title">
                            <p className="text-[#73c018] text-lg font-semi-bold font-['Inter'] leading-7">CONTACT US</p>
                        </div>
                        <div className="contact-pan-content flex flex-row gap-[122px]">
                            <div className="cpc-question flex flex-col gap-[40px]">
                                <div className="cpc-question-title">
                                    <p className="w-[310px] text-black text-4xl font-semi-bold font-['Inter'] leading-10">Have Questions? Get In Touch!</p>
                                </div>
                                <div className="cpc-question-contnet flex flex-col gap-[26px]">
                                    <div className="cpc-question-content-text">
                                        <p className="w-[680px] text-justify text-[#6d6d6d] text-lg font-normal font-['Inter'] leading-7">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                                    </div>
                                    <div className="cpc-question-content-item flex flex-col gap-[20px]">
                                        <div className="cpcqc-item-list flex flex-row items-center gap-[23px]">
                                            <Map_pin />
                                            <p className="text-justify text-[#6d6d6d] text-lg font-normal font-['Inter'] leading-7">Moss Dekk AS Skredderveien 5, 1537 Moss</p>
                                        </div>
                                        <div className="cpcqc-item-list flex flex-row items-center gap-[23px]">
                                            <Phone_Call_One />
                                            <p className="text-justify text-[#6d6d6d] text-lg font-normal font-['Inter'] leading-7">+47 45022450</p>
                                        </div>
                                        <div className="cpcqc-item-list flex flex-row items-center gap-[23px]">
                                            <Contact_mail />
                                            <p className="text-justify text-[#6d6d6d] text-lg font-normal font-['Inter'] leading-7">post@mossdekk.no</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cpc-information-input flex flex-col gap-[66px]">
                                <div className="cpc-infor-input-pan gap-[55px] flex flex-col">
                                    <div className="cpc-iip-list flex flex-row gap-[28px]">
                                        <div className="flex w-[334px] gap-[19px] items-center border-b border-[#aaaaaa] pb-[17px]">
                                            <Input_user />
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="appearance-none bg-transparent border-none w-full text-[#6d6d6d] text-lg font-['Inter'] leading-tight focus:outline-none placeholder-[#6d6d6d]"
                                                required={true}
                                            />
                                        </div>
                                        <div className="flex w-[334px] gap-[19px] items-center border-b border-[#aaaaaa] pb-[17px]">
                                            <Input_mail />
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="appearance-none bg-transparent border-none w-full text-[#6d6d6d] text-lg font-['Inter'] leading-tight focus:outline-none placeholder-[#6d6d6d]"
                                                required={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="cpc-iip-list flex flex-row gap-[28px]">
                                        <div className="flex w-[334px] gap-[19px] items-center border-b border-[#aaaaaa] pb-[17px]">
                                            <Input_phone />
                                            <input
                                                type="tel"
                                                placeholder="Phone"
                                                className="appearance-none bg-transparent border-none w-full text-[#6d6d6d] text-lg font-['Inter'] leading-tight focus:outline-none placeholder-[#6d6d6d] placeholder-text"
                                                required={true}
                                            />
                                        </div>
                                        <div className="flex w-[334px] gap-[19px] items-center border-b border-[#aaaaaa] pb-[17px]">
                                            <Input_alert />
                                            <input
                                                type="text"
                                                placeholder="Subject"
                                                className="appearance-none bg-transparent border-none w-full text-[#6d6d6d] text-lg font-['Inter'] leading-tight focus:outline-none placeholder-[#6d6d6d]"
                                                required={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="cpc-iip-list responsive-cpc-iip-list flex flex-row gap-[28px]">
                                        <div className="flex flex-col w-full responsive-cpc-iip-list-item">
                                            <div className="cpc-iip-list-title flex items-center flex-row gap-[16px]">
                                                <Input_pen />
                                                <p className="text-justify text-[#6d6d6d] text-lg font-normal font-['Inter'] leading-7">How can we help you? Feel free to get in touch!</p>
                                            </div>
                                            <div className="flex w-full gap-[19px] items-center border-b border-[#aaaaaa] py-[17px]">
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="appearance-none bg-transparent border-none w-full text-[#6d6d6d] text-lg font-['Inter'] leading-tight focus:outline-none placeholder-[#6d6d6d]"
                                                    required={true}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cpc-infor-confirm-btn flex items-center flex-row gap-[48px]">
                                    <div className="w-[235px] h-[61px] p-2.5 bg-[#73c018] justify-center items-center gap-2.5 inline-flex">
                                        <div className="w-6 h-6 relative"><Send /></div>
                                        <p className="text-justify text-white text-lg font-normal font-['Inter'] leading-7">GET IN TOUCH</p>
                                    </div>
                                    <div className="h-6 flex flex-row items-center gap-[7px]">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-5 w-5 text-blue-600"
                                        />
                                        <div className="text-justify flex flex-row"><p className="text-[#6d6d6d] text-base font-normal font-['Inter'] leading-normal">I agree with the site’s <a className="text-[#6d6d6d] text-base font-normal font-['Inter'] underline leading-normal">privacy policy.</a></p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>
        </div>
    );
}
