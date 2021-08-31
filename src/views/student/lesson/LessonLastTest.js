import React from "react";
import {
    Button,
    Container
} from "reactstrap";
import { useParams } from "react-router-dom";
import StudentNavBar from "components/Headers/Menu/StudentNavBar";

function LessonLastTest() {
    const { lesson } = useParams();
    const link = "/student-homepage";

    return (
        <>
            <StudentNavBar />
            <Container>
                <div className="text-center">
                    <h2>ทดสอบบทที่ {lesson} หลังเรียน</h2>
                    <hr />
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeboe34g2QffIsGpuYwfaPkWJtg_btGkYdW0OdtoKuSA6bkZg/viewform?embedded=true" width="800" height="600" frameborder="0" marginheight="0" marginwidth="0">กำลังโหลด…</iframe>
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

export default LessonLastTest;
