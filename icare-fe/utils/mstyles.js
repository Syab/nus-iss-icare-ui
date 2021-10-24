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
            height: '14vw',
            "&:hover": {
                color: "rgb(237,176,25)",
                borderColor: "#edb019"
            },
            "&:active": {
                color: "rgb(237,176,25)",
                borderColor: "#edb019"
            },

        },
        gridContainer: {
            marginTop: theme.spacing(4),
        },
        summaryCards: {
            display: 'flex',
            alignItems: 'center',
            // backgroundColor: "#e6ebee"
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        content: {
            flex: '1 0 auto',
            alignItems: 'center',
        },
        cover: {
            width: 151,
        },
        divider: {
            height: 100,
            margin: 4,
        },
        alertSummary: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            }
        },
        sideSheet: {
            marginTop: theme.spacing(12)
        },
        sideSheetHeader: {
            marginTop: theme.spacing(6),
            paddingLeft: theme.spacing(3)
        },
        sideSheetBody: {
            marginTop: theme.spacing(4),
            paddingLeft: theme.spacing(3)
        },
    }
));

export default useStyles;