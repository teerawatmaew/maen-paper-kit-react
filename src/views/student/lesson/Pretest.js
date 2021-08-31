import React from "react";
import {
    Button,
    Container
} from "reactstrap";
//import ComebackBar from "components/Headers/Menu/ComebackBar.js";
import StudentNavBar from "components/Headers/Menu/StudentNavBar";

function Pretest() {
    return (
        <>
            <StudentNavBar />
            <Container>
                <div className="text-center">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfPrqAMEb78Y0euv1VnnFw2FhVvHFXTKzmuXWk6Zv0wLW5aUA/viewform?embedded=true" width="800" height="600" frameborder="0" marginheight="0" marginwidth="0">กำลังโหลด…</iframe>
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

export default Pretest;
