import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Quran = () => {

  const [surahs, setSurahs] = useState([]);
  const [showPage, setShowPage] = useState(2)
  const [selectedSurah, setSelectedSurah] = useState("")
  const [ayahs, setAyahs] = useState([])

  useEffect(() => {
    const getSurahs = async () => {
      try {
        const res = await axios.get("https://api.alquran.cloud/v1/quran/quran-uthmani");
        const surahs = res.data.data.surahs
        
        setSurahs(surahs);
        
      } catch (err) {
        console.log(err)
      }
    }
    getSurahs();
  }, [])
  
  useEffect(() => {
    if (!selectedSurah) return;

    const surahShow = surahs.find(
      (surah) => surah.name === selectedSurah
    );

    if (surahShow) {
      setAyahs(surahShow.ayahs);
    }
  }, [selectedSurah, surahs]);
 
  console.log(ayahs);
  console.log(surahs);
  console.log(selectedSurah);

  return (
    <div>
      <select onChange={(e) => setSelectedSurah(e.target.value)}>
        {
          surahs.map((surah) => {
            return (
              <option key={surah.number} value={surah.name}>{surah.name}</option>

            )
          })
        }
      </select>
      <div>
        {
          ayahs.map((ayah) => {
            return (
              
                ayah.page === showPage ?
                <p>{ayah.text}</p>
                :
                <p></p>
              
              
            )
          })
        }
      </div>
    </div>
  )
}

export default Quran

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Quran = () => {
//   const [surahs, setSurahs] = useState([]);
//   const [pages, setPages] = useState([]);
//   const [juzs, setJuzs] = useState([]);

//   const [selectedPage, setSelectedPage] = useState(null);
//   const [selectedJuz, setSelectedJuz] = useState(null);

//   // 📥 تحميل البيانات
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("https://api.alquran.cloud/v1/meta");

//         setSurahs(res.data.data.surahs.references);
//         setPages(res.data.data.pages.references);
//         setJuzs(res.data.data.juzs.references);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchData();
//   }, []);

//   // 🧩 حساب الجزء من (surah + ayah)
//   const getJuz = (surah, ayah, juzs) => {
//     let currentJuz = 1;

//     for (let i = 0; i < juzs.length; i++) {
//       const j = juzs[i];

//       if (
//         surah > j.surah ||
//         (surah === j.surah && ayah >= j.ayah)
//       ) {
//         currentJuz = i + 1;
//       } else {
//         break;
//       }
//     }

//     return currentJuz;
//   };

//   const handleChange = (e) => {
//   const surahNumber = Number(e.target.value);

//   const pageIndex = pages.findIndex(
//     (p) => p.surah === surahNumber
//   );

//   // 🛑 تحقق مهم
//   if (pageIndex === -1) {
//     console.log("السورة مش موجودة في الصفحات");
//     return;
//   }

//   const pageData = pages[pageIndex];

//   const pageNumber = pageIndex + 1;
//   setSelectedPage(pageNumber);

//   const juzNumber = getJuz(
//     pageData.surah,
//     pageData.ayah,
//     juzs
//   );

//   setSelectedJuz(juzNumber);
// };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>اختار سورة</h2>

//       {/* 📜 قائمة السور */}
//       <select onChange={handleChange}>
//         <option>-- اختر سورة --</option>
//         {surahs.map((surah) => (
//           <option key={surah.number} value={surah.number}>
//             {surah.name}
//           </option>
//         ))}
//       </select>

//       {/* 📊 عرض البيانات */}
//       {selectedPage && (
//         <div>
//           <h3>📖 الصفحة: {selectedPage}</h3>
//           <h3>🧩 الجزء: {selectedJuz}</h3>
//         </div>
//       )}

//       {/* 🖼️ صورة الصفحة */}
//       {selectedPage && (
//         <img
//           src={`https://cdn.islamic.network/quran/images/${selectedPage}.png`}
//           alt="quran page"
//           style={{ width: "300px", marginTop: "20px" }}
//         />
//       )}
//     </div>
//   );
// };

// export default Quran;