import React, { createContext, useState, useEffect } from 'react';
import ThreatEngine from '../utils/ThreatEngine';

export const ThreatContext = createContext();

export const ThreatProvider = ({ children }) => {
    const [threats, setThreats] = useState(ThreatEngine.getInitialFeed(10));

    useEffect(() => {
        const interval = setInterval(() => {
            const newThreat = ThreatEngine.generateThreat();
    
            setThreats(prev => [newThreat, ...prev].slice(0, 20));
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <ThreatContext.Provider value={{ threats }}>
            {children}
        </ThreatContext.Provider>
    );
};