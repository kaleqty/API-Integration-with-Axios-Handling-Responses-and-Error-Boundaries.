import React, { Component } from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error information
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    // Update state with error details for more detailed error UI
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when error occurs
      return (
        <div className="error-boundary">
          <h1 className="error-heading">Something went wrong.</h1>
          {this.state.error && (
            <div className="error-details">
              <p className="error-message">{this.state.error.toString()}</p>
            </div>
          )}
          {this.props.fallback && this.props.fallback}
        </div>
      );
    }

    return this.props.children; // Render children if no error
  }
}

export default ErrorBoundary;