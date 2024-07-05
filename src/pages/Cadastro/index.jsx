import './style.css'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PiMailboxBold } from "react-icons/pi";
import { CgPassword } from "react-icons/cg";
import { TbPointFilled } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { useState } from 'react';


export default function Cadastro() {

    // const [nome, setNome] = useState('')
    // const [email, setEmail] = useState('')
    // const [nome, setNome] = useState('')

    return (
        <div className="container_cadastro">
            <div className="card_cadastro">
                <div className="topo_cadastro">
                    <FaRegArrowAltCircleLeft color='black' />
                    <p>Already a member? <span>Sign in</span></p>
                </div>
                <div className="meio_cadastro">
                    <h1 className='title'>Sign Up</h1>
                    <p className='secure'>Secure your Communications with Easymail</p>
                    <div className="nome">
                        <FaUser color='gray' />
                        <input type="text" />
                        <IoMdCheckmarkCircleOutline color='gray' />
                    </div>
                    <div className="email">
                        <PiMailboxBold color='gray' />
                        <input type="text" />
                        <IoMdCheckmarkCircleOutline color='gray' />
                    </div>
                    <div className="password">
                        <CgPassword />
                        <input type="password" />
                    </div>
                    <div className="least">
                        <TbPointFilled />
                        <p>Least 8 characteres</p>
                    </div>
                    <div className="caractere">
                        <TbPointFilled />
                        <p>Least one number (0-9) or a symbol</p>
                    </div>
                    <div className="maiusculo">
                        <TbPointFilled />
                        <p>Lowercase (a-z) and uppercase(A-Z)</p>
                    </div>

                    <div className="password">
                        <CgPassword />
                        <input type="password" placeholder='Redefinir senha' />
                    </div>
                    <div className="fim">
                        <button className='botao'>Sign Up <FaArrowCircleRight /></button>
                        <p className='or'>Or</p>
                        <FaFacebook color='blue' />
                        <FaGoogle color='red' />
                    </div>

                </div>
            </div>
        </div>
    )
}

// const caracteresEspeciais = ['!', '@', '#', '$', '%', '&', '*']

// function validador(senha) {
//     if (senha.length < 8) {
//         console.log("Sua senha é muito curta. Informe uma senha com no mínimo 8 caracteres")
//         return
//     }



//     if (senha.length === 8) {
//         console.log("Senha fraca")
//         return
//     } else
//     {
//         let senhaForte = false
//         for (let i = 0; i < caracteresEspeciais.length; i++) {
//             if (senha.includes(caracteresEspeciais[i])) {
//                 senhaForte = true
//             }
//         }
//         if(senha.length > 8 && !senhaForte){
//             console.log("Senha média")
//             return
//         }else{
//             console.log("Senha Forte")
//             return
//         }
//     }
// }
