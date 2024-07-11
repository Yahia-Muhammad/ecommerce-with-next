import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCartShopping, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header id="headerElement" className="flex">
            <div className="logo">
                <FontAwesomeIcon style={{width: "1.5rem", marginRight: "0.3rem"}} icon={faBagShopping} />
                <span style={{ fontWeight: 'bold' }}>AWU</span>
                <p style={{ letterSpacing: '0.5px' }}>Shopping</p>
            </div>
            <div className="links">
                <a style={{ position: 'relative' }} className="cart" href="./pages/cart.html">
                    <FontAwesomeIcon style={{width: "1rem", marginRight: "0.3rem", transform: "translate(0,2px)"}} icon={faCartShopping} />
                    $0.00
                    <span className="products-number">2</span>
                </a>
                <a className="sign-in" href="./pages/signin.html">
                    <FontAwesomeIcon style={{width: "1rem", marginRight: "0.3rem", transform: "translate(0,4px)"}} icon={faRightToBracket} />
                    Sign in</a>
                <a className="register" href="./pages/register.html">
                    <FontAwesomeIcon style={{width: "1rem", marginRight: "0.3rem", transform: "translate(0,2px)"}} icon={faUserPlus} />

                    Register</a>
            </div>
        </header>
    );
}

export default Header;
