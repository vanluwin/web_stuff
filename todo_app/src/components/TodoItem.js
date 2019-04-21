import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = _ => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      background: "#f4f4f4",
      display: "inline-block",
      padding: "2px",
      width: "90%",
      position: "realtive",
      borderRadius: "5px",
      margin: "2px"
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <input
          style={{ margin: "8px 5px 0px 8px" }}
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
        />

        <span style={{ lineHeight: "30px" }}>{title}</span>

        <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
          x
        </button>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

// Styles
const btnStyle = {
  background: "transparent",
  border: "1px solid #f00",
  borderRadius: "2em",
  color: "#f00",
  display: "inline-block",
  fontSize: "12px",
  height: "20px",
  lineHeight: "2px",
  margin: "8px 5px 0px 8px",
  paddind: "0",
  textAlign: "center",
  width: "20px",
  float: "right",
  cursor: "pointer"
};

export default TodoItem;
