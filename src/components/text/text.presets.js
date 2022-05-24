import { typography } from "../../theme/typography"


const BASE = {
    fontFamily: typography.primary,
    fontSize: 16,

}
const BOLD = {
    fontFamily: typography.bold,
}


export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 32
    }
    ,
    h2: {
        ...BOLD,
        fontSize: 24
    },
    h3: {
        ...BOLD,
        fontSize: 15
    },
    para: {
        ...BASE,
        fontSize: 17
    },

}    