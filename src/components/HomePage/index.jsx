import React from 'react'
import styles from './styles.module.css'

const links = {
  carbon: `http://www.carbondesignsystem.com/`,
}

const HomePage = () => (
  <div className={styles.root}>
    <svg className={styles.circle} />
    <main className={styles.main}>
      <h1 className={styles.heading}>
        <span className={styles.name}>Brian Han</span> is a front-end developer
        &mdash; building things for people on the internet.
      </h1>

      <div className={styles.paragraphList}>
        <p className={styles.paragraph}>
          I build websites and apps but mainly my focus is on building
          interfaces &mdash; it should look good, feel good, and deliver the
          best possible experience for people using it. Sure, I can build APIs
          and tinker with some middleware but my jam is all about the clicky,
          touchy, visual parts of the web.
        </p>
        <p className={styles.paragraph}>
          Currently, I work as at Accenture Interactive and collaborate with
          other designers and devs at studios like Fjord and Intrepid Pursuits.
        </p>
        <p className={styles.paragraph}>
          Previously, I was at IBM working on{' '}
          <a className={styles.link} href={links.carbon}>
            Carbon
          </a>, an award-winning open-source design system. I was one of the
          first developers to work on it and maintained it with an amazing team
          of designers and devs for most of my career at IBM.
        </p>
        <p className={styles.paragraph}>
          A little more about me: I was born and raised in Toronto, Canada.
          These days I'm working and living in Austin, Texas with a modest
          collection of succulents and houseplants (it's the Texas way I
          suppose). You can find me enjoying stuff like 🍜 🍣 🌮 ☕️
        </p>
      </div>
    </main>
  </div>
)

export default HomePage
