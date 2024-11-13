import PropTypes from "prop-types";

const InputField = ({id, label, type = "text", placeholder, register}) => (
    <div className="input-container">
        <input id={id} type={type} placeholder={placeholder} {...register(id)} />
        <label htmlFor={id} className="floating-label">{label}</label>
    </div>
);

InputField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    register: PropTypes.func.isRequired
};

export {InputField};