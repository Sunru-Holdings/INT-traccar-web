import {
  amber, grey, green, red, indigo, common,
} from '@mui/material/colors';
import themeConfigurations from '../../config/theme';

const colors = {
  white: common.white,
  background: themeConfigurations?.background ?? grey[50],
  primary: themeConfigurations?.primary ?? indigo[900],
  secondary: themeConfigurations?.secondary ?? green[500],
  positive: themeConfigurations?.positive ?? green[500],
  medium: themeConfigurations?.medium ?? amber[700],
  negative: themeConfigurations?.negative ?? red[500],
  neutral: themeConfigurations?.neutral ?? grey[500],
  geometry: themeConfigurations?.geometry ?? '#3bb2d0',
};

export default {
  background: {
    default: colors.background,
  },
  primary: {
    main: colors.primary,
  },
  secondary: {
    main: colors.secondary,
    contrastText: colors.white,
  },
  colors,
};
