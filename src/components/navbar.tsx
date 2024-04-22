import Logout from "./logout";
import { Outlet, Link } from "react-router-dom";

interface NavBarInterfase {
    isAuthenticated: boolean
}
const Navbar: React.FC<NavBarInterfase> = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-white bg-white">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end p-3" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">

                            {
                                props.isAuthenticated ?
                                    <li className="nav-item">
                                        <Logout btnClass="btn btn-dark" btnText="Logout" redirect="/login" />
                                    </li>
                                    :
                                    <>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact">Contact</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/signup">Signup</Link>
                                        </li>
                                    </>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>


    )
}

export default Navbar
