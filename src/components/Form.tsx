import { JSX , useState } from 'react'
import '../App.css'
import google from '../assets/icon/google.svg'
import apple from '../assets/icon/apple.svg'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { AiOutlineLock  , AiOutlineUnlock} from 'react-icons/ai'

export default function Form():JSX.Element {
    const [psw1 , setPsw1] = useState<"password" | "text">("password");
    const [psw2 , setPsw2] = useState<"password" | "text">("password");

    const handleClickIcons = (callback:Function , value:string):void => {
        callback(value);
    }

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
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" placeholder='Your Email' required spellCheck autoComplete='false'/>
                <MdOutlineAlternateEmail className='icon icon1'/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type={psw1} id="password" placeholder='Your Password' required spellCheck autoComplete='false' maxLength={18}/>
                { psw1 == "password" ? (
                    <AiOutlineLock className='icon icon2' onClick={(e:EventInit):void => handleClickIcons(setPsw1 , 'text')} />
                ) : (
                    <AiOutlineUnlock className='icon icon2' onClick={(e:EventInit):void => handleClickIcons(setPsw1 , 'password')}/>
                )}
            </div>            
            <div>
                <label htmlFor="confirmPassword">Repeat Password:</label>
                <input type={psw2} id="confirmPassword" placeholder='Repeat Password' required spellCheck autoComplete='false' maxLength={18}/>
                { psw2 == "password" ? (
                    <AiOutlineLock className='icon icon3' onClick={(e:EventInit):void => handleClickIcons(setPsw2 , 'text')} />
                ) : (
                    <AiOutlineUnlock className='icon icon3' onClick={(e:EventInit):void => handleClickIcons(setPsw2 , 'password')}/>
                )}
            </div>
        </div>
        <button type='submit'>Sign up</button>
        <span>
            <p>Did you forget your password?</p>
            <a href='#'>Reset Password</a>
        </span>
        <button type="button">Login</button>
    </form>
  )
}