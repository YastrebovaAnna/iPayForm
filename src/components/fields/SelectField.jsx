import PropTypes from "prop-types";

const SelectField = ({id, options, register, placeholder}) => (
    <select {...register(id)} defaultValue="">
        <option value="" disabled>{placeholder}</option>
        {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
        ))}
    </select>
);

SelectField.propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    register: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};

export {SelectField};