import React from 'react';
import renderer from 'react-test-renderer';
import SocialMenuBlock from '../index';

describe('<SocialMenuBlock />', () => {
  const socialMenuObject = {
    facebookurl: 'https://www.facebook.com/AllThingsHairPH/',
    instaurl: 'https://www.instagram.com/allthingshairuk/',
    pinteresturl: 'https://www.pinterest.com/AllThingsHair/',
    twitterurl: 'https://twitter.com/AllThingsHairuk',
    youtubeurl: 'https://www.youtube.com/user/allthingshairPH',
  };

  test('should render correctly', () => {
    const tree = renderer
      .create(<SocialMenuBlock links={socialMenuObject} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
