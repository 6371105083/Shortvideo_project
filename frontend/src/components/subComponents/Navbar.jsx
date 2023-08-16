import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
const NavBar = () => {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token'); // Get token from localStorage

    return (
        <>
            <nav className="bg-gray-800 text-white p-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-semibold">Hyscaler Reel</h1>
                    </div>
                    <div className="space-x-4 ">
                        <Link to="/" className="hover:text-white no-underline">
                            Home
                        </Link>

                        {!token && (
                            <>
                                <Link to="/register" className="hover:text-white no-underline">
                                    Register
                                </Link>
                                <Link to="/login" className="hover:text-white no-underline">
                                    Login
                                </Link>
                            </>
                        )}

                        {token && (
                            <>
                                {/* Render Logout or Profile links when token is present */}
                                <Link to="/profile" className="hover:text-white no-underline">
                                    {username}
                                </Link>
                                <Link onClick={()=>{
                                    localStorage.clear() 
                                    alert("Are You want to logout !");
                                    toast.warning("Logout Successfully");   
                                }}to="/register" className="hover:text-white no-underline">
                                    Logout
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;