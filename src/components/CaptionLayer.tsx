import * as React from 'react'
import { css } from 'react-emotion'

interface CaptionLayerProps {
  caption: string
}

export default class CaptionLayer extends React.Component<CaptionLayerProps> {
  public render() {
    return (
      <div
        className={css`
          min-height: 100vh;
          background: black;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <p
          className={css`
            font-size: 1.3rem;
            text-align: center;
            width: 80%;
            max-width: 600px;
            line-height: 1.9;
          `}
        >
          {this.props.caption}
        </p>
      </div>
    )
  }
}
