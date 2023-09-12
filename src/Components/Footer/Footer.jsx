import React from 'react'

export default function Footer() {
    return (
        <div className='footer  w-100 bottom-0'>
             <div className='cards w-100 p-5'>
               <div className="container py-5">
          <div className="row">
              <div className="col-md-4 text-center">
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                    </div>
                    <div className="col-md-4 text-center">
                  <h3>AROUND THE WEB</h3>
                        <div className="d-flex justify-content-center">
                            <i className='fa-brands fa-facebook mx-1 icon text-white p-2 rounded-circle border border-1'></i>
                            <i className='fa-brands fa-twitter mx-1 icon text-white p-2 rounded-circle border border-1'></i>
                            <i className='fa-brands fa-linkedin mx-1 icon text-white p-2 rounded-circle border border-1'></i>
                            <i className='fa-solid fa-globe mx-1 icon text-white p-2 rounded-circle border border-1'></i>
                  </div>
                    </div>
                    <div className="col-md-4 text-center">
                  <h3>ABOUT FREELANCER</h3>
                  <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                  
                </div>
          </div>
            </div>
           
            </div>
            <div className='copyRights text-center py-3'>
                <p className='m-0'>Copyright © Your Website 2021</p>
        </div>
        </div>
     
           
        
   
  )
}
