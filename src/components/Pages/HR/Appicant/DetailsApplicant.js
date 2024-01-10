import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as ApplicantService from "../../../../services/ApplicantService"

function DetailsApplicant() {
    const { id } = useParams();
    console.log(id);

    const initState = {
        applicant_Id: "",
        applicant_Name: "",
        emailId: "",
        address: "",
        phoneNumber: "",
        gender: true,
        descriptions: "",
        experience: "",
        avatar: ""
    };
    const [apiData, setApiData] = useState(initState);

    const fetchApiData = async (id) => {
        const [data, err] = await ApplicantService.getById(id);
        if (err) {
            console.log(err);
        }
        if (data) {
            setApiData(data);
        }
    }

    useEffect(() => {
        fetchApiData(id);
    }, [id])

    return (
        <>
            <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                        <h6 className="text-white text-capitalize ps-3">
                            Vacancy Details
                        </h6>
                    </div>
                </div>
                <div className="card-body px-0 pb-2">
                    <div className="table-responsive">
                        <table className="table align-items-center justify-content-center mb-0 table-bordered ">

                            <tr className='p-3'>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Applicant Number:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.applicant_Id}
                                    </span>
                                </td>
                            </tr>

                            <tr >
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Applicant Name
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.applicant_Name}
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
                                        {apiData.emailId}
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
                                        {apiData.address}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Phone Number:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.phoneNumber}
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
                                        {apiData.status === 0 && "Not In Process"}
                                        {apiData.status === 1 && "In Process"}
                                        {apiData.status === 2 && "Hired"}
                                        {apiData.status === 3 && "Banned"}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Number Of Jobs:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.numberOfJobs}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Required Skill:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.requiredSkill}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Experience:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.experience}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Location:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.location}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Descriptions:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.descriptions}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Department:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.department.name}
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

export default DetailsApplicant