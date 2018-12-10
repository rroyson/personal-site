import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import profile from 'assets/img/faces/rob.jpg'

import profilePageStyle from 'assets/jss/material-kit-react/views/profilePage.jsx'

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )
    return (
      <div>
        <Header
          color="transparent"
          brand="Rob Royson"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />
        <Parallax small filter image={require('assets/img/bg-main.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Rob Royson</h3>
                      <hr />
                      <Button
                        justIcon
                        link
                        title="Follow on Github"
                        href="https://github.com/rroyson"
                        target="_blank"
                        className={classes.margin5}
                      >
                        <i className={'fab fa-github'} />
                      </Button>
                      <Button
                        justIcon
                        link
                        title="Follow on Facebook"
                        href="https://www.facebook.com/rroyson"
                        target="_blank"
                        className={classes.margin5}
                      >
                        <i className={'fab fa-facebook'} />
                      </Button>
                      <Button
                        justIcon
                        link
                        title="Connect on Linked In"
                        href="https://www.linkedin.com/in/rroyson"
                        target="_blank"
                        className={classes.margin5}
                      >
                        <i className={'fab fa-linkedin'} />
                      </Button>
                      <Button
                        justIcon
                        link
                        title="Follow on Codepen"
                        href="https://codepen.io/rroyson"
                        target="_blank"
                        className={classes.margin5}
                      >
                        <i className={'fab fa-codepen'} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <h2> Welcome! </h2>
                <div>
                  <p className={classes.paragraph}>
                    I am a Full Stack JavaScript developer who is passionate
                    about new and exciting technologies. The world of
                    development is a beautiful place where you can create
                    anything and everything so, Lets Build Something!{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(profilePageStyle)(ProfilePage)
