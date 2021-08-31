import React from "react";
import {
    Button,
    TabContent,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Container
} from "reactstrap";
import { useParams } from "react-router-dom";
import StudentNavBar from "components/Headers/Menu/StudentNavBar";

function LessonFourthWork() {
    const { lesson } = useParams();
    const link = "/study/fourthboard/" + lesson;

    return (
        <>
            <StudentNavBar />
            <br />
            <h2 className="text-center">บทที่ {lesson} ใบงานครั้งที่ 4</h2>

            <Container>
                <hr />
                <TabContent>
                    <Row>
                        <Col className="text-center">
                            <img
                                src={require("assets/img/worksheet/01/4.png").default}
                                alt="..."
                                className="img-thumbnail img-responsive"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                            <Form className="text-center">
                                <FormGroup row>
                                    <Label for="choice1" sm={2}>ข้อ 1.</Label>
                                    <Col sm={10}>
                                        <Input type="choice1" name="choice1" id="choice1" placeholder="คำตอบข้อ 1" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="choice2" sm={2}>ข้อ 2.</Label>
                                    <Col sm={10}>
                                        <Input type="choice2" name="choice2" id="choice2" placeholder="คำตอบข้อ 2" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="choice3" sm={2}>ข้อ 3.</Label>
                                    <Col sm={10}>
                                        <Input type="choice3" name="choice3" id="choice3" placeholder="คำตอบข้อ 3" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="choice4" sm={2}>ข้อ 4.</Label>
                                    <Col sm={10}>
                                        <Input type="choice4" name="choice4" id="choice4" placeholder="คำตอบข้อ 4" />
                                    </Col>
                                </FormGroup>
                                <Button>ส่งคำตอบ</Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="content-right">
                        <hr />
                        <Button
                            className="btn-round mr-1"
                            color="success"
                            type="button"
                            href={link}
                        >
                            ต่อไป
                        </Button>
                    </Row>
                </TabContent>
            </Container>
        </>
    );
}

export default LessonFourthWork;
