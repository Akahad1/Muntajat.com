import React, { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

const Singup = () => {
  const {loginwithgoogle,updataData,createEamilPassword}=useContext(AuthContext)
  const notify = () => toast('Here is your toast.');
  const [error,setError]=useState('')
  const [createUserEmail,setCreateUserEmail]=useState('')
  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || '/'

    const singUpinPassword=(event)=>{
        event.preventDefault()
        const form =event.target
        const name =form.name.value
        const email =form.email.value;
        const role=form.role.value;
        const photourl=form.photourl.value;
        
        
        const password =form.password.value;
        console.log(name,email,password,role,photourl)
        createEamilPassword(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user)
      console.log(name,role,photourl)
      
      
      toast.success('You Sing Up Successfully');
      <Toaster/>
      form.reset()
      navigate(from,{replace:true})
      const users={
        name,
        email,
        role,
        password,
      }
      fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify(users)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setCreateUserEmail(data)
      })

      profileupdate(name,photourl,role)
      
    })
    .catch(error=>{console.log(error)
      const message =error.message;
      setError(message)
      
    })
    }

    const profileupdate=(name,photourl,number)=>{
    const profile={
      displayName:name,
      phoneNumber:number,
      photoURL:photourl,
    }
    updataData(profile)
    .then(result=>{
      const user =result.user
      console.log(user)
    })
    .catch(error=>{console.error("error",error)
    const message=error.message;
      setError(message)
  })
  }

    const googleLogInhanle=(event)=>{
      event.preventDefault()
      loginwithgoogle()
      .then(result=>{
        const user=result.user;
        // setCreateUserEmail(user.email)
        toast.success('You Sing Up Successfully');
        <Toaster/>
        console.log(user)
        navigate(from,{replace:true})
        
      })
      .catch(error=>{console.log(error)
        const message=error.message;
        setError(message)
        
      })
    }
    return (
        <div>
            <div >
                <div className=' grid lg:grid-cols-8'>
                    <div className=' lg:col-span-4'>
                        <img className=' lg:w-full  ' src="https://i.ibb.co/FJPbC4f/2968290.jpg" alt="" />
                    </div>
                    <div className='lg:col-span-4'>
                    <div className=" bg-center place-items-center grid mt-10 mb-10 lg:mr-10 mr-4 ml-4   ">
 
    
   
 <div className=" lg:w-full md:w-2/3 w-full border   bg-base-200   border-slate-900 rounded-2xl  ">
     <h1 className='lg:text-3xl md:text-3xl   lg:ml-8 lg:mt-5 ml-16 mt-5 text-xl '>CREATE NEW ACCOUNT</h1>
    
     
   <div className="card-body">
     {/* 1/ */}
      <form onSubmit={singUpinPassword}>
   <div className="form-control">
       <label className="label">
         <span className="label-text"> Full Name</span>
       </label>
       <input type="name" name='name' placeholder='Full Name' className="input input-bordered" required />
     </div>
     {/* 2 */}

     <div className="form-control">
       <label className="label">
         <span className="label-text "> Email</span>
       </label>
       <input type="email" name='email' placeholder="email" className="input input-bordered " required />
     </div>
     {/* 3 */}
     <div className="form-control">
       <label className="label">
         <span className="label-text ">Photo Url</span>
       </label>
       <input type="text" name='photourl' placeholder="email" className="input input-bordered "  required/>
     </div>
     {/* 4 */}

     <div className="form-control">
       <label className="label">
         <span className="label-text "> Select Your Role</span>
       </label>
       <div className="form-control">
  <div className="input-group">
    <select name='role'  className="select select-bordered w-full" >
      <option disabled selected>buyer</option>
      <option>Sellar</option>
      
    </select>
    
  </div>
</div>
       
     </div>
     

     <div className="form-control">
       <label className="label">
         <span className="label-text  ">Password</span>
       </label>
       <input type="password" name='password' placeholder="password" className="input input-bordered " required />
       <label className="label">
         <span className="label-text-alt"> You already singup plese <Link to='/login' className=''>Log in</Link></span>
       </label>
       <label className="label">
         <span className="label-text-alt text-red-500 ">{error} </span>
       </label>
     </div>
     <div className='    '>
     <button onClick={googleLogInhanle}  className="btn   md:ml-24  lg:ml-8 md:ml btn-primary "><FaGoogle className='inline mr-3 text-xl'/>Continue with Google</button>

     <div className="divider lg:hidden   ">OR</div>
     

     <button   className="btn  md:ml-24 btn-primary  lg:ml-"><FaFacebook className='inline   text-xl'/>Continue with Facebook </button>
     </div>
     <div className="form-control mt-6">
       <button type='submit' className="btn btn-primary ">Sing Up</button>
       
     </div>
     </form>
   </div>
   
   
 </div>
 
</div>

                    </div>

                </div>
 
</div>
            
        </div>
    );
};

export default Singup;