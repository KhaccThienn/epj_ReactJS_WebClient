import React, { useEffect, useState } from 'react'
import * as InterviewService from "../../../../services/InterviewService"
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../../../redux/reducers/user';

function ListInterview() {

    const userData = useSelector(selectUserData);

    const [reload, setReload] = useState(false);
    const [searchData, setSearchData] = useState('');
    const [apiData, setApiData] = useState([]);

    const fetchApiData = async () => {
        const [data, error] = await InterviewService.getAllById(userData.user.employee_Number);

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

    const handleUpdate = async (id, status) => {
        console.log(status);
        const [data, error] = await InterviewService.updateeStatus(id, status);
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
                                            Date ListInterview
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
                                                        <select className='custom-select form-select' onChange={(event) => handleUpdate(e.interviewId, event.target.value)}>
                                                            <option selected={e.interviewStatuss == null} value={null}>Not Included</option>
                                                            <option selected={e.interviewStatuss === 0} value={0}>SELECTED</option>
                                                            <option selected={e.interviewStatuss === 1} value={1}>REJECTED</option>
                                                        </select>
                                                    </td>


                                                    <td className="align-middle">
                                                        <Link to={`/interview/details/${e.interviewId}`} className='btn btn-outline-secondary'>Details</Link>
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

export default ListInterview