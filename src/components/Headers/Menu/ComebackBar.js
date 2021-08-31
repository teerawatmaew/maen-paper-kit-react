import React from "react";
import {
    Button,
    Row,
    Col
} from "reactstrap";

function ComebackBar() {
    return (
        <>
            <div id="buttons">
                <Row>
                    <Col>
                        <Button
                            className="btn-round mr-1"
                            color="default"
                            type="button"
                            outline
                            href="/home"
                        >
                            กลับหน้าแรก
                        </Button>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default ComebackBar;
