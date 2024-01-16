import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as EmployeeService from "../../../../services/EmployeeService"

function DetailsEmployee() {
    const { id } = useParams();

    const initData = {
        employee_Number: "",
        employee_Name: "",
        username: "",
        gender: "",
        password: "",
        emailId: "",
        address: "",
        role: "",
        department: {},
        avatar: ""
    }
    const [data, setData] = useState(initData);

    const getData = async (id) => {
        const [rs, error] = await EmployeeService.getById(id);
        if (rs) {
            console.log(rs);
            setData(rs);
        }
        if (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData(id)
    }, [id])
    return (
        <>
            <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                        <h6 className="text-white text-capitalize ps-3">
                            Employee Details
                        </h6>
                    </div>
                </div>
                <div className="card-body px-0 pb-2">
                    <div className="table-responsive">
                        <table className="table align-items-center justify-content-center mb-0 table-bordered ">

                            <tr className='p-3'>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Employee Number:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {data.employee_Number}
                                    </span>
                                </td>
                            </tr>

                            <tr className='p-3'>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Employee Avatar:
                                    </span>
                                </th>
                                <td>
                                    <img src={data.avatar}
                                        className="card-img" alt="spotify" />
                                </td>
                            </tr>


                            <tr >
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Employee Name
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {data.employee_Name}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Email Id:

                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {data.emailId}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Address:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {data.address}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Gender:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {data.gender ? "Male" : "Female"}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Status:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {data.role === 0 && "ADMIN"}
                                        {data.role === 1 && "HR"}
                                        {data.role === 2 && "Interview"}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Created Date:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {data.created_Date}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Updated Date:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {data.updated_Date}
                                    </span>
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsEmployee