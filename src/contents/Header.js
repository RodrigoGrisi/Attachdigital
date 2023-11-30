import React from "react";
import logotipo from "../assets/logotipo.png";

function Header() {
  return (
    <div>
      <header>
        <img src={logotipo} alt="Logotipo da Attach digital" />
        <a
          href="https://api.whatsapp.com/send/?phone=5511997214975&text=Ol%C3%A1%2C+venho+atrav%C3%A9s+do+seu+site.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>ENTRAR EM CONTATO</button>
        </a>
      </header>
    </div>
  );
}

export default Header;
