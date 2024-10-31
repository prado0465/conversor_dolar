import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Conversor de Moedas. Todos os direitos reservados.</p>
      <p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        |{" "}
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
      <p>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Termos de Serviço
        </a>{" "}
        |{" "}
        <a href="/" target="_blank" rel="noopener noreferrer">
          Política de Privacidade
        </a>
        |{" "}
        <a href="/" target="_blank" rel="noopener noreferrer">
          Política de Cookies
        </a>
      </p>
    </footer>
    
  );
}

export default Footer;
