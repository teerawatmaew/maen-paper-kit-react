import React from "react";
import {
    Form,
    FormGroup,
    Col,
    Input,
    Button
} from "reactstrap";

function CommentZone() {
    return (
        <>
            <Form className="text-center">
                <FormGroup row>
                    <Col>
                        <Input type="textarea" name="comment" id="comment" placeholder="กรอกความคิดเห็นที่นี่..." />
                    </Col>
                </FormGroup>
                <Button>ส่งคำตอบ</Button>
            </Form>
        </>
    );
}

export default CommentZone;
