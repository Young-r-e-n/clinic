<Navbar light expand="md">
<Container>
  <NavbarBrand href="/">SWIK</NavbarBrand>
  <NavbarToggler onClick={toggle} />
  <Collapse isOpen={isOpen} className="ml-auto " navbar>
    <Nav className="m-auto " navbar>
      <NavItem>
        <NavLink href="/">Home</NavLink>
      </NavItem>

      <NavItem> 
      <div class="dropdown">  
      <NavLink href ="#"><span class="dropdown" onClick={handleClick}>Specialities</span></NavLink>
<div id="list-items">  
 <a href="#"> Shoulder </a>  
 <a href="#"> Elbow </a>  
 <a href="#"> Hand </a>  
 <a href="#"> Wrist </a>  
 <a href="#"> Knee </a>  
 <a href="#"> Ankle</a>  
 <a href="#"> Sports</a>  
 <a href="#"> Paediatric</a> 
</div>  
</div>
      </NavItem>
      <NavItem>
        <NavLink href="#service">Blog</NavLink>
      </NavItem>
      <NavItem> 
      <div class="dropdown">  
      <NavLink href ="#"><span onClick={handleClick}>About</span></NavLink>
<div id="list-items">  
 <a href="#"> About-Dr.Vadgama </a>  
 <a href="#"> About-Our Team</a>  
 <a href="#"> Contact Us </a>  

</div>  
</div>
      </NavItem>
      <NavItem> 
      <div class="dropdown">  
      <NavLink href ="#"><span onClick={handleClick}>Patient Info</span></NavLink>
<div id="list-items">  
 <a href="#"> Rehabilitation Protocols</a>  
</div>  
</div>
      </NavItem>
      <NavItem> 
      <div class="dropdown">  
      <NavLink href ="#"><span onClick={handleClick}>Charges</span></NavLink>
<div id="list-items">  
 <a href="#"> Cash </a>  
 <a href="#"> Insurance </a>   
</div>  
</div>
      </NavItem>
    
    </Nav>
  </Collapse>
</Container>
</Navbar> 



import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Gri = () => {
  return (

    
    <MDBContainer>
      <h2>OUR SPECIALITIES</h2>  
      <MDBCol>
        <MDBRow>Column</MDBRow>
        <MDBRow>Column</MDBRow>
        <div className="w-100" />
        <MDBRow>Column</MDBRow>
        <MDBRow>Column</MDBRow>
      </MDBCol>

      <MDBRow>
        <MDBRow>Column</MDBRow>
        <MDBRow>Column</MDBRow>
        <div className="w-100" />
        <MDBRow>Column</MDBRow>
        <MDBRow>Column</MDBRow>
      </MDBRow>

    
    </MDBContainer>
  );
}

export default Grid;



<MDBRow>
<MDBCol md="6">
  <h5 className="title">Footer Content</h5>
  <p>
    Here you can use rows and columns here to organize your footer
    content.
  </p>
</MDBCol>
<MDBCol md="6">
  <h5 className="title">Links</h5>
  <ul>
    <li className="list-unstyled">
      <a href="#!">Link 1</a>
    </li>
    <li className="list-unstyled">
      <a href="#!">Link 2</a>
    </li>
    <li className="list-unstyled">
      <a href="#!">Link 3</a>
    </li>
    <li className="list-unstyled">
      <a href="#!">Link 4</a>
    </li>
  </ul>
</MDBCol>

<MDBCol md="6">
  <h5 className="title">Links</h5>
  <ul>
    <li className="list-unstyled">
      <a href="#!">Link 1</a>
    </li>
    <li className="list-unstyled">
      <a href="#!">Link 2</a>
    </li>
    <li className="list-unstyled">
      <a href="#!">Link 3</a>
    </li>
    <li className="list-unstyled">
      <a href="#!">Link 4</a>
    </li>
  </ul>
</MDBCol>
</MDBRow>

       <h2 className={styles.title}>About Page</h2>
            <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>




            
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
    <div className='d-flex justify-content-center bold pb-3 pt-3'> <h2>OUR SPECIALITIES</h2></div>
    <div>
      <MDBRow>
        <MDBCol md='3' ><MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(128).jpg'
                  />
                  <MDBCardBody className='bg-dark text-white dflex aligns-items-center justify-content-center'>
                    <MDBCardTitle>SHOULDER PAIN</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color='primary' className=''>MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard></MDBCol>
        <MDBCol md='3'><MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(108).jpg'
                  />
                  <MDBCardBody className='bg-white'>
                    <MDBCardTitle>ELBOW PAIN</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color='primary'>MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard></MDBCol>
        <MDBCol md='3'><MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(109).jpg'
                  />
                  <MDBCardBody className='bg-dark text-white'>
                    <MDBCardTitle>WRIST PAIN</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color='primary'>MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard></MDBCol>
        <MDBCol md='3'>
        <MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(111).jpg'
                  />
                  <MDBCardBody className='bd-white'>
                    <MDBCardTitle>KNEE PAIN</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color='primary'>MDBBtn</MDBBtn>
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
                    <MDBCardTitle>ANKLE PAIN</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color='primary'>MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard></MDBCol>
        <MDBCol md='3'><MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(17).jpg'
                  />
                  <MDBCardBody className='bg-dark text-white'>
                    <MDBCardTitle>SPORTS</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color='primary'>MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard></MDBCol>
        <MDBCol md='3'><MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg'
                  />
                  <MDBCardBody  >
                    <MDBCardTitle>BACK PAIN</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color='primary'>MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard></MDBCol>
        <MDBCol md='3'>
        <MDBCard className='mb-2 h-75'>
                  <MDBCardImage
                    className='img-fluid'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(19).jpg'
                  />
                  <MDBCardBody className='bg-dark text-white'>
                    <MDBCardTitle>PAEDIATRICS</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color='primary'>MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
        </MDBCol>

      </MDBRow>
    </div>


   
    
    </MDBContainer>
  );
}

export default Grid;