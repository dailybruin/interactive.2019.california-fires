import * as React from 'react'
import { css } from 'react-emotion'
import CaptionLayer from './CaptionLayer'
import ImageLayer from './ImageLayer'

interface GalleryProps {
  title: string
  description: string
  images: [any]
}

export default class Gallery extends React.Component<GalleryProps> {
  public render() {
    const layers = this.props.images.map((image, i) => (
      <>
        <CaptionLayer key={`${i}_CAPTION`} caption={image.caption} />
        <ImageLayer key={`${i}_IMAGE`} imageURL={image.imageURL} />
      </>
    ))
    return (
      <>
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
            {this.props.title}
          </h1>
          <p>{this.props.description}</p>
        </div>
        {layers}
      </>
    )
  }
}
