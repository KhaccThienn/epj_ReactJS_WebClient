import React, { useEffect, useState } from 'react'
import * as VacancyService from "../../../../services/VacancyService"
import { Link } from 'react-router-dom'

function Vacancy() {
    const [reload, setReload] = useState(false);
    const [searchData, setSearchData] = useState('');
    const [apiData, setApiData] = useState([]);

    const fetchApiData = async () => {
        const [data, error] = await VacancyService.getAll();

        if (error) {
            console.log(error);
        }
        if (data) {
            console.log(data);
            setApiData(data);
        }
    }

    const handleSubmit = async () => {
        const [data, error] = await VacancyService.getManyById(searchData);
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
                        <Link className='btn btn-outline-secondary' to={"/vacancy/add"}>Add New</Link>
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
                                Vacancy table
                            </h6>
                        </div>
                    </div>
                    <div className="card-body px-0 pb-2">
                        <div className="table-responsive p-0">
                            <table className="table align-items-center justify-content-center mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 " >
                                            Vacancy Number
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Job Title
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Date Created
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Owned By
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Status
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Number Of Jobs
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Department
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
                                                        <span className="text-xs font-weight-bold mb-0">{e.vacancy_Number}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.vacancy_Title}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.date_Created}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.ownedBy.employee_Name}</span>
                                                    </td>

                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">
                                                            {e.status === 0 && "OPEN"}
                                                            {e.status === 1 && "SUSPENDED"}
                                                            {e.status === 2 && "CLOSED"}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.numberOfJobs}</span>
                                                    </td>

                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.department.name}</span>
                                                    </td>

                                                    <td className="align-middle">
                                                        <Link to={`/vacancy/details/${e.vacancy_Number}`} className='btn btn-outline-secondary '>Details</Link>
                                                        <Link to={`/vacancy/update/${e.vacancy_Number}`} className='btn btn-outline-success '>Update</Link>
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

export default Vacancy