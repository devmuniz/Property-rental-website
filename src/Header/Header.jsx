import './Header.css'
import '../../index.css'

function Header () {
    return (
        
        <header>

            <div id='header'>

                    <a href="/"><img src={"../src/assets/img/logo.png"} className='logo'/></a>
                    <h2 className='titleHeader'>Anuncie seu espaço e fature!</h2>
                    <a href=""><img src={"../src/assets/img/user.png"}  className='userIcon' alt="" /></a>
                
            </div>
 
        </header>
    )
}

export default Header