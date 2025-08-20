// Whats the purpose of useEffect hook

/* it works on every reload means it runs the side effect of site 
it has dependency array which tell it when to run after once

 */

import React from "react";
import { useEffect, useState } from "react";

const useEffectHook = () => {
  const [dogsImage, setdogsImage] = useState("");
  const fetchData = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setdogsImage(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchDog = async () => {
      const data = await fetchData();
      console.log(data);
    };
    fetchDog();
  }, []);

  return (
    <div className="bg-slate-600 h-full flex justify-center items-center p-8">
      <img
        src={dogsImage.message}
        alt="Random dog's Image"
        className=" h-48 rounded-sm"
      />
    </div>
  );
};

export default useEffectHook;
