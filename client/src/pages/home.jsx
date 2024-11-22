import { useState, useEffect } from 'react'
const apiURl = 'http://localhost:5000/api';

export default function Home() {

    const [data, setData] = useState(null);
    const apiUrl = '/api';

    useEffect(()=>{
        fetch(`${apiUrl}/data`)
            .then((res) => res.json())
            .then((dataFromServer) => setData(dataFromServer))
    },[])

    return (
        <>
            <h1>Home</h1>
            <h2>{data && data.message ? <p>{data.message}</p> : 'Loading...'}</h2>
        </>
    )
}