import React from 'react'
import { TabTitle } from "../Title"

export default function Contact() {

  TabTitle("Contact")


  return (
    <div className='contact mb-4'>
      <div className='pt-5 text-center'>
                  <h2 className='fs-1 fw-bold mb-3'>PORTFOLIO COMPONENT</h2>
                  <div className='mb-3 d-flex justify-content-center align-items-center'>
                  <div className=' line me-3'></div>
                  <i className='fa-solid fa-star'></i>
                  <div className=' line ms-3'></div>
              </div>
      </div>
      <form className='w-50 mx-auto mt-5 p-3'>
        
        <div className='position-relative'>
        <input id='userName' required placeholder='userName' type='text' className='px-2 py-3 mb-4 w-100 border-0 border-bottom py-3'></input>
        <label for="userName">userName :</label>
        </div>
        
      
        <div className='position-relative'>
        <input id='userAge' placeholder='useraGE' type="number" className='px-2 py-3 mb-4 w-100 border-0 border-bottom py-3'></input>
        <label for="userAge" >userAge :</label>
        </div>

        
        <div className='position-relative'>
        <input id='userEmail' placeholder='userEmail' type="email" className='px-2 py-3 mb-4 w-100 border-0 border-bottom py-3'></input>
        <label for="userEmail" > userEmail :</label>
        </div>


        
        <div className='position-relative'>
        <input id='userPassword' placeholder='userPassword' type="password" className='px-2 py-3 mb-4 w-100 border-0 border-bottom py-3'></input>
        <label for="userPassword" >userPassword :</label>
        </div>
         
        <button type='button' className='myBtn mt-3 py-2 px-3 text-white rounded-2'>Send Message</button>
        </form>
    </div>
  )
}
