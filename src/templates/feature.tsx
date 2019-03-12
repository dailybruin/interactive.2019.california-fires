import * as React from 'react'
import { graphql } from 'gatsby'
import { Footer, Head } from '@dailybruin/lux'
import { css } from 'react-emotion'
import Header from '../components/Header'
import FeatureCard from '../components/FeatureCard'

export const query = graphql`
  query FeatureQuery {
    site {
      siteMetadata {
        siteName
        description
        url
      }
    }
    data: kerckhoffArticle(title: { eq: "data.aml" }) {
      features {
        title
        description
        images {
          imageURL
          caption
        }
      }
    }
  }
`

export default ({ data, pageContext }) => {
  console.log('FEATURE PAGE')
  console.log(data)
  console.log(pageContext)

  const featureCards = pageContext.images.map((image, i) => {
    return null
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
          {pageContext.title}
        </h1>
        <p>{pageContext.description}</p>
        {featureCards}
      </div>
      <Footer developers="Dustin Newman" copyrightYear={2019} />
    </div>
  )
}
