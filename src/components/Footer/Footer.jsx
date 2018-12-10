/*eslint-disable*/
import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
import { List, ListItem, withStyles } from '@material-ui/core'

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'
import Button from 'components/CustomButtons/Button.jsx'

import footerStyle from 'assets/jss/material-kit-react/components/footerStyle.jsx'

function Footer({ ...props }) {
  const { classes, whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  })
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  })
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
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
            </ListItem>
            <ListItem className={classes.inlineBlock}>
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
            </ListItem>
            <ListItem className={classes.inlineBlock}>
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
            </ListItem>
            <ListItem className={classes.inlineBlock}>
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
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>Created by Rob Royson</div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
}

export default withStyles(footerStyle)(Footer)
