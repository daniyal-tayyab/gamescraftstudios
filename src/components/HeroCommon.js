import React from 'react'

import BreadCrumb from './BreadCrumb'

const HeroCommon = ({ page }) => {
  return (
    <section className="about-hero">
        <div className="about-hero__content">
        <h1>{page}</h1>
        <BreadCrumb page={page} />
        </div>
    </section>
  )
}

export default HeroCommon
