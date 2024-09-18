import React, { useState } from 'react';

const SmartHomeDashboard = () => {
    const [temperature, setTemperature] = useState(22);
    const [lightsOn, setLightsOn] = useState(true);

    const toggleLights = () => setLightsOn(!lightsOn);

    return (
        <div className="dashboard-container">
            <h1>Smart Home Dashboard</h1>
            <div className="temperature-section">
                <h2>Temperature: {temperature}°C</h2>
            </div>
            <button onClick={toggleLights}>
                {lightsOn ? 'Turn Off Lights' : 'Turn On Lights'}
            </button>
        </div>
    );
};

export default SmartHomeDashboard;
