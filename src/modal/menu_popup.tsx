"use client";
import Cancel from '@/svg/Cancel';
import X_Cancel from '@/svg/X_cancel';
import React, { useState } from 'react';

const MenuPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [isDekkhotell, setIsDekkhotell] = useState(false);
    const [isNewCustomer, setIsNewCustomer] = useState(false);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center">
            <div className="bg-gray-900 text-gray-200 rounded-3xl p-6 md:p-8 w-[90%] md:w-[891px] max-w-full border border-blue-500">
                <div className="mb-4 flex flex-row">
                    <h3 className="text-lg font-semibold">Main Menu</h3>
                    <div className='flex'>

                        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Sign up</button>
                        <div onClick={onClose}>
                            <X_Cancel/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-6">
                    <div className="flex flex-col space-y-3">
                        <div className="flex flex-col">
                            <button
                                onClick={() => setIsDekkhotell(!isDekkhotell)}
                                className="text-left text-blue-400 hover:text-blue-600"
                            >
                                BOOK TID FOR DEKKSKIFT
                            </button>
                            {isDekkhotell && (
                                <div className="pl-4 mt-2">
                                    <p>Er du dekkhotell Kunde?</p>
                                    <label className="flex items-center mt-1">
                                        <input
                                            type="checkbox"
                                            checked={isNewCustomer}
                                            onChange={() => setIsNewCustomer(!isNewCustomer)}
                                            className="mr-2"
                                        />
                                        <span>Ja</span>
                                    </label>
                                    <label className="flex items-center mt-1">
                                        <input
                                            type="checkbox"
                                            checked={!isNewCustomer}
                                            onChange={() => setIsNewCustomer(false)}
                                            className="mr-2"
                                        />
                                        <span>Nei</span>
                                    </label>
                                    <p className="mt-2">Ønsker du å bli Dekkhotell Kunde?</p>
                                    <label className="flex items-center mt-1">
                                        <input type="checkbox" className="mr-2" />
                                        <span>Ja</span>
                                    </label>
                                    <label className="flex items-center mt-1">
                                        <input type="checkbox" className="mr-2" />
                                        <span>Nei, ønsker kun dekkskift</span>
                                    </label>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <button className="text-left text-blue-400 hover:text-blue-600">NY KUNDE</button>
                        </div>
                        <div className="flex flex-col">
                            <button className="text-left text-blue-400 hover:text-blue-600">OMLEGG / AVBALANSERING</button>
                        </div>
                        <div className="flex flex-col">
                            <button className="text-left text-blue-400 hover:text-blue-600">REPRASJON / PUNKTERING</button>
                        </div>
                        <div className="flex flex-col">
                            <button className="text-left text-blue-400 hover:text-blue-600">NYE DEKK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuPopup;



