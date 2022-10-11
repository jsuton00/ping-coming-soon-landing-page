import React, { useState } from 'react';
import { validateForm } from '../utils/validateForm';

const Notify = () => {
	const [inputValue, setInputValue] = useState({ email: '' });

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errors, setErrors] = useState('');

	const onChange = (e) => {
		const { name, value } = e.target;
		e.persist();
		return setInputValue({ ...inputValue, [name]: value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setErrors(validateForm(inputValue));

		if (Object.keys(errors).length === 0) {
			setIsSubmitted(true);
			inputValue && alert('Sent successfully!');
			setInputValue({ email: '' });
		} else {
			console.log(errors);
		}
	};
	return (
		<form onSubmit={onSubmit} className="notify-form row">
			<div className="notify-input-section">
				<input
					name="email"
					type="text"
					className="notify-input"
					placeholder="Your email address..."
					onChange={onChange}
					value={inputValue.email ? inputValue.email : ''}
				/>
				{isSubmitted && errors.email ? (
					<p className="invalid-feedback">{errors.email}</p>
				) : (
					<></>
				)}
			</div>
			<div className="notify-submit-section">
				<button type="submit" className="notify-submit-btn">
					Notify me
				</button>
			</div>
		</form>
	);
};

export default Notify;
