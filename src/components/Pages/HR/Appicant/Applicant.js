import React, { useEffect, useState } from 'react'
import * as ApplicantService from "../../../../services/ApplicantService"
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

function Applicant() {
    const [reload, setReload] = useState(false);
    const [searchData, setSearchData] = useState('');
    const [apiData, setApiData] = useState([]);

    const fetchApiData = async () => {
        const [data, error] = await ApplicantService.getAll();

        if (error) {
            console.log(error);
        }
        if (data) {
            console.log(data);
            setApiData(data);
        }
    }

    const handleSubmit = async () => {
        const [data, error] = await ApplicantService.getManyById(searchData);
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
            title: "Do You Want To Delete This Item ?",
            showDenyButton: true,
            confirmButtonText: "Yes",
            denyButtonText: "No",
        });
        if (choose.isConfirmed) {
            const [data, error] = await ApplicantService.removee(id);
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
                        <Link className='btn btn-outline-secondary mx-1' to={"/applicant/add"}>Add New</Link>
                        <button className='btn btn-outline-danger mx-1' onClick={() => setReload(!reload)}>Fetch...</button>
                    </div>
                    <div className='col-lg-4'>

                    </div>
                    <div className='col-lg-5'>

                        <div className="input-group input-group-outline align-items-center">
                            <input type="text" className="form-control mx-1 " name='search' onChange={(e) => setSearchData(e.target.value)} placeholder='Search By Applicant Number...' />
                            <button className='btn btn-outline-danger m-0 mx-1 rounded' onClick={() => handleSubmit()}>Search...</button>
                        </div>
                    </div>
                </div>
                <div className="card my-4">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                        <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                            <h6 className="text-white text-capitalize ps-3">
                                Applicant table
                            </h6>
                        </div>
                    </div>
                    <div className="card-body px-0 pb-2">
                        <div className="table-responsive p-0">
                            <table className="table align-items-center justify-content-center mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            Applicant
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Applicant Id
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Email
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Gender
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Experience
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Phone Number
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Status
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Created Date
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Updated Date
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
                                                        <div className="d-flex px-2">
                                                            <div>
                                                                <img src={e.avatar}
                                                                    className="avatar avatar-sm rounded-circle me-2" alt="spotify" />
                                                            </div>
                                                            <div className="my-auto">
                                                                <h6 className="mb-0 text-sm">{e.applicant_Name}</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.applicant_Id}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.emailId}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold">{e.gender ? "Male" : "Female"}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.experience}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.phoneNumber}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">
                                                            {e.status === 0 && "Not In Process"}
                                                            {e.status === 1 && "In Process"}
                                                            {e.status === 2 && "Hired"}
                                                            {e.status === 3 && "Banned"}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.created_Date}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.updated_Date}</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <Link to={`/applicant/details/${e.applicant_Id}`} className='btn btn-outline-secondary mx-1'>Details</Link>
                                                        <Link to={`/applicant/update/${e.applicant_Id}`} className='btn btn-outline-success mx-1'>Update</Link>
                                                        <button onClick={() => handleDelete(e.applicant_Id)} className='btn btn-outline-danger mx-1'>Delete</button>
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

export default Applicant