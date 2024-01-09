import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, selectUserData } from '../../../../redux/reducers/user';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function SidebarHR() {
    const [reload, setReload] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(["user", "access_token", "refresh_token"]);
    const userData = useSelector(selectUserData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        const choose = await Swal.fire({
            title: "Do You Want To Log Out ?",
            showDenyButton: true,
            confirmButtonText: "Yes",
            denyButtonText: "No",
        });
        if (choose.isConfirmed) {
            removeCookie("user");
            removeCookie("access_token");
            localStorage.removeItem('access_token');
            dispatch(clearUser());
            navigate('/');
            setReload(!reload);
            Swal.fire({
                title: "You Logged Out Successfully",
                icon: 'success',
                timer: 1500,
                timerProgressBar: true,
                position: 'top-right'
            })
        }
    }
    return (
        <aside
            className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark"
            id="sidenav-main">
            <div className="sidenav-header">
                <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                    aria-hidden="true" id="iconSidenav"></i>
                <a className="navbar-brand m-0">
                    <img src="../assets/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo" />
                    <span className="ms-1 font-weight-bold text-white">Control Panel System</span>
                </a>
            </div>

            <hr className="horizontal light mt-0 mb-2" />

            <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-white active bg-gradient-primary" href="../pages/dashboard.html">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">dashboard</i>
                            </div>
                            <span className="nav-link-text ms-1">Dashboard</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white active bg-gradient-primary" href="../pages/dashboard.html">
                            <span className="nav-link-text ms-1">Vacancy Management</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white active bg-gradient-primary" href="../pages/dashboard.html">
                            <span className="nav-link-text ms-1">Applicant Management</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white active bg-gradient-primary" href="../pages/dashboard.html">
                            <span className="nav-link-text ms-1">Interview Management</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white active bg-gradient-primary" href="../pages/dashboard.html">
                            <span className="nav-link-text ms-1">Attach Applicant to Vacancy</span>
                        </a>
                    </li>

                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
                            Account pages
                        </h6>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to={"/profile"}>
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">person</i>
                            </div>
                            <span className="nav-link-text ms-1">Profile</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-white bg-dark" onClick={() => handleLogOut()}>
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">logout</i>
                            </div>
                            <span className="nav-link-text ms-1">Sign Out</span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SidebarHR