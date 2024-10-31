import React from 'react';

function Header() {
    return (
        <header className="header">
            <div>
                <img src="https://www.nutriz.com.br/static/media/Logo-negativo-white.b91fbea6e128a378a75e.png" alt="Logo" className="logo"
                    style={{ width: '150px', height: 'auto', display: 'flex', padding: '2px' }} />
            </div>
            <h1>Conversor de Moedas</h1>
            <p>Converta moedas em tempo real com taxas de câmbio atualizadas!</p>
        </header>
    );
}

export default Header;
