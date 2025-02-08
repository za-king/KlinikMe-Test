import React from "react";
import {
  WifiHigh,
  AirVent,
  SquareParking,
  UserRoundSearch,
} from "lucide-react";
const FasilitasComp = ({ datas }) => {
  const fasilitasIcon = {
    "wifi-icon": <WifiHigh color="#4F4D55ff" strokeWidth={3} size={40} />,
    "ac-icon": <AirVent color="#4F4D55ff" strokeWidth={2.5} size={40} />,
    "parking-icon": (
      <SquareParking color="#4F4D55ff" strokeWidth={2.5} size={40} />
    ),
    "spa-icon": (
      <UserRoundSearch color="#4F4D55ff" strokeWidth={2.5} size={40} />
    ),
  };
  return (
    <div>
      <p className="text-3xl font-semibold ">Fasilitas</p>
      <div className="grid grid-cols-2 gap-8 w-[40rem] my-12">
        {datas.map((data) => {
          return (
            <div className="flex gap-2  items-center justify-items-center">
              {fasilitasIcon[data.icon]}
              <p className="text-xl">{data.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FasilitasComp;
