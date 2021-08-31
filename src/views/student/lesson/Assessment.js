import React from "react";
import {
    Button,
    Container
} from "reactstrap";
//import ComebackBar from "components/Headers/Menu/ComebackBar.js";
import StudentNavBar from "components/Headers/Menu/StudentNavBar";

function Assessment() {
    return (
        <>
            <StudentNavBar />
            <Container>
                <div className="text-center">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczYgQ0nWf5XPgU0-wAu8fXG7xWHm5HLV7SU6tnFzpeQUHr1A/viewform?embedded=true" width="800" height="600" frameborder="0" marginheight="0" marginwidth="0">กำลังโหลด…</iframe>
                    <hr />
                    <Button
                        className="btn-round mr-1"
                        color="success"
                        type="button"
                        href="/select-lesson"
                    >
                        ต่อไป
                    </Button>
                </div>
            </Container>
        </>
    );
}

export default Assessment;
