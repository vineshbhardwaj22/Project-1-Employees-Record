// import axios from "axios";
import { useEffect, useState } from "react";
import CRUD_OP from "../services/Employee.services";
import { useNavigate } from "react-router-dom";
import "./showEmp.css"

export default function ShowEmp() {
    const navigate = useNavigate();
    const [empList, setEmpList] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await CRUD_OP.getEmployees();
                // data.docs.map method is used to map the document into our state
                setEmpList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (empId) => {
        try {
            await CRUD_OP.deleteEmployee(empId);
            alert("User Deleted successfully...");
            setEmpList((prevList) => prevList.filter((emp) => emp.id !== empId));
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="showEmp">
            <h2 className="text-center">EmployeeManagement.com</h2>
            <div className="listCont d-flex justify-content-center mt-2">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Sr No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Employement Type</th>
                            <th scope="col">Dept</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empList?.map((emp, idx) => {
                            return (
                                <tr className="cont" key={emp.id}>
                                    <td>{idx + 1}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.phone}</td>
                                    <td>{emp.address}</td>
                                    <td>{emp.empType}</td>
                                    <td>{emp.dept}</td>
                                    <td>{emp.salary}</td>
                                    <td>
                                        <button
                                            className="btn btn-success mx-1"
                                            onClick={() => {
                                                navigate("/updateEmp", { state: emp });
                                            }}
                                        >
                                            Update Info
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(emp.id)}
                                        >
                                            Delete Data
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}