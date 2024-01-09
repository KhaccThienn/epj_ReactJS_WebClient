import React, { useState } from 'react'
import { object, string } from 'yup';
import { useFormik } from "formik";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import * as DepartmentService from "../../../../services/DepartmentService"

function AddDepartment() {
    const initData = {
        Name: ""
    }

    const [postData, setPostData] = useState([]);
    const navigate = useNavigate();

    const handleChange = async (e) => {
        const { name, value } = await e.target;
        setPostData({ ...postData, [name]: value });
    };

    const validationSchemas = object().shape({
        Name: string().required('Please enter your name').min(6, 'Name must be at least 6 characters'),
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const [data, error] = await DepartmentService.post(postData);
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

    const formik = useFormik({
        initData,
        validationSchemas,
        onSubmit: async (e) => {
            console.log(postData);
            const [data, error] = await DepartmentService.post(postData);
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

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: data.statusMessage,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/department");
                console.log(data);
            }
        }
    })

    return (
        <div class="row">
            <div class="col-lg-12 col-md-8 col-12 mx-auto">
                <form class="text-start" method="POST"
                // onSubmit={(e) => formik.handleSubmit(e)}
                >
                    <label class="form-label">Department Name</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='Name' onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>

                    <div class="text-center">
                        <button type="button" onClick={(e) => handleSubmit(e)} class="btn bg-gradient-primary w-100 my-4 mb-2">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddDepartment