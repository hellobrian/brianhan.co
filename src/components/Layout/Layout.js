import React from 'react';
import { SvgCircle, FancyLink } from '../index';
import { rhythm } from '../../utils/typography';

// css
import './_variables.css';
import './_util-classes.css';
import './_reset.css';
import './_prism-theme.css';
import './_docz-overrides.css';
import './Layout.css';

// fonts
import 'typeface-karla';
import 'typeface-merriweather';

export const Layout = ({ location, title, children }) => {
  return (
    <>
      <SvgCircle className="SvgCircle" />
      <div className="Layout">
        <div
          className="Layout__Wrapper"
          style={{
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}>
          <Layout.Header pathname={location.pathname} title={title} />
          <main>{children}</main>
          <footer>© {new Date().getFullYear()} Brian Han</footer>
        </div>
      </div>
    </>
  );
};

const Header = ({ pathname, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <header>
      {pathname === rootPath ? (
        <h1
          className="Layout__Header__Title"
          style={{
            paddingTop: rhythm(1.5),
            paddingLeft: rhythm(1),
            paddingRight: rhythm(1),
            paddingBottom: rhythm(1 / 2),
          }}>
          <div>{title}</div>
          <div>is a front-end developer.</div>
          <div>Building and writing things for people on the internet.</div>
        </h1>
      ) : (
        <h3>
          <FancyLink to="/">{title}</FancyLink>
        </h3>
      )}
    </header>
  );
};

Layout.Header = Header;

export default Layout;
