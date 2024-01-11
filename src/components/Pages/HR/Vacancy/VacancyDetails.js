import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as VacancyService from "../../../../services/VacancyService"

function VacancyDetails() {
    const { id } = useParams();
    console.log(id);
    const initData = {
        vacancy_Number: "",
        vacancy_Title: "",
        date_Created: "",
        ownedBy: {},
        status: "",
        numberOfJobs: "",
        requiredSkill: "",
        experience: "",
        location: "",
        descriptions: "",
        department: {}
    }
    const [apiData, setApiData] = useState(initData);

    const fetchApiData = async (id) => {
        const [data, error] = await VacancyService.getById(id);
        if (data) {
            setApiData(data);
            console.log(data);
        }

        if (error) {
            console.log(error);
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
                                        Vacancy Number:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.vacancy_Number}
                                    </span>
                                </td>
                            </tr>

                            <tr >
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Title
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.vacancy_Title}
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
                                        {apiData.created_Date}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Owned By:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.ownedBy.employee_Name}
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
                                        {apiData.status === 0 && "OPEN"}
                                        {apiData.status === 1 && "SUSPENDED"}
                                        {apiData.status === 2 && "CLOSED"}
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

export default VacancyDetails