import React , { useState }from 'react';
import Helmet from '../components/UI/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection.jsx';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


function Login() {
  const[email,setUseremail]=useState('');
  const[password,setpassword]=useState('');
  const[user]=useState('');

  const submitHandler=(e)=>{
    e.preventDefault();
  const usercheck = user.find(user => (user.setUseremail === email && user.password === password));
  if(email.length===0||password.length===0){
    alert("Enter All fields")
  }
 else if(email.length===0){
  alert("Enter Email")
 }
 else if(password.length===0){
  alert("Enter password")
 }
  else if(!usercheck){
    alert("Wrong Username or Password!")
  }

}
  return (
    <Helmet title='Login'>
      <CommonSection title='Login' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className='form mb-5' onSubmit={submitHandler}>
                <div className='form__group'>
                <input type="email" onChange={(e)=>setUseremail(e.target.value)} placeholder="Email" />
                </div>
                <div className='form__group'>
                <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Password" />
                </div>
                <button type='submit' className='addToCart__btn'>
                  <Link to='/'>Login</Link>
                </button>
              </form>
              <Link to='/'>First time here? Create an account</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
