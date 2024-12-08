import './RegisterSuperior.css'
import { Link } from "react-router-dom"


function RegisterSuperior () {
    return (
        <section className='header'>
                <section className='registerBox'>

                    <a href="/">
                    <img src={'../src/assets/img/arrow.png'} className="arrow" />
                    </a>

                    <div className='imoRegister'> 
                    
                        <a href=""><img src={'../src/assets/img/plus.png'} alt="" className='plusIcon' />
                        <span className='titlePlus'><Link to={'/View2'}>Cadastrar imóvel</Link></span>
                        </a>

                    </div>

                </section>
            </section>
    )
}

export default RegisterSuperior