import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Quran = () => {

  const [surahs, setSurahs] = useState([]);
  const [surah, setSurah] = useState("");

  const baseUrl = "https://api.alquran.cloud/v1";

  useEffect(() => {
    const getSurahs = async () => {
      try {
        const res = await axios.get(`https://api.alquran.cloud/v1/${"surah"}`);
        setSurahs(res.data.data);
      } catch (err) {
        console.log(err)
      }
    }

    getSurahs();
  }, [])

  return (
    <div>
      <select value={surah} onChange={(e) => setSurah(e.target.value)}>
        {
          surahs.map((surah) => {
            return (
              <option key={surah.number} value={surah.name}>{surah.name}</option>

            )
          })
        }
      </select>
    </div>
  )
}

export default Quran