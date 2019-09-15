import React from "react"
import cslx from "clsx"

function Container(props) {
  const { className = "", children } = props
  return (
    <div className={cslx("container mx-auto px-4 py-6", className)}>
      {children}
    </div>
  )
}

export default Container
