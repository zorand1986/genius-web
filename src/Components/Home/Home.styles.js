import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
    mainWrapper: {
      width: "100vw",
      height: "95vh",
      display: "flex",
      padding: 0
    },
  leftWrapper: {
      height: "100%",
    width: "100%",
    backgroundColor: "#4287f5"
  },
  rightWrapper: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
  },
  headline: {
      color: "white"
  }
}));

export default useStyles;

