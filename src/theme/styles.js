import Colors from "./colors"
import Sizes from "./sizes"
import Fonts from "./fonts"

export default {
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.background
    },

    background: {
        backgroundColor: Colors.background
    },

    primaryColor: {
        backgroundColor: Colors.primaryColor
    },
    primaryDarkColor: {
        backgroundColor: Colors.primaryDark
    },

    // Aligning items
    leftAligned: {
        alignItems: 'flex-start',
    },
    centerAligned: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightAligned: {
        alignItems: 'flex-end',
    },
    verticalAligned: {
        justifyContent: "center"
    },
    horizontalAligned: {
        alignItems: "center"
    },
};
