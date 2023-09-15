import React  ,{ useState }from 'react';
import Helmet from '../components/UI/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection.jsx';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import validator from 'validator'



function Register() {
  const[email,setemail]=useState('');
  const[username,setUsername]=useState('');
  const[password,setpassword]=useState('');
  const[conpassword,setconpassword]=useState('');
  const submitHandler=(e)=>{
    e.preventDefault()
    if(email.length===0||password.length===0||username.length===0){
      alert("Enter All fields")
    }
    else if (!validator.isEmail(email)) {
      alert('Enter Valid Email!')
    } 
    else if(password!==conpassword){
      alert("Password And Confirm Password Must be same!")
    }
  }

  return (
    <Helmet title='Register'>
      <CommonSection title='Register' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className='form mb-5' onSubmit={submitHandler}>
                <div className='form__group'>
                  <input
                    type='text'
                    value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Full Name" />
                </div>
                <div className='form__group'>
                <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder="Email" />
                </div>
                <div className='form__group'>
                <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Password" />
                </div>
                <div className='form__group'>
                <input type="password"  onChange={(e)=>setconpassword(e.target.value)} placeholder="Confirm Password" />
                </div>
                <button type='submit' className='addToCart__btn'>
                  <Link to='/'>Sign up</Link>
                </button>
              </form>
              <Link to='/login'>Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
