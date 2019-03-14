import * as React from 'react'
import { graphql } from 'gatsby'
import { css } from 'react-emotion'
import { Head } from '@dailybruin/lux'
import LocationCircle from '../components/LocationCircle'

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
        image
      }
    }
  }
`

const IndexPage = ({ data }) => {
  if (
    typeof window == 'undefined' ||
    typeof document == 'undefined' ||
    Head == null ||
    !Head ||
    Head === undefined
  ) {
    return null
  }
  return (
    <>
      <Head {...data.site.siteMetadata} />
      <div
        className={css`
          width: 100%;
          min-height: 100vh;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: start;
        `}
      >
        <div
          className={css`
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          <div
            className={css`
              max-width: 80vw;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
            `}
          >
            <h1
              className={css`
                margin: 4rem 0 0;
                font-size: 5rem;
                font-weight: normal;
                &:after {
                  content: '';
                  display: block;
                  border-top: 1px solid white;
                  margin-top: calc(0.5rem - 1px);
                  margin-bottom: calc(1.25rem - 1px);
                }
              `}
            >
              California Fires
            </h1>
            <p
              className={css`
                font-size: 1.4rem;
              `}
            >
              On Nov. 8, the sky over California was filled with ash. Two
              wildfires, the Camp Fire and the Woolsey Fire, had ignited within
              eight hours of each other, forcing evacuations in Butte, Los
              Angeles and Ventura counties.
            </p>
            <p
              className={css`
                font-size: 1.4rem;
              `}
            >
              Among the thousands affected by the fires were first-year
              undeclared life sciences student Monica Campbell, from Paradise,
              California; first-year physiological sciences student Tyler Ray,
              from Malibu; second-year psychobiology student Angela Yu, from
              Thousand Oaks, California; and Charlotte Lerchenmuller, current
              president of the Sal Castro Foundation. Campbell, Ray and Yu have
              been tasked with rebuilding, each in different ways. For each
              student, the task of rebuilding has been difficult. Campbell,
              having completely lost a home, Ray, within a few yards of losing a
              home, and Yu, who was deeply disturbed by the nearby tragedies,
              are still managing their stress from afar but have also come to
              gain new pride in their communities as they see people rush to
              each other’s aid.
            </p>
            <p
              className={css`
                font-size: 1.4rem;
              `}
            >
              It has been four months since the Camp Fire swept through the town
              of Paradise and since the Woolsey Fire ripped through Thousand
              Oaks and Malibu. Since then, affected communities have been going
              through their deserted homes, cleaning up abandoned, rusted cars
              and the burnt shells of houses, schools and workplaces. Though the
              physical task of cleanup is arduous, the emotional rebuilding can
              be even more grueling for those affected. These communities faced
              the emotional turmoil of destruction but have to rebuild from afar
              – from their homes at UCLA.
            </p>
          </div>
          <div
            className={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            `}
          >
            <LocationCircle place={'Malibu'} />
            <LocationCircle place={'Thousand Oaks'} />
            <LocationCircle place={'Paradise'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
