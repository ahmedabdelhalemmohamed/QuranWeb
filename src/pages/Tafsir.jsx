import axios from "axios";
import React, { useEffect, useState } from "react";

const Tafsir = () => {

  const baseUrl = "https://api.alquran.cloud/v1/quran";

  const [indexSurah, setIndexSurah] = useState(0);
  const [ayah, setAyah] = useState("");
  const [surahs, setSurahs] = useState([]);
  const [numberOfAyah, setNumberOfAyah] = useState(0);
  const [indexAyah, setIndexAyah] = useState(0);
  const [tafsir, setTafsir] = useState([]);
  const [tafsirAyah, setTafsirAyah] = useState("");

  useEffect(() => {
    const getAyahs = async () => {
      try {
        const res = await axios.get(`${baseUrl}`);
        setSurahs(res.data.data.surahs);
        setAyah(res.data.data.surahs[indexSurah].ayahs[0].text);
      } catch (err) {
        console.log(err);
      }
    };

    getAyahs();
  }, []);

  useEffect(() => {
    setAyah(surahs[indexSurah]?.ayahs[indexAyah]?.text);
    setNumberOfAyah(surahs[indexSurah]?.ayahs?.length);
  }, [indexSurah, surahs, indexAyah]);

  
  useEffect(() => {
    const getTafsir = async () => {
      const res = await axios.get(
        "https://api.alquran.cloud/v1/quran/ar.muyassar",
      );
      setTafsir(res.data.data.surahs);
    };
    getTafsir();
  }, []);
  useEffect(() => {
    setTafsirAyah(tafsir[indexSurah]?.ayahs[indexAyah]?.text);
  }, [indexSurah, tafsir, indexAyah]);

  return (
    <div className="text-center mt-10 space-y-5 text-ayahs pad space-x-5 bg-slate-500 text-white mt-15 rounded-lg mb-10">
      <select
        value={indexSurah}
        onChange={(e) => {
          setIndexSurah(e.target.value);
          setIndexAyah(0);
        }}
        className="btn-menu"
      >
        {surahs.map((surah, index) => (
          <option value={index} key={index}>
            {surah.name}
          </option>
        ))}
      </select>
      <select value={indexAyah} onChange={(e) => setIndexAyah(e.target.value)} className="btn-menu">
        {surahs[indexSurah]?.ayahs?.map((num, index) => {
          return (
            <option value={index} key={index} className="text-center">
              {index + 1}
            </option>
          );
        })}
      </select>
      <div>
        <div className="space-y-5">
          <div>{ayah}</div>

          <div className="space-y-10 mt-15">
            <div className="btn-menu w-fit m-auto">التفسير</div>
            <div className="mt-10">{tafsirAyah}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tafsir;
