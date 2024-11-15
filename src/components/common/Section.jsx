import PropTypes from "prop-types";

const Section = ({title, children}) => (
    <>
        <h4>{title}</h4>
        {children}
    </>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export {Section};