import React from 'react'
import Button from '../components/Button'
import Image from 'next/image'
import { IoCodeSlashOutline, IoGlobeOutline } from 'react-icons/io5'

const Project: React.FC<{
  title: string
  picture: string
  codeURL?: string
  liveURL?: string
  tech?: string
}> = ({ title, children, codeURL, picture, liveURL, tech }) => {
  return (
    <div className="mb-8 md:mb-16">
      <h3 className="text-xl font-bold underline mb-4 md:mb-0">{title}</h3>
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="md:w-2/3 flex flex-col justify-between pt-6">
          <div>{children}</div>
          <div className="mt-5">
            <p className="font-bold">Built with {tech}</p>
            <div className="flex">
              {liveURL ? (
                <div className="mr-2">
                  <Button to={liveURL} shape="square">
                    <IoGlobeOutline />
                  </Button>
                </div>
              ) : null}
              {codeURL ? (
                <div>
                  <Button to={codeURL} shape="square">
                    <IoCodeSlashOutline />
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="md:ml-5 text-center md:text-right">
          <Image
            className="rounded-xl"
            src={picture}
            alt={title}
            width={300}
            height={250}
          />
        </div>
      </div>
    </div>
  )
}

const Index: React.FC = () => {
  return (
    <>
      <section className="py-44">
        <h6 className="md:text-lg md:-mb-7">Hey, I&apos;m</h6>
        <h1 className="text-2xl md:text-mega">Gagan</h1>
        <h6 className="md:text-lg mb-5">
          I&apos;m a <span className="font-bold">Full Stack</span> developer
          based in Kathmandu
        </h6>
        <Button to="mailto:me@fuzzknob.com">CONTACT ME</Button>
      </section>
      <section id="works">
        <h1 className="text-right text-xl font-bold mb-6 md:mb-14">works</h1>
        <div>
          <Project
            title="DropshipPro"
            picture="/dropshippro.jpg"
            tech="React.js, Typescript, Python, Docker, Nest.js and Postgres"
            liveURL="https://dropshippro.io"
          >
            A companion app for the people who do eBay dropshipping. It tracks
            supplier stock and price and automatically reflects it to the
            user&apos;s eBay listing. It also helps the user add new products to
            their eBay listing by pulling in the product information directly
            from the suppliers.
          </Project>
          <Project
            title="Wedhub"
            picture="/wedhub.jpg"
            liveURL="https://wedhub.de/"
            tech="Vue.js, Hasura, Postgres, Next.js, Flutter and Heroku"
          >
            An event planning app for the event operator. It&apos;s a complete
            solution for the event locations. It handles everything from
            planning events to managing guests. It also has a companion mobile
            app for location partners to manage and get notified when
            they&apos;re assigned to an event.
          </Project>
          <Project
            title="Codeman"
            picture="/codeman.jpg"
            tech="React.js, Typescript, Rust and Tauri"
            codeURL="https://github.com/fuzzknob/codeman"
          >
            <p>
              The missing project Manager for Visual Studio Code. It helps to
              open projects quickly, no matter where they are. As a developer,
              one might be working on multiple projects at a time. This app
              helps to open and close projects in seconds.
            </p>
            <p>
              The first version of this project was built using vue.js and
              electron. And it&apos;s as fast as an Electron app can be. But the
              new version of this app is being built using{' '}
              <a href="https://tauri.studio" className="underline font-bold">
                Tauri
              </a>
              , which is blazingly fast and comes in a tiny install.
            </p>
          </Project>
        </div>
      </section>
      <section id="about" className="mt-14 md:mt-36">
        <h1 className="text-right text-xl font-bold mb-6 md:mb-14">about</h1>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-5 text-center md:text-left md:mb-0 md:mr-8">
            <Image
              className="rounded-xl "
              src="/me.jpg"
              alt="Gagan Rai"
              width={190}
              height={245}
            />
          </div>
          <div className="md:w-3/4">
            <p className="block">
              Hello again, My name is Gagan Rai. I&apos;m a full-stack developer
              based in Kathmandu. I have a passion for creating stuff that I
              need. I&apos;m driven to be the best developer I can possibly be.
            </p>
            <p className="block">
              I&apos;ve been coding for the past 5 years now. In the years, I
              got to work on different kinds of projects that solve uniquely
              different problems. I have worked with a wide range of
              technologies over the years like C#, PHP, Laravel, Javascript,
              Node.js, Typescript, Dart, Flutter, etc.
            </p>
            <p className="block">
              Outside of coding I like to play Guitar (but not that good at it
              though) and play games like Sekiro, Satisfactory, Age Of Empires,
              etc.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
