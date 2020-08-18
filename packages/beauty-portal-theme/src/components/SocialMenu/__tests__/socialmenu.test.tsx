import React from 'react';
import renderer from 'react-test-renderer';
import SocialMenu from '../index';

describe('Social Menu', () => {
  const socialMenuObject = {
    facebookurl: 'https://www.facebook.com/AllThingsHairPH/',
    instaurl: 'https://www.instagram.com/allthingshairuk/',
    pinteresturl: 'https://www.pinterest.com/AllThingsHair/',
    twitterurl: 'https://twitter.com/AllThingsHairuk',
    youtubeurl: 'https://www.youtube.com/user/allthingshairPH',
  };
  it('renders correctly', () => {
    const tree = renderer
      .create(<SocialMenu links={socialMenuObject} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
