import React from 'react'
import { Image, Header } from 'semantic-ui-react'
import logo from '../../images/heart-red.png'

class SiteHeader extends React.PureComponent {
  render() {
    return (
      <Header as="h3" icon textAlign="center" style={{ marginBottom: '2em' }}>
        <Header.Content style={{ width: '100%', margin: '0 auto' }}>
          <p style={{ fontSize: '4vw', letterSpacing: '0.3em' }}>
            I <Image style={{ display: 'inline', height: '1em', verticalAlign: 'text-bottom' }} src={logo} alt={'logo'} /> HANDMADE
          </p>
        </Header.Content>
      </Header>
    )
  }
}

export default SiteHeader
