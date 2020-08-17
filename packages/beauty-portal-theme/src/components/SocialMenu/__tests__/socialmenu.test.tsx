import React from 'react';
import renderer from 'react-test-renderer';
import SocialMenu from '../index';

// const SocialMenu = () => <ul data-testid="social-menu"></ul>;

describe('Social Menu', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SocialMenu links={any} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

/* <SocialMenu links={data.brandInfo} />

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
  `); */
