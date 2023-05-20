import React from "react";
import { Card, Col, Divider, Row } from "antd";
import "./CardContainer.css";
function CardContainer() {
  const gridStyle = {
    // width: "100%",
    textAlign: "center",
    color: "var(--light)",
  };
  const style = {
    background: "#0092ff",
    padding: "8px 0",
  };

  return (
    <>
      {/* <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <Card.Grid className="card1" style={gridStyle}>
            Workers
          </Card.Grid>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row> */}
      <Card>
        <Card.Grid className="card1" style={gridStyle}>
          Workers
        </Card.Grid>
        <Card.Grid className="card2" style={gridStyle}>
          Unions
        </Card.Grid>
        <Card.Grid className="card3" style={gridStyle}>
          Factories
        </Card.Grid>
        <Card.Grid className="card4" style={gridStyle}>
          Trainings
        </Card.Grid>
        <Card.Grid className="card5" style={gridStyle}>
          Males
        </Card.Grid>
        <Card.Grid className="card6" style={gridStyle}>
          Females
        </Card.Grid>
        <Card.Grid className="card7" style={gridStyle}>
          Associations
        </Card.Grid>
        <Card.Grid className="card8" style={gridStyle}>
          Committees
        </Card.Grid>
      </Card>
    </>
  );
}

export default CardContainer;
