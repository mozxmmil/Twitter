import React, { useEffect, useState } from "react";

export const useTwitterTimeUpdate = (crateddate) => {
  const [time, settime] = useState();
  useEffect(() => {
    const calculatetime = () => {
      const createdDate = new Date(crateddate);
      const currentDate = new Date();
      const finalDate = currentDate - createdDate;
      const second = Math.floor(finalDate / 1000);

      let tiemstring;
      if (second < 60) {
        tiemstring = `${second} sec`;
      } else if (second < 3600) {
        tiemstring = `${Math.floor(second / 60)}min`;
      } else if (second < 86400) {
        tiemstring = `${Math.floor(second / 3600)}h`;
      } else {
        tiemstring = `${Math.floor(second / 86400)}d`;
      }
      settime(tiemstring);
    };
    calculatetime();
    const interval = setInterval(calculatetime, 60000);
    return () => clearInterval(interval);
  }, [crateddate]);
  return time;
};
