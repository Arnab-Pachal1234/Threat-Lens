import React from 'react';

const ThreatCard = ({ threat }) => {
    return (
        <div className={`threat-card ${threat.severity}`}>
            <div className="threat-header">
                <span>{threat.type}</span>
                <span className={`severity-badge ${threat.severity}`}>{threat.severity}</span>
            </div>
            <div className="threat-ip">
                Target IP: {threat.sourceIp} | Time: {threat.timestamp}
            </div>
        </div>
    );
};

export default ThreatCard;