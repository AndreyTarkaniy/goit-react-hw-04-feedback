import PropTypes from 'prop-types';

import React from 'react';
import css from 'components/section/sections.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
