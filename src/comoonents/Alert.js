import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong> {props.alert.msg}
            <button
                type="button"
                className="close"
                aria-label="Close"
            // Close the alert on button click
            >
            </button>
        </div>
    )
}
