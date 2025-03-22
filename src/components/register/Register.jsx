import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { registerUser } from "../services/authentication";

export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await registerUser(email, password);
            console.log(res);
            navigate("/");
        } catch (err) {
            console.log("error is :", err);
        }
    };

    return (
        <div className="register">
            <div className="nav-header">
                <Link to="/">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAVgEZdN3i24u5KqiegG9MCyzQPyAgKvmMw&s"
                        className="header-logo"
                        alt="LeftOver"
                    />
                </Link>
                <h2>EMS</h2>
            </div>
            <div className="register-cont">
                <div className="container d-flex justify-content-center align-items-center mt-2">
                    <form
                        className="p-2 rounded-2"
                        id="registrationForm"
                        onSubmit={handleSubmit}
                    >
                        <h2 className="text-center fw-bold">Welcome to EMS</h2>
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <label className="form-label fs-5" htmlFor="form3Example1">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        id="form3Example1"
                                        className="form-control"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <label className="form-label fs-5" htmlFor="form3Example2">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        id="form3Example2"
                                        className="form-control"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label fs-5" htmlFor="form3Example3">
                                Email address
                            </label>
                            <input
                                required
                                type="email"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                            />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label fs-5" htmlFor="form3Example4">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                required
                            />
                        </div>

                        <div className="btn-container d-flex justify-content-center align-items-center">
                            <button type="submit " className="btn btn-success w-50 mb-2">
                                Register
                            </button>
                        </div>

                        <div className="text-center">
                            <p>
                                Already a member? <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}