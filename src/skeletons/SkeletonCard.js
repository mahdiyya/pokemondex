import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SkeletonCard = ({ theme }) => {
  const themeClass = theme || 'light'

  return (
    <div className={`skeleton-wrapper card ${themeClass}`}>
      <div className='skeleton-article'>
        <SkeletonElement type='title' />
        <SkeletonElement type='text' />
      </div>
      <Shimmer />
    </div>
  )
}

export default SkeletonCard
