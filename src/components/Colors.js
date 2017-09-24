import React from 'react';
import PropTypes from 'prop-types';

const Colors = ({ hexColor, rgbColor, hslColor, isColorCorrect }) => {
  if (isColorCorrect) {
    return (
      <div className="Colors">
        <div className="Colors-text-wrapper">
          <h3>Copy your color</h3>
          <table>
            <tbody>
              <tr>
                <td className="Colors-color-type">
                  <strong>HEX: </strong>
                </td>
                <td>
                  <input value={hexColor} /> <br />
                </td>
              </tr>
              <tr>
                <td className="Colors-color-type">
                  <strong>RGB:</strong>
                </td>
                <td>
                  <input value={rgbColor} /> <br />
                </td>
              </tr>
              <tr>
                <td className="Colors-color-type">
                  <strong>HSL:</strong>
                </td>
                <td>
                  <input value={hslColor} /> <br />
                </td>
              </tr>
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
