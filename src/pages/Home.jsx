import React from 'react'
import heroImg from '../asset/heroImg.jpeg'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <main className='container pt-5'>
      <div className='row justify-content-between align-items-center'>
        <div className='col-lg-6'>
          <img src={heroImg} alt={heroImg} className='img-fluid img-thumbnail slide' />
        </div>
       <div className='col-lg-6 pt-5'>
        <h2>Improve Productivity By Managing <span className='text-danger'>Your User</span></h2>
<p className='py-3'>Lorem ipsum dolor sit amet consectetur. Ut nisl nisl cursus massa sed. Turpis ac aliquet lacinia justo turpis amet at arcu. Diam vulputate suspendisse aliquam enim sagittis cursiodio ultrices. Condimentum lacus nunc rhoncus massa. Tortorstiu ultricies neque aliquam sit non. Diam vehicula dignissimepei pellentesque eros vitae. Viverra in vitae nunc lorem eget lciou imperdiet tortor. Ac mauris vel non amet eget egestas inoriou pellentesque commodo amet. Facilisi sed ut nisi pellentesque diam egestas et turpis donor amet.</p> 
<div className='d-flex gap-3'>
   <button className="btn btn-primary btn-lg"><Link to= {'/NewUser'} className='text-decoration-none text-light'> + New User</Link></button>
   <button className="btn btn-primary btn-lg">All Users</button>
  </div>      
  </div>
       </div>
    </main>
    
  )
}

export default Home