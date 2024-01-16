import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserData } from '../../../../redux/reducers/user'
function HomeAdmin() {
    const userData = useSelector(selectUserData);

    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="text-center">
                <h1 class="">Hi, {userData.user.employee_Name}! Welcome to HR management system.</h1>
                <p className="display-6">Hope you have a good experience with our website.</p>
            </div>
        </div>
    )
}

export default HomeAdmin