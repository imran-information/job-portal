import React, { useContext } from 'react';
import { Link } from 'react-router';
import AuthContext from '../../context/AuthContext/AuthContext';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)

    const links = <>
        <li><Link to="/">Home</Link></li>

        {!user && <li><Link to="/register">Register</Link></li>}



    </>
    return (
        <div className="navbar bg-black shadow-sm sticky top-0  text-white  ">
            <div className="container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/'>LOGO</Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal justify-end px-1">
                            {links}
                        </ul>
                    </div>
                    {
                        user
                            ? <button onClick={signOutUser} className="btn">
                                Sing Out
                            </button>
                            : <Link to="/login" className="btn">
                                Login
                            </Link>
                    }
                </div>
            </div >
        </div >
    );
};

export default Navbar;