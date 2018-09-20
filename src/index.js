import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter,Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import SingleArticle from './components/SingleArticle';
import CreateArticle from './components/CreateArticle';

ReactDOM.render(
    
        <BrowserRouter>
            <div>
                <Navbar />
                <Header />
                <Route exact path='/' component={Welcome}/>                
                <Route path='/articles/create' component={CreateArticle}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/article/:id' component={SingleArticle}/>
                <Footer/>
            </div>
        </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
