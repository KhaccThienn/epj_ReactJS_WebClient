import React from 'react'

function ChangePassword() {
    return (
        <>
            <div class="row">
                <div class="col-lg-12 col-md-8 col-12 mx-auto">
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
        </>
    )
}

export default ChangePassword