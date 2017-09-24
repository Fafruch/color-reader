import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';

const Colors = ({ hexColor, rgbColor, hslColor, isColorCorrect }) => {
  if (isColorCorrect) {
    const colorTypes = [
      { name: 'HEX', value: hexColor },
      { name: 'RGB', value: rgbColor },
      { name: 'HSL', value: hslColor },
    ];
    return (
      <div className="Colors">
        <div className="Colors-text-wrapper">
          <h3>Copy your color</h3>
          <table>
            <tbody>
              {colorTypes.map(type => (
                <tr key={type.name}>
                  <td className="Colors-color-type">
                    <strong>{type.name}: </strong>
                  </td>
                  <td>
                    <input value={type.value} onChange={() => {}} />
                  </td>
                  <td>
                    <CopyToClipboard text={hexColor}>
                      <button>
                        Copy
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
  hexColor: PropTypes.string.isRequired,
  rgbColor: PropTypes.string.isRequired,
  hslColor: PropTypes.string.isRequired,
  isColorCorrect: PropTypes.bool.isRequired,
};


export default Colors;
