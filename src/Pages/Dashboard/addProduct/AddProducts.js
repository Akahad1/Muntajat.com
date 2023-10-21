import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../../Hooks/useTitle';


const AddProducts = () => {
    useTitle("Dashboard-AddProduct")
    const AddProductHandelr=(event)=>{
       
      
        
        event.preventDefault()
        
        const form=event.target;
        const name =form.name.value;
        const category=form.catagoryName.value;
        const price=form.OriginalPrice.value;
        const ratings=form.Rating.value;
        
        const Shopname=form.ShopName.value;
        const img=form.Photourl.value;
        const quantity=form.quantity.value;
        const SellerName =form.Sellarname.value
        console.log(name,category,price,ratings,Shopname,img,quantity,SellerName)
        const product ={
            name,
            
           
            img,
            category,
            price,
            ratings,
            Shopname,
            SellerName,
            quantity

            


        }
        fetch('http://localhost:5000/catagoryproduct',{
            method:"POST",
            headers:{
                "content-type" : 'application/json'
            },
            body: JSON.stringify(product)
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
               toast.success("successfully data add")
            
              
               
               form.reset()
            }
        })
        
        
        


    }
    return (
        <div>
            <form className='  mt-5 flex justify-center' onSubmit={AddProductHandelr}>
            <div className="hero lg:w-8/12 md:w-10/12  ">



<div className="card  w-full  shadow-2xl bg-base-100">

    <div className="card-body">
        <p className='text-4xl text-center font-signature'>Add Products</p>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Product Name</span>
            </label>
            <input type="text" name='name' placeholder=" Type Product Name" className="input input-bordered" required />
            <div className="form-control">
            
            
        </div>


        <div className="form-control">
            <label className="label">
                <span className="label-text">Catagory-name</span>
            </label>
            
  
  <div  className="input-group ">
    <select  name='catagoryName'  className="select  input input-bordered w-full " required>
      <option  selected>Mobile</option>
      <option>Laptop</option>
      <option>Tablet </option>
      
      
    </select>
    
  </div>
  
 
</div>
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Price</span>
            </label>
            <input type="number" name='OriginalPrice' placeholder="Price" className="input input-bordered"  required/>
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Rating</span>
            </label>
            <input type="number" name='Rating' placeholder="Rating" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
            <label className="label">
                <span className="label-text">Photourl</span>
            </label>
            <input type="text" name='Photourl' placeholder=" Type photourl" className="input input-bordered" required/>
        </div>
        <fieldset>
            <legend>Sellar Name</legend>
            <div className='form-control'>
            <input type="text" name='Sellarname' placeholder="Type catagoryid" className="input input-bordered" required/>

            </div>
           
            
            
           
            
        </fieldset>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Shop Name</span>
            </label>
            <input type="text" name='ShopName' placeholder="Type ShopName" className="input input-bordered" required />
            <label className="label">

            </label>
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Product Quantity</span>
            </label>
            <input type="text" name='quantity' placeholder="Type quantity" className="input input-bordered"  required/>
            <label className="label">

            </label>
        </div>
        <div className="form-control mt-6">
            <button type='submit' className="btn btn-primary">Add Product</button>
            <Toaster/>
        </div>
    </div>
</div>
</div>
            </form>
            
        </div>
    );
};

export default AddProducts;