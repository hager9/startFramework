import React, { useEffect } from 'react'
import homeImg from "../../Assets/Images/avataaars.svg"
import { TabTitle } from "../Title"

export default function Home() {
    

  TabTitle("Home")

  return (
      <div className='p-5 home d-flex justify-content-center align-items-center'>
          <div className='text-center py-3'>
              <img src={homeImg} alt='' className='mb-3 w-75'></img>
              <div className='pt-3'>
                  <h2 className='fs-1 fw-bold'>START FRAMEWORK</h2>
                  <div className='mb-3 d-flex justify-content-center align-items-center'>
                  <div className=' line me-3 bg-white'></div>
                  <i className='fa-solid fa-star'></i>
                  <div className=' line ms-3 bg-white'></div>
              </div>
              </div>
             
              <div>Graphic Artist - Web Designer - Illustrator</div>
          </div>
    </div>
  )
}


