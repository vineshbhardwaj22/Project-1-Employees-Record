import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { logoutUser } from "../services/authentication";
import { useContext } from "react";
import { myContext } from "../../../context/MyContext";

export default function Navbar() {
    const { user, setUser } = useContext(myContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logoutUser();
            alert("user logged out successfully...");
            setUser(null);
            navigate("/login");
        } catch (err) {
            console.log(err);
            alert("Some internal Error happened please try again later");
        }
    };

    return (
        <div className="navbar bg-info">
            <h2 className="logo-cont">EMS</h2>
            <div className="links-cont">
                <ul className="link-list-cont">
                    <li className="navabarBtn" onClick={() => navigate("/")}>
                        Home
                    </li>
                    <li className="navabarBtn" onClick={() => navigate("/addEmp")}>
                        Add New
                    </li>
                    <li className="navabarBtn" onClick={() => navigate("/about-us")}>
                        About_US
                    </li>
                </ul>
            </div>
            <div className="user-cont">
                <div className="dropdown">
                    <img
                        className="dropdown-toggle user-img rounded-5"
                        data-bs-toggle="dropdown"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAVgEZdN3i24u5KqiegG9MCyzQPyAgKvmMw&s"
                        alt="user-img"
                    />
                    {/* authentication code. */}
                    <ul className="dropdown-menu">
                        {user ? (
                            <div>
                                <li
                                    className="dropdown-item"
                                    onClick={handleLogout}
                                    style={{ cursor: "pointer" }}
                                >
                                    Logout
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/help">
                                        help
                                    </Link>
                                </li>
                            </div>
                        ) : (
                            <div>
                                <li>
                                    <Link className="dropdown-item" to="/login">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/register">
                                        Register
                                    </Link>
                                </li>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}