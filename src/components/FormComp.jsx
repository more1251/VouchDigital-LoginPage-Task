import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormComp = () => {
  const [data, setData] = useState({ email: "", password: "" });
  
  const navigate = useNavigate();
    
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://reqres.in/api/login", data);
      const token = await response.data.token;
      sessionStorage.setItem('auth-token', token);
      console.log(response.data);
      setData({ email: "", password: "" });

      if(token){
        const notify = () => toast.success("Logged in Successfully");
        notify();

        setTimeout(() => {
          navigate("/");
        }, 3000);
        
      }

    } catch (err) {
      const notify = () => toast.error(err.response.data.error);
      notify();
      console.log(err.response.data);
    }
  };

  
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Form
      name="login-form"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item>
        <Input
          placeholder="Email Address *"
          className="input-field"
          value={data.email}
          onChange={onChange}
          name="email"
        />
      </Form.Item>

      <Form.Item>
        <Input
          placeholder="Password *"
          className="input-field"
          value={data.password}
          onChange={onChange}
          name="password"
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          className="form-btn"
          onClick={handleClick}
        >
          Login
        </Button>
      </Form.Item>

      <div className="bottom-div">
        <Form.Item
          name="remember"
          className="checkbox"
          valuePropName="checked"
          wrapperCol={{
            offset: 0,
          }}
        >
          <Checkbox className="bottom-text">Remember Password</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 0,
          }}
        >
          <p className="bottom-text">Forgot Password?</p>
        </Form.Item>
      </div>

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </Form>
  );
};

export default FormComp;
