import PropTypes from "prop-types";

const TextAreaField = ({id, placeholder, register, errors}) => (
    <div className="textarea-container">
        <textarea
            id={id}
            placeholder={placeholder}
            {...register(id)}
            aria-invalid={errors[id] ? "true" : "false"}
        ></textarea>
        {errors[id] && <p className="error-message">{errors[id].message}</p>}
    </div>
);

TextAreaField.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object
};

export {TextAreaField};