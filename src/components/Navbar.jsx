import React, { useState } from "react";
import { Button, Menu, Typography,Drawer} from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
    
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    
    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };
   

    const handleLogout = ()=>{
        sessionStorage.removeItem('auth-token');
        navigate("/login");
    }
    
    const LogedInMenu = [
    
        {
            label: <Button className="btn3" onClick={handleLogout}>Logout</Button>,
            key: "1",
        },
    ]

    const LogInMenu = [

        {
            label: <Link to="#"><Button className="btn btn1">Start Free Trial</Button></Link>,
            key: "1",
        },
        {
            label: <Link to="/login"><Button className="btn btn2">Login</Button></Link>,
            key: "2",
        },
    ]
  return (
    <div className="nav-container">
        <div className="nav-brand">
            <Typography.Title level={3} className="logo">
            <Link to="/">
                ATools<span className="brand-span">.</span>
            </Link>
            </Typography.Title>

            <Button className="toggle-menu" onClick={showDrawer}>
                <MenuOutlined />
            </Button>
        </div>

        <div className="nav-menu">
            {window.location.pathname==='/login'? 
            <Menu mode="horizontal" items={LogInMenu}/>
            :
            <Menu mode="horizontal" items={LogedInMenu}/>
            }
 
        </div>

        <Drawer
            placement="right"
            onClose={onClose} 
            visible={visible}
            className="drawer"
        >   
            <div className="drawer-nav">
                {window.location.pathname==='/login'? 
                <Menu mode="inline" items={LogInMenu}/>
                :
                <Menu mode="inline" items={LogedInMenu}/>
                }
            </div>  
        </Drawer>
        

    </div>
  );
};

export default Navbar;
