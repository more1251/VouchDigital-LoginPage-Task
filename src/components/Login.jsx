import { Typography } from 'antd'
import React from 'react'
import FormComp from './FormComp'

const Login = () => {
    return (
        <div className='login-cont'>
            <div className="login-form">

                <div className="title-cont">
                    <Typography.Title level={1} className="heading">
                    Welcome Back
                    </Typography.Title>

                    <Typography.Title level={5} className="sub-heading">
                    Sub-title text goes here
                    </Typography.Title>
                </div>
        
               <FormComp/>
            </div>

            <div className="image-cont">
                <div className="image-div">
                    <img src="images/meetingoffice.svg" alt="meeting-img" />
                </div>
            </div>
        </div>
    )
}

export default Login
