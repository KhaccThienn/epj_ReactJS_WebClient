import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import * as EmployeeService from "../../../../services/EmployeeService"
import * as DepartmentService from "../../../../services/DepartmentService"
import * as VacancyService from "../../../../services/VacancyService"
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { selectUserData } from './../../../../redux/reducers/user';

function UpdateVacancy() {

    const { id } = useParams();

    const userData = useSelector(selectUserData);

    const initState = {
        vacancy_Number: id,
        vacancy_Title: "",
        ownedById: userData.user.employee_Number,
        status: 0,
        numberOfJobs: "",
        requiredSkill: "",
        experience: "",
        location: "",
        descriptions: "",
        departmentId: "",
        closed_Date: "",
    }



    const [postData, setPostData] = useState(initState);
    const [listDepartment, setListDepartment] = useState([]);
    const navigate = useNavigate();

    const handleChange = async (e) => {
        const { name, value } = await e.target;
        setPostData({ ...postData, [name]: value });
    };

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

    const fetchData = async (id) => {
        const [data, error] = await VacancyService.getById(id);
        if (data) {
            setPostData(data);
            console.log(data);
        }
        if (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const [data, error] = await VacancyService.updatee(id, postData);
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
            navigate("/vacancy");
        }
    }

    useEffect(() => {
        fetchAllDepartments();
        fetchData(id);
    }, [id])

    return (
        <div class="row">
            <div class="col-lg-12 col-md-8 col-12 mx-auto">
                <form class="text-start" method="POST">
                    <label class="form-label">Title</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='vacancy_Title' defaultValue={postData.vacancy_Title} onChange={
                            e => {
                                handleChange(e)
                            }} />
                    </div>

                    <label class="form-label">Number Of Jobs</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='numberOfJobs' defaultValue={postData.numberOfJobs} onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>

                    <label class="form-label">Descriptions</label>
                    <div class="input-group input-group-outline my-3">
                        <textarea type="text" class="form-control" rows={10} name='descriptions' onChange={
                            (e) => {
                                handleChange(e)
                            }} defaultValue={postData.descriptions}></textarea>
                    </div>

                    <label class="form-label">Required Skill</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='requiredSkill' defaultValue={postData.requiredSkill} onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>

                    <label class="form-label">Experience</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='experience' defaultValue={postData.experience} onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>

                    <label class="form-label">Location</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='location' defaultValue={postData.location} onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>


                    <label class="form-label">Department</label>
                    <div class="input-group input-group-outline my-3">
                        <select name='departmentId' className='form-control form-select' onChange={e => handleChange(e)}>
                            <option hidden>Choose Department...</option>
                            {
                                listDepartment && listDepartment.map((e, i) => {
                                    return (
                                        <option key={i} selected={e.departmentId === postData.departmentId} value={e.departmentId}>{e.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <label class="form-label">Status</label>
                    <div class="input-group input-group-outline my-3">
                        <select name='status' className='form-control form-select'  onChange={e => handleChange(e)}>
                            <option value={0} disabled={postData.status === 2} selected={postData.status === 0}>OPEN</option>
                            <option value={1} disabled={postData.status === 2} selected={postData.status === 1}>SUSPEND</option>
                            <option value={2} disabled={postData.ownedById == userData.user.employee_Number || postData.status === 2} selected={postData.status === 2}>CLOSED</option>
                        </select>
                    </div>


                    <label class="form-label">Closed Date</label >
                    <div class="input-group input-group-outline my-3">
                        <input type="date" class="form-control" name='closed_Date' onChange={
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

export default UpdateVacancy