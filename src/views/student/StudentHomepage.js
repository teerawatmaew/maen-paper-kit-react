import React from "react";
import {
	Button,
	Row,
	Col,
	Table,
	Container
} from "reactstrap";
//import ComebackBar from "components/Headers/Menu/ComebackBar.js";
import StudentNavBar from "components/Headers/Menu/StudentNavBar";

function StudentHomepage() {
	return (
		<>
			<StudentNavBar />
			<section>
				<Container className="text-center">
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
					<hr />
				</Container>
				
				<Container>
					<Table striped bordered hover size="sm" className="text-center col-md-12">
						<thead>
							<tr>
								<th scope="col">บทที่</th>
								<th scope="col">คะแนนทดสอบก่อนเรียน</th>
								<th scope="col">คะแนนใบงาน 1</th>
								<th scope="col">คะแนนใบงาน 2</th>
								<th scope="col">คะแนนใบงาน 3</th>
								<th scope="col">คะแนนใบงาน 4</th>
								<th scope="col">คะแนนทดสอบหลังเรียน</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td>2</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td>3</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td>4</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td>5</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td>6</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td>7</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td>8</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td>9</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td>10</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
							</tr>
							<tr>
								<td colspan="3" className="text-left">
									ผลการเรียนก่อน 0 คะแนน<br />
									ผลการเรียนหลัง 0 คะแนน
								</td>
								<td colspan="4" rowspan="3" className="text-left">
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
										href="/select-lesson"
									>
										เข้าระบบการเรียน
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

export default StudentHomepage;
