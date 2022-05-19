
import {
ImageList,
ImageListItem,
ImageListItemBar,
TitlebarBelowImageList

} from 'mdbreact'




import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdbreact';


const Grid = () => {
  return (

    
    <MDBContainer  fluid>
    <div className='d-flex justify-content-center font-weight-bold pb-3 pt-3 '> <h2><b>OUR SPECIALITIES</b></h2></div>
    <div>
      <MDBRow>
        <MDBCol md='3' ><MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(128).jpg'
                  />
                  <MDBCardBody className='bg-dark text-white dflex aligns-items-center justify-content-center'>
                    <MDBCardTitle className='text-center'>SHOULDER PAIN</MDBCardTitle>
                   
                  </MDBCardBody>
                </MDBCard></MDBCol>
        <MDBCol md='3'><MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(108).jpg'
                  />
                  <MDBCardBody className='bg-white'>
                    <MDBCardTitle className='text-center'>ELBOW PAIN</MDBCardTitle>
                    
                  </MDBCardBody>
                </MDBCard></MDBCol>
        <MDBCol md='3'><MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(109).jpg'
                  />
                  <MDBCardBody className='bg-dark text-white'>
                    <MDBCardTitle className='text-center'>WRIST PAIN</MDBCardTitle>
                   
                  </MDBCardBody>
                </MDBCard></MDBCol>
        <MDBCol md='3'>
        <MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(111).jpg'
                  />
                  <MDBCardBody className='bd-white'>
                    <MDBCardTitle className='text-center'>KNEE PAIN</MDBCardTitle>
                    
                  </MDBCardBody>
                </MDBCard>
        </MDBCol>

      </MDBRow>
      <MDBRow>
        <MDBCol md='3'><MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg'
                  />
                  <MDBCardBody className='bg-white'>
                    <MDBCardTitle className='text-center'>ANKLE PAIN</MDBCardTitle>
                   
                  </MDBCardBody>
                </MDBCard></MDBCol>
        <MDBCol md='3'><MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(17).jpg'
                  />
                  <MDBCardBody className='bg-dark text-white'>
                    <MDBCardTitle className='text-center'>SPORTS</MDBCardTitle>
                   
                  </MDBCardBody>
                </MDBCard></MDBCol>
        <MDBCol md='3'><MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg'
                  />
                  <MDBCardBody  >
                    <MDBCardTitle className='text-center'>BACK PAIN</MDBCardTitle>
                   
                  </MDBCardBody>
                </MDBCard></MDBCol>
        <MDBCol md='3'>
        <MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(19).jpg'
                  />
                  <MDBCardBody className='bg-dark text-white'>
                    <MDBCardTitle className='text-center'>PAEDIATRICS</MDBCardTitle>
                  
                  </MDBCardBody>
                </MDBCard>
        </MDBCol>

      </MDBRow>
    </div>


   
    
    </MDBContainer>
  );
}

export default Grid;