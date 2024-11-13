import PropTypes from "prop-types";

const TextAreaField = ({id, label, placeholder, register}) => (
    <div className="textarea-container">
        <textarea id={id} placeholder={placeholder} {...register(id)}></textarea>
        <label htmlFor={id} className="static-label">{label}</label>
    </div>
);

TextAreaField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    register: PropTypes.func.isRequired
};

export {TextAreaField};