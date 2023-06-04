import React from "react";
import { connect } from "react-redux";

const Count = (props) => {
  return <div>Count: {props.count}</div>;
};

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(Count);
