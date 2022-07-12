import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdateUser = () => {
    
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { id } = useParams()
console.log(id)

    const onSubmit = async data => {
        fetch(`http://localhost:5000/allUser/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                reset()
                toast('Update Successfully done')
            })
    }

    return (
        <div>
            <p>User Id : {id}</p>
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


                <input className='btn w-full max-w-xs text-white' type="submit" value="Edit User" />
            </form>
        </div>
    );
};

export default UpdateUser;