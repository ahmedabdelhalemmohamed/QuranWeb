import axios from 'axios'
import React, { useEffect, useState } from 'react'
import data from "../data";
import { Link, useParams } from 'react-router-dom';

const Remembrances = () => {

    const {id} = useParams()

    const [remembrances, setRemembrances] = useState([])

    useEffect(() => {
        const values = Object.values(data);
        setRemembrances(values);

    }, [])  

    const rem = [
      {
        id: 1,
        text: remembrances[0]
      }, 
      {
        id: 2,
        text: remembrances[1]
      }
    ];

  return (
    <div className='text-center space-y-5 mt-5 text-ayahs pad'>
        {
        rem.map((re) => {
          return (
            re.id === Number(id) && re.text?.map((te) => (
            <div className='btn-menu '>
              <span>{te.content}</span>
              <div className='mt-5 mb-2'>
                <span className='bg-slate-600 p-2 rounded-2xl'>Count: {te.count}</span>
              </div>
            </div> 
          ))
          )
        })
        }
    </div>
  )
}

export default Remembrances
