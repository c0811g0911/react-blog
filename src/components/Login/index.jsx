import React from 'react';

import LoginForm from './LoginForm';

class Login extends React.Component {
    constructor(){
        super();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) =>{
        
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    handleSubmit = async (event) =>{
        event.preventDefault();

        //validate data
        const data = this.state;
        try {
            console.log(data);


        } catch (error) {
            console.log(error);
        }
       
        
    }
    
    render(){
        return(
            <LoginForm 
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}/>
        );
    }
}

export default Login;