import React from "react";
import {
    Button,
    TabContent,
    Row,
    Container
} from "reactstrap";
import { useParams } from "react-router-dom";

import StudentNavBar from "components/Headers/Menu/StudentNavBar";
import SecondWork01 from "./secondwork/SecondWork01";

function LessonSecondBoard() {
    const { lesson } = useParams();
    const link = "/study/waiting/" + lesson;

    var worksheet;

    if (lesson == 1) {
        worksheet = <SecondWork01 />;
    } else {
        worksheet = <SecondWork01 />;
    }

    return (
        <>
            <StudentNavBar />
            <br />
            <h2 className="text-center">บทที่ {lesson} กระทู้ใบงานครั้งที่ 2</h2>

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

export default LessonSecondBoard;
