import PropTypes from 'prop-types'
import React from 'react'

const HideAndShowCheckbox = ({ checked, onChange, id, label }) => {
    return (
        <div>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={(e) => {
                    onChange(e.target.checked)
                }}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

HideAndShowCheckbox.propTypes = {
    checked: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
}

export default HideAndShowCheckbox
