import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import "./Header.css";

function Header() {
    return (
        <>
            <div className="header-container">
                <button className="expand-form-btn">
                    <FontAwesomeIcon icon="faPlusCircle" />
                </button>
            </div>
        </>
    );
}

export default Header;
