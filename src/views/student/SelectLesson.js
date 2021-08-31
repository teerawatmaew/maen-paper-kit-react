import React from "react";
import {
	Button,
	Row,
	Col,
	Table,
	Container
} from "reactstrap";
//import ComebackBar from "components/Headers/Menu/ComebackBar.js";
import StudentNavBar from "components/Headers/Menu/StudentNavBar";

function SelectLesson() {
	return (
		<>
			<StudentNavBar />
			<section>
				<Container className="text-center">
                    <div className="section-top-border">
                        <Row>
                            <Col>
                                <h2>เลือกบทเรียน</h2>
                            </Col>
                        </Row>
					</div>
                </Container>
                <Container>
                    <Table responsive="sm">
                        <tbody>
                            <tr className="text-center">
                                <td>
                                    <Button
                                        size="lg"
                                        className="btn-round mr-1"
                                        color="success"
                                        type="button"
                                        href="/student/pretest"
                                    >
                                        แบบทดสอบก่อนเรียน
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        size="lg"
                                        className="btn-round mr-1"
                                        color="secondary"
                                        type="button"
                                        href="/study/firsttest/4"
                                    >
                                        ===== บทที่ 04 =====
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        size="lg"
                                        className="btn-round mr-1"
                                        color="secondary"
                                        type="button"
                                        href="/study/firsttest/8"
                                    >
                                        ===== บทที่ 08 =====
                                    </Button>
                                </td>
                            </tr>
                            <tr className="text-center">
                                <td>
                                    <Button
                                        size="lg"
                                        className="btn-round mr-1"
                                        color="primary"
                                        type="button"
                                        href={`/study/firsttest/1`}
                                    >
                                        ===== บทที่ 01 =====
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        size="lg"
                                        className="btn-round mr-1"
                                        color="secondary"
                                        type="button"
                                        href="/study/firsttest/5"
                                    >
                                        ===== บทที่ 05 =====
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        size="lg"
                                        className="btn-round mr-1"
                                        color="secondary"
                                        type="button"
                                        href="/study/firsttest/9"
                                    >
                                        ===== บทที่ 09 =====
                                    </Button>
                                </td>
                            </tr>
                            <tr className="text-center">
                                <td>
                                    <Button
                                        size="lg"
                                        className="btn-round mr-1"
                                        color="secondary"
                                        type="button"
                                        href="/study/firsttest/2"
                                    >
                                        ===== บทที่ 02 =====
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        size="lg"
                                        className="btn-round mr-1"
                                        color="secondary"
                                        type="button"
                                        href="/study/firsttest/6"
                                    >
                                        ===== บทที่ 06 =====
                                    </Button>
                                </td>
                                <td colspan="2">
                                    <Button
                                        size="lg"
                                        className="btn-round mr-1"
                                        color="secondary"
                                        type="button"
                                        href="/study/firsttest/10"
                                    >
                                        ===== บทที่ 10 =====
                                    </Button>
                                </td>
                            </tr>
                            <tr className="text-center">
                                <td>
                                    <Button
                                        size="lg"
                                        className="btn-round mr-1"
                                        color="secondary"
                                        type="button"
                                        href="/study/firsttest/3"
                                    >
                                        ===== บทที่ 03 =====
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        size="lg"
                                        className="btn-round mr-1"
                                        color="secondary"
                                        type="button"
                                        href="/study/firsttest/7"
                                    >
                                        ===== บทที่ 07 =====
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        size="lg"
                                        className="btn-round mr-1"
                                        color="secondary"
                                        type="button"
                                        href="/student/posttest"
                                    >
                                        == ทดสอบหลังเรียน ==
                                    </Button>
                                </td>
                            </tr>
                            
                            <tr className="text-center">
                                <td colspan="3">
                                    <h4>ประเมินระบบและผู้สอน</h4>
                                    <hr />
                                    <Button
                                        size="lg"
                                        className="btn-round mr-1"
                                        color="secondary"
                                        type="button"
                                        href="/student/assessment"
                                    >
                                        ประเมินความพึงพอใจ
                                    </Button>
                                </td>
                            </tr>
                            <tr className="text-center">
                                <td colspan="3">
                                    <Button
                                        size="lg"
                                        className="btn-round mr-1"
                                        color="secondary"
                                        type="button"
                                        href="/student-homepage"
                                    >
                                        จบการเรียน
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
			</section>
		</>
	);
}

export default SelectLesson;
