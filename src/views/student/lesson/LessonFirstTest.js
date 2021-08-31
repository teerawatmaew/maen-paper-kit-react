import React from "react";
import {
    Button,
    Container
} from "reactstrap";
import { useParams } from "react-router-dom";
import StudentNavBar from "components/Headers/Menu/StudentNavBar";

function LessonFirstTest() {
    const { lesson } = useParams();
    const link = "/study/detail/" + lesson;

    return (
        <>
            <StudentNavBar />
            <Container>
                <div className="text-center">
                    <h2>ทดสอบบทที่ { lesson } ก่อนเรียน</h2>
                    <hr />
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeIsNmNLtXnKLGZaXT0KpH4RRpyJj_jFb_cYVpjfWKMBvAFlA/viewform?embedded=true" width="800" height="600" frameborder="0" marginheight="0" marginwidth="0">กำลังโหลด…</iframe>
                    <hr />
                    <Button
                        className="btn-round mr-1"
                        color="success"
                        type="button"
                        href={link}
                    >
                        ต่อไป
                    </Button>
                </div>
            </Container>
        </>
    );
}

export default LessonFirstTest;
