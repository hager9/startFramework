import React from 'react'
import { TabTitle } from "../Title"

export default function About() {

  TabTitle("About")

  return (
    <div className='about d-flex justify-content-center align-items-center'>
      <div className='text-center'>
      <div className='pt-3'>
                  <h2 className='fs-1 fw-bold'>ABOUT COMPONENT</h2>
                  <div className='mb-3 d-flex justify-content-center align-items-center'>
                  <div className=' line me-3 bg-white'></div>
                  <i className='fa-solid fa-star'></i>
                  <div className=' line ms-3 bg-white'></div>
              </div>
        </div>
        <div className='container'>
          <div className="row px-5">
            <div className="col-md-6 text-start ps-md-5">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6 text-start ps-md-5">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
