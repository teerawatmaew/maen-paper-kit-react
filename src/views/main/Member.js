import React from "react";
import { Container, Row } from "reactstrap";
import ComebackBar from "components/Headers/Menu/ComebackBar.js";

function Member() {
    return (
        <>
            <ComebackBar />
            <Container className="tim-container">
                <div className="title">
                    <h3>ข้อมูลผู้ใช้งาน</h3>
                </div>
                <div id="typography">
                    <Row>
                        <div className="typography-line">
                            <h3>
                                <span className="note">ชื่อ-สกุล</span>
                                สมศักดิ์ รักการเรียน
                            </h3>
                        </div>
                        <div className="typography-line">
                            <h3>
                                <span className="note">รหัสประจำตัว</span>
                                123456789
                            </h3>
                        </div>
                        <div className="typography-line">
                            <h3>
                                <span className="note">ผลการเรียน</span>
                                100 %
                            </h3>
                        </div>
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default Member;
