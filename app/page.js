"use client"
import Header from "./_components/Header"
import Hero from "./_components/Hero"
import Experience from "./_components/Experience"
import WorkProcess from "./_components/WorkProcess"
import Portfolio from "./_components/Portfolio"
import ProjectIdea from "./_components/ProjectIdea"
import Blog from "./_components/Blog"
import WhatIDo from "./_components/WhatIDo"
import Contact from "./_components/Contact"
import Footer from "./_components/Footer"
import PageAnimation from "./_components/PageAnimation"
import { useState } from "react"
import SplashScreen from "./_components/SplashScreen"
import { AnimatePresence } from "motion/react"
import Icons from "./_components/Icons"

export default function Home() {
    const [loadingComplete, setLoadingComplete] = useState(false);
    const onLoadingComplete = () => setLoadingComplete(true);
    return (
        <AnimatePresence mode="wait">
            {!loadingComplete && (<PageAnimation key={'splash'}>
                <SplashScreen onLoadingComplete={onLoadingComplete} />
            </PageAnimation>)}

            {loadingComplete && (
                <div id="home" className="bg-white">
                    <Header />
                    <Hero />
                    <Icons />
                    <section id="about">
                        <Experience />
                    </section>

                    <section id="process">
                        <WorkProcess />
                    </section>

                    <section id="portfolio">
                        <Portfolio />
                    </section>

                    <ProjectIdea />
                    <section id="blog">
                        <Blog />
                    </section>

                    <section id="services">
                        <WhatIDo />
                    </section>

                    <section id="contact">
                        <Contact />
                    </section>
                    <Footer />
                </div>
            )}
        </AnimatePresence>
    )
}
