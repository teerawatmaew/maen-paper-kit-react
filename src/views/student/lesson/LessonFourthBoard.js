import React from "react";
import {
    Button,
    TabContent,
    Row,
    Container
} from "reactstrap";
import { useParams } from "react-router-dom";

import StudentNavBar from "components/Headers/Menu/StudentNavBar";
import FourthWork01 from "./fourthwork/FourthWork01";

function LessonFourthBoard() {
    const { lesson } = useParams();
    const link = "/study/lasttest/" + lesson;

    var worksheet;

    if (lesson == 1) {
        worksheet = <FourthWork01 />;
    } else {
        worksheet = <FourthWork01 />;
    }

    return (
        <>
            <StudentNavBar />
            <br />
            <h2 className="text-center">บทที่ {lesson} กระทู้พูดคุยกับอาจารย์</h2>

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

export default LessonFourthBoard;
