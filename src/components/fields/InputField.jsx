import PropTypes from "prop-types";

const InputField = ({id, label, type = "text", placeholder, register, errors}) => (
    <div className="input-container">
        <label htmlFor={id} className="floating-label">{label}</label>
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            {...register(id)}
            aria-invalid={errors[id] ? "true" : "false"}
        />
        {errors[id] && <p className="error-message">{errors[id].message}</p>}
    </div>
);

InputField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object
};

export {InputField};