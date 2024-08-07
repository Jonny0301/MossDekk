// components/Calendar.tsx
import { useState, useEffect } from 'react';
import TimeSlotSelector from './TimeSlotSelector'; // Import the TimeSlotSelector
import Calendar_larrow from '@/svg/Calendar_larrow';
import Calendar_rarrow from '@/svg/Calendar_rarrow';
import Calendar_x from '@/svg/Calendar_x';
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
};

// Function to generate random disabled days
const getRandomDisabledDays = (daysInMonth: number) => {
    const disabledDays = new Set<number>();
    while (disabledDays.size < 5) { // Change the number to adjust how many days to disable
        const randomDay = Math.floor(Math.random() * daysInMonth) + 1;
        disabledDays.add(randomDay);
    }
    return Array.from(disabledDays);
};

const Calendar = () => {
    const [currentMonthIndex, setCurrentMonthIndex] = useState(6); // July
    const [selectedDay, setSelectedDay] = useState<{ day: number; month: number } | null>(null);
    const [year, setYear] = useState(2024); // Start year
    const [disabledDays, setDisabledDays] = useState<number[]>([]); // State for disabled days

    useEffect(() => {
        // Initialize disabled days only once when the component mounts
        const daysInMonth = getDaysInMonth(currentMonthIndex, year);
        const randomDisabledDays = getRandomDisabledDays(daysInMonth);
        setDisabledDays(randomDisabledDays);
    }, [currentMonthIndex, year]); // Only run when month or year changes

    const updateCalendars = (offset: number) => {
        setCurrentMonthIndex((prevIndex) => {
            const newIndex = prevIndex + offset;

            // Adjust month and year based on the new index
            if (newIndex > 11) {
                setYear((prevYear) => prevYear + 1); // Move to next year
                return 0; // Reset to January
            } else if (newIndex < 0) {
                setYear((prevYear) => prevYear - 1); // Move to previous year
                return 11; // Reset to December
            }
            return newIndex; // Return the new month index
        });
    };

    const renderDays = (monthIndex: number) => {
        const daysInMonth = getDaysInMonth(monthIndex, year);
        const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

        const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();
        const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => null);

        return (
            <div className="grid grid-cols-7 gap-[8px] max-[772px]:w-[334px]">
                {weekdays.map((day) => (
                    <div key={day} className="text-center text-sm leading-3 font-semi-bold font-['Inter'] text-black pb-[12px]">{day}</div>
                ))}
                {emptyDays.map((_, index) => (
                    <div key={index} className="text-center"></div>
                ))}
                {daysArray.map((day) => {
                    const isWeekend = new Date(year, monthIndex, day).getDay() === 0 || new Date(year, monthIndex, day).getDay() === 6;
                    const isDisabled = disabledDays.includes(day);
                    return (
                        <div
                            key={day}
                            className={`text-center cursor-pointer text-base leading-6 font-normal text-[#73C018] font-['Inter'] ${selectedDay?.day === day && selectedDay.month === monthIndex ? 'bg-blue-300' : ''
                                } ${isWeekend ? 'text-[#E21632]' : ''} ${isDisabled ? 'text-[#888888] cursor-not-allowed' : ''}`}
                            onClick={() => !isDisabled && setSelectedDay({ day, month: monthIndex })}
                        >
                            {day}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="pt-[64px] pl-[14px] pr-[13px] pb-[18px] relative rounded max-[772px]:p-0">
            <div className="grid grid-cols-2 gap-[56px] max-[772px]:grid-cols-1">
                <div className='absolute top-[18px] right-[13px] max-[772px]:top-[-45px]'>
                    <Calendar_x/>
                </div>
                <div className="max-[772px]:flex max-[772px]:flex-col max-[772px]:items-center">
                    <div className='pb-[32px] flex flex-row gap-[84px] items-center max-[772px]:gap-0 max-[772px]:justify-between max-[772px]:w-[334px]'>

                        <button onClick={() => updateCalendars(-1)} className="p-[8px] text-white border-[#73C018] border-[1px] rounded">
                            <Calendar_rarrow />
                        </button>
                        <h3 className="text-sm leading-5 text-[#4A5660] font-semi-bold">{months[(currentMonthIndex - 1 + 12) % 12]} {currentMonthIndex === 0 ? year - 1 : year}</h3>
                        <button onClick={() => updateCalendars(1)} className="p-[8px] text-white border-[#73C018] border-[1px] rounded hidden max-[772px]:block">
                            <Calendar_larrow />
                        </button>
                    </div>
                    {renderDays((currentMonthIndex - 1 + 12) % 12)}
                </div>
                <div className="max-[772px]:hidden">
                    <div className='pb-[32px] flex flex-row-reverse gap-[89px] justify-start items-center'>
                        <button onClick={() => updateCalendars(1)} className="p-[8px] text-white border-[#73C018] border-[1px] rounded">
                            <Calendar_larrow />
                        </button>

                        <h3 className="text-sm leading-5 text-[#4A5660] font-semi-bold">{months[currentMonthIndex]} {year}</h3>
                    </div>

                    {renderDays(currentMonthIndex)}
                </div>
            </div>
            {selectedDay && (
                <div className="mt-4">
                    <p className="text-green-600">Selected Day: {selectedDay.day} {months[selectedDay.month]} {year}</p>
                </div>
            )}
            <TimeSlotSelector /> {/* Include the TimeSlotSelector here */}
            <div className='pt-[20px] flex flex-col max-[772px]:hidden'>
                <p className='text-base leading-6 font-medium'>*Note:</p>
                <div className='flex flex-row gap-[4px] items-center pt-[10px]'>
                    <div className='w-[11px] h-[11px] bg-[#EF4225] rounded'></div>
                    <p className='text-xs leading-4 font-normal font-["Inter"]'>Time not available</p>
                </div>
                
                <div className='flex flex-row gap-[4px] items-center pt-[8px]'>
                    <div className='w-[11px] h-[11px] bg-[#73C018] rounded'></div>
                    <p className='text-xs leading-4 font-normal font-["Inter"]'>Available time</p>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
