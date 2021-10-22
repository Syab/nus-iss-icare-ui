import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        customHeaderTitle: {
            color: '#2E465B',
            fontWeight: "bold"
        },
        paper: {
            marginTop: theme.spacing(4),
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        subtitle: {
            margin: theme.spacing(1),
            padding: theme.spacing(1)
        },
        cardRoot: {
            padding: '0',
            paddingLeft: 16,
        },
        card: {
            display: 'block',
            width: '100%',
            transitionDuration: '0.3s',
            height: '14vw'
        },
        gridContainer: {
            marginTop: theme.spacing(4),
        }
    }
));

export default useStyles;