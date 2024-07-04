export const validate = {
    validateEmpty: (data) => {
        
    },
    validateEmail: (data) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(data).toLowerCase());
    }
}

export const validateForm = (values, validationRules) => {
    const errors = {};
    for (const field in validationRules) {
        const rules = validationRules[field];
        const value = values[field];

        if (rules.required && !value) {
            errors[field] = `${field} is required`;
        } else if (rules.minLength && value.length < rules.minLength) {
            errors[field] = `${field} must be at least ${rules.minLength} characters long`;
        } else if (rules.match && value !== values[rules.match]) {
            errors[field] = `${field} does not match`;
        } else if (rules.validate && !rules.validate(value)) {
            errors[field] = rules.errorMessage || `${field} is invalid`;
        }
    }
    return errors;
};
