import React from 'react'
import Head from 'next/head'
import NavBar from '../NavBar'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { FaTwitch } from 'react-icons/fa'

const Main: React.FC = ({ children }) => {
  return (
    <main className="nav-width mx-auto py-8 md:py-16">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Gagan Rai (@fuzzknob)</title>
        <link rel="shortcut icon" href="/fuzzknob.ico" type="image/x-icon" />
        {/* Required meta tags */}
        <meta name="robots" content="index,follow" />
        <meta name="copyright" content="fuzzknob" />
        <meta name="classification" content="Profile" />
        <meta name="owner" content="Gagan Rai" />
        <meta name="author" content="Gagan Rai" />
        <meta name="keywords" content="fuzzknob, Gagan Rai" />
        <meta
          name="description"
          content="Profile page of Gagan Rai (@fuzzknob). And nothing more than that."
        />

        {/* open graph metadata */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="fuzzknob" />
        <meta property="og:url" content="https://fuzzknob.com/" />
        <meta property="og:title" content="Gagan Rai (@fuzzknob)" />
        <meta property="og:image" content="/fuzzknob.png" />
        <meta
          property="og:description"
          content="Profile page of Gagan Rai (@fuzzknob). And nothing more than that."
        />
      </Head>
      <NavBar />
      <div className="main-layout-width mx-auto px-5 md:px-20">{children}</div>
      <section className="flex-center mt-16 md:mt-36">
        <div className="flex">
          <a
            href="https://twitter.com/fuzzknob"
            aria-label="Twitter"
            className="text-primary mx-5"
          >
            <IoLogoTwitter size={30} />
          </a>
          <a
            href="https://github.com/fuzzknob"
            aria-label="Github"
            className="text-primary mx-5"
          >
            <IoLogoGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/fuzzknob"
            aria-label="Linkedin"
            className="text-primary mx-5"
          >
            <IoLogoLinkedin size={30} />
          </a>
          <a
            href="https://twitch.tv/fuzzknob"
            aria-label="Twitch"
            className="text-primary mx-5"
          >
            <FaTwitch size={30} />
          </a>
        </div>
      </section>
      <p className="text-gray text-center mt-10">© 2023 - Gagan Rai</p>
    </main>
  )
}

export default Main
