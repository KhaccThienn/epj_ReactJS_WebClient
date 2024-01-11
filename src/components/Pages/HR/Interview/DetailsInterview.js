import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as InterviewService from "../../../../services/InterviewService"

function DetailsInterview() {
    const { id } = useParams();
    console.log(id);

    const initState = {
        interviewId: "",
        interviewDate: "",
        dateStarted: "",
        dateEnd: "",
        employee: {},
        vacancy: {},
        applicant: {},
        note: "",
        interviewStatuss: "",
        created_Date: "",
        updated_Date: ""
    };
    const [apiData, setApiData] = useState(initState);

    const fetchApiData = async (id) => {
        const [data, err] = await InterviewService.getById(id);
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
                            Interview Details
                        </h6>
                    </div>
                </div>
                <div className="card-body px-0 pb-2">
                    <div className="table-responsive">
                        <table className="table align-items-center justify-content-center mb-0 table-bordered ">

                            <tr className='p-3'>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Interview Id:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.interviewId}
                                    </span>
                                </td>
                            </tr>

                            <tr className='p-3'>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Interview Date:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.interviewDate}
                                    </span>
                                </td>
                            </tr>


                            <tr >
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Date Started:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.dateStarted}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Date End:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.dateEnd}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Employee:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.employee.employee_Name}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Vacancy:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.vacancy.vacancy_Title}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Applicant:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.applicant.applicant_Name}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ml-5 pl-5" >
                                    <span className="text-xs font-weight-bold ml-5 pl-5" style={{ padding: "20px" }}>
                                        Note:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.note}
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
                                        {apiData.interviewStatuss === 0 && "SELECTED"}
                                        {apiData.interviewStatuss === 1 && "REJECTED"}
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
                                        Updated Date:
                                    </span>
                                </th>
                                <td>
                                    <span className="text-xs font-weight-bold mb-0" style={{ padding: "20px" }}>
                                        {apiData.updated_Date}
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

export default DetailsInterview