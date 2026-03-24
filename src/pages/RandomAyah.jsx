import axios from "axios";
import React, { useEffect, useState } from "react";

const RandomAyah = () => {
  const [ayahs, setAyahs] = useState([]);
  const [randomAyah, setRandomAyah] = useState("");
  const [showAyah, setShowAyah] = useState(false);
  const [randomNumber, setRandomNumber] = useState(
    () => Math.floor(Math.random() * 6263) + 1,
  );

  useEffect(() => {
    const getAyahs = async () => {
      let allAyahs = [];
      try {
        for (let i = 1; i <= 114; i++) {
          const res = await axios.get(
            `https://api.alquran.cloud/v1/surah/${i}`,
          );
          allAyahs = [
            ...allAyahs,
            ...res.data.data.ayahs.map((ayah) => {
              return {
                text: ayah.text,
                numberOfAyah: ayah.numberInSurah,
              };
            }),
          ];
        }
        setAyahs(allAyahs);
      } catch (err) {
        console.log(err);
      }
    };

    getAyahs();
  }, []);

  const handleRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 6263) + 1;
    setRandomNumber(randomNum);
    setShowAyah(false);
  };

  return (
    <div className="space-y-5 mt-15 sm:p-5 p-3">
      <div className="text-ayahs space-y-5 flex flex-col items-center justify-center">
        <span className="btn-menu  leading-loose">
          {ayahs[randomNumber - 1]?.text} ({ayahs[randomNumber - 1]?.numberOfAyah})
        </span>
          {showAyah && <span className="btn-menu  leading-loose">{ayahs[randomNumber]?.text }({ayahs[randomNumber]?.numberOfAyah})</span>}
      <div className="space-x-5">
        <button onClick={handleRandomNumber} className="btn-menu">أية أخرى</button>
        {!showAyah && (
          <button onClick={() => setShowAyah((prev) => !prev)} className="btn-menu ">
            اظهار الاية التالية
          </button>
        )}
      </div>
      </div>
    </div>
  );
};

export default RandomAyah;
