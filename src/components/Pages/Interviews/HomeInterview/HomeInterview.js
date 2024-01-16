import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserData } from '../../../../redux/reducers/user'
function HomeInterview() {
    const userData = useSelector(selectUserData);

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="text-center">
                <h1 className="">Hi, {userData.user.employee_Name}! Welcome to HR management system.</h1>
                <p className="display-6">Hope you have a good experience with our website.</p>
            </div>
        </div>
    )
}

export default HomeInterview