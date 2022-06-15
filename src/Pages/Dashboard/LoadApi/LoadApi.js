import React, { useEffect, useState } from 'react';
import './LoadApi.css'


const LoadApi = () => {
    // const [api, setApi] = useState([])
    const [searchText, setSearchText] = useState('')
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {

        const url = `https://salty-shelf-65784.herokuapp.com/api`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const match = data.filter(d => d.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
                setSearchResult(match)
            })

    }, [searchText])


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
                    const remaining = searchResult.filter(p => p._id !== id)
                    setSearchResult(remaining)
                })
        }
    }
    const handleSearchChange = event => {
        const searchText = event.target.value
        setSearchText(searchText)
    }
    // const handleSearchChange = event => {
    //     const searchText = event.target.value
    //     const match = api.filter(a => a.name.includes(searchText))
    //     setSearchResult(match)
    // }
    const handleFilter = () => {
        const filterData = searchResult.filter()
    }
    return (
        <div>
            <h3>Total api : {searchResult.length}</h3>

            <div>
                <input
                    className="input input-bordered w-full max-w-xs my-6 "
                    onChange={handleSearchChange} placeholder='Search Name' type="text" />

            </div>



            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchResult.map((data, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <th>{data.name}</th>
                                <td>{data.email}</td>
                                <th>{data.company.catchPhrase.length}</th>
                                <td onClick={() => handleDelete(data._id)}> ❌ </td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LoadApi;