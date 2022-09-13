import React from 'react';
import {Link} from 'react-router-dom';

const SignInButton = () => {
    return(
        <div className="sign_in">
            <Link to="/signin">Sign In</Link>
        </div>
    )
}

export default SignInButton;
