import * as React from 'react'
import { css } from 'react-emotion'
import { Link } from 'gatsby'

interface HeaderProps {
  title: string
}

const Stacked_h3 = ({ children }) => (
  <h3
    className={css`
      font-size: 1.2rem;
      display: inline-block;
      font-weight: normal;
      margin-right: 2rem;
    `}
  >
    {children}
  </h3>
)

const activeStyle = { color: '#E46969' }

export default class Header extends React.Component<HeaderProps> {
  public render() {
    return (
      <div
        className={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0px;
          left: 0px;
          right: 0px;
          background: black;
          padding: 2em 0;
          width: 100vw;
        `}
      >
        <Link to="/">
          <h2>{this.props.title}</h2>
        </Link>
        <nav
          className={css`
            text-align: right;
          `}
        >
          <Link to="/place/Malibu" activeStyle={activeStyle}>
            <Stacked_h3>Malibu</Stacked_h3>
          </Link>
          <Link to="/place/Thousand" activeStyle={activeStyle}>
            <Stacked_h3>Thousand Oaks</Stacked_h3>
          </Link>
          <Link to="/place/Paradise" activeStyle={activeStyle}>
            <Stacked_h3>Paradise</Stacked_h3>
          </Link>
        </nav>
      </div>
    )
  }
}
