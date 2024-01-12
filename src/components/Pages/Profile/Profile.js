import React from 'react'

function Profile() {
    return (
        <>
            <div class="page-header min-height-300 border-radius-xl mt-4"
                style={{ backgroundImage: " url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }} >
                <span class="mask  bg-gradient-primary  opacity-6"></span>
            </div >
            <div class="card card-body mx-3 mx-md-4 mt-n6">
                <div class="row gx-4 mb-2">
                    <div class="col-auto">
                        <div class="avatar avatar-xl position-relative">
                            <img src="../assets/img/bruce-mars.jpg" alt="profile_image" class="w-100 border-radius-lg shadow-sm" />
                        </div>
                    </div>
                    <div class="col-auto my-auto">
                        <div class="h-100">
                            <h5 class="mb-1">
                                Richard Davis
                            </h5>
                            <p class="mb-0 font-weight-normal text-sm">
                                CEO / Co-Founder
                            </p>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="row">
                        <div class="col-12 col-xl-6">
                            <div class="card card-plain h-100">
                                <div class="card-header pb-0 p-3">
                                    <div class="row">
                                        <div class="col-md-8 d-flex align-items-center">
                                            <h6 class="mb-0">Profile Information</h6>
                                        </div>
                                        <div class="col-md-4 text-end">
                                            <a href="javascript:;">
                                                <i class="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip"
                                                    data-bs-placement="top" title="Edit Profile"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body p-3">
                                    <p class="text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                    <ul class="list-group">
                                        <li class="list-group-item border-0 ps-0 pt-0 text-sm"><strong class="text-dark">Full Name:</strong>
                                            &nbsp; $employeeName</li>
                                        <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Gender:</strong> &nbsp;
                                            $gender</li>
                                        <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Email:</strong> &nbsp;
                                            $emailId</li>
                                        <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Department:</strong>
                                            &nbsp; $departmentName</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-xl-6">
                            <div class="card card-plain h-100">
                                <div class="card-header pb-0 p-3">
                                    <h6 class="mb-0">Change Password</h6>
                                </div>
                                <div class="card-body p-3">
                                    <form class="form" action='' method='post'>
                                        <div class="form-group">
                                            <label for="inputPasswordOld">Current Password</label>
                                            <input type="password" class="form-control border px-3" id="inputPasswordOld" required="" />
                                        </div>
                                        <div class="form-group">
                                            <label for="inputPasswordNew">New Password</label>
                                            <input type="password" class="form-control border px-3" id="inputPasswordNew" required="" />
                                        </div>
                                        <div class="form-group">
                                            <label for="inputPasswordNewVerify">Confirm new password</label>
                                            <input type="password" class="form-control border px-3" id="inputPasswordNewVerify" required="" />
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-outline-primary float-right my-3">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile