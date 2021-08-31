import React from "react";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Container,
    Row,
    Col,
} from "reactstrap";
import ComebackBar from "components/Headers/Menu/ComebackBar.js";

function Creature() {
    return (
        <>
            <ComebackBar />
            <div className="section section-dark text-center">
                <Container>
                    <h2 className="title">ข้อมูลผู้พัฒนา</h2>
                    <Row>
                        <Col md="4">
                            
                        </Col>
                        <Col md="4">
                            <Card className="card-profile card-plain">
                                <div className="card-avatar">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            src={
                                                require("assets/img/maenpic.jpg")
                                                    .default
                                            }
                                        />
                                    </a>
                                </div>
                                <CardBody>
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <div className="author">
                                            <CardTitle tag="h4">ศราวุธ น้อยลา</CardTitle>
                                            <h6 className="card-category">อาจารย์ผู้ควบคุม</h6>
                                        </div>
                                    </a>
                                    <p className="card-description text-center">
                                        อาจารย์ภาควิชาภาษาไทย โรงเรียนหล่มเก่าพิทยาคม
                                    </p>
                                </CardBody>
                                <CardFooter className="text-center">
                                    <Button
                                        className="btn-just-icon btn-neutral ml-1"
                                        color="link"
                                        href="https://www.facebook.com/sarawut.maen"
                                    >
                                        <i className="fa fa-facebook" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md="4">
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Creature;
