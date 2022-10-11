export const validateForm = (values) => {
	let errors = {};

	if (!values.email) {
		errors.email =
			'No email address is provided. Please enter your email address';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email =
			'Email address is invalid! Please enter a valid email address.';
	}

	return errors;
};
