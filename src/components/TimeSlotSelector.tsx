// components/TimeSlotSelector.tsx
import React, { useState } from 'react';

const timeSlots = [
  "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM",
  "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM",
  "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"
];

const TimeSlotSelector = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  return (
    <div className="mt-[22px] max-[772px]:mt-[15px]">
      <h3 className="font-medium text-base leading-6 text-[#6D6D6D] text-center max-[772px]:text-start">Select a time slot</h3>
      <div className="grid grid-cols-4 gap-[10px] mt-[6px] max-[772px]:grid-cols-2 max-[772px]:gap-x-[14px] max-[772px]:max-y-[16px]">
        {timeSlots.map((time) => (
          <button
            key={time}
            className={`${selectedTimeSlot == time ? 'border-[#73C018] border-[1px] text-[#73C018] rounded-[8px]' : "border-[#787881] text-base leading-6 font-normal font-['Inter'] text-[#888888] border-[1px] py-[10px] px-[7.5px] rounded-[8px] "}`}
            onClick={() => setSelectedTimeSlot(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotSelector;
