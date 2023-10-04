import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';


const Signup = (props) => {//pr-> for alert onl
    const [credentials, setCredentials] = useState({name:"SSD",email: "a", password: "",cpassword:""}) 
    // let history = useHistory();
    let navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name,email,password}=credentials;
        const response = await fetch("http://localhost:8000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json()
        console.log(json);
        // if (json.success){
        //     // Save the auth token and redirect
        //     localStorage.setItem('token', json.authtoken); 
        //     history.push("/");
        if(json.success){
            localStorage.setItem('token' , json.authtoken);
            navigate("/");
            props.showAlert("account created successfully","success")

        }
        else{
            //alert("Invalid credentials user new");
            props.showAlert("invalid user (new)","danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className="container">
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />

                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onChange} name="password" id="password" minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">cPassword</label>
                    <input type="password" className="form-control" onChange={onChange} name="cpassword" id="cpassword" minLength={5} required />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Signup