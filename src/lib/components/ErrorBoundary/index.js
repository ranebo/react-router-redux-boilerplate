import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error, info });
  }

  render() {
    if (
      this.state.hasError &&
      (this.state.error !== undefined && this.state.info !== undefined )
    ) {
      const { ErrorComponent } = this.props;
      const { error, info } = this.state;
      return <ErrorComponent error={error} info={info} { ...this.props } />;
    }
    return this.props.children;
  }
};

export default ErrorBoundary;
