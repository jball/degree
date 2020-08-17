import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
// import { SanityTextBlockInterface } from './models';
import { Link } from 'gatsby';
import SocialMenu from '../SocialMenu';
import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import quote from '../../images/icons/quote-left.svg';
import { useStaticQuery, graphql } from 'gatsby';

import './styles.scss';

const SocialMediaBlock: FunctionComponent<> = ({}) => {
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
  //   const classes = useStyles({ icon: quote });

  return (
    <div className={classNames('container', 'pad0')}>
      <div>
        <SocialMenu links={data.brandInfo} />
      </div>
    </div>
  );
};

export default SocialMediaBlock;
