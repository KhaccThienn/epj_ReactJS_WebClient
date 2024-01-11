import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as EmployeeService from "../../../../services/EmployeeService"
import * as DepartmentService from "../../../../services/DepartmentService"
import Swal from 'sweetalert2';

function AddEmployee() {
    const initData = {
        Employee_Name: ""
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
        ImageFile: {}
    };

    const [postImage, setPostImage] = useState();
    const [postData, setPostData] = useState(initState);
    const [listDepartment, setListDepartment] = useState([]);
    const navigate = useNavigate();

    const fetchAllDepartments = async () => {
        const [data, error] = await DepartmentService.getAllDepartment();
        if (data) {
            setListDepartment(data);
            console.log(data);
        }
        if (error) {
            console.log(error);
        }
    }

    const handleChange = async (e) => {
        const { name, value } = await e.target;
        setPostData({ ...postData, [name]: value });
        console.log(postData);
    };

    const handleChangeFile = (e) => {
        setPostImage(e.target.files[0]);
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("Employee_Name", postData.Employee_Name);
        formData.append("ImageFile", postImage);
        formData.append("Username", postData.Username);
        formData.append("Password", postData.Password);
        formData.append("EmailId", postData.EmailId);
        formData.append("Address", postData.Address);
        formData.append("Role", postData.Role);
        formData.append("DepartmentId", postData.DepartmentId);

        const [result, error] = await EmployeeService.post(formData);
        if (result) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: result.statusMessage,
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/employee");
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
    }, [])

    return (
        <div class="row">
            <div class="col-lg-12 col-md-8 col-12 mx-auto">
                <form class="text-start" method="POST"
                    encType='multipart/form-data'
                    onSubmit={(e) => handleSubmitForm(e)}
                >
                    <label class="form-label">Employee Name</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='Employee_Name' onChange={
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
                    </div>

                    <label class="form-label">Employee Gender</label>
                    <div class="input-group input-group-outline my-3">
                        <select name='Gender' className='form-control form-select' onChange={e => handleChange(e)}>
                            <option value={true}>Male</option>
                            <option value={false}>Female</option>
                        </select>
                    </div>

                    <label class="form-label">Employee Username (for Login)</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='Username' onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>


                    <label class="form-label">Employee Password (for Login)</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="password" class="form-control" name='Password' onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>

                    <label class="form-label">Employee EmailId</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="email" class="form-control" name='EmailId' onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>

                    <label class="form-label">Employee Address</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='Address' onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>

                    <label class="form-label">Employee Role ?</label>
                    <div className="input-group input-group-outline mb-3">
                        <div className="form-check  p-0 form-check-inline">
                            <input className="form-check-input" type="radio" defaultChecked={true} name="Role" id="inlineRadio1" value="0" onChange={
                                (e) => {
                                    handleChange(e);
                                }} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Admin</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="Role" id="inlineRadio2" value="1" onChange={
                                (e) => {
                                    handleChange(e);
                                }} />
                            <label className="form-check-label" htmlFor="inlineRadio2">HR</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="Role" id="inlineRadio3" value="2" onChange={
                                (e) => {
                                    handleChange(e);
                                }} />
                            <label className="form-check-label" htmlFor="inlineRadio3">Interview</label>
                        </div>
                    </div>

                    <label class="form-label">Employee Department</label>
                    <div class="input-group input-group-outline my-3">
                        <select name='DepartmentId' className='form-control form-select' onChange={e => handleChange(e)}>
                            <option hidden>Choose Department...</option>
                            {
                                listDepartment && listDepartment.map((e, i) => {
                                    return (
                                        <option key={i} value={e.departmentId}>{e.name}</option>
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
    )
}

export default AddEmployee