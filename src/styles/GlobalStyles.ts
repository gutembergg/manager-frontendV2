import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --primary: #111111;
    --secondary: #373737;
    --white: #fff;
    --green: #00e676;
  }
`
