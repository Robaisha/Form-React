    import React,{useState} from 'react'
    
    export default function Form() {
        const [details,setDetails]=useState({
        firstname:"null",
        lastname :""

        })
        const setfirstname=(data)=>{
console.log(data.target.value);
        setDetails({...details,firstname:data.target.value})

        } 
const setlastname=(data)=>{
console.log(data.target.value);
        setDetails({...details,lastname:data.target.value})

        } 
        return (
            <div className="container">
    <h1>MY DETAILS</h1>
                <label htmlFor="first">
                First Name
                <input type="text" onChange={setfirstname}/>
                </label>
    <br/>
                <label htmlFor="last">
                Last Name
                <input type="text" onChange={setlastname} />
                </label>

                
            </div>
        )
    }
