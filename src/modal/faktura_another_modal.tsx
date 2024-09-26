import React, { useEffect, useRef, useState } from 'react';
import X_Cancel from "@/svg/X_cancel";
import ArrowDropUp from '@/svg/ArrowDropUp';
import ArrowDropDown_O from '@/svg/ArrowDropDown_O';
import Cheveron_Left from '@/svg/Cheveron_Left';
import Cheveron_Right from '@/svg/Cheveron_Right';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Faktura_Another_Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Firmakunde/faktura");

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;

  const toggleDropdown = () => setIsOpenDropdown(prev => !prev);

  const handleOptionClick = (option: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedOption(option);
    setIsOpenDropdown(false);
  };
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div ref={modalRef} className="w-[838px] max-h-[100vh] overflow-y-auto hide-scrollbar flex flex-col h-[480px]">
        <div className="px-[30px] py-[31px] flex flex-row justify-between bg-[#18181B] items-center max-[590px]:p-[15px]">
          <p className="text-lg leading-7 font-medium text-[#73C018] max-[590px]:text-sm">Beataling Alternativ</p>
          <div onClick={onClose} className='cursor-pointer'>
            <X_Cancel />
          </div>
        </div>
        <div className="pt-[63px] bg-[#1F1F1F] pl-[31px] pr-[21px] pb-[26px] gap-[72px] h-full flex flex-col justify-between">
          <div className="relative w-full flex flex-col gap-[20px] max-[610px]:items-center max-[610px]:gap-[10px]">
            <div className='flex flex-row gap-[31px] max-[610px]:flex-col max-[610px]:items-center max-[610px]:gap-[15px]'>

              <div className='w-[]200px'>
                <p className='text-lg leading-7 font-normal font-["Inter"]'>Velg en betalings måte:</p>
              </div>
              <div className='flex'>

                <div
                  className="h-[44px] w-[305px] flex items-center justify-center relative px-[16px] text-lg font-medium leading-7 text-white bg-[#18181B] rounded-[8px] border-[#73C018] border-[2px] cursor-pointer"
                  onClick={toggleDropdown}
                >
                  {selectedOption}
                  <div className='absolute right-[10px]'>
                    {isOpenDropdown ? <ArrowDropUp /> : <ArrowDropDown_O />}
                  </div>


                </div>
                {isOpenDropdown && (
                  <div className="absolute z-10 w-[305px] mt-[50px] border-[1px] border-[#818182] bg-[#18181B] rounded-[8px] shadow-lg pt-[12px] pb-[8px] gap-[2px]">
                    <div
                      className="cursor-pointer py-[3px] text-white hover:bg-[#73C018] hover:bg-[#1F1F1F] text-lg leading -7 font-normal font-['Inter'] text-center"
                      onClick={(e) => { handleOptionClick("Firmakunde/faktura", e) }}
                    >
                      Firmakunde/faktura
                    </div>
                    <div
                      className="cursor-pointer py-[3px] text-white hover:bg-[#73C018] hover:bg-[#1F1F1F] text-lg leading -7 font-normal font-['Inter'] text-center"
                      onClick={(e) => { handleOptionClick("Vipps/Kortbeating/debetaling", e)}}
                    >
                      Vipps/Kortbeating/debetaling
                    </div>
                    <div
                      className="cursor-pointer py-[3px] text-white hover:bg-[#73C018] hover:bg-[#1F1F1F] text-lg leading -7 font-normal font-['Inter'] text-center"
                      onClick={(e) => { handleOptionClick("Admin", e)}}
                    >
                      Admin
                    </div>
                  </div>
                )}
              </div>
            </div>
            {selectedOption =="Firmakunde/faktura"&&
            <>
            <div className='flex flex-row gap-[31px] max-[610px]:flex-col max-[610px]:items-center max-[610px]:gap-[15px]'>

              <div className='w-[200px] max-[610px]:text-center'>
                <p className='text-lg leading-7 font-normal font-["Inter"]'>Organisation Nr:</p>
              </div>
              <div className='flex'>
                <input
                  placeholder='Org Nr'
                  className="modal-input h-[44px] focus:outline-none focus:ring-0 focus:border-[#73C018] w-[305px] flex items-center text-center justify-center px-[16px] text-lg font-medium leading-7 text-white bg-[#18181B] rounded-[8px] border-[#73C018] border-[2px] cursor-pointer"
                >
                </input>
              </div>
            </div>
            <div className='flex flex-row gap-[31px] max-[610px]:flex-col max-[610px]:items-center max-[610px]:gap-[15px]'>

              <div className='w-[200px] max-[610px]:text-center'>
                <p className='text-lg leading-7 font-normal font-["Inter"]'>Referance/info:</p>
              </div>
              <div className='flex'>

                <input
                  placeholder='Referance/info'
                  className="modal-input h-[44px] focus:outline-none focus:ring-0 focus:border-[#73C018] w-[305px] flex items-center text-center justify-center px-[16px] text-lg font-medium leading-7 text-white bg-[#18181B] rounded-[8px] border-[#73C018] border-[2px] cursor-pointer"
                >
                </input>

              </div>
            </div>
            </>}
          </div>
          <div className='flex flex-row justify-end gap-[9px]'>
            <div className='rounded-[8px] p-[10px] bg-[#E7E7E7] gap-[2px] flex flex-row items-center cursor-pointer'>
              <Cheveron_Left />
              <p className='text-lg leading-7 font-normal font-["Inter"] text-black'>Tilbake</p>
            </div>
            <div className='rounded-[8px] p-[10px] bg-[#73C018] gap-[2px] flex flex-row items-center cursor-pointer'>
              <p className='text-lg leading-7 font-normal font-["Inter"] text-white'>Fortsett</p>
              <Cheveron_Right />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faktura_Another_Modal;