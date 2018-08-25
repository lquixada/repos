import {phones} from './breakpoints'

export const reset = (): string => `
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

    @media (${phones}) {
      font-size: 14px;
    }
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
`
