import commonConfigurations from '../../config/common';

const font = [commonConfigurations.font ?? 'Roboto', 'sans-serif'].join(',');

export default {
  fontFamily: font,
  button: {
    textTransform: 'none',
  },
};
