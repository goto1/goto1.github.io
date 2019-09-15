import React from "react"
import clsx from "clsx"

import styles from "./footer.module.css"
import Container from "./container"

function Footer() {
  return (
    <footer className={clsx("h-screen", styles.footer)}>
      <div className={styles.footer__bg}></div>
      <Container>
        <h1>Footer stuff goes here</h1>
      </Container>
    </footer>
  )
}

export default Footer
