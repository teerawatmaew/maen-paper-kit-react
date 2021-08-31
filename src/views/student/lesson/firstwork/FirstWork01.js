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
import ListDownload from "../../../../components/ListDownload";

function FirstWork01() {
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
                    <ListGroupItem
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                            toggle("2");
                        }}
                    >
                        ใบงานที่ 2
                    </ListGroupItem>
                    <ListGroupItem
                        className={activeTab === "3" ? "active" : ""}
                        onClick={() => {
                            toggle("3");
                        }}
                    >
                        ใบงานที่ 3
                    </ListGroupItem>
                    <ListGroupItem
                        className={activeTab === "4" ? "active" : ""}
                        onClick={() => {
                            toggle("4");
                        }}
                    >
                        ใบงานที่ 4
                    </ListGroupItem>
                    <ListGroupItem
                        className={activeTab === "5" ? "active" : ""}
                        onClick={() => {
                            toggle("5");
                        }}
                    >
                        ใบงานที่ 5
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col sm={9}>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1" >
                        <img
                            src={require("assets/img/worksheet/01/1-1.png").default}
                            alt="..."
                            className="img-thumbnail img-responsive"
                        />
                    </TabPane>
                    <TabPane tabId="2">
                        <img
                            src={require("assets/img/worksheet/01/1-2.png").default}
                            alt="..."
                            className="img-thumbnail img-responsive"
                        />
                    </TabPane>
                    <TabPane tabId="3">
                        <img
                            src={require("assets/img/worksheet/01/1-3.png").default}
                            alt="..."
                            className="img-thumbnail img-responsive"
                        />
                    </TabPane>
                    <TabPane tabId="4">
                        <img
                            src={require("assets/img/worksheet/01/1-4.png").default}
                            alt="..."
                            className="img-thumbnail img-responsive"
                        />
                    </TabPane>
                    <TabPane tabId="5">
                        <img
                            src={require("assets/img/worksheet/01/1-5.png").default}
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
                                <li>คำตอบข้อ 4 ตอบว่า....</li>
                                <li>คำตอบข้อ 5 ตอบว่า....</li>
                            </ol>
                        </ToastBody>
                    </Toast>
                </div>
                <ListDownload />
            </Col>
        </Row>
    );
}

export default FirstWork01;
