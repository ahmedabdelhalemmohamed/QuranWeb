import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Quran = () => {

  const [surahs, setSurahs] = useState([]);
  const [selectedSurahIndex, setSelectedSurahIndex] = useState(0);
  const [ayahs, setAyahs] = useState([]);
  const [showPage, setShowPage] = useState(1);
  const [showJuz, setShowJuz] = useState(1);

  useEffect(() => {
    const getSurahs = async () => {
      try {
        const res = await axios.get("https://api.alquran.cloud/v1/quran/quran-uthmani");
        setSurahs(res.data.data.surahs);
      } catch (err) {
        console.log(err);
      }
    };
    getSurahs();
  }, []);

  useEffect(() => {
    if (!surahs.length) return;

    const surah = surahs[selectedSurahIndex];
    setAyahs(surah.ayahs);
    setShowPage(surah.ayahs[0].page);
  }, [selectedSurahIndex, surahs]);

  useEffect(() => {
    if (!ayahs.length) return;

    const firstAyahInPage = ayahs.find(
      (ayah) => ayah.page === showPage
    );

    if (firstAyahInPage) {
      setShowJuz(firstAyahInPage.juz);
    }

  }, [showPage, ayahs]);

  const handleNext = () => {
    if (!ayahs.length) return;

    const lastPageInSurah = ayahs[ayahs.length - 1].page;

    if (showPage < lastPageInSurah) {
      setShowPage(showPage + 1);
    } else {
      if (selectedSurahIndex < surahs.length - 1) {
        const nextIndex = selectedSurahIndex + 1;
        const nextSurah = surahs[nextIndex];

        setSelectedSurahIndex(nextIndex);
        setAyahs(nextSurah.ayahs);
        setShowPage(nextSurah.ayahs[0].page);
      }
    }
  };

  const handlePrev = () => {
    if (!ayahs.length) return;

    const firstPageInSurah = ayahs[0].page;

    if (showPage > firstPageInSurah) {
      setShowPage(showPage - 1);
    } else {
      if (selectedSurahIndex > 0) {
        const prevIndex = selectedSurahIndex - 1;
        const prevSurah = surahs[prevIndex];

        setSelectedSurahIndex(prevIndex);
        setAyahs(prevSurah.ayahs);

        const lastPage = prevSurah.ayahs[prevSurah.ayahs.length - 1].page;
        setShowPage(lastPage);
      }
    }
  };

  return (
    <div style={{ textAlign: "center" }}>

      <select
        value={selectedSurahIndex}
        onChange={(e) => setSelectedSurahIndex(Number(e.target.value))}
      >
        {surahs.map((surah, index) => (
          <option key={surah.number} value={index}>
            {surah.name}
          </option>
        ))}
      </select>

      <div>الصفحة {showPage}</div>
      <div>الجزء {showJuz}</div>

      <div>
        {ayahs
          .filter((ayah) => ayah.page === showPage)
          .map((ayah) => (
            <p key={ayah.number}>{ayah.text}</p>
          ))}
      </div>

      <div>
        <button onClick={handlePrev}>
          <ArrowRight />
        </button>

        <button onClick={handleNext}>
          <ArrowLeft />
        </button>
      </div>

    </div>
  );
};

export default Quran;