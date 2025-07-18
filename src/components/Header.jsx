import React from 'react'
import { Search, SlidersHorizontal, Filter, User, Plus } from 'lucide-react'

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <Search className="search-icon" />
        <input 
          type="text" 
          placeholder="Search customer..." 
          className="search-input"
        />
      </div>
      
      <div className="header-actions">
        <button className="header-btn">
          <SlidersHorizontal />
          Sort by
        </button>
        <button className="header-btn">
          <Filter />
          Filters
        </button>
        <button className="header-btn">
          <User />
          Me
        </button>
        <button className="header-btn add-customer-btn">
          <Plus />
          Add customer
        </button>
      </div>
    </header>
  )
}

export default Header
