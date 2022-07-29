import React from 'react'
import { Typography } from 'antd'

const Home = () => {

    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15vh",
        flexDirection: "column",
        padding: "40px"
    }

    return (
        <div style={style}>
            <Typography.Title level={3} className="heading">
                HomePage! You have Logged In Successfully
            </Typography.Title>

            <Typography.Title level={3} className="heading">
                You can Log Out by clicking on LogOut button to go back to LoginPage
            </Typography.Title>
        </div>
    )
}

export default Home
