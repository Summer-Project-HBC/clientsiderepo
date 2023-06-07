
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
                <a onClick={props.visibilityHandler}>Don't have an account? Sign up for free!</a>
        </>
        }

                
            </div>}
            {!props.visibility && <div className='login-container'>
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
                <a onClick={props.visibilityHandler}>Already have an account? Log in!</a>
            </div>}
        </div>
    )
}