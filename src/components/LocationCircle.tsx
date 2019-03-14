import * as React from 'react'
import { css } from 'react-emotion'
import { Link } from 'gatsby'

interface LocationCircleProps {
  place: string
}

export default class LocationCircle extends React.Component<
  LocationCircleProps
> {
  public render() {
    let firstWord = this.props.place.split(' ')[0]
    return (
      <Link to={`/place/${firstWord}`}>
        <div
          className={css`
            border: 5px solid #e46969;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 300px;
            margin: 2em;
          `}
        >
          <p
            className={css`
              text-transform: uppercase;
              text-align: center;
              margin: 0 2em;
              font-size: 1.3em;
            `}
          >
            {this.props.place}
          </p>
        </div>
      </Link>
    )
  }
}
