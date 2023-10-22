import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useState } from 'react';
import useTitle from '../../../Hooks/useTitle';

const LogIn = () => {

  const {login}=useContext(AuthContext)
  const [error,setError]=useState('')
  useTitle("Log In")
   
    const location=useLocation()
    const navigate=useNavigate()
    const from=location.state?.from?.pathname || '/'

    const loginhander=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        login(email,password)
        .then(result=>{
            const user=result.user;
            toast.success('Your Log in Successfully');
            <Toaster/>
            form.reset()
            
            const currentUser={
              email:user.email

            }
            console.log(currentUser)
            fetch('https://muntajat-com-server-cve15m39y-akahad1.vercel.app/jwt',{
              method:"POST",
              headers:{
                'content-type' : 'application/json'
              },
              body: JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data)
              localStorage.setItem('muntajatToken',data.token)
              navigate(from,{replace:true})
            })

            
        })
        .catch(error=>{console.log(error)
            const message=error.message
            setError(message)
        })

    }
    return (
        <div>
            <div >
                <div className=' grid lg:grid-cols-8'>
                    <div className=' lg:col-span-4'>
                        <img className=' lg:w-full mt-20  ' src="https://i.ibb.co/0DC09N7/3094352.jpg" alt="" />
                    </div>
                    <div className='lg:col-span-4'>
                    <div className=" bg-center place-items-center  mt-10 mb-10 lg:mr-20 lg:ml-8  md:mr-4 mr-4 ml-4 lg:h-screen flex lg:items-center md:justify-center ">
 
    
   
 <div className="card flex-shrink-0 lg:w-full md:w-2/3  w-full border    bg-base-200 border-slate-900 ">
     <h1 className='lg:text-3xl md:text-3xl  lg:ml-8 lg:mt-5 ml-16 mt-5 text-xl '>Log In Your ACCOUNT</h1>
    
     
   <div className="card-body">
     
      <form onSubmit={loginhander}>
   
     {/* 2 */}

     <div className="form-control">
       <label className="label">
         <span className="label-text text-white"> Email</span>
       </label>
       <input type="email" name='email' placeholder="email" className="input input-bordered" />
     </div>
    

     <div className="form-control">
       <label className="label">
         <span className="label-text text-white ">Password</span>
       </label>
       <input type="password" name='password' placeholder="password" className="input input-bordered " />
       <label className="label">
         <span className="label-text-alt "> You not singup plese <Link to='/singup' className='text-red-300'>Sing up</Link></span>
       </label>
       <label className="label">
         <span className="label-text-alt text-red-500 ">{error} </span>
       </label>

     </div>
     
     <div className="form-control mt-6">
       <button type='submit' className="btn bg-fuchsia-500 text-white">Log In</button>
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

export default LogIn;