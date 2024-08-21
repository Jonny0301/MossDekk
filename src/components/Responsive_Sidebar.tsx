import React from 'react';
import logo_image from '../../public/image/autobutler.png';
import Image from 'next/image';
import Link from 'next/link';
import Report_logo from "../../public/image/report_logo.png"
interface ResponsiveSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Responsive_Sidebar: React.FC<ResponsiveSidebarProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render if not open

    return (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={onClose}>
            <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden h-svh" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-center h-20 shadow-md px-4">
                    <div className='w-32 header-logo flex justify-center items-center' style={{ "height": "69.54px" }}>
                        <Link href='/'>
                            <Image alt="" src={Report_logo} width={128} height={69.54} />
                        </Link>
                    </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        <i className="bx bx-x text-2xl"></i> {/* Close icon */}
                    </button>
                </div>
                <ul className="flex flex-col py-4">
                    <li>
                        <Link href="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                            <span className="text-sm font-medium">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                            <span className="text-sm font-medium">Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
                            <span className="text-sm font-medium">Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/aboutus" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
                            <span className="text-sm font-medium">About Us</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/pricing" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
                            <span className="text-sm font-medium">Prices</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
                            <span className="text-sm font-medium">Contact</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
                            <span className="text-sm font-medium">Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Responsive_Sidebar;
