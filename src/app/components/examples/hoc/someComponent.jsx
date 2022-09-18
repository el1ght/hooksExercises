import React from "react";

import PropTypes from "prop-types";
import Subtitle from "../../common/typografy/subtitle";

const SomeComponent = ({ name }) => {
    return <Subtitle>{name || "Component"}</Subtitle>;
};
SomeComponent.propTypes = {
    name: PropTypes.string
};
export default SomeComponent;
