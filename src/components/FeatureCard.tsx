import * as React from 'react'
import { css } from 'react-emotion'

interface FeatureCardProps {
  name: string
  blurb?: string
  imageURL: string
}

export default class FeatureCard extends React.Component<FeatureCardProps> {
  public render() {
    return (
      <div
        className={css`
          position: relative;
          text-align: center;
        `}
      >
        <div
          className={css`
            position: relative;
            min-height: 4em;
            &:after {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
            }
          `}
        >
          <img
            className={css`
              width: 100%;
              vertical-align: top;
              max-width: 900px;
            `}
            src={this.props.imageURL}
            alt={this.props.blurb}
          />
        </div>
        <div
          className={css`
            position: absolute;
            top: 2rem;
            left: 50%;
            transform: translateX(-50%);
          `}
        >
          <p
            className={css`
              font-size: 1.3rem;
              font-weight: bold;
              text-transform: uppercase;
              margin-bottom: 0;
            `}
          >
            {this.props.name}
          </p>
          <p
            className={css`
              font-size: 1rem;
              &:before {
                content: '';
                display: block;
                border-top: 1px solid white;
              }
            `}
          >
            {this.props.blurb}
          </p>
        </div>
      </div>
    )
  }
}
