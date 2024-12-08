import './RegisterSuperior.css';
import { Link } from "react-router-dom";

function RegisterSuperior() {
  return (
    <section className="header">
      <section className="registerBox">
        <a href="/">
          <img src="/assets/img/arrow.png" className="arrow" alt="Voltar" />
        </a>

        <div className="imoRegister">
          <Link to="/View2" className="linkWrapper">
            <img src="/assets/img/plus.png" alt="Cadastrar imóvel" className="plusIcon" />
            <span className="titlePlus">Cadastrar imóvel</span>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default RegisterSuperior;
