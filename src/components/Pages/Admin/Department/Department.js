import React, { useEffect, useState } from 'react'
import * as DepartmentService from "../../../../services/DepartmentService"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Department() {
    const [apiData, setApiData] = useState([])
    const [reload, setReload] = useState(false);
    const [searchData, setSearchData] = useState('');

    const fetchApiData = async () => {
        const [data, error] = await DepartmentService.getAllDepartment();

        if (error) {
            console.log(error);
        }
        if (data) {
            console.log(data);
            setApiData(data);
        }
    }

    const handleSubmit = async () => {
        const [data, error] = await DepartmentService.getAllDepartmentByName(searchData);
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
            const [data, error] = await DepartmentService.removee(id);
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
                        <Link className='btn btn-outline-secondary mx-1' to={"/department/add"}>Add New</Link>
                        <button className='btn btn-outline-danger mx-1' onClick={() => setReload(!reload)}>Fetch...</button>
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
                                Department table
                            </h6>
                        </div>
                    </div>
                    <div className="card-body px-0 pb-2">
                        <div className="table-responsive p-0">
                            <table className="table align-items-center justify-content-center mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 " >
                                            Department ID
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Department Name
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Date Created
                                        </th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Date Updated
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
                                                        <p className="text-sm font-weight-bold mb-0">{e.departmentId}</p>
                                                    </td>
                                                    <td>
                                                        <p className="text-sm font-weight-bold mb-0">{e.name}</p>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold">{e.created_Date}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold">{e.updated_Date}</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <Link to={`/department/update/${e.departmentId}`} className='btn btn-outline-success mx-1'>Update</Link>
                                                        <button onClick={() => handleDelete(e.departmentId)} className='btn btn-outline-danger mx-1'>Delete</button>
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

export default Department