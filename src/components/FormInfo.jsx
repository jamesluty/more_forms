import {useState} from 'react'
import styles from './styles.module.css'

const FormInfo = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (input) => {
        input.preventDefault();
        const newInfo = {firstName, lastName, email, password, confirmPassword};
        console.log(newInfo)
    };

    const validateFirstName = () => {
        if (firstName.length < 1){
            return false
        } else {
            return true
        }
    }

    const validateLastName = () => {
        if (lastName.length < 1){
            return false
        } else {
            return true
        }
    }

    const validateEmail = () => {
        if (email.length < 1){
            return false
        } else {
            return true
        }
    }

    const validatePassword = () => {
        if (password.length < 1){
            return false
        } else {
            return true
        }
    }

    const validateConfirmPassword = () => {
        if (confirmPassword.length < 1){
            return false
        } else {
            return true
        }
    }

    return (
        <div className={styles.center}>
            <form className={styles.column} onSubmit={createUser}>
                <div className={styles.inputs}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" onChange={  (input) => setFirstName(input.target.value) }/>
                </div>
                <p className={styles.alert}>{ validateFirstName() ? "" : "First name required!" }</p>
                <div className={styles.inputs}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" onChange={ (input) => setLastName(input.target.value) }/>
                </div>
                <p className={styles.alert}>{ validateLastName() ? "" : "Last name required!" }</p>
                <div className={styles.inputs}>
                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={ (input) => setEmail(input.target.value) }/>
                </div>
                <p className={styles.alert}>{ validateEmail() ? "" : "Email required!" }</p>
                <div className={styles.inputs}>
                    <label htmlFor="password">Password</label>
                    <input type="text" onChange={ (input) => setPassword(input.target.value) }/>
                </div>
                <p className={styles.alert}>{ validatePassword() ? "" : "Password required!" }</p>
                <div className={styles.inputs}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="text" onChange={ (input) => setConfirmPassword(input.target.value) }/>
                </div>
                <p className={styles.alert}>{ validateConfirmPassword() ? "" : "Confirm password required!" }</p>
                <input className={styles.submit} type="submit" value="Create User"/>
            </form>
        </div>
    )
}

export default FormInfo;