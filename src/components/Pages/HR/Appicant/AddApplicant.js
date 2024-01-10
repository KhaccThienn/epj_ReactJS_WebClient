import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as ApplicantService from "../../../../services/ApplicantService"
import Swal from 'sweetalert2';

function AddApplicant() {
    const initState = {
        Applicant_Name: "",
        EmailId: "",
        Address: "",
        PhoneNumber: "",
        Gender: true,
        Descriptions: "",
        Experience: "",
        ImageFile: {}
    };

    const [postImage, setPostImage] = useState();
    const [postData, setPostData] = useState(initState);
    const [listDepartment, setListDepartment] = useState([]);
    const navigate = useNavigate();


    const handleChange = async (e) => {
        const { name, value } = await e.target;
        setPostData({ ...postData, [name]: value });
        console.log(postData);
    };

    const handleChangeFile = (e) => {
        setPostImage(e.target.files[0]);
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("Applicant_Name", postData.Applicant_Name);
        formData.append("ImageFile", postImage);
        formData.append("PhoneNumber", postData.PhoneNumber);
        formData.append("Experience", postData.Experience);
        formData.append("EmailId", postData.EmailId);
        formData.append("Gender", postData.Gender);
        formData.append("Descriptions", postData.Descriptions);
        formData.append("Address", postData.Address);

        const [result, error] = await ApplicantService.post(formData);
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
    }, [])

    return (
        <div class="row">
            <div class="col-lg-12 col-md-8 col-12 mx-auto">
                <form class="text-start" method="POST"
                    encType='multipart/form-data'
                    onSubmit={(e) => handleSubmitForm(e)}
                >
                    <label class="form-label">Applicant Name</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='Applicant_Name' onChange={
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
                        <input type="email" class="form-control" name='EmailId' onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>

                    <label class="form-label">Applicant Address</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='Address' onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>

                    <label class="form-label">Applicant Phone Number</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='PhoneNumber' onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>

                    <label class="form-label">Descriptions</label>
                    <div class="input-group input-group-outline my-3">
                        <textarea type="text" class="form-control" rows={10} name='Descriptions' onChange={
                            (e) => {
                                handleChange(e)
                            }} ></textarea>
                    </div>

                    <label class="form-label">Applicant Experience</label>
                    <div class="input-group input-group-outline my-3">
                        <input type="text" class="form-control" name='Experience' onChange={
                            (e) => {
                                handleChange(e)
                            }} />
                    </div>

                    <div class="text-center">
                        <button type="submit" class="btn bg-gradient-primary w-100 my-4 mb-2">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddApplicant