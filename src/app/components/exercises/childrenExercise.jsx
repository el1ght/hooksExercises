import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const NumberedContainer = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { number: index });
    });
};

NumberedContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <NumberedContainer>
                <Component />
                <Component />
                <Component />
            </NumberedContainer>
        </CollapseWrapper>
    );
};

const Component = ({ number }) => {
    return <div> {number + 1} Компонент списка</div>;
};

Component.propTypes = {
    number: PropTypes.number
};

export default ChildrenExercise;
