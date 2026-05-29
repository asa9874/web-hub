import { Component, type ReactNode, type ErrorInfo } from 'react';

interface Props  { children: ReactNode; }
interface State  { error: Error | null; }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  handleReset = () => this.setState({ error: null });

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <div id="error-boundary">
          <div className="eb-title">// SYSTEM ERROR</div>
          <div className="eb-msg">{error.message}</div>
          <button className="eb-reset-btn" onClick={this.handleReset}>
            재시작 시도
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
