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

  return (
    <section>
      <div className={classNames('container', 'pad0')}>
        <div style={{ float: 'right' }}>
          <p style={{ float: 'left', marginRight: '15px' }}>
            Connect with Rexona on:
          </p>
          <div style={{ float: 'right' }}>
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
