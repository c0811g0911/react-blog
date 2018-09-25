import React from 'react';
import {Link} from 'react-router-dom';

class Register extends React.Component {
    constructor(){
        super();

        this.state = {
            name: '',
            email:'',
            password:'',
            password_confirmation:'',
            errors:{}     
        };

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
            const user = await this.props.registerUser(data);
            localStorage.setItem('user', JSON.stringify(user));
            this.props.setAuthUser(user);
            this.props.history.push('/');


        } catch (error) {
            this.setState({
                errors:error
            });
        }
       
        
    }

    render(){
        return (
            <div className="mh-fullscreen bg-img center-vh p-20" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg-girl.jpg)` }}>
                <div className="card card-shadowed p-50 w-400 mb-0" style={{ maxWidth: '100%' }}>
                    <h5 className="text-uppercase text-center">Register</h5>
                    <br />
                    <br />
                    <form className="form-type-material" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" placeholder="Username" onChange={this.handleInputChange}/>
                            <small className="text-danger">
                                {this.state.errors['name']}
                            </small>
                        </div>
                        <div className="form-group">
                            <input type="text" name="email" className="form-control" placeholder="Email address" onChange={this.handleInputChange}/>
                            <small className="text-danger">
                                {this.state.errors['email']}
                            </small>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.handleInputChange}/>
                            <small className="text-danger">
                                {this.state.errors['password']}
                            </small>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password_confirmation" className="form-control" placeholder="Password (confirm)" onChange={this.handleInputChange}/>
                        </div>
                        <br />
                        <button className="btn btn-bold btn-block btn-primary" type="submit">Register</button>
                    </form>
                    <hr className="w-30" />
                    <p className="text-center text-muted fs-13 mt-20">Already have an account?                    
                        <Link to="/login">Sign in</Link>
                    </p>
                </div>
            </div>
    
        )
    }
}


export default Register;