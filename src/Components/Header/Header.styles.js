import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1
  },
  barWrapper: {
    backgroundColor: theme.palette.success.main
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

