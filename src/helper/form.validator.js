
export const required = value => value ? undefined : 'Required';
export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const isNumber = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const isEmail = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;

export const maxLength20 = maxLength(20);
export const minLength2 = minLength(2);

