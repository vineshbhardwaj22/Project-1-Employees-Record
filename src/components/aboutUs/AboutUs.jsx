// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './aboutUs.css';
import Navbar from '../navbar/Navbar';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="container about-us">
                <h2>About Us</h2>
                <p>
                    Welcome to the Employee Management System. Our system is designed to streamline and enhance the management of employees within an organization. Our goal is to provide an intuitive and efficient platform that helps manage employee data, track performance, and improve overall productivity.
                </p>
                <div className="row">
                    <div className="col-md-4 team-member text-center">
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHVzZXJ8ZW58MHx8MHx8fDA%3D" alt="Team Member 1" className="img-fluid" />
                        <h5>Bob Decker</h5>
                        <p>CEO & Founder</p>
                    </div>
                    <div className="col-md-4 team-member text-center">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Team Member 2" className="img-fluid" />
                        <h5>John Smith</h5>
                        <p>Lead Developer</p>
                    </div>
                    <div className="col-md-4 team-member text-center">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Team Member 3" className="img-fluid" />
                        <h5>Emily Johnson</h5>
                        <p>Project Manager</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;