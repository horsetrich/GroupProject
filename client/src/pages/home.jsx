import { useState, useEffect } from 'react'
const apiURl = 'http://localhost:3000/api';

export default function Home() {

    const [data, setData] = useState(null);
    //const apiUrl = '/api';

    useEffect(()=>{
        fetch(`${apiUrl}/data`)
            .then((res) => res.json())
            .then((dataFromServer) => {
                console.log( 'Fetched data:' , dataFromServer);
                setData(dataFromServer);
            })
            .catch((error) => console.error('Error fetching data:' , error))
           // .then((dataFromServer) => setData(dataFromServer))
    },[])

    return (
        <>
            <h1>Home</h1>
            <h2>{data && data.message ? <p>{data.message}</p> : 'Loading...'}</h2>
        </>
    )
}