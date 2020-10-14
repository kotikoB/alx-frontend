/* eslint-disable */
const validEmailRegex = new RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validPasswordRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);

const validateForm = (errors) => {
    let valid = true;
    let newErr = Object.values(errors);
    // if we have an error string set valid to false
    newErr.forEach((err) => err.message.length > 0 && (valid = false));
    return valid;
};

const validateInputData = (errors, name, value) => {
    const { email, password, fullName, contactName, contactPhone, institutionName } = errors;
    switch (name) {
        case 'email':
            if (validEmailRegex.test(value)) {
                email.message = '';
                email.valid = true;
                email.invalid = false;
            } else {
                email.message = 'This email is not valid!';
                email.valid = false;
                email.invalid = true;
            }
            break;
        case 'password':
            // prettier-ignore
            if (validPasswordRegex.test(value)) {
                password.message = '',
                password.valid = true, 
                password.invalid = false
            } else {
                password.message = 'Password should contain at least 1 lowercase letter, one upper case letter, one number and one special character',
                password.valid = false,
                password.invalid = true
            }
            break;
        case 'fullName':
            if (value.length < 5) {
                fullName.message = 'Name must not be less that 5 characters';
                fullName.valid = false;
                fullName.invalid = true;
            } else {
                fullName.message = '';
                fullName.valid = true;
                fullName.invalid = false;
            }
            break;
        case 'contactName':
            if (value.length < 5) {
                contactName.message = 'Contact name must not be less that 5 characters';
                contactName.valid = false;
                contactName.invalid = true;
            } else {
                contactName.message = '';
                contactName.valid = true;
                contactName.invalid = false;
            }
            break;
        case 'contactPhone':
            if (value.length < 5) {
                contactPhone.message = 'Contact number must not be less that 5 characters';
                contactPhone.valid = false;
                contactPhone.invalid = true;
            } else {
                contactPhone.message = '';
                contactPhone.valid = true;
                contactPhone.invalid = false;
            }
            break;
        case 'institutionName':
            if (value.length < 5) {
                institutionName.message = 'Institution name must not be less that 5 characters';
                institutionName.valid = false;
                institutionName.invalid = true;
            } else {
                institutionName.message = '';
                institutionName.valid = true;
                institutionName.invalid = false;
            }
            break;
        default:
            break;
    }
};

export { validateForm, validateInputData };
