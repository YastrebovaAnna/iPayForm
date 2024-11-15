import PropTypes from 'prop-types';

const CheckboxField = ({id, label, sublabel, register}) => (
    <div className="checkbox-container">
        <input
            id={id}
            type="checkbox"
            {...register(id)}
        />
        <label htmlFor={id}>
            <span>{label}</span><br/>
            {sublabel && <span>{sublabel}</span>}
        </label>
    </div>
);

CheckboxField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    sublabel: PropTypes.string,
    register: PropTypes.func.isRequired,
};

export {CheckboxField};