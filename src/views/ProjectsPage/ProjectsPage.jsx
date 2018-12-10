import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import technologiesPageStyle from 'assets/jss/material-kit-react/views/technologiesPage.jsx'

class ProjectsPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
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
        <Parallax small filter image={require('assets/img/profile-bg.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6} />
              </GridContainer>
              <div className={classes.description}>
                <h2> Projects </h2>
                <p>
                  Here is a list of projects I have worked with in my career as
                  a developer.{' '}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                      <a
                        title="View The Source Code"
                        href="https://github.com/rroyson/final-project-app"
                        className="dim"
                      >
                        <h3 className={classes.title}> The Daily Musician </h3>
                        <img
                          alt="View The Source Code"
                          src="http://res.cloudinary.com/dq832axtv/image/upload/v1503957237/Screen_Shot_2017-08-28_at_5.46.34_PM_czdhmv.png"
                          className={navImageClasses}
                        />
                      </a>
                      <a
                        title="View The Source Code"
                        href="https://github.com/rroyson/movie-favorites-new"
                        className="dim"
                      >
                        <h3 className={classes.title}> Movie Favorites </h3>
                        <img
                          alt="Movie Favorites"
                          src="http://res.cloudinary.com/dq832axtv/image/upload/v1503960867/Screen_Shot_2017-08-28_at_6.53.40_PM_nqoaag.png"
                          className={navImageClasses}
                        />
                      </a>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={8}>
                      <a
                        title="View The Source Code"
                        href="https://github.com/rroyson/dtsmb-website"
                        className="dim"
                      >
                        <h3 className={classes.title}>
                          {' '}
                          DTSMB Site (not live yet){' '}
                        </h3>
                        <img
                          alt="DTSMB Website"
                          src="http://res.cloudinary.com/dq832axtv/image/upload/v1508008340/Screen_Shot_2017-09-08_at_5.11.23_PM_d52wiz.png"
                          className={navImageClasses}
                        />
                      </a>
                      <a
                        title="View on NPM"
                        href="https://www.npmjs.com/package/@citibot/schema"
                        className="dim"
                      >
                        <h3 className={classes.title}> Citibot Schema </h3>
                        <img
                          alt="Citibot Schema"
                          src="https://www.logolynx.com/images/logolynx/de/de27b3ab88018b0c7933a9c0e62b93e3.jpeg"
                          className={navImageClasses}
                        />
                      </a>
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(technologiesPageStyle)(ProjectsPage)
