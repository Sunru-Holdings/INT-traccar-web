import React from 'react';
import { makeStyles } from '@mui/styles';
import { ReactComponent as Logo } from '../resources/images/logo.svg';
import { ReactComponent as CustomLogo } from '../config/images/custom.svg';
import commonConfigurations from '../config/common';

const useStyles = makeStyles(() => ({
  image: {
    alignSelf: 'center',
    maxWidth: '240px',
    maxHeight: '120px',
    width: 'auto',
    height: 'auto',
  },
}));

const LogoImage = ({ color }) => {
  const classes = useStyles();
  const DisplayLogo = commonConfigurations.customLogo ? CustomLogo : Logo;
  return (<DisplayLogo className={classes.image} style={{ color }} />);
};

export default LogoImage;
