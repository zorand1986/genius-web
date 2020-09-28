import { makeStyles, createStyles } from '@material-ui/core/styles';

import commonStyles from './../../commonStyles';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1
  },
  barWrapper: {
    backgroundColor: commonStyles.getPrimaryColor()
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkButton: {
    textDecoration: "none",
    color: "#fff"
  }
}));

export default useStyles;

