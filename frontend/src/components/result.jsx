import { useLocation } from 'react-router-dom';

function Result() {
    const location = useLocation();
    const { result } = location.state || {};

    return (
        <div className="result-container">
            <div className="result-card">
                <h1 className="result-title">Prediction Result</h1>
                {result ? (
                    <div className="result-box">
                        <p className="result-text">
                            <span className="label">Condition:</span>
                            <span className="value">{result.condition_status}</span>
                        </p>
                        <p className="result-text">
                            <span className="label">Recommendation:</span>
                            <span className="value">{result.recommendation}</span>
                        </p>
                    </div>
                ) : (
                    <p className="no-result-text">No result available.</p>
                )}
            </div>
        </div>
    );
}

export default Result;
