import React from "react";
import styled from "styled-components";
import PaddingLayout from "./padding-layout";
import {withRouter} from "react-router-dom";


const Outer = styled.div`
  margin-top: 50px;

`;

class ErrorBoundaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }

  componentDidMount() {
    this.props.history.listen(() => {
      this.setState({error: false})
    })
  }

  componentDidCatch(error, errorInfo) {
    this.setState({error: true})
  }

  render() {
    if (this.state.error) {
      return (
        <Outer>
          <PaddingLayout>
            Oops, something went wrong!
          </PaddingLayout>
        </Outer>
      );
    }
    return this.props.children;
  }
}

export default withRouter(ErrorBoundaries);
