import React, { useEffect, useState } from 'react'
import * as ApplicantVacancyService from "../../../../services/ApplicantVacancyService"
import { Link } from 'react-router-dom'
import ModalForm from './components/ModalForm';

function ListApplicantVacancy() {
    const [reload, setReload] = useState(false);
    const [searchData, setSearchData] = useState('');
    const [apiData, setApiData] = useState([]);

    const fetchApiData = async () => {
        const [data, error] = await ApplicantVacancyService.getAll();

        if (error) {
            console.log(error);
        }
        if (data) {
            console.log(data);
            setApiData(data);
        }
    }

    const handleSubmit = async () => {
        const [data, error] = await ApplicantVacancyService.getById(searchData);
        if (error) {
            console.log(error);
        }
        if (data) {
            console.log(data);
            setApiData(data);
        }
    }

    useEffect(() => {
        fetchApiData();
    }, [reload])

    return (
        <div className="row">
            <div className="col-12">
                <div className='row'>
                    <div className='col-lg-3'>
                        <Link className='btn btn-outline-secondary mx-1' data-bs-toggle="modal" data-bs-target="#exampleModal" >Add New</Link>
                        <ModalForm handleFetch={fetchApiData} />
                        <button className='btn btn-outline-danger mx-1' onClick={() => setReload(!reload)}>Fetch...</button>
                    </div>
                    <div className='col-lg-4'>

                    </div>
                    <div className='col-lg-5'>

                        <div className="input-group input-group-outline align-items-center">
                            <input type="text" className="form-control mx-1" name='search' onChange={(e) => setSearchData(e.target.value)} placeholder='Search By Vacancy Number...' />
                            <button className='btn btn-outline-danger m-0 mx-1 rounded' onClick={() => handleSubmit()}>Search...</button>
                        </div>
                    </div>
                </div>
                <div className="card my-4">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                        <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                            <h6 className="text-white text-capitalize ps-3">
                                List Applicant - Vacancy table
                            </h6>
                        </div>
                    </div>
                    <div className="card-body px-0 pb-2">
                        <div className="table-responsive p-0">
                            <table className="table align-items-center justify-content-center mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 " >
                                            Id
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Applicant
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Vacancy
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Date Attached
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Status
                                        </th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        apiData && apiData.map((e, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.id}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.applicant.applicant_Name}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.vacancy.vacancy_Title}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.dateAttached}</span>
                                                    </td>

                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">
                                                            {e.status === 0 && "SCHEDULED"}
                                                            {e.status === 1 && "SELECTED"}
                                                            {e.status === 2 && "REJECTED"}
                                                            {e.status === 3 && "NOT REQUIRED"}
                                                        </span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <Link to={`/interview/schedule/${e.id}`} className='btn btn-outline-secondary '>Schedule the interview</Link>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListApplicantVacancy