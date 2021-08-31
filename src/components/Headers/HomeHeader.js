import React from "react";
import { Container } from "reactstrap";

function HomeHeader() {
    return (
        <>
            <div
                className="page-header section-dark"
                style={{
                    backgroundImage:
                        "url(" + require("assets/img/bg6-2.jpg").default + ")",
                }}
            >
                <div className="filter" />
                <div className="content-center">
                    <Container>
                        <div className="title-brand">
                            <h1 className="presentation-title">หน้าแรก</h1>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default HomeHeader;
