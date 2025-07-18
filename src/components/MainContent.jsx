import React from 'react'
import Header from './Header'
import StatsSection from './StatsSection'
import PipelineSection from './PipelineSection'

const MainContent = () => {
  return (
    <main className="main-content">
      <Header />
      <StatsSection />
      <PipelineSection />
    </main>
  )
}

export default MainContent
