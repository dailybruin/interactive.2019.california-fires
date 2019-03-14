import * as React from 'react'
import { graphql } from 'gatsby'
import { Footer, Head } from '@dailybruin/lux'
import { css } from 'react-emotion'
import Header from '../components/Header'
import FeatureCard from '../components/FeatureCard'

export const query = graphql`
  query PlaceQuery {
    site {
      siteMetadata {
        siteName
        description
        url
      }
    }
  }
`

const PlaceTemplate = ({ data, pageContext }) => {
  if (
    typeof window == 'undefined' ||
    typeof document == 'undefined' ||
    Head == null ||
    !Head ||
    Head === undefined ||
    Footer == null ||
    !Footer ||
    Footer === undefined
  ) {
    return null
  }

  const featureCards = pageContext.features.map((feature, i) => {
    return (
      <FeatureCard key={i} name={feature.name} imageURL={feature.imageURL} />
    )
  })

  return (
    <div
      className={css`
        min-height: 100vh;
      `}
    >
      <Head {...data.site.siteMetadata} />
      <Header title={data.site.siteMetadata.siteName} />
      <div
        className={css`
          text-align: center;
        `}
      >
        <h1
          className={css`
            font-size: 4rem;
          `}
        >
          {pageContext.place}
        </h1>
        {featureCards}
      </div>
      <Footer developers="Dustin Newman" copyrightYear={2019} />
    </div>
  )
}

export default PlaceTemplate
