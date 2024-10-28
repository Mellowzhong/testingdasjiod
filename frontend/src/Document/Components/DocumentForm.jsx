import PropTypes from 'prop-types';

function DocumentForm({ handleFunction, setFunction, documentName, documentRequiredName }) {
    return (
        <label htmlFor={documentName}>{documentRequiredName}
            <input
                type="file"
                id={documentName}
                name={documentName}
                onChange={(e) => handleFunction(e, setFunction, documentName)}
            />
        </label>
    )
}

DocumentForm.propTypes = {
    handleFunction: PropTypes.func.isRequired,
    setFunction: PropTypes.func.isRequired,
    documentName: PropTypes.string.isRequired,
    documentRequiredName: PropTypes.string.isRequired
}

export default DocumentForm;