import * as React from 'react'
import { css } from 'react-emotion'

interface ImageLayerProps {
  yStart?: number
  imageURL: string
}

const TRANSITION_PADDING = 120
let HEIGHT = 0
if (typeof window !== 'undefined') {
  HEIGHT = window.innerHeight
}

export default class ImageLayer extends React.Component<
  ImageLayerProps,
  { y: number }
> {
  ref: React.RefObject<HTMLImageElement>

  constructor(props) {
    super(props)
    if (typeof window !== 'undefined') {
      this.state = { y: window.pageYOffset }
      this.handleScroll = this.handleScroll.bind(this)
      this.ref = React.createRef<HTMLImageElement>()
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  handleScroll = ev => {
    this.setState({ y: window.scrollY })
  }

  public render() {
    let isInViewport = false
    if (this.ref.current) {
      const { top, bottom } = this.ref.current.getBoundingClientRect()
      if (
        top < HEIGHT - TRANSITION_PADDING &&
        bottom > 0 &&
        bottom < this.state.y + HEIGHT
      ) {
        // I AM VISIBLE
        isInViewport = true
      }
    }
    return (
      <div
        className={css`
          min-height: 100vh;
          width: 100vw;
          text-align: center;
          padding-top: ${TRANSITION_PADDING}px;
          padding-bottom: ${TRANSITION_PADDING}px;
        `}
      >
        <img
          ref={this.ref}
          className={css`
            width: auto;
            opacity: ${isInViewport ? 1.0 : 0.0};
            transition: opacity 1s ease;
          `}
          src={this.props.imageURL}
          alt={this.props.imageURL}
        />
      </div>
    )
  }
}
