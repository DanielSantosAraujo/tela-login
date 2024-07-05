import './style.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="container">
            <div className="card">
                <div className="esquerda">
                    <div >
                        <button className="inputFacebook">
                            <FaFacebookF />
                            <p>Login with Facebook</p>
                        </button>
                    </div>
                    <div>
                        <button className="inputTwitter">
                            <FaTwitter />
                            <p>Login with Twitter</p>
                        </button>
                    </div>
                    <div>
                        <button className="inputGoogle">
                            <TiSocialGooglePlus size={25}/>
                            <p>Login with Google+</p>
                            </button>
                    </div>
                </div>

                <div className="meio_login">
                    <div className="meio_cima"></div>
                    <div className="meio_meio">OR</div>
                    <div className="meio_baixo"></div>
                </div>
                
                <div className="direita">
                    <div className="topo">
                        <h2>Sign in manually</h2>
                    </div>

                    <div className="meio">
                        <input type="text" placeholder='User or email' />
                        <input type="password" placeholder='Password' />
                    </div>

                    <div className="fim">
                        <div className="fim_cima">
                        <div className="check">
                            <input type="checkbox" name=''/>
                            <p className=''>Remember me</p>
                        </div>
                        <button className='login'>Login</button>
                        </div>
                        <div className='fim_baixo'>
                        <Link to='/cadastro'><p className='registro'>Register now</p></Link>  <div className="barra">|</div> 
                        <Link to="/esqueceusenha"><p className='password'>Forget password?</p></Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}