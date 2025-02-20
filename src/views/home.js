import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Far Off Silver Rook</title>
        <meta property="og:title" content="Far Off Silver Rook" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text10">Page Four Description</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text11">Main Action</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text12">Link 2</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text13">Page One</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text14">Link 1</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text15">Page Four</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text16">Page Two</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text17">Link 4</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text18">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text19">Page Two Description</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text20">Link 3</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text21">Page Three</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">Page Three Description</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text23">Secondary Action</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text24">Secondary action</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text25">Main action</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text26">
              Medium length hero headline goes here
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text27">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text28">
              Adaptive quizzes with instant feedback
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text29">AI Feedback</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text30">
              Smart flashcards with flip animation and AI hints
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text31">AI-Powered Study Tools</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text32">
              Utilize AI-powered tools to enhance your learning experience
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text33">Smart Flashcards</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text34">
              Ready to supercharge your learning?
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text35">
              Sign up now to unlock the full potential of our AI-powered study
              platform.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text36">Get Started</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text37">
              Create a personalized study plan based on your progress and goals,
              ensuring efficient learning and mastery of the material.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text38">
              Study smarter with AI-powered flashcards that adapt to your
              learning pace and provide hints for better retention.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text39">
              Adaptive Quizzes with AI Feedback
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text40">AI-powered Flashcards</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text41">
              Test your knowledge with adaptive quizzes that provide instant
              feedback from AI, helping you identify areas for improvement.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text42">Personalized Study Plan</span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text43">
              Create your account to access all the features of our AI-powered
              study platform.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text44">
              Take advantage of AI-generated notes and track your progress to
              stay on top of your study goals.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text45">Explore Flashcards and Quizzes</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text46">
              Engage with our smart flashcards and adaptive quizzes to enhance
              your learning experience.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text47">Sign Up for Free</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text48">
              Utilize AI Notes and Progress Tracking
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text49">
              Tailor your study plan based on analytics and receive quiz
              reminders to boost your retention.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text50">Personalize Your Study Plan</span>
          </Fragment>
        }
      ></Steps2>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text51">Privacy Policy</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text52">FAQs</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text53">About Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text54">Terms of Service</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text55">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text56">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text57">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text58">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
