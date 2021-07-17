import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import setAuthorizationToken from './utils/setAuthorizationToken';




const RegistrationForm = (props) => {
    // SET GLOBAL TOKEN HEADER FOR AXIOS REQUESTS
    setAuthorizationToken();

    const handelAxiosErrors = (err) => {
        console.log(err);
    };

    const axiosSuccess = (res) => {
        setAuthorizationToken();
        sessionStorage.setItem('token', res.data['email']);
        props.history.push('/posts');
        console.log(props);
    };

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Incorrect email format').required('Required!'),
        password: Yup.string().max(10, "The password is too long")
    });

    const onSubmit = () => {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => { axiosSuccess(res) })
            .catch(err => { handelAxiosErrors(err) });
    };

    return (
        <div className="login-form mt6">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className="form">
                        <div className="form-field">
                            {/* Email */}
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" className="form-errors" />
                        </div>
                        <div className="form-field">
                            {/* Password */}
                            <label htmlFor="password">Password</label>
                            <Field type="password" id="password" name="password" />
                            <ErrorMessage name="password" className="form-errors" />
                        </div>
                        <div id="axios-errors" className="axios-errors"></div>
                        <button className="login-button" type="submit">Login</button>
                </Form>
            </Formik>

        </div >



    );
}

export default RegistrationForm;