import React from "react";
import {
    Container,
    Row,
    Col,
} from "reactstrap";

function HomeBody() {
    return (
        <>
            <div className="section">
                <Container>
                    <Row>
                        <Col md="9">
                            <h1>กระดานข่าวสาร</h1>
                            <hr />
                            <h5>แจ้งข้อมูลข่าวสาร การอัพเดทข้อมูลต่างๆ ภายในเว็บไซต์ที่นี่</h5>
                            <h5>o ระบบสมาชิก - เพื่อให้ผู้ใช้งานตรวจสอบข้อมูลผู้ใช้งาน</h5>
                            <h5>o ระบบการเรียน - จุดประสงค์ของเว็บไซต์และระบบการเรียน</h5>
                            <h5>o เข้าสู่ระบบ - สำหรับผู้เรียนที่ต้องการเข้าใช้งาน</h5>
                            <h5>o ผลการเรียน - ตรวจสอบผลการเรียนและปริ้นข้อมูลการเรียนได้</h5>
                            <h5>o แจ้งปัญหา - ส่งปัญหาในการใช้งานที่พบเจอให้กับทางทีมผู้พัฒนา</h5>
                        </Col>
                        <Col md="3">
                            <a href="/creature">
                                <img
                                    alt="..."
                                    className="img-rounded img-responsive"
                                    src={require("assets/img/education.jpg").default}
                                    style={{ width: "100%" }}
                                />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default HomeBody;
