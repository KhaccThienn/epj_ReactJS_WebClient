import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as EmployeeService from "../../../../services/EmployeeService"
import * as ApplicantVacancyService from "../../../../services/ApplicantVacancyService"
import * as InterviewService from "../../../../services/InterviewService"
import { useSelector } from 'react-redux'
import { selectUserData } from './../../../../redux/reducers/user';
import Swal from 'sweetalert2'

function ScheduleInterview() {
    const { id } = useParams()

    const userData = useSelector(selectUserData);

    const initData = {
        applicant: {},
        applicantId: "",
        dateAttached: "",
        id: "",
        status: "",
        vacancy: {},
        vacancyId: ""
    }

    const initState = {
        Applicant_Id: "",
        Vacancy_Number: "",
        InterviewDate: "",
        DateStarted: "",
        DateEnd: "",
        EmployeeNumber: "",
        Applicant_Vacancy_Id: id,
        Note: ""
    }

    const [postData, setPostData] = useState(initState);
    const [employee, setEmployee] = useState([]);
    const [applicantVacancy, setApplicantVacancy] = useState(initData);

    const navigate = useNavigate();

    const fetchApplicantVacancy = async (id) => {
        const [data, error] = await ApplicantVacancyService.getById(id)
        if (error) {
            console.log(error);
        }
        if (data) {
            postData.Applicant_Id = data.applicantId;
            postData.Vacancy_Number = data.vacancyId;
            setApplicantVacancy(data);
            console.log(data);
        }
    }
    const fetchEmployee = async () => {
        const [data, error] = await EmployeeService.getAll();
        if (data) {
            setEmployee(data)
            console.log(data);
        }
        if (error) {
            console.log(error);
        }
    }
    const handleChange = async (e) => {
        const { name, value } = await e.target;
        setPostData({ ...postData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(postData);
        const [result, error] = await InterviewService.post(postData);
        if (result) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: result.statusMessage,
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/interview");
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
    }

    useEffect(() => {
        fetchApplicantVacancy(id)
        fetchEmployee()
    }, [id])

    return (
        <div>
            <div className="row">
                <div className="col-lg-12 col-md-8 col-12 mx-auto">
                    <form className="text-start" method="POST">

                        <input type='hidden' name='applicantId' value={applicantVacancy.applicantId} />
                        <input type='hidden' name='vacancyId' value={applicantVacancy.vacancyId} />

                        <label className="form-label">Applicant</label>
                        <div className="input-group input-group-outline my-3">
                            <input type="text" readOnly={true} className="form-control" name='Applicant_Name'
                                value={`${applicantVacancy.applicantId} - ${applicantVacancy.applicant.applicant_Name}`}
                                onChange={
                                    e => {
                                        handleChange(e)
                                    }} />
                        </div>

                        <label className="form-label">Vacancy</label>
                        <div className="input-group input-group-outline my-3">
                            <input type="text" readOnly={true} className="form-control" name='Vacancy_Title'
                                value={`${applicantVacancy.vacancyId} - ${applicantVacancy.vacancy.vacancy_Title}`}
                                onChange={
                                    e => {
                                        handleChange(e)
                                    }} />
                        </div>


                        <label className="form-label">Interviewer</label>
                        <div className="input-group input-group-outline my-3">
                            <select name='EmployeeNumber' className='form-control form-select' onChange={e => handleChange(e)}>
                                <option hidden>Choose Interviewer...</option>
                                {
                                    employee && employee.map((e, i) => {
                                        return (
                                            <option key={i} value={e.employee_Number}>{e.employee_Number} - {e.employee_Name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <label className="form-label">Interview Date</label>
                        <div className="input-group input-group-outline my-3">
                            <input type="date" className="form-control" name='InterviewDate'
                                onChange={
                                    e => {
                                        handleChange(e)
                                    }} />
                        </div>

                        <div className='row'>
                            <div className='col-lg-6'>
                                <label className="form-label">Start Time</label >
                                <div className="input-group input-group-outline my-3">
                                    <input type="time" className="form-control" name='DateStarted' onChange={
                                        (e) => {
                                            handleChange(e)
                                        }} />
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <label className="form-label">End Time</label >
                                <div className="input-group input-group-outline my-3">
                                    <input type="time" className="form-control" name='DateEnd' onChange={
                                        (e) => {
                                            handleChange(e)
                                        }} />
                                </div>
                            </div>
                        </div>
                        <label className="form-label">Note</label>
                        <div className="input-group input-group-outline my-3">
                            <textarea className="form-control" name='Note'
                                rows={5}
                                onChange={
                                    e => {
                                        handleChange(e)
                                    }} />
                        </div>

                        <div className="text-center">
                            <button type="button" onClick={(e) => handleSubmit(e)} className="btn bg-gradient-primary w-100 my-4 mb-2">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ScheduleInterview