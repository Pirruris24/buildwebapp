import React from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './../assets/css/blk-design-system-react.css';

function Home() {
    const navigate = useNavigate();

    const handleClickLogIn = () => {
        navigate('/login');
    };

    const handleClickRegisterUser = () => {
        navigate('/registeruser');
    };

    return (
        <div className="index-page">
            <div className="wrapper">
                <div className="page-header header-filter">
                    <div className="squares square1"></div>
                    <div className="squares square2"></div>
                    <div className="squares square3"></div>
                    <div className="squares square4"></div>
                    <div className="squares square5"></div>
                    <div className="squares square6"></div>
                    <div className="squares square7"></div>
                </div>
                <div className='container'>
                    <div className="content-center brand">
                        <h1 className="h1-seo">BUILD</h1>
                        <h3 className="d-none d-sm-block">Sistema para ayudar al turista a hospedarse de una manera más cómoda y segura</h3>
                        <button className='btn btn-success' onClick={handleClickLogIn}>Iniciar Sesión</button>
                        <button className='btn-neutral btn btn-default' onClick={handleClickRegisterUser}>Registrar Usuario</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
