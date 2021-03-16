import {useState} from "react"
function FormContainer() {
    const [password, setPassword] = useState("twixt")
    const [email, setEmail] = useState("dodooatif@gmail.com")
    return(
       <section className="led">
            <form id= "lad">
            <input type="text" placeholder= "Enter Name"/>
            <input type="password" placeholder= "Enter password" onChange={(e) => setPassword(e.target.value)} />
            <input type="email" placeholder= "Enter Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder= "Enter contact"/>
            <button>SUBMIT</button>
        </form>
        <h1>{email}</h1>
        <h2>{password}</h2>
       </section>
    )
}
export default FormContainer;