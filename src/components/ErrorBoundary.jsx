import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="py-20 text-center text-neutral-400">
          <p>Something went wrong loading this section.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-4 rounded-lg border border-neutral-700 px-4 py-2 text-sm transition hover:border-purple-400 hover:text-purple-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
