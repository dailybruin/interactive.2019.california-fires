import * as React from 'react'
import { graphql } from 'gatsby'
import { Footer, Head } from '@dailybruin/lux'
import { css } from 'react-emotion'
import Header from '../components/Header'
import CaptionLayer from '../components/CaptionLayer'
import ImageLayer from '../components/ImageLayer'

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
const FeatureTemplate = ({ data, pageContext }) => {
  // create dictionary of all images for the ONE bilayer
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
  const layers = pageContext.images.map((image, i) => (
    <>
      <CaptionLayer key={`${i}_CAPTION`} caption={image.caption} />
      <ImageLayer key={`${i}_IMAGE`} imageURL={image.imageURL} />
    </>
  ))

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
          padding-top: 5rem;
          padding-bottom: 5rem;
        `}
      >
        <h1
          className={css`
            font-size: 4rem;
            -webkit-font-smoothing: antialiased;
          `}
        >
          {pageContext.title}
        </h1>
        <p
          className={css`
            font-size: 1.6rem;
            margin: 1.45rem auto;
            width: 80%;
            min-width: 350px;
          `}
        >
          {pageContext.description}
        </p>
      </div>
      {layers}
      <Footer developers="Dustin Newman" copyrightYear={2019} />
    </div>
  )
}

export default FeatureTemplate
