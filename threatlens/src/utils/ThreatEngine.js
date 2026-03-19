
class ThreatEngine {
    constructor() {
        this.threatTypes = ['DDoS Attack', 'SQL Injection', 'Cross-Site Scripting', 'Malware Payload', 'Unauthorized Access'];
        this.severities = ['Low', 'Medium', 'High'];
    }

    _generateIP() {
        return `${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`;
    }

    
    generateThreat() {
        return {
            id: crypto.randomUUID(),
            timestamp: new Date().toLocaleTimeString(),
            type: this.threatTypes[Math.floor(Math.random() * this.threatTypes.length)],
            severity: this.severities[Math.floor(Math.random() * this.severities.length)],
            sourceIp: this._generateIP()
        };
    }

    getInitialFeed(count = 5) {
        return Array.from({ length: count }, () => this.generateThreat());
    }
}

export default new ThreatEngine();