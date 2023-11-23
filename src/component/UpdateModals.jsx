import React, { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateModal = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profession, setProfesion] = useState ('');
    const [gender,setGender] =useState('');
    const {userId} = useParams();
    const navigate = useNavigate();
    let getData = async () => {
        try {
    
          let dataGotten = await axios.get(
            `https://create-user.onrender.com/api/user/${userId}`
          );
          console.log(dataGotten.data.user);
          setEmail(dataGotten.data.user.email);
          setName(dataGotten.data.user.name);
          setProfesion(dataGotten.data.user.profession);
          setGender(dataGotten.data.user.gender);
        } catch (error) {
          console.log(error);
        } finally {
        //   setIsLoading(false);
        }
      };
      useEffect(() => {
        getData();
        
      }, []);
      async function handleUpdate(userId) {
          try {
              await axios.patch(`https://create-user.onrender.com/api/user/${userId}`, {
                name,
                email,
                profession,
                gender
             })
            navigate('/AllUser')
             
    
          } catch (error) {
            console.log(error);
            alert(error.response.data.msg.message)
          }
            
        }
      
    
    // const navigate = useNavigate()
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button className='bg-success border-0' onClick={handleShow}>
        updateUser
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close   
          </Button>
          <Button variant="primary" onClick={() =>{handleClose; handleUpdate(userId)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UpdateModal