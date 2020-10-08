import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    addPaperWrapper: {
      margin: "40px",
      padding: "40px",
    },
    formWrapper: {
      display: "flex",
      justifyContent: "space-around",
    },
    tableWrapper: {
      marginBottom: 50,
    },
    table: {
      minWidth: 650,
    },
  })
);

export default useStyles;
