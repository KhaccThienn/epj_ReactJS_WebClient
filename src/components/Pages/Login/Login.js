/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { object, string } from 'yup';
import { useFormik } from "formik";
import { useCookies } from "react-cookie";

import {
    setUser,
    selectUserData,
} from "../../../redux/reducers/user";
import Swal from "sweetalert2";
import * as LoginService from "../../../services/LoginService"

function Login() {
    const userData = useSelector(selectUserData);
    const dispatch = useDispatch();
    const [loginData, setLoginData] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(["user", "access_token", "refresh_token"]);
    const navigate = useNavigate();

    const initialValues = {
        Username: "",
        Password: "",
        Role: 0
    }

    const validationSchemas = object().shape({
        Username: string().required('Please enter your username').min(6, 'Username must be at least 6 characters'),
        Password: string().required('Please enter your password').min(6, 'Password must be at least 6 characters')
    })

    const handleChange = async (e) => {
        const { name, value } = await e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const formik = useFormik({
        initialValues,
        validationSchemas,
        onSubmit: async (e) => {
            console.log(loginData);
            const [data, error] = await LoginService.login(loginData);
            if (error) {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: error.response.data.statusMessage,
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(error);


            }
            if (data) {
                localStorage.setItem("access_token", data.fullStatus.token);
                setCookie("access_token", data.fullStatus.token);
                setCookie("user", data.fullStatus.userData);
                dispatch(setUser(data.fullStatus.userData));
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: data.statusMessage,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/");
                console.log(data);
            }
        }
    })

    return (
        <div>
            <main className="main-content mt-0">
                <div className="page-header align-items-start min-vh-100" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')" }}>
                    <span className="mask bg-gradient-dark opacity-6"></span>
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-4 col-md-8 col-12 mx-auto">
                                <div className="card z-index-0 fadeIn3 fadeInBottom">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                            <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                                            <p className='text-center text-white font-weight-bold'>Start Your Session Here</p>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form role="form" className="text-start"
                                            method="POST"
                                            onSubmit={(e) => formik.handleSubmit(e)}>
                                            <div className="input-group input-group-outline my-3">
                                                <label className="form-label">Username</label>
                                                <input type="text" onChange={
                                                    (e) => {
                                                        handleChange(e);
                                                        formik.handleChange(e)
                                                    }} name='Username' className="form-control" />
                                            </div>
                                            {formik.errors.Username && <small id="helpId" className="text-danger">{formik.errors.Username}</small>}

                                            <div className="input-group input-group-outline mb-3">
                                                <label className="form-label">Password</label>
                                                <input type="password" onChange={
                                                    (e) => {
                                                        handleChange(e);
                                                        formik.handleChange(e)
                                                    }} name='Password' className="form-control" />
                                            </div>
                                            {formik.errors.Password && <small id="helpId" className="text-danger">{formik.errors.Password}</small>}
                                            <div className="input-group input-group-outline">
                                                <div className="form-check p-0 form-check-inline">
                                                    <input className="form-check-input" type="radio" defaultChecked={true} name="Role" id="inlineRadio1" value="0" onChange={
                                                        (e) => {
                                                            handleChange(e);
                                                            formik.handleChange(e)
                                                        }} />
                                                    <label className="form-check-label" htmlFor="inlineRadio1">Admin</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="Role" id="inlineRadio2" value="1" onChange={
                                                        (e) => {
                                                            handleChange(e);
                                                            formik.handleChange(e)
                                                        }} />
                                                    <label className="form-check-label" htmlFor="inlineRadio2">HR</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="Role" id="inlineRadio3" value="2" onChange={
                                                        (e) => {
                                                            handleChange(e);
                                                            formik.handleChange(e)
                                                        }} />
                                                    <label className="form-check-label" htmlFor="inlineRadio3">Interview</label>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer position-absolute bottom-2 py-2 w-100">
                        <div className="container">
                            <div className="row align-items-center justify-content-lg-between">
                                <div className="col-12 col-md-6 my-auto">
                                    <div className="copyright text-center text-sm text-white text-lg-start">
                                        © Copyright 2023 From KhaccThienn's team.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    )
}

export default Login