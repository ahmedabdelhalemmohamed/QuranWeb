import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Quran = () => {

  const [surahs, setSurahs] = useState([]);
  const [selectedSurahIndex, setSelectedSurahIndex] = useState(0);
  const [ayahs, setAyahs] = useState([]);
  const [showPage, setShowPage] = useState(1);
  const [showJuz, setShowJuz] = useState(1);
  const [fromSelect, setFromSelect] = useState(false);

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

    if (fromSelect) {
      setShowPage(surah.ayahs[0].page);
      setFromSelect(false);
    }

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
    } else if (selectedSurahIndex < surahs.length - 1) {
      const nextIndex = selectedSurahIndex + 1;
      const nextSurah = surahs[nextIndex];

      setSelectedSurahIndex(nextIndex);
      setShowPage(nextSurah.ayahs[0].page);
    }
  };

  const handlePrev = () => {
    if (!ayahs.length) return;

    const firstPageInSurah = ayahs[0].page;
    console.log(firstPageInSurah)

    if (showPage > firstPageInSurah) {
      setShowPage(showPage - 1);
    } else if (selectedSurahIndex > 0) {
      const prevIndex = selectedSurahIndex - 1;
      const prevSurah = surahs[prevIndex];

      setSelectedSurahIndex(prevIndex);

      const lastPage = prevSurah.ayahs[prevSurah.ayahs.length - 1].page;
      setShowPage(lastPage);
    }
  };

  return (
    <div className='p-2 bg-slate-500 text-white mt-15 rounded-lg mb-10'>
    
      <div className='flex justify-around mb-5 mt-5  text-white'>
        <select
          value={selectedSurahIndex}
          onChange={(e) => {
            setFromSelect(true); 
            setSelectedSurahIndex(Number(e.target.value));
          }}
          className='border border-slate-500 rounded-lg p-3 bg-indigo-500'
        >
          {surahs.map((surah, index) => (
            <option key={surah.number} value={index}>
              {surah.name}
            </option>
          ))}
        </select>

        <div className='btn-menu'>الصفحة {showPage}</div>
        <div className='btn-menu'>الجزء {showJuz}</div>
      </div>

      <div className='flex flex-wrap justify-center space-x-2 space-y-5  mt-10 font-cairo'>
        {ayahs
          .filter((ayah) => ayah.page === showPage)
          .map((ayah) => (
            
              <span className='text-center text-xl sm:text-2xl leading-loose'>
                {ayah.text}
                <span className='mr-2'>({ayah.numberInSurah})</span>
              </span>

              
              
          ))}
      </div>

      <div className='flex justify-center mt-10 space-x-1'>
        <button onClick={handlePrev} className='btn-menu'>
          <ArrowRight />
        </button>

        <button onClick={handleNext} className='btn-menu'>
          <ArrowLeft />
        </button>
      </div>

    </div>
  );
};

export default Quran;