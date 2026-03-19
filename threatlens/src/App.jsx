import React from 'react';
import { ThreatProvider } from './context/ThreatContext';
import Header from './components/Header';
import Dashboard from './containers/Dashboard';
import './styles/main.scss';

function App() {
    return (
        <ThreatProvider>
            <Header />
            <Dashboard />
        </ThreatProvider>
    );
}

export default App;