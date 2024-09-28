import { useState, useEffect, use } from 'react';
import TimeSlotSelector from './TimeSlotSelector'; // Import the TimeSlotSelector
import Calendar_larrow from '@/svg/Calendar_larrow';
import Calendar_rarrow from '@/svg/Calendar_rarrow';
import Calendar_x from '@/svg/Calendar_x';
import axios from 'axios';
const backend_url = process.env.NEXT_PUBLIC_API_URL

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

interface CalendarProps {
  onDateTimeSelected: (dateTime: string) => void; // Prop to handle selected date and time
  // isOpen: boolean;
  closeCalendar: () => void; // Prop to close the calendar
}

const Calendar: React.FC<CalendarProps> = ({ onDateTimeSelected, closeCalendar }) => {
  const [firstMonthIndex, setFirstMonthIndex] = useState(new Date().getMonth()); // Start with current month
  const [year, setYear] = useState(new Date().getFullYear()); // Current year
  const [selectedDay, setSelectedDay] = useState<{ day: number; month: number } | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [timeSlots, setTimeSlots] = useState<string[]>([]); // State for time slots
  const [closed, setClosed] = useState<boolean>(false);
  // Compute the second month index based on the first month index
  const secondMonthIndex = (firstMonthIndex + 1) % 12;
  const secondMonthYear = firstMonthIndex === 11 ? year + 1 : year; // Handle year change if December
  // if (!isOpen) return null;

  const updateCalendars = (offset: number) => {
    setFirstMonthIndex((prevIndex) => {
      let newIndex = prevIndex + offset; // Move in one-month blocks

      if (newIndex > 11) {
        setYear((prevYear) => prevYear + 1);
        newIndex = newIndex % 12;
      } else if (newIndex < 0) {
        setYear((prevYear) => prevYear - 1);
        newIndex = (newIndex + 12) % 12;
      }

      return newIndex;
    });
  };

  const isPastDate = (day: number, monthIndex: number, year: number) => {
    const date = new Date(year, monthIndex, day-1).getTime();
    const todayAtMidnight = new Date().setHours(0, 0, 0, 0);
    return date < todayAtMidnight;
  };

  const renderDays = (monthIndex: number, year: number) => {
    const daysInMonth = getDaysInMonth(monthIndex, year);
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();
    const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => null);

    return (
      <div className="grid grid-cols-7 gap-[8px] max-[772px]:w-[334px]">
        {weekdays.map((day) => (
          <div key={day} className="text-center text-sm leading-3 font-semibold text-black pb-[12px]">{day}</div>
        ))}
        {emptyDays.map((_, index) => (
          <div key={index} className="text-center"></div>
        ))}
        {daysArray.map((day) => {
          const isWeekend = new Date(year, monthIndex, day).getDay() === 0 || new Date(year, monthIndex, day).getDay() === 6;
          const isDisabled = isPastDate(day, monthIndex, year);
          return (
            <div
              key={day}
              className={`text-center cursor-pointer text-base leading-6 font-normal text-[#73C018] ${selectedDay?.day === day && selectedDay.month === monthIndex ? 'bg-blue-300' : ''
                } ${isWeekend ? 'text-[#E21632]' : ''} ${isDisabled ? 'text-[#888888] cursor-not-allowed' : ''}`}
              onClick={() => {
                if (!isDisabled) {
                  setSelectedDay({ day, month: monthIndex });
                  getTimeslot(day); // Fetch time slots for the selected day
                }
              }}
            >
              {day}
            </div>
          );
        })}
      </div>
    );
  };

  const handleTimeSlotSelection = (time: string) => {
    setSelectedTimeSlot(time);
    if (selectedDay) {
      const dateTime = `${year}/${selectedDay.month + 1}/${selectedDay.day} ${time}`; // Include the selected time
      onDateTimeSelected(dateTime); // Call the prop function with the formatted date
      closeCalendar(); // Close the calendar after selection
    }
  };

  const getTimeslot = async (day: number) => {
    const date = `${year}/${firstMonthIndex + 1}/${day}`;
    const datestring = new Date(date);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayofWeek = daysOfWeek[datestring.getDay()];
    try {
      const formDataParams = new URLSearchParams();
      formDataParams.append('method', 'getTimeSlots');
      formDataParams.append('day', dayofWeek); // Include the selected day in the request
      formDataParams.append('date', date); // Include the selected day in the request
      formDataParams.append('serviceIDs', ""); // Include the selected day in the request
      formDataParams.append('serviceCounts', ""); // Include the selected day in the request
      formDataParams.append('locationID', '18'); // Include the selected day in the request
      formDataParams.append('type', 'dekk'); // Include the selected day in the request
      formDataParams.append('workType', 'tyreChangeDekkhotell'); // Include the selected day in the request

      const response = await axios.post(`${backend_url}/query.php`, formDataParams, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      if(response.data=="closed"){
        setClosed(true);
      }else{
        
        const htmlString = response.data;
  
        // Extract time slots from the HTML string
        const timeSlots = [];
        const regex = /saveTimeDekk\('(\d{2}:\d{2})',/g;
        let match;
    
        while ((match = regex.exec(htmlString)) !== null) {
          timeSlots.push(match[1]); // Push the time string into the array
        }
    
        // Join the time slots into a single string
        const timeSlotsString = timeSlots.join(',');
        
        setTimeSlots(timeSlots); // Update the state with time slots if needed
      }
    } catch (error) {
      console.error('Error fetching time slots:', error);
    }
  };

  useEffect(() => {
    if (selectedDay) {
      getTimeslot(selectedDay.day); // Fetch time slots when the selected day changes
    }
  }, [selectedDay]);

  return (
    <div className="pt-[64px] pl-[14px] pr-[13px] pb-[18px] relative rounded max-[772px]:p-0">
      <div className="grid grid-cols-2 gap-[56px] max-[772px]:grid-cols-1">
        <div className='absolute top-[18px] right-[13px] max-[772px]:top-[-45px] cursor-pointer' onClick={()=>closeCalendar()}>
          <Calendar_x />
        </div>

        {/* First Month */}
        <div className="max-[772px]:flex max-[772px]:flex-col max-[772px]:items-center">
          <div className='pb-[32px] flex flex-row gap-[84px] items-center max-[772px]:gap-0 max-[772px]:justify-between max-[772px]:w-[334px]'>
            <button onClick={() => updateCalendars(-1)} className="p-[8px] text-white border-[#73C018] border-[1px] rounded">
              <Calendar_rarrow />
            </button>
            <h3 className="text-sm leading-5 text-[#4A5660] font-semibold">{months[firstMonthIndex]} {year}</h3>
          </div>
          {renderDays(firstMonthIndex, year)}
        </div>

        {/* Second Month */}
        <div className="max-[772px]:flex max-[772px]:flex-col max-[772px]:items-center">
          <div className='pb-[32px] flex flex-row gap-[84px] items-center max-[772px]:gap-0 max-[772px]:justify-between max-[772px]:w-[334px]'>
            <h3 className="text-sm leading-5 text-[#4A5660] font-semibold">
              {months[secondMonthIndex]} {secondMonthYear}
            </h3>
            <button onClick={() => updateCalendars(1)} className="p-[8px] text-white border-[#73C018] border-[1px] rounded">
              <Calendar_larrow />
            </button>
          </div>
          {renderDays(secondMonthIndex, secondMonthYear)}
        </div>
      </div>
{
  closed == true?
  <div className='text-black pt-3'>No employees available at this date</div>
  :

      // {selectedDay ? (
        // <>
          <TimeSlotSelector timeSlots={timeSlots} onTimeSlotSelected={handleTimeSlotSelection} />
          /* <div className="mt-4">
            <p className="text-green-600">Selected Day: {selectedDay.day} {months[selectedDay.month]} {year}</p>
            <p className="text-black">Day of the Week: {weekdays[new Date(year, selectedDay.month, selectedDay.day).getDay()]}</p>
          </div> */
        // </>
      // ):<div className='text-black pt-3'>No employees available at this date</div>}
}

      <div className='pt-[20px] flex flex-col max-[772px]:hidden'>
        <p className='text-base leading-6 font-medium text-[#6D6D6D]'>*Note:</p>
        <div className='flex flex-row gap-[4px] items-center pt-[10px]'>
          <div className='w-[11px] h-[11px] bg-[#EF4225] rounded'></div>
          <p className='text-xs leading-4 font-normal font-["Inter"] text-[#6D6D6D]'>Time not available</p>
        </div>
        <div className='flex flex-row gap-[4px] items-center pt-[8px]'>
          <div className='w-[11px] h-[11px] bg-[#73C018] rounded'></div>
          <p className='text-xs leading-4 font-normal font-["Inter"] text-[#6D6D6D]'>Available time</p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
``