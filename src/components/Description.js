import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Description = () =>{
    const {id} = useParams()
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=> setUser(res.data))
        .then(()=>setLoading(false))
        .catch((error)=> console.log(error))
    }, [])
    return(
    <>
    {
        loading ? <h1> Mazel </h1> : 
        <div>
        <h1> {user.name} </h1>
        <h1> {user.email} </h1>
        <h1> {user.address.city} </h1>
        </div>
    }
    </>
    )
}
export default Description