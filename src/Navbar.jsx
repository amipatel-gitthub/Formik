import React from 'react'
import { Link } from 'react-router-dom';
import logo from './logo_Header.png'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-margin">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt='no space ' style={{ height: '50px', width: '80px' }} />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarCenteredExample"
                        aria-controls="navbarCenteredExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-end me-5"
                        id="navbarCenteredExample"
                    >
                        <ul className="navbar-nav  mb-2 mb-lg-0 ">
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Formik
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item fst-italic" href="/Demo">Demo</a></li>
                                    <li><a className="dropdown-item fst-italic" href="/List">List</a></li>
                                    <li><a className="dropdown-item fst-italic" href="/Practice">Practice</a></li>
                                    <li><a className="dropdown-item fst-italic" href="/User_Form">User Form</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Practice
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item fst-italic" href="/Pr_01">Pr_01</a></li>
                                    <li><a className="dropdown-item fst-italic" href="/Pr_02">Pr_02</a></li>
                                    <li><a className="dropdown-item fst-italic" href="/Pr_03">Pr_03</a></li>
                                </ul>
                            </li> <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Todo
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item fst-italic" href="/Todo_List">Todo_List</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pagination
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item fst-italic" href="/Data_Pagination">Data_Pagination</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
