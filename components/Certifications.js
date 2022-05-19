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

const Certifications = () => {
  return (
    <MDBContainer className='pt-5'>
      <MDBCarousel
        activeItem={1}
        length={1}
        slide={true}
        showControls={false}
        showIndicators={true}
        multiItem
      >
        <div className='d-flex justify-content-center'> <h2>APPROVALS</h2></div>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId='1'>
                
            <MDBRow>
        <MDBCol md='2'><MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(128).jpg'
                  />
                  <MDBCardBody >
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color='primary' className=''>MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard></MDBCol>
                <MDBCol md='2'><MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg'
                  />
                  <MDBCardBody >
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color='primary' className=''>MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard></MDBCol>
                <MDBCol md='2'><MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(68).jpg'
                  />
                  <MDBCardBody >
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color='primary' className=''>MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard></MDBCol>
        <MDBCol md='2'><MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(108).jpg'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color='primary'>MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard></MDBCol>
        <MDBCol md='2'><MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(109).jpg'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color='primary'>MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard></MDBCol>
        <MDBCol md='2'>
        <MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(111).jpg'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color='primary'>MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
        </MDBCol>
        

      </MDBRow>
              
            </MDBCarouselItem>
            
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Certifications;