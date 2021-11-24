import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

const HomeCards = (props) => {
  return (
    <MDBCard style={{ maxWidth: '25rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage className="p-5" src={props.images} fluid alt='...' />        
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{props.title}</MDBCardTitle>
        <MDBCardText>
          {props.text}
        </MDBCardText>
        <MDBBtn><Link style={{ color: '#FFF' }}  to={props.button}>Details</Link></MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}

export default HomeCards;