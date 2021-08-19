import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'
import PALETTE from './colorPalette'

export const theme = responsiveFontSizes(
  createTheme({
    overrides: {
      MuiAppBar: {
        colorDefault: {
          background: `${PALETTE.bg} !important`,
        },
      },

      MuiButton: {
        root: {
          fontFamily: `cabin`,
          letterSpacing: `2px`,
        },
      },

      MuiCssBaseline: {
        '@global': {
          a: {
            textDecoration: `none`,
          },

          body: {
            overflowX: `hidden`,
            overflowY: `scroll`,
          },

          '#___gatsby': {
            overflowX: `hidden`,
          },
        },
      },

      MuiDrawer: {
        paperAnchorRight: {
          backgroundColor: PALETTE.primary,
        },
      },

      MuiListItemText: {
        primary: {
          color: PALETTE.text,
          fontFamily: `cabin`,
          letterSpacing: `2px`,
          textTransform: `uppercase`,
        },
      },

      MuiTypography: {
        body1: {
          fontFamily: `cabin`,
        },

        h2: {
          fontFamily: 'source sans pro',
          letterSpacing: `3px`,
          textTransform: 'uppercase',
        },
      },
    },

    palette: {
      type: 'dark',

      background: {
        default: PALETTE.bg,
      },

      primary: {
        main: PALETTE.primary,
      },

      text: {
        primary: PALETTE.text,
      },
    },
  })
)
