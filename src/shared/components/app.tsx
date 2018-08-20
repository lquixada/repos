import React, {Fragment} from 'react'
import {Helmet} from 'react-helmet'
import {renderRoutes} from 'react-router-config'
import {injectGlobal} from 'styled-components'

import config from '../../server/config'
import Input from '../containers/input'
import {nprogress, octicons, reset, scrollbar} from '../helpers/styles'
import {Header, HeaderContainer, Main} from './grid'
import {Ribbon} from './ribbon'
import {Title} from './title'

interface IProps {
  version: string
  route: { routes: object[] }
}

export class App extends React.Component<IProps, any> {
  public componentWillMount() {
    resetStyles()
  }

  public renderError() {
    // Children only exist on error.
    return this.props.children
  }

  public render() {
    return (
      <Fragment>
        <Helmet>
          <meta charSet='utf-8' />
          <meta http-equiv='x-ua-compatible' content='ie=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='version' content={this.props.version} />
          <meta name='description' content='An explorer app for projects in Github.' />
          {config.dns.map((domain) => (
            <link key={domain} rel='dns-prefetch' href={domain} />
          ))}

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
  ${reset()}
  ${octicons()}
  ${nprogress()}
  ${scrollbar()}
`
