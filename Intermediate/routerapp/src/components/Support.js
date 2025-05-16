import  React from 'react';
import { useNavigate } from 'react-router-dom';

const Support = () => {
    const navigate = useNavigate();

    function onclickHandler() {
        navigate('/about');

    }
    return(
        <div>
            <h1>Support</h1>
            <button onClick={onclickHandler}>
                Move to About
            </button>
        </div>
    )

}

export default Support;