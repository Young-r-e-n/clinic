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

    
    const About = () => {
      return (
    <div className={styles.container} id='uniq'>
        
      <div className='row dflex ' >
 <div id="example-div" class=" border d-flex aligns-items-center justify-content-center" >
      <bold><h2>ABOUT DR HARSH VADGAMA</h2></bold>
 </div>
 </div>

 <div id="example-div" class="bg-dark text-white border d-flex aligns-items-center justify-content-center" >
       

      
      Board Certified Sports Medicine Consultant based in Eldoret.

Dr Vadgama Harsh is a specialist orthopaedic surgeon with fellowship training in Sports medicine.
His special interests are in upper extremity surgeries and arthroscopic surgeries. He manages rotator cuff tears, shoulder and elbow dislocations, wrist pathologies, knee pathologies and the treatment of upper and lower limb sports injuries. He uses ultrasound in his rooms to assist in the diagnosis of soft tissue injuries.


Dr. Vadgama completed his undergraduate and postgraduate studies at the Nizhny Novgorod State Medical , and after obtaining MD degree and masters degree, 2012, he worked as a consultant orthopaedic surgeon in Moi Teaching and Referral Hospital before completing an fellowship in sports medicine surgery under the mentorship of Dr. Prathmesh Jain at the Advance Hospital Ahmedabad, India

Dr. Vadgama also completed a hand fellowship in Ganga Hospital, Coimbatore India.
During his fellowship Dr. Vadgama gained extensive experience in all aspects of shoulder, Elbow, Wrist, Knee and Ankle surgeries, including arthroscopic (keyhole) and joint replacement surgery.

Dr. Vadgama has a vast experience and uses the latest technologies used in Europe and USA and uses products from Karl Storz, Arthrex, Smith & Nephew to name but a few which are all FDA certified which ensures patient safety and maintains high standards.

Dr, Vadgama is based in Eldoret Hospital, Doctors plaza, Room 207.
<img 
src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(128).jpg"/>

 </div>
 <div className='row pt-5'>
     <div className='col' md='6'>
     <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
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
     </div>
     <div className='col' md='6'>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6561389053754!2d35.27722461445174!3d0.5166103638304089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101a267fdcae7%3A0xd8c249954e20e75c!2sDr%20Harsh%20Vadgama!5e0!3m2!1sen!2ske!4v1652713236045!5m2!1sen!2ske" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </div>
      </div>
      <FooterPage />
</div>
      );
    }
    
    export default About;