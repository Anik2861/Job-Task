import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AddApi = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    const onSubmit = async data => {
        console.log('form data',data)
        fetch('http://localhost:5000/addUser',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            reset()
            if (result) {
                toast('Comment Add Sucessfully')
            }
        })
    }
    return (
        <div>
            <h1>add api</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Phone"
                                className="input input-bordered w-full max-w-xs"
                                {...register("phone")}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Hobbies</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Hobbies"
                                className="input input-bordered w-full max-w-xs"
                                {...register("Hobbies", {
                                    required: {
                                        value: true,
                                        message: 'Hobbies is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.Hobbies?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Hobbies.message}</span>}
                                {errors.phone?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.Hobbies.message}</span>}
                            </label>
                        </div>


                        <input className='btn w-full max-w-xs text-white' type="submit" value="Add User" />
                    </form>
        </div>
    );
};

export default AddApi;