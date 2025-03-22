import { useEffect, useState } from "react";
import CRUD_OP from "../services/Employee.services";
import Navbar from "../navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const { updateEmployee } = CRUD_OP;

export default function UpdateEmp() {
    const { state } = useLocation()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState();
    const [age, setAge] = useState();
    const [address, setAddress] = useState("");
    const [dept, setDept] = useState("");
    const [empType, setEmpType] = useState("");
    const [salary, setSalary] = useState();
    const [message, setMessage] = useState({ error: false, msg: "" });

    useEffect(() => {
        if (state) {
            setName(state.name || "");
            setEmail(state.email || "");
            setPhone(state.phone || "");
            setAge(state.age || "");
            setAddress(state.address || "");
            setDept(state.dept || "");
            setEmpType(state.empType || "");
            setSalary(state.salary || "");
        }
    }, [state])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !name ||
            !email ||
            !phone ||
            !age ||
            !address ||
            !dept ||
            !empType ||
            !salary
        ) {
            setMessage({ error: true, msg: "All fields are mandatory..." });
            return;
        }

        const updateEmp = {
            name,
            email,
            phone,
            age,
            address,
            dept,
            salary,
            empType,
        };

        setMessage("");
        try {
            await updateEmployee(state.id, updateEmp);
            setMessage({ error: false, msg: "Employee updated successfully....redirecting to home in 3 sec.." });
            setTimeout(() => {
                navigate("/")
            }, 3000)
        } catch (err) {
            console.log(err);
            setMessage({ error: true, msg: err.message });
        }

        // Clear form fields
        setName("");
        setEmail("");
        setAddress("");
        setSalary("");
        setDept("");
        setEmpType("");
        setAge("");
        setPhone("");
    };


    const navigate = useNavigate();

    return (
        <div className="addEmp">
            <Navbar />
            {message?.msg && (
                <div
                    className="alert-container container-fluid d-flex justify-content-between align-items-center"
                    role="alert"
                    style={{
                        fontSize: "1.4rem",
                        backgroundColor: "#f8d7da",
                        fontWeight: "500",
                        padding: "1rem",
                        borderRadius: "8px",
                        margin: "1rem 0"
                    }}
                >
                    <p className={message?.error ? "text-danger" : "text-success"}>
                        {message?.msg}
                    </p>
                    <div className="btn-cont p-2 m-2">
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                setMessage("");
                                navigate("/");
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <div className="form-container container-fluid d-flex justify-content-center align-items-center mt-4">
                <form
                    className="bg-white p-5 rounded shadow-lg w-50"
                    style={{
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        backgroundColor: "#f9f9f9"
                    }}
                    onSubmit={handleSubmit}
                >
                    <h3 className="text-center mb-4" style={{ color: "#333" }}>Update an Employee</h3>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label" style={{ fontWeight: "bold" }}>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter employee name"
                            style={{ padding: "10px" }}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" style={{ fontWeight: "bold" }}>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter employee email"
                            style={{ padding: "10px" }}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label" style={{ fontWeight: "bold" }}>Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter employee phone number"
                            style={{ padding: "10px" }}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="age" className="form-label" style={{ fontWeight: "bold" }}>Age</label>
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            name="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Enter employee age"
                            style={{ padding: "10px" }}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label" style={{ fontWeight: "bold" }}>Address</label>
                        <textarea
                            className="form-control"
                            id="address"
                            name="address"
                            rows="3"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter employee address"
                            style={{ padding: "10px" }}
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="dept" className="form-label" style={{ fontWeight: "bold" }}>Department</label>
                        <input
                            type="text"
                            className="form-control"
                            id="dept"
                            name="dept"
                            value={dept}
                            onChange={(e) => setDept(e.target.value)}
                            placeholder="Enter department"
                            style={{ padding: "10px" }}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="empType" className="form-label" style={{ fontWeight: "bold" }}>Employment Type</label>
                        <input
                            type="text"
                            className="form-control"
                            id="empType"
                            name="empType"
                            value={empType}
                            onChange={(e) => setEmpType(e.target.value)}
                            placeholder="Enter employment type"
                            style={{ padding: "10px" }}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="salary" className="form-label" style={{ fontWeight: "bold" }}>Salary</label>
                        <input
                            type="number"
                            className="form-control"
                            id="salary"
                            name="salary"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            placeholder="Enter salary"
                            style={{ padding: "10px" }}
                        />
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary w-50" style={{ padding: "10px", fontWeight: "bold" }}>Submit</button>
                    </div>

                    <p className="text-center mt-3">
                        Go to <a href="/">home</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
