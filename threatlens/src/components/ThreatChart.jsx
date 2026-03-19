import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ThreatChart = ({ data }) => {
    // Calculate severity counts
    const severityCounts = { High: 0, Medium: 0, Low: 0 };
    data.forEach(t => severityCounts[t.severity]++);

    const chartData = {
        labels: ['High', 'Medium', 'Low'],
        datasets: [
            {
                label: 'Active Threats by Severity',
                data: [severityCounts.High, severityCounts.Medium, severityCounts.Low],
                backgroundColor: ['#ef4444', '#f59e0b', '#10b981'],
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top', labels: { color: '#e2e8f0' } },
            title: { display: true, text: 'Real-Time Threat Analysis', color: '#e2e8f0' }
        },
        scales: {
            y: { ticks: { color: '#9ca3af' }, grid: { color: '#374151' } },
            x: { ticks: { color: '#9ca3af' }, grid: { display: false } }
        }
    };

    return <Bar data={chartData} options={options} />;
};

export default ThreatChart;