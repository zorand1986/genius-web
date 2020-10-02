import { makeStyles, createStyles } from '@material-ui/core/styles';

import commonStyles from './../../commonStyles';

const useStyles = makeStyles((theme) => createStyles({
headline: {
    textTransform: "uppercase",
    color: commonStyles.getTextColor(),
    textAlign: "center"
}
}));

export default useStyles;
