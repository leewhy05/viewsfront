import React, { useState } from 'react'
import { Await, Link } from 'react-router-dom'
import '../style.css/NewUser.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import formImg from '../asset/WhatsApp Image 2023-11-22 at 4.23.16 AM.jpeg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const NewUser = () => {
    const scrollToTop = () => {
        window.scroll({ top: 0, behavior: "smooth" });
    }
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profession, setProfesion] = useState ('');
    const [gender,setGender] =useState('');
    const navigate = useNavigate()

   async function handleSubmit(e) {
    e.preventDefault()
      try {
         const data = await axios.post('https://create-user.onrender.com/api/user', {
            name,
            email,
            profession,
            gender
         })
         console.log(data);
         if(data.status === 201){
            alert(data.data.msg)
            navigate('/AllUser')
            console.log(data);
         }

      } catch (error) {
        console.log(error);
        alert(error.response.data.msg.message)
      }
        
    }
  return (
   <main className='container pt-4'>
    <div className='row justify-content-between align-items-center'>
        <div className='col-lg-6'>
        <Form className='p-3 shadow-lg'>
      <fieldset >
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput" className='fw-bold'> Home:</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="type a name" value={name} onChange={(e)=>setName(e.target.value)} className='fw-bold'/>
         
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput" className='fw-bold'> Email:</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="type an email"value={email}
          onChange={(e)=>setEmail(e.target.value)}  className='fw-bold'/>
         
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput" className='fw-bold'> Profession:</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="type a profession" 
          value={profession}
           onChange={(e)=>setProfesion(e.target.value)}
           className='fw-bold'/>
         
        </Form.Group>
        <Form.Group className="mb-3 fw-bold">
          <Form.Label htmlFor="disabledSelect">Gender</Form.Label>
          <Form.Select id="disabledSelect" onChange={(e)=>setGender(e.target.value)} value={gender}>
            <option>----</option>
            <option value='male'>male</option>
            <option value='female'>female</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </fieldset>
    </Form>
        </div>
    <div className='d-none d-lg-block col-lg-5'>
        <img src={formImg} alt={formImg}  className='img-fluid img-thumbnail p-2 shadow-sm scale'/>
    </div>
    </div>
    <Link className='text-decoration-none' onClick={scrollToTop}>
        <p className="text-center fs-4 move">
          Back to Top
        </p>
      </Link>
   </main>
  )
}

export default NewUser