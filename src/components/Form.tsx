import '../App.css'
import google from '../assets/icon/google.svg'
import apple from '../assets/icon/apple.svg'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { AiOutlineLock } from 'react-icons/ai'

function Form() {
  return (
    <form className='container'>
        <header>create your account</header>
        <div className='btn-group'>
            <button type="button">
                <img src={google} alt="" />
                Sign up with Google
            </button>
            <button type="button">
                <img src={apple} alt="" />
                Sign up with Apple
            </button>
        </div>
        <div className='line'>
            <div className='line1'></div>
            <p>Or</p>
            <div className='line2'></div>
        </div>
        <div className='input-container'>
            <div>
                <span>
                    <label htmlFor="email">Email:</label>
                    <MdOutlineAlternateEmail className='icon'/>
                </span>
                <input type="text" id="email" placeholder='Your Email' required spellCheck/>
            </div>
            <div>
                <span>
                    <label htmlFor="password">Password:</label>
                    <AiOutlineLock className='icon'style={{transform: 'translate(226px , 34px)'}} />
                </span>
                <input type="password" id="password" placeholder='Your Password' required spellCheck/>
            </div>            
            <div>
                <span>
                    <label htmlFor="confirmPassword">Repeat Password:</label>
                    <AiOutlineLock className='icon' style={{transform: 'translate(172px , 34px)'}} />   
                </span>
                <input type="password" id="confirmPassword" placeholder='Repeat Password' required spellCheck/>
            </div>
        </div>
        <button type='submit'>Sign up</button>
        <span>
            <p>Did you forget your password?</p>
            <p>Reset Password</p>
        </span>
        <button type="button">Login</button>
    </form>
  )
}

export default Form