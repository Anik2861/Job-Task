import React, { useEffect, useState } from 'react';

const LoadApi = () => {
    const [api, setApi] = useState([])
    useEffect(() => {

        const url = `https://salty-shelf-65784.herokuapp.com/api`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setApi(data))

    }, [api])


    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure ?')

        if (proceed) {
            const url = `https://salty-shelf-65784.herokuapp.com/api/${id}`
            console.log(url)
            fetch(url, {
                method: "DELETE",
                body: JSON.stringify({ id })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = api.filter(p => p._id !== id)
                    setApi(remaining)
                })
        }
    }


    return (
        <div>
            <h3>Total api : {api.length}</h3>

<div>
    <input type="text" />
    
</div>

            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {api.map((data, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <th>{data.name}</th>
                                <td>{data.email}</td>
                                <td onClick={() => handleDelete(data._id)}> ❌ </td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LoadApi;