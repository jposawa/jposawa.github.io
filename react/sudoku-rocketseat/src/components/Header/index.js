import React from 'react';

import "./styles.css";

const Header = () =>
{
    return(
        <header id="mainHeader">Sudoku</header>
    );
}

export default Header;

/*
EQUIVALENTE AO DE CIMA. O DE BAIXO USAR MAIS QUANDO FOR UTILIZAR O CONCEITO DE ESTADO
class Header extends Component
{
    render()
    {
        return(
            <h1>Hello</h1>
        );
    }
}
*/