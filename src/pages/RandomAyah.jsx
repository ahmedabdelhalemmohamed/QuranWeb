import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RandomAyah = () => {

  const [ayahs, setAyahs] = useState([]);
  const [randomAyah, setRandomAyah] = useState("");

  useEffect(() => {
    const getAyahs = async () => {
      let allAyahs = []
      try {
        for (let i = 1; i <= 114; i++) {
          const res = await axios.get(`https://api.alquran.cloud/v1/surah/${i}`);
          allAyahs = [...allAyahs, ...res.data.data.ayahs.map((ayah) => ayah.text)]
          
        }
        setAyahs(allAyahs)

      }
      catch(err) {
        console.log(err)
      }

    }

    getAyahs();
  }, [])

  console.log(ayahs);
  const randomNumber = Math.floor((Math.random() * 6263)) + 1
  console.log(randomNumber)


  return (
    <div className='space-y-5'>
      <div>

      {ayahs[randomNumber]}
      </div>
      <button>أية أخرى</button>  
    </div>
  )
}

export default RandomAyah