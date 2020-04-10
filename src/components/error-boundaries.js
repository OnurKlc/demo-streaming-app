import React from "react";
import styled from "styled-components";


const Outer = styled.div`
.outer {
position: absolute;
left: 50%;
top: 40%;
transform: translateX(-50%);
color: #f7f1e3;
.error-text {
margin-top: 10px;
padding: 0;
text-align: center;
}
}
`;

class ErrorBoundaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }

  static getDerivedStateFromError(error) {
    return {error: true};
  }

  render() {
    if (this.state.error) {
      return (
        <Outer>
          <div className="outer">
            <h1 className="error-text">Oops, something went wrong!</h1>
          </div>
        </Outer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundaries;
