import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import * as ApplicantService from "../../../../services/ApplicantService"
import Swal from 'sweetalert2';

function UpdateApplicant() {
    const { id } = useParams()
    const initState = {
        applicant_Id: "",
        applicant_Name: "",
        emailId: "",
        address: "",
        phoneNumber: "",
        gender: true,
        descriptions: "",
        experience: "",
        avatar: "",
        status: "",
        created_Date: ""
    };

    const initData = {
        Applicant_Name: "",
        EmailId: "",
        Address: "",
        PhoneNumber: "",
        Gender: true,
        Descriptions: "",
        Experience: "",
        Status: 0,
        ImageFile: {}
    };

    const [apiData, setApiData] = useState(initState);
    const [postImage, setPostImage] = useState();
    const [postData, setPostData] = useState(initData);
    const navigate = useNavigate();


    const handleChange = async (e) => {
        const { name, value } = await e.target;
        setPostData({ ...postData, [name]: value });
        console.log(postData);
    };

    const handleChangeFile = (e) => {
        setPostImage(e.target.files[0]);
    };

    const fetchApiData = async (id) => {
        const [data, err] = await ApplicantService.getById(id);
        if (err) {
            console.log(err);
        }
        if (data) {
            setApiData(data);
            console.log(data);
        }
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("Applicant_Id", id);
        formData.append("Applicant_Name", postData.Applicant_Name ? postData.Applicant_Name : apiData.applicant_Name);
        formData.append("ImageFile", postImage);
        formData.append("PhoneNumber", postData.PhoneNumber ? postData.PhoneNumber : apiData.phoneNumber);
        formData.append("Experience", postData.Experience ? postData.Experience : apiData.experience);
        formData.append("EmailId", postData.EmailId ? postData.emailId : apiData.emailId);
        formData.append("Gender", postData.Gender ? postData.Gender : apiData.gender);
        formData.append("Descriptions", postData.Descriptions ? postData.Descriptions : apiData.descriptions);
        formData.append("Address", postData.Address ? postData.Address : apiData.address);
        formData.append("OldImage", apiData.avatar);
        formData.append("Status", postData.Status ? postData.Status : apiData.status);
        formData.append("Status", postData.Status ? postData.Status : apiData.status);
        formData.append("Created_Date", apiData.created_Date);

        const [result, error] = await ApplicantService.updatee(id, formData);
        if (result) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: result.statusMessage,
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/applicant");
        }
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
    };

    useEffect(() => {
        fetchApiData(id);
    }, [id])

    return (
        <div class="row">
            <div class="col-lg-12 col-md-8 col-12 mx-auto">
                <form class="text-start" method="POST"
                    encType='multipart/form-data'
                    onSubmit={(e) => handleSubmitForm(e)}
                >
                    <label class="form-label">Applicant Name</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='Applicant_Name' defaultValue={apiData.applicant_Name} onChange={
                            e => {
                                handleChange(e)
                            }} />
                    </div>

                    <label class="form-label">Applicant Avatar</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="file" class="form-control" name='ImageFile' onChange={e => handleChangeFile(e)} />
                    </div>
                    <div className="w-25">
                        {postImage && (
                            <img
                                className='card-img'
                                alt={postImage.name}
                                src={URL.createObjectURL(postImage)}
                            />
                        )}
                        {!postImage && (
                            <img
                                className='card-img'
                                alt={apiData.applicant_Name}
                                src={apiData.avatar}
                            />
                        )}
                    </div>

                    <label class="form-label">Applicant Gender</label>
                    <div class="input-group input-group-outline my-3">
                        <select name='Gender' className='form-control form-select' onChange={e => handleChange(e)}>
                            <option value={true}>Male</option>
                            <option value={false}>Female</option>
                        </select>
                    </div>

                    <label class="form-label">Applicant EmailId</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="email" class="form-control" name='EmailId' defaultValue={apiData.emailId} onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>

                    <label class="form-label">Applicant Address</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='Address' defaultValue={apiData.address} onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>

                    <label class="form-label">Applicant Phone Number</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='PhoneNumber' defaultValue={apiData.phoneNumber} onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>

                    <label class="form-label">Descriptions</label>
                    <div class="input-group input-group-outline my-3">
                        <textarea type="text" class="form-control" rows={10} name='Descriptions' defaultValue={apiData.descriptions} onChange={
                            (e) => {
                                handleChange(e)
                            }} ></textarea>
                    </div>

                    <label class="form-label">Applicant Experience</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='Experience' defaultValue={apiData.experience} onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>

                    <label class="form-label">Status</label>
                    <div class="input-group input-group-outline my-3">
                        <select name='Status' className='form-control form-select' onChange={handleChange}>
                            <option value={0} selected={apiData.status === 0}>NOT IN PROCESS</option>
                            <option value={1} selected={apiData.status === 1}>IN PROCESS</option>
                            <option value={2} selected={apiData.status === 2}>HIRED</option>
                            <option value={3} selected={apiData.status === 3}>BANNED</option>
                        </select>
                    </div>

                    <div class="text-center">
                        <button type="submit" class="btn bg-gradient-primary w-100 my-4 mb-2">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateApplicant