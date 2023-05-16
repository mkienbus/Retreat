import { useState } from 'react'
import styles from '@/styles/createUserForm.module.css'

export default function CreateUserForm(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(){
        console.log("submitted")
    }

    return(
        <>
            <div className={styles.formContainer}>
            <form onSubmit = {handleSubmit}>
                {/* {error ? <span>{error}</span> : <span></span>} */}
                <br></br>
                <label htmlFor="signupFirstName">First Name:</label>
                <input 
                type = "text" 
                id = "signupFirstName" 
                value = {firstName} 
                onChange = {(e) => setFirstName(e.target.value)}/>

                <label htmlFor="signupLastName">Last Name:</label>
                <input 
                type = "text" 
                id = "signupLastName" 
                value = {lastName} 
                onChange = {e => setLastName(e.target.value)}/>

                <label htmlFor="email">Email: </label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <br></br>

                <label htmlFor="password">Password: </label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>
                <label htmlFor="password-confirmation">Password Confirmation:</label>
                <input
                type="password"
                id="password-confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <br></br>
                <button type="Submit">Submit</button>
            </form>
            </div>
        </>
    )
}