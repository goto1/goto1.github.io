import React from "react"
import clsx from "clsx"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"

function Emoji(props) {
  return (
    <span role="img" aria-label={props.label}>
      {props.children}
    </span>
  )
}
function HR() {
  return <hr className="border-gray-400" />
}
function Paragraph(props) {
  const { className = "" } = props
  return <p className={clsx("text-lg mb-2", className)}>{props.children}</p>
}
function H3(props) {
  const { className = "" } = props
  return (
    <h3 className={clsx("text-xl font-semibold", className)}>
      {props.children}
    </h3>
  )
}
function Strong(props) {
  const { className = "" } = props
  return (
    <span className={clsx("text-purple-900", className)}>{props.children}</span>
  )
}

function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Container className="-mt-12">
        <div className="mx-auto -mt-12 px-4 py-6 rounded-lg bg-gray-200 max-w-4xl shadow-md">
          <h1 className="text-3xl font-extrabold">
            Hello, it's Tom! <Emoji label="waving hand">👋</Emoji>
          </h1>
          <HR></HR>

          <Paragraph className="mt-4">
            I'm a <Strong>software developer</Strong> interested in Web
            technologies based in <Strong>New Jersey</Strong>.
          </Paragraph>
          <Paragraph>
            Some of the tools I use include <Strong>JavaScript</Strong>,{" "}
            <Strong>Python</Strong>, <Strong>Node.js</Strong>, and{" "}
            <Strong>React</Strong>.
          </Paragraph>
          <Paragraph className="mb-4">
            I currently work as a software developer at{" "}
            <Strong>AT&T Labs</Strong>.
          </Paragraph>

          <H3>
            <Emoji label="briefcase">💼</Emoji> Experience
          </H3>
          <HR></HR>
          <p className="text-lg mt-4 mb-1">
            <Strong>Software Developer</Strong>
          </p>
          <p className="text-lg mb-1">AT&T Labs, New Jersey</p>
          <p className="text-base mb-4 italic">Oct 2019 - Present</p>

          <p className="text-lg mb-1">
            <Strong>Software Developer Contractor</Strong>
          </p>
          <p className="text-lg mb-1">AT&T Labs, New Jersey</p>
          <p className="text-base mb-4 italic">Sep 2017 - Oct 2019</p>

          <H3>
            <Emoji label="graduation cap">🎓</Emoji> Education
          </H3>
          <HR></HR>
          <p className="text-lg mt-4 mb-1">
            <Strong>New Jersey Institute of Technology</Strong>
          </p>
          <p className="text-lg mb-4">Master's Degree, Information Systems</p>

          <p className="text-lg mb-1">
            <Strong>New Jersey Institute of Technology</Strong>
          </p>
          <p className="text-lg">Bachelor's Degree, Computer Science</p>
        </div>
      </Container>
    </Layout>
  )
}

export default Home
