import React from 'react'
import { 
  Home, 
  CheckSquare, 
  Activity, 
  Users, 
  Settings,
  Zap,
  TrendingUp,
  GitBranch,
  Target,
  Plus
} from 'lucide-react'

const Sidebar = () => {
  const navItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: CheckSquare, label: 'Tasks', badge: '2' },
    { icon: Activity, label: 'Activity' },
    { icon: Users, label: 'Customers' },
    { icon: Settings, label: 'Settings' }
  ]

  const projects = [
    { icon: Zap, label: 'BizConnect', badge: '7' },
    { icon: TrendingUp, label: 'Growth Hub' },
    { icon: GitBranch, label: 'Conversion Path' },
    { icon: Target, label: 'Marketing' }
  ]

  const members = [
    { name: 'Sandra Perry', role: 'Product Manager', avatar: '/api/placeholder/32/32' },
    { name: 'Antony Cardenas', role: 'Sales Manager', avatar: '/api/placeholder/32/32' },
    { name: 'Jamal Connolly', role: 'Growth Manager', avatar: '/api/placeholder/32/32' },
    { name: 'Cera Carr', role: 'SEO Specialist', avatar: '/api/placeholder/32/32' },
    { name: 'Iona Rollins', role: 'Designer', avatar: '/api/placeholder/32/32' }
  ]

  return (
    <aside className="sidebar">
      <div className="logo">BizLink</div>
      
      <nav className="nav-menu">
        {navItems.map((item, index) => (
          <a key={index} href="#" className={`nav-item ${item.active ? 'active' : ''}`}>
            <item.icon />
            {item.label}
            {item.badge && <span className="badge">{item.badge}</span>}
          </a>
        ))}
      </nav>

      <div className="projects-section">
        <h3 className="section-title">Projects</h3>
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <project.icon />
            {project.label}
            {project.badge && <span className="badge">{project.badge}</span>}
          </div>
        ))}
      </div>

      <div className="members-section">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h3 className="section-title" style={{ margin: 0 }}>Members</h3>
          <Plus size={16} style={{ color: '#999', cursor: 'pointer' }} />
        </div>
        {members.map((member, index) => (
          <div key={index} className="member-item">
            <div className="member-avatar" style={{ backgroundColor: `hsl(${index * 60}, 70%, 80%)` }}></div>
            <div className="member-info">
              <div className="member-name">{member.name}</div>
              <div className="member-role">{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
