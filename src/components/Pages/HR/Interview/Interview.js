import React, { useEffect, useState } from 'react'
import * as InterviewService from "../../../../services/InterviewService"
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

function Interview() {
    const [reload, setReload] = useState(false);
    const [searchData, setSearchData] = useState('');
    const [apiData, setApiData] = useState([]);

    const fetchApiData = async () => {
        const [data, error] = await InterviewService.getAll();

        if (error) {
            console.log(error);
        }
        if (data) {
            console.log(data);
            setApiData(data);
        }
    }

    const handleSubmit = async () => {
        const [data, error] = await InterviewService.getById(searchData);
        if (error) {
            console.log(error);
        }
        if (data) {
            console.log(data);
            setApiData(data);
        }
    }

    const handleDelete = async (id) => {
        const choose = await Swal.fire({
            title: "Do You Want To Remove This Interview ?",
            showDenyButton: true,
            confirmButtonText: "Yes",
            denyButtonText: "No",
        });
        if (choose.isConfirmed) {
            const [data, error] = await InterviewService.removee(id);
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
                console.log(data);
                setReload(!reload);
            }
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
                        <button className='btn btn-outline-danger' onClick={() => setReload(!reload)}>Fetch...</button>
                    </div>

                    <div className='col-lg-4'>
                    </div>

                    <div className='col-lg-5'>
                        <div className="input-group input-group-outline align-items-center">
                            <input type="text" className="form-control " name='search' onChange={(e) => setSearchData(e.target.value)} placeholder='Search By Vacancy Number...' />
                            <button className='btn btn-outline-danger m-0' onClick={() => handleSubmit()}>Search...</button>
                        </div>
                    </div>
                </div>
                <div className="card my-4">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                        <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                            <h6 className="text-white text-capitalize ps-3">
                                List Interview Scheduled
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
                                            Interviewer
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Applicant
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Vacancy
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Date Interview
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Date Started
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Date End
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
                                                        <span className="text-xs font-weight-bold mb-0">{e.interviewId}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.employee.employee_Name}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.applicant.applicant_Name}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.vacancy.vacancy_Title}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.interviewDate}</span>
                                                    </td>

                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.dateStarted}</span>
                                                    </td>

                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.dateEnd}</span>
                                                    </td>

                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">
                                                            {e.status === 0 && "SELECTED"}
                                                            {e.status === 1 && "REJECTED"}
                                                        </span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <Link to={`/interview/details/${e.interviewId}`} className='btn btn-outline-secondary '>Details</Link>
                                                        <button onClick={() => handleDelete(e.interviewId)} className='btn btn-outline-danger'>Delete</button>
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

export default Interview