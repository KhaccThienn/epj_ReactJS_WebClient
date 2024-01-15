import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import * as EmployeeService from "../../../../services/EmployeeService"
import Swal from 'sweetalert2';;

function ChangePassword() {
    const { id } = useParams()
    const initDataPassword = {
        Employee_Number: id,
        OldPassword: "",
        NewPassword: "",
        ConfirmPassword: "",
    }
    const [postDataa, setPostDataa] = useState(initDataPassword);
    const navigate = useNavigate();
    const handleChange = async (e) => {
        const { name, value } = await e.target;
        setPostDataa({ ...postDataa, [name]: value });
    };
    const handleUpdatePassword = async () => {
        console.log(postDataa);
        const [data, error] = await EmployeeService.updatePassword(id, postDataa);
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
            console.log(data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: data.statusMessage,
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/employee")
        }
    }
    return (
        <>
            <div class="row">
                <div class="col-lg-12 col-md-8 col-12 mx-auto">
                    <form  class="text-start" method="POST">
                        <label class="form-label">Old Password</label>
                        <div class="input-group input-group-outline my-3">
                            <input type="password" class="form-control" name='OldPassword' onChange={
                                (e) => {
                                    handleChange(e)
                                }} />
                        </div>

                        <label class="form-label">New Password</label>
                        <div class="input-group input-group-outline my-3">
                            <input type="password" class="form-control" name='NewPassword' onChange={
                                (e) => {
                                    handleChange(e)
                                }} />
                        </div>

                        <label class="form-label">Confirm Password</label>
                        <div class="input-group input-group-outline my-3">
                            <input type="password" class="form-control" name='ConfirmPassword' onChange={
                                (e) => {
                                    handleChange(e)
                                }} />
                        </div>
                        <div class="text-center">
                            <button type="button" onClick={() => handleUpdatePassword()} class="btn bg-gradient-primary w-100 my-4 mb-2">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChangePassword