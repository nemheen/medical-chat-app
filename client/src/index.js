import ReactDOM from 'react-dom/client';
import App from './App';

// Replace ReactDOM.render() with createRoot()
const root = document.getElementById('root');
const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(<App />);
