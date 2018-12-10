import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Camera from '@material-ui/icons/Camera'
import Grain from '@material-ui/icons/Grain'
import LocalLibrary from '@material-ui/icons/LocalLibrary'
import Language from '@material-ui/icons/Language'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import NavPills from 'components/NavPills/NavPills.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import technologiesPageStyle from 'assets/jss/material-kit-react/views/technologiesPage.jsx'

class TechnologiesPage extends React.Component {
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
                <h2> Technologies </h2>
                <p>
                  Here is a list of technologies I have worked with in my career
                  as a developer.{' '}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: 'Frameworks',
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <a className="dim" href="https://reactjs.org/">
                                <img
                                  alt="React"
                                  src="https://camo.githubusercontent.com/bced9528d6cec9d8b13ae441cc24c14f3de76d87/687474703a2f2f7979636a732e636f6d2f7265616c2d776f726c642d72656163742f696d672f72656163742d6c6f676f2e706e67"
                                  className={navImageClasses}
                                />
                              </a>
                              <a className="dim" href="https://redux.js.org/">
                                <img
                                  alt="Redux"
                                  src="https://cdn.zapier.com/storage/blog/4ec8fc7dc3a75758a3913bab9e5a4fd8_2.500x278.png"
                                  className={navImageClasses}
                                />
                              </a>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <a
                                className="dim"
                                href="https://nodejs.org/en/docs/"
                              >
                                <img
                                  alt="Node Js"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczZ1wHBXWM7m-FG8rfkbBcEmPv0YKCuPFvblxPkjl66WsSZ2Jow"
                                  className={navImageClasses}
                                />
                              </a>
                              <a className="dim" href="https://expressjs.com">
                                <img
                                  alt="Express Js"
                                  src="http://findnerd.s3.amazonaws.com/imagedata/8007/8007.png"
                                  className={navImageClasses}
                                />
                              </a>
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: 'Libraries/DB',
                        tabIcon: LocalLibrary,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <a className="dim" href="https://ramdajs.com/">
                                <img
                                  alt="Ramda Functional JavaScript Library"
                                  src="https://cloud.fullstackacademy.com/ramda00.jpg?mtime=20170302211531"
                                  className={navImageClasses}
                                />
                              </a>
                              <a className="dim" href="https://tachyons.io/">
                                <img
                                  alt="Tachyons CSS styles"
                                  src="https://images.opencollective.com/proxy/images?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2F5e1b02e0-bce5-11e6-9ca1-bb6c7a9a84e0.png&height=640"
                                  className={navImageClasses}
                                />
                              </a>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <a
                                className="dim"
                                href="http://couchdb.apache.org/"
                              >
                                <img
                                  alt="Couch DB"
                                  src="https://seeklogo.com/images/C/couchdb-logo-FE8179073A-seeklogo.com.png"
                                  className={navImageClasses}
                                />
                              </a>
                              <a className="dim" href="https://www.mysql.com/">
                                <img
                                  alt="MySQL"
                                  src="https://www.mysql.com/common/logos/logo-mysql-170x115.png"
                                  className={navImageClasses}
                                />
                              </a>
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: 'Languages',
                        tabIcon: Language,
                        tabContent: (
                          <GridContainer justify="center">
                            <img
                              alt="HTML"
                              src="http://js.devexpress.com/Content/Images/features/html5-css-javascript-logos.png"
                              className="h4 pt-3"
                            />
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: 'Other',
                        tabIcon: Grain,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <ul className="list">
                                <li className="list">
                                  {' '}
                                  <h3 className="bold"> Services </h3>{' '}
                                </li>
                                <hr />
                                <li>
                                  <h4> AWS Lex </h4>
                                </li>
                                <li>
                                  <h4> Apigee Api Management </h4>
                                </li>
                                <li>
                                  <h4> Pubnub Chat </h4>
                                </li>
                                <li className="list">
                                  {' '}
                                  <h3 className="bold"> Tools </h3>{' '}
                                </li>
                                <hr />
                                <li>
                                  <h4> Git </h4>
                                </li>
                                <li>
                                  <h4> Json-Schema </h4>
                                </li>
                                <li>
                                  <h4> Node Mailer </h4>
                                </li>
                                <li>
                                  <h4> Auth0 </h4>
                                </li>
                                <li className="list">
                                  {' '}
                                  <h3 className="bold"> Test/Docs </h3>{' '}
                                </li>
                                <hr />
                                <li>
                                  <h4> Tape Testing </h4>
                                </li>
                                <li>
                                  <h4> Nock Testing </h4>
                                </li>
                                <li>
                                  <h4> Swagger </h4>
                                </li>
                                <li>
                                  <h4> RESTful API </h4>
                                </li>
                              </ul>
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
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

export default withStyles(technologiesPageStyle)(TechnologiesPage)
