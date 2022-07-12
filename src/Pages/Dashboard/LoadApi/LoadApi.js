import React, { useEffect, useState } from 'react';
import './LoadApi.css'


const LoadApi = () => {
    const [data, setData] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [sortingData, setSortingData] = useState("ASC")

    useEffect(() => {

        const url = `http://localhost:5000/allUser`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])


    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure ?')

        if (proceed) {
            const url = `http://localhost:5000/allUser/${id}`
            fetch(url, {
                method: "DELETE",
                body: JSON.stringify({ id })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = searchResult.filter(p => p._id !== id)
                    setData(remaining)
                })
        }
    }

    const sorting = (data) => {
        if (sortingData === "ASC") {
            const sort = [...searchResult].sort((a, b) =>
                a[data].toLocaleLowerCase() > b[data].toLocaleLowerCase() ? 1 : -1
            )
            setSearchResult(sort)
            setSortingData("DSC")
        }
        if (sortingData === "DSC") {
            const sort = [...searchResult].sort((a, b) =>
                a[data].toLocaleLowerCase() < b[data].toLocaleLowerCase() ? 1 : -1
            )
            setSearchResult(sort)
            setSortingData("DSC")
        }
    }

    return (
        <div>
            <h3>Total api : {data.length}</h3>

            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th onClick={() => sorting("name")}>Name (sort)</th>
                            <th onClick={() => sorting("email")}>Email(sort)</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((d, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <th>{d.name}</th>
                                <td>{d.email}</td>
                                <th>{d.phone}</th>
                                <th>Update</th>
                                <td onClick={() => handleDelete(d._id)}> ❌ </td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LoadApi;