import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as EmployeeService from "../../../../services/EmployeeService"
import * as DepartmentService from "../../../../services/DepartmentService"
import * as VacancyService from "../../../../services/VacancyService"
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { selectUserData } from './../../../../redux/reducers/user';

function AddVacancy() {

    const userData = useSelector(selectUserData);
    console.log(userData);
    const initState = {
        Vacancy_Title: "",
        OwnedById: userData.user.employee_Number,
        Status: 0,
        NumberOfJobs: "",
        RequiredSkill: "",
        Experience: "",
        Location: "",
        Descriptions: "",
        DepartmentId: "",
        Closed_Date: ""
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const [data, error] = await VacancyService.post(postData);
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
    }, [])

    return (
        <div class="row">
            <div class="col-lg-12 col-md-8 col-12 mx-auto">
                <form class="text-start" method="POST">
                    <label class="form-label">Title</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='Vacancy_Title' onChange={
                            e => {
                                handleChange(e)
                            }} />
                    </div>

                    <label class="form-label">Number Of Jobs</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='NumberOfJobs' onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>

                    <label class="form-label">Descriptions</label>
                    <div class="input-group input-group-outline my-3">
                        <textarea type="text" class="form-control" rows={10} name='Descriptions' onChange={
                            (e) => {
                                handleChange(e)
                            }} ></textarea>
                    </div>

                    <label class="form-label">Required Skill</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='RequiredSkill' onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>

                    <label class="form-label">Experience</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='Experience' onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>

                    <label class="form-label">Location</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='Location' onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>


                    <label class="form-label">Department</label>
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

                    <label class="form-label">Closed Date</label >
                    <div class="input-group input-group-outline my-3">
                        <input type="date" class="form-control" name='Closed_Date' onChange={
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

export default AddVacancy