import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
import bot from "../assets/bot.jpeg";

const defaultValue = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [user, setUser] = useState(defaultValue);

  // for image upload
  const [image, setImage] = useState(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const validateImg = (e) => {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      return alert("file size must be less than 1mb");
    } else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "qojckfyv");
    try {
      setUploadingImg(true);
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/salmanhamza/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const urlData = await res.json();
      setUploadingImg(false);
      return urlData.url;
    } catch (error) {
      setUploadingImg(false);
      console.log(error);
    }
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (!image) return alert("please upload your profile picture");
    const url = await uploadImage(image);
    console.log(url);
  };
  return (
    <Container>
      <Row>
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-diresction-column"
        >
          <Form style={{ width: "80%", minWidth: 500 }} onSubmit={onSubmitForm}>
            <h1 className="text-center">Create Account</h1>
            <div className="signup-profile-pic__container">
              <img
                className="signup-profile-pic"
                src={imagePreview || bot}
                alt="profile picture"
              />
              <label htmlFor="image-upload" className="add-picture-icon">
                <i className="fas fa-plus-circle add-picture-icon"></i>
              </label>
              <input
                type="file"
                name=""
                id="image-upload"
                hidden
                accept="image/jpg , image/jpeg"
                onChange={validateImg}
              />
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                onChange={onValueChange}
                name="name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={onValueChange}
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={onValueChange}
                name="password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              {uploadingImg ? "Creating Account..." : "Create Account"}
            </Button>
            <div className="py-4">
              <p className="text-center">
                Already have an Account? <Link to={"/login"}>Login</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={5} className="signup___bg"></Col>
      </Row>
    </Container>
  );
};

export default Signup;
