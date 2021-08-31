import React from "react";
import {
	Button,
	Row,
	Col,
	Table,
    Container
} from "reactstrap";
import ComebackBar from "components/Headers/Menu/ComebackBar.js";

function CheckResult() {
    return (
        <>
            <ComebackBar />
            <Container className="tim-container">
                <div className="title">
                    <h3>ผลการเรียนผู้ใช้งาน</h3>
                </div>
            </Container>
			<section>
				<Container className="text-center">
					<h3>ตรวจสอบผลการเรียน</h3>
					<div className="section-top-border">
						<div className="row">
							<div className="col-md-6">
								<div className="single-defination">
									<h4 className="mb-20">ชื่อ-สกุล : </h4>
								</div>
							</div>
							<div className="col-md-6">
								<div className="single-defination">
									<h4 className="mb-20">รหัสประจำตัวผู้ใช้งาน : </h4>
								</div>
							</div>
						</div>
					</div>
				</Container>
				<Container>
					<Table striped bordered hover size="sm" className="text-center col-md-12">
						<thead>
							<tr>
								<th scope="col">บทที่</th>
								<th scope="col">คะแนนแบบทดสอบ</th>
								<th scope="col">คะแนนใบงาน</th>
								<th scope="col">จำนวนครั้งที่เรียน</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td>2</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td>3</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td>4</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td>5</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td>6</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td>7</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td>8</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td>9</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td>10</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td colspan="2" className="text-left">
									ผลการเรียนก่อน 0 คะแนน<br />
									ผลการเรียนหลัง 0 คะแนน
								</td>
								<td rowspan="3" className="text-left">
									ค่าเฉลี่ยแบบทดสอบ<br />
									S.D.<br />
									ค่าเฉลี่ยใบงาน
								</td>
							</tr>
						</tbody>
					</Table>
					<div className="text-right">
						<div id="buttons">
							<Row>
								<Col>
									<Button
										className="btn-round mr-1"
										color="primary"
										type="button"
										href="#"
									>
										พิมพ์ผลคะแนน
									</Button>
									<Button
										className="btn-round mr-1"
										color="default"
										type="button"
										href="/home"
									>
										กลับหน้าแรก
									</Button>
								</Col>
							</Row>
						</div>
					</div>
				</Container>
			</section>
        </>
    );
}

export default CheckResult;
