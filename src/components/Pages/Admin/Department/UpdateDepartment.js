import React, { useEffect, useState } from 'react'
import { object, string } from 'yup';
import { useFormik } from "formik";
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import * as DepartmentService from "../../../../services/DepartmentService"

function UpdateDepartment() {
    const { id } = useParams();
    const initData = {
        departmentId: "",
        name: "",
        created_Date: ""
    }

    const [postData, setPostData] = useState(initData);
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
        console.log(postData);
        const [data, error] = await DepartmentService.updatee(id, postData);
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

    const fetchData = async (id) => {
        const [data, error] = await DepartmentService.getById(id);
        if (data) {
            console.log(data);
            setPostData(data);
        }
        if (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Having Some Error When Fetching  !",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    useEffect(() => {
        fetchData(id)
    }, [id])

    // const formik = useFormik({
    //     initData,
    //     validationSchemas,
    //     onSubmit: async (e) => {
    //         console.log(postData);
    //         const [data, error] = await DepartmentService.post(postData);
    //         if (error) {

    //             Swal.fire({
    //                 position: "top-end",
    //                 icon: "error",
    //                 title: error.response.data.statusMessage,
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //             console.log(error);


    //         }
    //         if (data) {

    //             Swal.fire({
    //                 position: "top-end",
    //                 icon: "success",
    //                 title: data.statusMessage,
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //             navigate("/department");
    //             console.log(data);
    //         }
    //     }
    // })

    return (
        <div className="row">
            <div className="col-lg-12 col-md-8 col-12 mx-auto">
                <form className="text-start" method="POST"
                // onSubmit={(e) => formik.handleSubmit(e)}
                >
                    <label className="form-label">Department Name</label>
                    <div className="input-group input-group-outline my-3">
                        <input type="text" defaultValue={postData.name} className="form-control" name='name' onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>

                    <div className="text-center">
                        <button type="button" onClick={(e) => handleSubmit(e)} className="btn bg-gradient-primary w-100 my-4 mb-2">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateDepartment