//AddAddress.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';





const AddAddress = () => {
	const nav = useNavigate();
	//state for saving form data
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [Telephone, setTelephone] = useState('');
	const [mobile, setMobile] = useState('');

	const [address, setAddress] = useState('');
	const [selectedFile, setSelectedFile] = useState(null);



	const onFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};
	//handle for creating new address
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('name', name);
		formData.append('email', email);
		formData.append('Telephone', Telephone);
		formData.append('mobile', mobile);
		formData.append('address', address);
		if (selectedFile) {
			formData.append('image', selectedFile);
		}
		try {
			await
			axios.post("https://myaddressbook-1.onrender.com/api/addresses", formData, {
				headers:{
					'Content-Type': 'multipart/form-data'
				}
			});
				nav.push('/');
			
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='container container-fluid min-vh-100 justify-content-center'>
			<h2 className='display-2 text-center text-primary'>Add Address</h2>
			< Navigation />
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label className='fw-bold mb-1'>Name:</label>
					<input type="text" name="name" placeholder='Name' onChange={e => setName(e.target.value)} required className='form-control' />
				</div>
				<div className='form-group'>
					<label className='fw-bold  mb-1'>Email:</label>
					<input type="email" name="email" placeholder='Email ID' onChange={e => setEmail(e.target.value)} required className='form-control' />
				</div>
				<div className='form-group d-flex row '>
					<div className='col-md-6'><label className='fw-bold  mb-1'>Telephone:</label>
						<input type="tel" name="Telephone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" onChange={e => setTelephone(e.target.value)} required className='form-control' />
					</div>
					<div className='col-md-6'>
						<label className='fw-bold mb-1'>Mobile:</label>
						<input type="tel" name="mobile" placeholder='Mobile'  pattern="[0-9]{10}" onChange={e => setMobile(e.target.value)} required className='form-control' />
					</div>
				</div>
				<div className='form-group'>
					<label className='fw-bold mb-1'>Address:</label>
					<input type="text" name="address" placeholder='Address' onChange={e => setAddress(e.target.value)} required className='form-control' />
				</div>
				<div className='form-group mt-3'>
					<label className='me-3 fw-bold mb-1'>Person Image :  </label>
					<input type="file" name='image' onChange={onFileChange} accept="image/png, image/jpg, image/jpeg, image/*" />
				</div>
				<div className='d-grid  col-2'>
					<button type="submit" className='btn btn-primary p-2 m-4 btn-lg'>Add Address</button>
				</div>
			</form>
		</div>
	);
};

export default AddAddress;
