import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    function onclickHandler() {
        navigate('/support');
    }
    return (
        <div>
            <h1>About</h1>
            <button onClick={onclickHandler} className='btn btn-primary'>
                Move to Support Page
            </button>
        </div>
    )
}

export default About;