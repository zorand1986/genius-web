import { makeStyles, createStyles } from '@material-ui/core/styles';

import commonStyles from './../../commonStyles';

const useStyles = makeStyles((theme) => createStyles({
headline: {
    textTransform: "uppercase",
    color: commonStyles.getTextColor(),
    textAlign: "center",
    marginTop: theme.spacing(8)
},
deckLink: {
    textDecoration: "none",
    color: "inherit",
    zIndex: 1000
},
addRow: {
    marginTop: theme.spacing(4)
}
}));

export default useStyles;
