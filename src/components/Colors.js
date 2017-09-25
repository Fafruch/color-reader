import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';

const Colors = ({ colorTypes, isColorCorrect, lastCopied, onCopy }) => {
  if (isColorCorrect) {
    return (
      <div className="Colors">
        <div className="Colors-text-wrapper">
          <h3>Copy your color</h3>
          <table className="Colors-table">
            <tbody>
              {colorTypes.map(type => (
                <tr key={type.name}>
                  <td className="Colors-color-type">
                    <strong>{type.name}: </strong>
                  </td>
                  <td>
                    <input className="Colors-input" value={type.value} onChange={() => {}} />
                  </td>
                  <td>
                    <CopyToClipboard text={type.value} onCopy={onCopy}>
                      <button className={
                        lastCopied === type.value
                          ? 'Colors-button-active'
                          : 'Colors-button-not-active'}
                      >
                        {lastCopied === type.value ? 'Copied' : 'Copy'}
                      </button>
                    </CopyToClipboard>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  return (
    <div className="Colors-no-color">
      <div className="Colors-text-wrapper">
        No such color
      </div>
    </div>
  );
};
Colors.propTypes = {
  colorTypes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  isColorCorrect: PropTypes.bool.isRequired,
  lastCopied: PropTypes.string.isRequired,
  onCopy: PropTypes.func.isRequired,
};


export default Colors;
