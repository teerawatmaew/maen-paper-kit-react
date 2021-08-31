import React from "react";
import {
    Button,
    Container,
    Row,
    Col
} from "reactstrap";

function HomeMenu() {
    return (
        <>
            <div className="section section-buttons">
                <Container>
                    <div id="buttons">
                        <Row>
                            <Col>
                            </Col>
                            <Col align="center" sm={8}>
                                <Button
                                    className="btn-round mr-1"
                                    color="warning"
                                    type="button"
                                    href="/member"
                                >
                                    ระบบสมาชิก
                                </Button>
                                <Button
                                    className="btn-round mr-1"
                                    color="primary"
                                    type="button"
                                    href="/webdetail"
                                >
                                    ระบบการเรียน
                                </Button>
                                <Button
                                    className="btn-round mr-1"
                                    color="info"
                                    size="lg"
                                    type="button"
                                    href="/login"
                                >
                                    เข้าสู่ระบบ
                                </Button>
                                <Button
                                    className="btn-round mr-1"
                                    color="default"
                                    type="button"
                                    href="/checkresult"
                                >
                                    ตรวจสอบผลการเรียน
                                </Button>
                                <Button
                                    className="btn-round mr-1"
                                    color="danger"
                                    type="button"
                                    href="/report"
                                >
                                    แจ้งปัญหา
                                </Button>
                            </Col>
                            <Col>

                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default HomeMenu;
