import React, { useEffect, useState } from 'react'
import * as EmployeeService from "../../../services/EmployeeService"
import * as DepartmentService from "../../../services/DepartmentService"
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../../redux/reducers/user';

function Profile() {
    const userData = useSelector(selectUserData);

    const initDataPassword = {
        Employee_Number: userData.user.employee_Number,
        OldPassword: "",
        NewPassword: "",
        ConfirmPassword: "",
    }

    const initData = {
        employee_Number: "",
        employee_Name: "",
        username: "",
        gender: "",
        password: "",
        emailId: "",
        address: "",
        role: "",
        department: {},
        avatar: ""
    }

    const initState = {
        Employee_Name: "",
        Username: "",
        Password: "",
        EmailId: "",
        Address: "",
        Gender: true,
        Role: 0,
        DepartmentId: "",
        OldImage: "",
        ImageFile: {}
    };

    const [postDataa, setPostDataa] = useState(initDataPassword);
    const [reload, setReload] = useState(false);
    const [postImage, setPostImage] = useState();
    const [data, setData] = useState(initData);
    const [postData, setPostData] = useState(initState);
    const [listDepartment, setListDepartment] = useState([]);

    const fetchAllDepartments = async () => {
        const [result, error] = await DepartmentService.getAllDepartment();
        if (result) {
            setListDepartment(result);
            console.log(result);
        }
        if (error) {
            console.log(error);
        }
    }

    const getData = async (id) => {
        const [rs, error] = await EmployeeService.getById(id);
        if (rs) {
            console.log(rs);
            setData(rs);
            setPostData(rs);
        }
        if (error) {
            console.log(error);
        }
    }

    const handleChange = async (e) => {
        const { name, value } = await e.target;
        setPostDataa({ ...postDataa, [name]: value });
        setPostData({ ...postData, [name]: value });
    };

    const handleUpdatePassword = async () => {
        console.log(postDataa);
        const [data, error] = await EmployeeService.updatePassword(userData.user.employee_Number, postDataa);
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
            setReload(!reload);
        }
    }

    const handleChangeFile = (e) => {
        setPostImage(e.target.files[0]);
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("Employee_Number", userData.user.employee_Number);
        formData.append("Employee_Name", postData.Employee_Name ? postData.Employee_Name : data.employee_Name);
        formData.append("ImageFile", postImage);
        formData.append("Username", postData.Username ? postData.Username : data.username);
        formData.append("EmailId", postData.EmailId ? postData.EmailId : data.emailId);
        formData.append("Address", postData.Address ? postData.Address : data.address);
        formData.append("Password", data.password);
        formData.append("Role", postData.Role ? postData.Role : data.role);
        formData.append("Gender", postData.Gender ? postData.Gender : data.gender);
        formData.append("OldImage", data.avatar);
        formData.append("DepartmentId", postData.DepartmentId ? postData.DepartmentId : data.department.departmentId);

        console.log(postData);
        const [result, error] = await EmployeeService.updatee(userData.user.employee_Number, formData);
        if (result) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: result.statusMessage,
                showConfirmButton: false,
                timer: 1500
            });
            setReload(!reload);
        }
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
    };


    useEffect(() => {
        fetchAllDepartments();
        getData(userData.user.employee_Number);
    }, [reload, userData.user.employee_Number])

    return (
        <>
            <div class="page-header min-height-300 border-radius-xl mt-4"
                style={{ backgroundImage: " url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }} >
                <span class="mask  bg-gradient-primary  opacity-6"></span>
            </div >
            <div class="card card-body mx-3 mx-md-4 mt-n6">
                <div class="row gx-4 mb-2">
                    <div class="col-auto">
                        <div class="avatar avatar-xl position-relative">
                            <img src={data.avatar} alt="profile_image" class="w-100 border-radius-lg shadow-sm" />
                        </div>
                    </div>
                    <div class="col-auto my-auto">
                        <div class="h-100">
                            <h5 class="mb-1">
                                {data.employee_Name}
                            </h5>
                            <p class="mb-0 font-weight-normal text-sm">
                                {data.department.name}
                            </p>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="row">
                        <div class="col-12 col-xl-6">
                            <div class="card card-plain h-100">
                                <div class="card-header pb-0 p-3">
                                    <div class="row">
                                        <div class="col-md-8 d-flex align-items-center">
                                            <h6 class="mb-0">Profile Information</h6>
                                        </div>
                                        <div class="col-md-4 text-end">
                                            <button className='btn' data-toggle="modal" data-target="#exampleModal">
                                                <i class="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip"
                                                    data-bs-placement="top" title="Edit Profile"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" class="close btn" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row">
                                                    <div class="col-lg-12 col-md-8 col-12 mx-auto">
                                                        <form class="text-start" method="POST"
                                                            encType='multipart/form-data'
                                                            onSubmit={(e) => handleSubmitForm(e)}
                                                        >
                                                            <label class="form-label">Employee Name</label>
                                                            <div class="input-group input-group-outline my-3">
                                                                <input type="text" class="form-control" name='Employee_Name' defaultValue={data.employee_Name} onChange={
                                                                    e => {
                                                                        handleChange(e)
                                                                    }} />
                                                            </div>

                                                            <label class="form-label">Employee Avatar</label>
                                                            <div class="input-group input-group-outline my-3">
                                                                <input type="file" class="form-control" name='ImageFile' onChange={e => handleChangeFile(e)} />
                                                            </div>
                                                            <div className="w-25">
                                                                {postImage && (
                                                                    <img
                                                                        className='card-img'
                                                                        alt={postImage.name}
                                                                        src={URL.createObjectURL(postImage)}
                                                                    />
                                                                )}
                                                                {!postImage && (
                                                                    <img
                                                                        className='card-img'
                                                                        alt={data.employee_Name}
                                                                        src={data.avatar}
                                                                    />
                                                                )}
                                                            </div>

                                                            <label class="form-label">Employee Gender</label>
                                                            <div class="input-group input-group-outline my-3">
                                                                <select name='Gender' className='form-control form-select' onChange={e => handleChange(e)}>
                                                                    <option value={true} selected={data.gender == true}>Male</option>
                                                                    <option value={false} selected={data.gender == false}>Female</option>
                                                                </select>
                                                            </div>

                                                            <label class="form-label">Employee Username (for Login)</label>
                                                            <div class="input-group input-group-outline my-3">
                                                                <input type="text" class="form-control" defaultValue={data.username} name='Username' onChange={
                                                                    (e) => {
                                                                        handleChange(e)
                                                                    }} />
                                                            </div>

                                                            <label class="form-label">Employee EmailId</label>
                                                            <div class="input-group input-group-outline my-3">
                                                                <input type="email" class="form-control" name='EmailId' defaultValue={data.emailId} onChange={
                                                                    (e) => {
                                                                        handleChange(e)
                                                                    }} />
                                                            </div>

                                                            <label class="form-label">Employee Address</label>
                                                            <div class="input-group input-group-outline my-3">
                                                                <input type="text" class="form-control" name='Address' defaultValue={data.address} onChange={
                                                                    (e) => {
                                                                        handleChange(e)
                                                                    }} />
                                                            </div>

                                                            <label class="form-label">Employee Department</label>
                                                            <div class="input-group input-group-outline my-3">
                                                                <select name='DepartmentId' className='form-control form-select' onChange={e => handleChange(e)}>
                                                                    <option hidden>Choose Department...</option>
                                                                    {
                                                                        listDepartment && listDepartment.map((e, i) => {
                                                                            return (
                                                                                <option key={i} selected={e.departmentId == data.department.departmentId} value={e.departmentId}>{e.name}</option>
                                                                            )
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>

                                                            <div class="text-center">
                                                                <button type="submit" class="btn bg-gradient-primary w-100 my-4 mb-2">Save</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body p-3">
                                    <p class="text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                    <ul class="list-group">
                                        <li class="list-group-item border-0 ps-0 pt-0 text-sm"><strong class="text-dark">Address:</strong>
                                            &nbsp; {data.address}</li>
                                        <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Gender:</strong> &nbsp;
                                            {data.gender ? "Male" : "Female"}</li>
                                        <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Email:</strong> &nbsp;
                                            {data.emailId}</li>
                                        <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Department:</strong>
                                            &nbsp; {data.department.name}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-xl-6">
                            <div class="card card-plain h-100">
                                <div class="card-header pb-0 p-3">
                                    <h6 class="mb-0">Change Password</h6>
                                </div>
                                <div class="card-body p-3">
                                    <form class="form" action='' method='post'>
                                        <input type="hidden" name="Employee_Number" />
                                        <div class="form-group">
                                            <label for="inputPasswordOld">Current Password</label>
                                            <input type="password" onChange={(e) => handleChange(e)} name='OldPassword' class="form-control border px-3" id="inputPasswordOld" required="" />
                                        </div>
                                        <div class="form-group">
                                            <label for="inputPasswordNew">New Password</label>
                                            <input type="password" onChange={(e) => handleChange(e)} name='NewPassword' class="form-control border px-3" id="inputPasswordNew" required="" />
                                        </div>
                                        <div class="form-group">
                                            <label for="inputPasswordNewVerify">Confirm new password</label>
                                            <input type="password" onChange={(e) => handleChange(e)} name='ConfirmPassword' class="form-control border px-3" id="inputPasswordNewVerify" required="" />
                                        </div>
                                        <div class="form-group">
                                            <button type="button" onClick={() => handleUpdatePassword()} class="btn btn-outline-primary float-right my-3">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile