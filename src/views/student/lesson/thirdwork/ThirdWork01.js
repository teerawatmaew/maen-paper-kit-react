import React from "react";
import {
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    TabContent,
    TabPane,
    Toast,
    ToastHeader,
    ToastBody
} from "reactstrap";
import CommentZone from "../../../../components/CommentZone";
import ListDownload from "../../../../components/ListDownload";

function ThirdWork01() {
    const [activeTab, setActiveTab] = React.useState("1");
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    return (
        <Row>
            <Col sm={3}>
                <ListGroup>
                    <ListGroupItem
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                            toggle("1");
                        }}
                    >
                        ใบงานที่ 1
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col sm={9}>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1" >
                        <img
                            src={require("assets/img/worksheet/01/3.png").default}
                            alt="..."
                            className="img-thumbnail img-responsive"
                        />
                    </TabPane>
                </TabContent>
                <div className="p-3 my-2 rounded">
                    <Toast>
                        <ToastHeader>
                            อาจารย์
                        </ToastHeader>
                        <ToastBody>
                            <p>ตัวอย่างส่วนคำตอบ</p>
                        </ToastBody>
                    </Toast>
                    <Toast>
                        <ToastHeader>
                            นักเรียน 1
                        </ToastHeader>
                        <ToastBody>
                            <p>ตัวอย่างส่วนคำตอบ</p>
                            <ol>
                                <li>คำตอบข้อ 1 ตอบว่า....</li>
                                <li>คำตอบข้อ 2 ตอบว่า....</li>
                                <li>คำตอบข้อ 3 ตอบว่า....</li>
                            </ol>
                        </ToastBody>
                    </Toast>
                </div>
                <CommentZone />
                <ListDownload />
            </Col>
        </Row>
    );
}

export default ThirdWork01;
