import React from "react";
import PropTypes from "prop-types";
const Subtitle = ({ children }) => {
    return <h3>{children}</h3>;
};
Subtitle.propTypes = {
    children: PropTypes.node
};
export default Subtitle;
