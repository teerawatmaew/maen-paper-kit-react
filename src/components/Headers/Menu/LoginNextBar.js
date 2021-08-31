import React from "react";
import {
    Button,
    Row,
    Col
} from "reactstrap";

function LoginNextBar() {
    return (
        <>
            <div id="buttons">
                <Row>
                    <Col>
                        <Button
                            className="btn-round mr-1 content-right"
                            color="default"
                            type="button"
                            outline
                            href="/home"
                        >
                            กลับหน้าแรก
                        </Button>
                        <Button
                            className="btn-round mr-1"
                            color="default"
                            type="button"
                            outline
                            href="/student-homepage"
                        >
                            ต่อไป
                        </Button>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default LoginNextBar;
