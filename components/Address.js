
import {
    ImageList,
    ImageListItem,
    ImageListItemBar,
    TitlebarBelowImageList
    
    } from 'mdbreact'
    
    
    
    import React from "react";
    import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
    
    const Address = () => {
      return (
    
        
      <div className='row dflex' >
        <div className='col flex-column pl-5'md='4'>
        <div id="example-div" class="  d-flex aligns-items-center justify-content-left pl-5" >
      <span><i class="fas fa-map-marker-alt fa-4x"></i></span>
      
         
 </div>
 <div id="example-div" class=" d-flex aligns-items-center justify-content-left pl-5" >
      <p>Makasembo Road</p>
 </div>
 <div id="example-div" class=" d-flex aligns-items-center justify-content-left pl-5" >
      <p>Eldoret Hospital</p>
 </div>
 <div id="example-div" class=" d-flex aligns-items-center justify-content-left pl-5" >
      <p>Doctors' Plaza, Room 207</p>
 </div>
 <div id="example-div" class=" d-flex aligns-items-center justify-content-left pl-5 mb-5" >
      <p>Eldoret, Kenya</p>
 </div>
 <div id="example-div" class=" d-flex aligns-items-center justify-content-left pl-5" >
      <p><i class="far fa-clock fa-4x"></i></p>
 </div>
 <div id="example-div" class=" d-flex aligns-items-center justify-content-left pl-5" >
      <p>Monday - Friday </p>
 </div>
 <div id="example-div" class=" d-flex aligns-items-center justify-content-left pl-5" >
      <p>Time : 9:00am - 5:00pm</p>
 </div>
 <div id="example-div" class=" d-flex aligns-items-center justify-content-left pl-5" >
      <p>phone: 07xxxxxxx</p>
 </div>

            </div>  
            <div className='col 'md="8"> 
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6561389053754!2d35.27722461445174!3d0.5166103638304089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101a267fdcae7%3A0xd8c249954e20e75c!2sDr%20Harsh%20Vadgama!5e0!3m2!1sen!2ske!4v1652713236045!5m2!1sen!2ske" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
      </div>
      );
    }
    
    export default Address;