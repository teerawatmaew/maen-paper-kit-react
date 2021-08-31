import React from "react";
import {
    Button,
    Card,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";
//import ComebackBar from "components/Headers/Menu/ComebackBar.js";
import LoginNextBar from "components/Headers/Menu/LoginNextBar.js";

function Login() {
    return (
        <>
            <LoginNextBar />
            <div
                className="section section-image section-login"
                style={{
                    backgroundImage:
                        "url(" + require("assets/img/login-image.jpg").default + ")",
                }}
            >
                <Container>
                    <Row>
                        <Col className="mx-auto" lg="4" md="6">
                            <Card className="card-register">
                                <h3 className="title mx-auto">ยินดีต้อนรับ</h3>
                                <Form className="register-form" method="post">
                                    <label>รหัสประจำตัวผู้ใช้งาน</label>
                                    <InputGroup className="form-group-no-border">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="nc-icon nc-badge" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="รหัสผู้ใช้" type="id" name="id" />
                                    </InputGroup>
                                    <label>Password</label>
                                    <InputGroup className="form-group-no-border">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="nc-icon nc-key-25" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Password ex.01012554" type="password" name="password" />
                                    </InputGroup>
                                    <Button
                                        block
                                        className="btn-round"
                                        color="danger"
                                        type="submit"
                                    >
                                        เข้าสู่ระบบ
                                    </Button>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>{" "}
        </>
    );
}

export default Login;
