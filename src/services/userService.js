import {
    validateAll
} from 'indicative';
import Axios from 'axios';
import config from '../config';

export default class UserService {
    async registerUser(data) {
        const rules = {
            name: 'required | string',
            email: 'required | email',
            password: 'required|string|min:6|confirmed'
        }

        const messages = {
            required: 'The {{ field }} field is required',
            'email.email': 'The email is invalid',
            'password.confirmed': 'The password confirm does not match'
        }

        try {
            await validateAll(data, rules, messages);

            try {
                const response = await Axios.post(`${config.apiUrl}/users`, {
                    name: data.name,
                    email: data.email,
                    password: data.password
                });                

                return response.data;               
            } catch (error) {
                console.log(error);
                return error;
            }
        } catch (errors) {
            console.log(errors);

            const formattedErrors = {};

            errors.forEach(error => formattedErrors[error.field] = error.message);            

            return formattedErrors;
        }


    }
}