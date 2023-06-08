import { Link } from 'react-router-dom'
import './Login.css'

export default function Login(props) {


    return(
        <div className='Login'>
            {props.visibility && <div className='login-container'>
            {props.message === 'Logged In' ? 
        <Link to = '/browse'>Browse Events</Link>    :
        <>
        <form onSubmit={props.handleLogin}>
                    <input
                    type="text"
                    name="login"
                    placeholder="email"
                    onChange={props.onInput} />
                    <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    onChange={props.onInput} />
                    <button type="submit">Log in</button>
                    
                </form>
                {props.message && <p>{props.message}</p>}
                <p>Don't have an account? <span className='login-btn' onClick={props.visibilityHandler}>Sign Up</span> for free!</p>
        </>
        }

                
            </div>}
            {!props.visibility && <div className='login-container'>
            {props.message === 'Account has been created' ?
        <><p>{props.message}</p>
        <button onClick={props.visibilityHandler}>Log in</button>
        </>:
        <>
        <form onSubmit={props.handleSignup}>
                    <input
                    type="text"
                    name="login"
                    placeholder="email"
                    onChange={props.onInput} />
                    <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    onChange={props.onInput} />
                    <button type="submit">Sign up</button>
                </form>
                {props.message && <p>{props.message}</p>}
                <p>Already have an account? <span className='login-btn' onClick={props.visibilityHandler}>Log In</span></p>
        </>   
        }
            
            </div>}
        </div>
    )
}