import React from "react";
import {
    Button,
    TabContent,
    Row,
    Container
} from "reactstrap";
import { useParams } from "react-router-dom";

import StudentNavBar from "components/Headers/Menu/StudentNavBar";
import ThirdWork01 from "./thirdwork/ThirdWork01";

function LessonThirdBoard() {
    const { lesson } = useParams();
    const link = "/study/fourthwork/" + lesson;

    var worksheet;

    if (lesson == 1) {
        worksheet = <ThirdWork01 />;
    } else {
        worksheet = <ThirdWork01 />;
    }

    return (
        <>
            <StudentNavBar />
            <br />
            <h2 className="text-center">บทที่ {lesson} กระทู้ใบงานครั้งที่ 3</h2>

            <Container>
                <hr />
                <TabContent id="list-group-tabs-example" defaultActiveKey="#link1">
                    {worksheet}
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

export default LessonThirdBoard;
