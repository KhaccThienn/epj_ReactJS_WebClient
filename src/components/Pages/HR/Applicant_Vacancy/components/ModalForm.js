import React, { useEffect, useState } from 'react'
import * as ApplicantService from "../../../../../services/ApplicantService"
import * as VacancyService from "../../../../../services/VacancyService"
import * as ApplicantVacancyService from "../../../../../services/ApplicantVacancyService"
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function ModalForm({ handleFetch }) {
    const initData = {
        applicantId: "",
        vacancyId: ""
    }

    const [applicants, setApplicant] = useState([])
    const [vacancies, setVacancy] = useState([])
    const [postData, setPostData] = useState(initData);
    const navigate = useNavigate();
    const fetchApiApplicant = async () => {
        const [data, error] = await ApplicantService.getAllValid();
        if (data) {
            setApplicant(data);
        }
        if (error) {
            console.log(error);
        }
    }

    const fetchApiVacncy = async () => {
        const [data, error] = await VacancyService.getAll();
        if (data) {
            setVacancy(data);
        }
        if (error) {
            console.log(error);
        }
    }

    const handleChange = async (e) => {
        const { name, value } = await e.target;
        setPostData({ ...postData, [name]: value });
    };


    const handleSubmit = async () => {
        console.log(postData);
        const [data, error] = await ApplicantVacancyService.post(postData);
        if (data) {
            console.log(data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: data.statusMessage,
                showConfirmButton: false,
                timer: 1500
            });
            handleFetch();
            navigate("/applicant_vacancy");
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
        fetchApiApplicant()
        fetchApiVacncy()
    }, [])


    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Attach Applicant to Vacancy</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body row">
                        <div className='col-lg-6'>
                            <label className="form-label">List Applicant</label>
                            <div className="input-group input-group-outline my-3">
                                <select name='applicantId' className='form-control form-select' onChange={e => handleChange(e)}>
                                    <option hidden>Choose Applicant...</option>
                                    {
                                        applicants && applicants.map((e, i) => {
                                            return (
                                                <option key={i} value={e.applicant_Id}>{e.applicant_Name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <label className="form-label">List Vacancy</label>
                            <div className="input-group input-group-outline my-3">
                                <select name='vacancyId' className='form-control form-select' onChange={e => handleChange(e)}>
                                    <option hidden>Choose Vacancy...</option>
                                    {
                                        vacancies && vacancies.map((e, i) => {
                                            return (
                                                <option key={i} value={e.vacancy_Number}>{e.vacancy_Title}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => handleSubmit()}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalForm