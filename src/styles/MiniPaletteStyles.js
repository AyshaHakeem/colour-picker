export default {
    root: {
        backgroundColor: "white",
        width: '210px',
        // height: 'fit-content',
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        margin: '5px',
        "&:hover": {
            cursor: "pointer"
        }
    },
    colors: {
        backgroundColor: "#dae1e4",
        height: "150px",
        // width: "200px",
        borderRadius: "5px",
        overflow: "hidden",
        display: 'flex',
        'flex-wrap': 'wrap',
        '& div':{
            width: '20%',
            height: '25%',
            display: 'inline-block'
            // marginBottom: "-3.5px"
        }
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
};
