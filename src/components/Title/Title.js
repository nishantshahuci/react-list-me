import React from 'react';

import GradientText from '../GradientText/GradientText';

const Title = ({ titleText }) => {
  return (
    <h1 className="title">
      <GradientText text={titleText} />
    </h1>
  );
};

export default Title;
