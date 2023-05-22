import PropTypes from 'prop-types';

import React from 'react';
// import css from 'components/container/container.module.css';

const Notification = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
