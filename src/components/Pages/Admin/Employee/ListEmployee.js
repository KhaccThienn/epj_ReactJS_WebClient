import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as EmployeeService from "../../../../services/EmployeeService"
import Swal from 'sweetalert2';

function ListEmployee() {
    const [apiData, setApiData] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    const [searchData, setSearchData] = useState('');

    const fetchApiData = async () => {
        const [data, error] = await EmployeeService.getAll();
        if (data) {
            console.log(data);

            setApiData(data);
        }
        if (error) {
            console.error(error);
        }
    }

    const handleSubmit = async () => {
        const [data, error] = await EmployeeService.getAllByName(searchData);
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
            const [data, error] = await EmployeeService.removee(id);
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
                setIsDeleted(!isDeleted);
            }
        }


    }

    useEffect(() => {
        fetchApiData();
    }, [isDeleted]);

    return (
        <div className="row">
            <div className="col-12">
                <div className='row'>
                    <div className='col-lg-3'>
                        <Link className='btn btn-outline-secondary mx-1' to={"/employee/add"}>Add New</Link>
                        <button className='btn btn-outline-danger mx-1' onClick={() => setIsDeleted(!isDeleted)}>Fetch...</button>
                    </div>
                    <div className='col-lg-4'>

                    </div>
                    <div className='col-lg-5'>

                        <div className="input-group input-group-outline align-items-center">
                            <input type="text" className="form-control mx-1" name='search' onChange={(e) => setSearchData(e.target.value)} placeholder='Search By Name...' />
                            <button className='btn btn-outline-danger m-0 mx-1 rounded' onClick={() => handleSubmit()}>Search...</button>
                        </div>
                    </div>
                </div>
                <div className="card my-4">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                        <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                            <h6 className="text-white text-capitalize ps-3">
                                Employees table
                            </h6>
                        </div>
                    </div>
                    <div className="card-body px-0 pb-2">
                        <div className="table-responsive p-0">
                            <table className="table align-items-center justify-content-center mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            Employee
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Employee Number
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Email
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Gender
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Department
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
                                                                <h6 className="mb-0 text-sm">{e.employee_Name}</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.employee_Number}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.emailId}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold">{e.gender ? "Male" : "Female"}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.department.name}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.created_Date}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold mb-0">{e.updated_Date}</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <Link to={`/employee/details/${e.employee_Number}`} className='btn btn-outline-secondary mx-1'>Details</Link>
                                                        <Link to={`/employee/update/${e.employee_Number}`} className='btn btn-outline-success mx-1'>Update</Link>
                                                        <button onClick={() => handleDelete(e.employee_Number)} className='btn btn-outline-danger mx-1'>Delete</button>
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

export default ListEmployee