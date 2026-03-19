import React, { useContext } from 'react';
import { ThreatContext } from '../context/ThreatContext';
import ThreatChart from '../components/ThreatChart';
import ThreatCard from '../components/ThreatCard';

const Dashboard = () => {
    const { threats } = useContext(ThreatContext);

    return (
        <div className="dashboard-container">
            <div className="stats-grid">
                <div className="chart-wrapper">
                    <ThreatChart data={threats} />
                </div>
                <div className="feed-wrapper">
                    <h3>Live Threat Feed</h3>
                    {threats.map(threat => (
                        <ThreatCard key={threat.id} threat={threat} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;