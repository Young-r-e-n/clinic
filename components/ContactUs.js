import styles from '../styles/about.module.css'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
    MDBInput,
  } from "mdbreact";
    
    
    import React from "react";
import FooterPage from './Footer';

    
    const Contact = () => {
      return (
 <MDBContainer>
     <MDBRow>
         <MDBCol md='6'>
         <MDBContainer>
      <MDBRow>
        <MDBCol >
          <form>
            <p className="h5 text-center mb-4">Write to us</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Subject"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Your message"
                icon="pencil-alt"
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="secondary">
                Book Appointment
                <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
         </MDBCol>
         <MDBCol md='6'></MDBCol>
     </MDBRow>
     <MDBRow md='12'>
     <div className='col' >
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6561389053754!2d35.27722461445174!3d0.5166103638304089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101a267fdcae7%3A0xd8c249954e20e75c!2sDr%20Harsh%20Vadgama!5e0!3m2!1sen!2ske!4v1652713236045!5m2!1sen!2ske" width="1200" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </div>
     </MDBRow>
     <MDBRow>
         <FooterPage />
     </MDBRow>
 </MDBContainer>
     
      );
    }
    
    export default Contact;