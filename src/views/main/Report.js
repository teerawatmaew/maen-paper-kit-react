import React from "react";
import {
    Button,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";
import ComebackBar from "components/Headers/Menu/ComebackBar.js";

function Report() {
    return (
        <>
            <ComebackBar />
            <div className="section landing-section">
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto" md="8">
                            <h2 className="text-center">แจ้งปัญหาการใช้งาน</h2>
                            <Form className="contact-form">
                                <Row>
                                    <Col md="6">
                                        <label>ชื่อ-สกุล</label>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="nc-icon nc-single-02" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Name" type="text" />
                                        </InputGroup>
                                    </Col>
                                    <Col md="6">
                                        <label>E-mail</label>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="nc-icon nc-email-85" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Email" type="text" />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <label>รายละเอียด</label>
                                <Input
                                    placeholder="บอกเราถึงปัญหาที่ท่านพบ..."
                                    type="textarea"
                                    rows="4"
                                />
                                <Row>
                                    <Col className="ml-auto mr-auto" md="4">
                                        <Button className="btn-fill" color="danger" size="lg">
                                            ส่งปัญหา
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Report;
