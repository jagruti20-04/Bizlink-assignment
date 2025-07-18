import React from 'react'
import { ArrowRight, Calendar } from 'lucide-react'

const StatsSection = () => {
  const barData = [
    { day: 'Mon', height: 40, striped: false },
    { day: 'Tue', height: 60, striped: true },
    { day: 'Wed', height: 70, striped: false },
    { day: 'Thu', height: 45, striped: true },
    { day: 'Fri', height: 80, striped: false }
  ]

  return (
    <section className="stats-section">
      <div className="stat-card">
        <div className="chart-container">
          <div>
            <h3 style={{ fontSize: '14px', color: '#999', marginBottom: '8px' }}>New customers</h3>
            <div style={{ fontSize: '12px', color: '#999', marginBottom: '16px' }}>10</div>
            <div className="bar-chart">
              {barData.map((bar, index) => (
                <div
                  key={index}
                  className={`bar ${bar.striped ? 'striped' : ''}`}
                  style={{ height: `${bar.height}px` }}
                ></div>
              ))}
            </div>
            <div className="chart-labels">
              {barData.map((bar, index) => (
                <div key={index} className="chart-label">{bar.day}</div>
              ))}
            </div>
          </div>
          
          <div className="circular-progress">
            <svg className="progress-ring" width="120" height="120">
              <circle
                className="progress-ring-bg"
                cx="60"
                cy="60"
                r="40"
              />
              <circle
                className="progress-ring-fill"
                cx="60"
                cy="60"
                r="40"
              />
            </svg>
            <div className="progress-text">68%</div>
            <div className="progress-label">Successful deals</div>
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-number">53</div>
        <div className="stat-label">Tasks</div>
        <div className="stat-details">
          <div className="stat-detail">
            In progress
            <ArrowRight />
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-number">$ 15.890</div>
        <div className="stat-label">Prepayments</div>
        <div className="stat-details">
          <div className="stat-detail">
            from customers
            <ArrowRight />
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
