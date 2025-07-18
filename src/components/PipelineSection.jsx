import React from 'react'
import { Calendar, MessageCircle, Eye, MoreHorizontal } from 'lucide-react'

const PipelineSection = () => {
  const pipelineData = [
    {
      title: 'Contacted',
      count: 12,
      deals: [
        {
          title: 'ByteBridge',
          description: 'Corporate and personal data protection on a turnkey basis',
          date: '18 Apr',
          comments: 2,
          views: 1
        },
        {
          title: 'AI Synergy',
          description: 'Innovative solutions based on artificial intelligence',
          date: '21 Mar',
          comments: 1,
          views: 3
        },
        {
          title: 'LeadBoost Agency',
          description: 'Lead attraction and automation for small business...',
          date: 'No due date',
          comments: 4,
          views: 7
        }
      ]
    },
    {
      title: 'Negotiation',
      count: 17,
      deals: [
        {
          title: 'SkillUp Hub',
          description: 'Platform for professional development of specialists',
          date: '09 Mar',
          comments: 4,
          views: 1
        },
        {
          title: 'Thera Well',
          description: 'Platform for psychological support and consultations',
          date: 'No due date',
          comments: 7,
          views: 2
        },
        {
          title: 'SwiftCargo',
          description: 'International transportation of chemical goods',
          date: '23 Apr',
          comments: 2,
          views: 5
        }
      ]
    },
    {
      title: 'Offer Sent',
      count: 13,
      deals: [
        {
          title: 'FitLife Nutrition',
          description: 'Nutritious food and nutraceuticals for individuals',
          date: '10 Mar',
          comments: 1,
          views: 3
        },
        {
          title: 'Prime Estate',
          description: 'Agency-developer of low-rise elite and commercial real estate',
          date: '15 Apr',
          comments: 1,
          views: 1,
          highlighted: true,
          contact: {
            address: '540 Realty Blvd, Miami, FL 33132',
            email: 'contact@primeestate.com',
            member: 'Antony Cardenas'
          }
        },
        {
          title: 'NextGen University',
          description: '',
          date: '',
          comments: 0,
          views: 0
        }
      ]
    },
    {
      title: 'Deal Closed',
      count: 12,
      deals: [
        {
          title: 'CloudSphere',
          description: 'Cloud services for data storage and processing for la...',
          date: '24 Mar',
          comments: 2,
          views: 1
        },
        {
          title: 'Advantage Medi',
          description: 'Full cycle of digital advertising and social media promotion',
          date: '05 Apr',
          comments: 1,
          views: 3
        },
        {
          title: 'Safebank Solutions',
          description: 'Innovative financial technologies and digital pay...',
          date: '30 Mar',
          comments: 4,
          views: 7
        }
      ]
    }
  ]

  return (
    <section className="pipeline-section">
      {pipelineData.map((column, columnIndex) => (
        <div key={columnIndex} className="pipeline-column">
          <div className="pipeline-header">
            <h3 className="pipeline-title">{column.title}</h3>
            <div className="pipeline-count">
              {column.count}
              <MoreHorizontal size={16} />
            </div>
          </div>
          
          <div className="pipeline-cards">
            {column.deals.map((deal, dealIndex) => (
              <div key={dealIndex} className={`deal-card ${deal.highlighted ? 'highlighted' : ''}`}>
                <h4 className="deal-title">{deal.title}</h4>
                {deal.description && (
                  <p className="deal-description">{deal.description}</p>
                )}
                
                {deal.contact && (
                  <div className="contact-info">
                    <div className="contact-address">{deal.contact.address}</div>
                    <div className="contact-email">{deal.contact.email}</div>
                    <div className="member-badge">
                      <div className="member-badge-avatar"></div>
                      <span className="member-badge-name">{deal.contact.member}</span>
                    </div>
                  </div>
                )}
                
                <div className="deal-meta">
                  <div className="deal-date">
                    <Calendar size={12} />
                    {deal.date}
                  </div>
                  <div className="deal-stats">
                    <div className="deal-stat">
                      <MessageCircle size={12} />
                      {deal.comments}
                    </div>
                    <div className="deal-stat">
                      <Eye size={12} />
                      {deal.views}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default PipelineSection
