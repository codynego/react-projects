import React from 'react'
import { useEffect, useState } from 'react'

export const FetchDataEffects = () => {
    const [data, setData] = useState([])
    const [fetching, setFetching] = useState(false)

    useEffect(() => {
        async function fetchData () {
            try {
                setFetching(true)
                const response = await fetch("https://jsonplaceholder.typicode.com/posts")
                const data = await response.json()
                setFetching(false)
                setData(data)
            } catch (error) {
                console.error(error)
                setFetching(false)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>
                {fetching ? "Fetching..." : "Data Fetched!"}
            </h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}