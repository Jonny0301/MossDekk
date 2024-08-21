'use client'
import React from 'react';
import logo_image from '../../public/image/autobutler.png'
import SearchIcon from '../svg/SerachIcon'
import ShoppingCart from '../svg/ShoppingCart';
import CountryUS from '../svg/CountryUS';
import ArrowDropDown from '../svg/ArrowDropDown';
import Menu from '../svg/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import Responsive_Sidebar from './Responsive_Sidebar';
export default function Header() {
    const [isToggleSidebar, setIsToggleSidebar]=useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    };
    return (
    <header className="flex flex-row pl-[208px] pr-[226px] responsive-header">
        <div className='py-3 flex flex-row header-content'>
            <div className='w-32 header-logo' style={{"height":"69.54px"}}>
                <Link href='/'>
                <Image alt="" src={logo_image} width={128} height={69.54}/>

                </Link>
            </div>
            <div className='flex flex-row pl-[183px] pr-[176px] items-center header-nav-item'>
                <Link className='text-white text-lg font-semi-bold leading-7 pr-[56px] nav-item-tag' href='/'>Home</Link>
                <Link className='text-white text-lg font-semi-bold leading-7 pr-[56px] nav-item-tag' href='/'>Service</Link>
                <Link className='text-white text-lg font-semi-bold leading-7 pr-[56px] nav-item-tag' href='/products'>Products</Link>
                <Link className='text-white text-lg font-semi-bold leading-7 pr-[56px] nav-item-tag' href='/aboutus'>About Us</Link>
                <Link className='text-white text-lg font-semi-bold leading-7 pr-[56px] nav-item-tag' href='/pricing'>Prices</Link>
                <Link className='text-white text-lg font-semi-bold leading-7' href='/contact'>Contact</Link>
            </div>
            <div className='flex flex-row items-center'>
            <div className='flex flex-row responsive-language'>
                    <div className='mr-[5px] w-[20px] h-[20px]'>
                        <CountryUS />
                        {/* <CountryUS width="20px" height="20px" /> */}
                    </div>
                    <div className='text-white text-sm mr-[5px]'>
                        English
                    </div>
                    <div className='mt-[-2px]'>
                        <ArrowDropDown />
                    </div>
                </div>
                <div className='mr-[13px] header-search-icon w-[24px] h-[24px]'>
                    <SearchIcon />
                    {/* <SearchIcon width="24px" height="24px" /> */}
                </div>
                <div className='mr-[21px] relative header-shopping-cart w-[24px] h-[24px]'>
                    <ShoppingCart />
                    {/* <ShoppingCart width="24px" height="24px" /> */}
                    <div className='absolute rounded-full bg-[#e21632] w-[16px] h-[16px] flex items-center justify-center top-[-3px] right-[-6px]'><span className='text-white text-xs font-medium leading-none'>2</span></div>
                </div>
                <div className='pr-[18px] text-white text-lg font-semi-bold leading-7 header-username'>
                    Hanh BV
                </div>
                <div className='flex flex-row select-language'>
                    <div className='mr-[5px] w-[20px] h-[20px]'>
                        <CountryUS />
                        {/* <CountryUS width="20px" height="20px"/> */}
                    </div>
                    <div className='text-white text-sm mr-[5px]'>
                        English
                    </div>
                    <div className='mt-[-2px]' onClick={toggleSidebar}>
                        <ArrowDropDown />
                    </div>
                </div>
                <div className='show-nav-bar' onClick={toggleSidebar}>
                    <Menu />
                </div>
            </div>
        </div>
        <Responsive_Sidebar isOpen={isOpen} onClose={toggleSidebar} />

    </header>
  );
};



