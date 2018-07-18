import React, {Fragment} from 'react'
import {Helmet} from 'react-helmet'
import {injectGlobal} from 'styled-components'
import {renderRoutes} from 'react-router-config'

import Input from '../containers/input'
import {Title} from './title'
import {Ribbon} from './ribbon'
import {Main, Header, HeaderContainer} from './grid'

export class App extends React.Component {
  componentWillMount () {
    resetStyles()
  }

  renderError () {
    // Children only exist on error.
    return this.props.children
  }

  render () {
    return (
      <Fragment>
        <Helmet>
          <meta charset='utf-8' />
          <meta http-equiv='x-ua-compatible' content='ie=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='version' content={this.props.version} />
          {/* Disabled favicon for now, it is hitting the appController. */}
          <link rel='icon' href='data:,' />
          <title>Github Repos</title>
        </Helmet>
        <Ribbon />

        <Main>
          <Header>
            <HeaderContainer>
              <Title />
              <Input />
            </HeaderContainer>
          </Header>

          {this.renderError() || renderRoutes(this.props.route.routes)}
        </Main>
      </Fragment>
    )
  }
}

const resetStyles = () => injectGlobal`
  /* Reset */
  @import url('https://fonts.googleapis.com/css?family=Lato:300');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    color: #fff;
    font-size: 10px;
    font-family: Helvetica, Arial, sans-serif;
  }

  html,
  body {
    height: 100%;
  }

  img {
    display: inline-block;
    vertical-align: middle;
    border: 0;
  }

  ul, li {
    list-style-type: none;
  }

  a {
    color: #767676;
    text-decoration: none;
  }

  a:hover {
    color: #005b9e;
  }

  #app {
    height: 100%;
  }

  #app > div {
    height: 100%;
  }

  /* Github */

  .octicon {
    display: inline-block;
    vertical-align: text-top;
    /* fill: #fff; */
    margin-right: 10px;
    vertical-align: middle;
  }


  /* Scrollbar */

  ::-webkit-scrollbar {
    width: 1rem;
    height: 1rem;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, .05);
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .3);
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-button {
    display: none;
    background-color: transparent;
  }

  ::-webkit-scrollbar-corner {
    background-color: #000;
  }
`
