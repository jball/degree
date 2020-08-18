import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import SocialMenu from '../SocialMenu';
import { useStaticQuery, graphql } from 'gatsby';

import './styles.scss';

const SocialMediaBlock: FunctionComponent<SocialMenuBlockInterface> = ({}) => {
  const data = useStaticQuery(graphql`
    query socialMenu {
      brandInfo: sanityBrandInfo {
        pinteresturl
        twitterurl
        youtubeurl
        facebookurl
        instaurl
      }
    }
  `);
  console.log(data.brandInfo);

  return (
    <section className="social-menu-section">
      <div className={classNames('bp-container', 'social-menu-p0')}>
        <div className="social-menu-container">
          <p className="social-menu-text">Connect with Rexona on:</p>
          <div className="social-menu-icons">
            <SocialMenu links={data.brandInfo} />
          </div>
        </div>
      </div>
    </section>
  );
};

interface SocialMenuBlockInterface {
  links: any;
}

export default SocialMediaBlock;
