import React from "react"
import clsx from "clsx"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Container className="-mt-12">
        <div className="mx-auto -mt-12 px-4 py-6 rounded-lg bg-gray-200 max-w-4xl shadow-md">
          <Heading>
            Hello, it's Tom! <Emoji label="waving hand">👋</Emoji>
          </Heading>
          <Text>I'm a software developer based in New Jersey.</Text>
          <Text>
            I like working with JavaScript, React, Node.js, and Python.
          </Text>
          <Text>Thanks for checking out my page!</Text>
          <br />
          <Heading>
            <Emoji label="briefcase">💼</Emoji> Experience
          </Heading>
          <Text>Software Developer @ AT&T Labs</Text>
          <Text className="text-gray-700 mb-2">Oct 2019 - Present</Text>
          <Text>Software Developer Contractor @ AT&T Labs</Text>
          <Text className="text-gray-700 mb-2">Sep 2017 - Oct 2019</Text>
          <br />
          <Heading>
            <Emoji label="graduation cap">🎓</Emoji> Education
          </Heading>
          <Text>New Jersey Institute of Technology</Text>
          <Text className="text-gray-700 mb-2">
            Master's Degree, Information Systems
          </Text>
          <Text>New Jersey Institute of Technology</Text>
          <Text className="text-gray-700">
            Bachelor's Degree, Computer Science
          </Text>
        </div>
      </Container>
    </Layout>
  )
}

function Heading({ children }) {
  return <h2 className="text-xl font-extrabold mb-1">{children}</h2>
}

function Text({ className = ``, children }) {
  return <p className={clsx(`text-black text-lg`, className)}>{children}</p>
}

function Emoji({ label, children }) {
  return (
    <span role="img" aria-label={label}>
      {children}
    </span>
  )
}
