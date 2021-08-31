import React from "react";
import {
    Button,
    Row,
    Container,
    Spinner
} from "reactstrap";
import { useParams } from "react-router-dom";
import StudentNavBar from "components/Headers/Menu/StudentNavBar";

function LessonWaiting() {
    const { lesson } = useParams();
    const passlink = "/study/thirdboard/" + lesson;
    const faillink = "/study/thirdwork/" + lesson;

    return (
        <>
            <StudentNavBar />
            <br />
            <div className="text-center">
                <h2>บทที่ {lesson} ห้องพักรอประเมินใบงานที่ 2</h2>
                <br />
                <Spinner /> <Spinner /> <Spinner />
                <h4>รออาจารย์ทำการประเมินคะแนนสักครู่</h4>
                <br />
                <Button>เช็คผลการประเมิน</Button>
            </div>
            <Container>
                <hr />
                <Row className="content-right">
                    <hr />
                    <Button
                        className="btn-round mr-1"
                        color="danger"
                        type="button"
                        href={faillink}
                    >
                        ไม่ผ่านเกณฑ์
                    </Button>
                    <Button
                        className="btn-round mr-1"
                        color="success"
                        type="button"
                        href={passlink}
                    >
                        ผ่านเกณฑ์
                    </Button>
                </Row>
            </Container>
        </>
    );
}

export default LessonWaiting;
