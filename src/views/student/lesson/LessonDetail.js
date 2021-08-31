import React from "react";
import {
    NavItem,
    NavLink,
    Nav,
    Button,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
} from "reactstrap";
import { useParams } from "react-router-dom";
import StudentNavBar from "components/Headers/Menu/StudentNavBar";
import Detail01 from "./detail/Detail01";
import Detail02 from "./detail/Detail02";
import Detail03 from "./detail/Detail03";
import Detail04 from "./detail/Detail04";
import Detail05 from "./detail/Detail05";
import Detail06 from "./detail/Detail06";
import Detail07 from "./detail/Detail07";
import Detail08 from "./detail/Detail08";
import Detail09 from "./detail/Detail09";
import Detail10 from "./detail/Detail10";

function LessonDetail() {
    const { lesson } = useParams();
    const [activeTab, setActiveTab] = React.useState("1");
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    var data;

    if (lesson == 1) {
        data = <Detail01 />;
    } else if (lesson == 2) {
        data = <Detail02 />;
    } else if (lesson == 3) {
        data = <Detail03 />;
    } else if (lesson == 4) {
        data = <Detail04 />;
    } else if (lesson == 5) {
        data = <Detail05 />;
    } else if (lesson == 6) {
        data = <Detail06 />;
    } else if (lesson == 7) {
        data = <Detail07 />;
    } else if (lesson == 8) {
        data = <Detail08 />;
    } else if (lesson == 9) {
        data = <Detail09 />;
    } else if (lesson == 10) {
        data = <Detail10 />;
    }

    const link = "/study/firstwork/" + lesson;

    return (
        <>
            <StudentNavBar />
            <div className="section">
                <Container>
                    <Row>
                        <Col>
                            <div className="title">
                                <h3>สื่อการสอนบทที่ { lesson }</h3>
                            </div>
                            <div className="nav-tabs-navigation">
                                <div className="nav-tabs-wrapper">
                                    <Nav id="tabs" role="tablist" tabs>
                                        <NavItem>
                                            <NavLink
                                                className={activeTab === "1" ? "active" : ""}
                                                onClick={() => {
                                                    toggle("1");
                                                }}
                                            >
                                                Video
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={activeTab === "2" ? "active" : ""}
                                                onClick={() => {
                                                    toggle("2");
                                                }}
                                            >
                                                เนื้อหาบทที่ {lesson}
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                            </div>
                            <TabContent activeTab={activeTab} className="text-center">
                                <TabPane tabId="1">
                                    <iframe width="700" height="450" src="https://www.youtube.com/embed/vcLBwmWyfkA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </TabPane>
                                <TabPane tabId="2" className="text-left">
                                    {data}
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                    <Row className="content-right">
                        <hr />
                        <Button
                            className="btn-round mr-1"
                            color="success"
                            type="button"
                            href={ link }
                        >
                            ต่อไป
                        </Button>
                    </Row>
                </Container>
            </div>{" "}
        </>
    );
}

export default LessonDetail;
