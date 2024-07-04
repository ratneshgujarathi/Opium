    import { useState, useEffect } from 'react';

    const useForm = (initialState, validate) => {
        const [values, setValues] = useState(initialState);
        const [errors, setErrors] = useState({});
        const [isSubmitting, setIsSubmitting] = useState(false);

        useEffect(() => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                setIsSubmitting(false);
            }
        }, [errors]);

        const handleChange = (e) => {
            const { name, value } = e.target;
            setValues({
                ...values,
                [name]: value,
            });
        };

        const handleSubmit = async (e, submitCallback) => {
            e.preventDefault();
            setErrors(validate(values));
            setIsSubmitting(true);

            if (Object.keys(errors).length === 0) {
                await submitCallback();
            }
        };

        return {
            values,
            errors,
            isSubmitting,
            handleChange,
            handleSubmit,
        };
    };

    export default useForm;
