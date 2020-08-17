import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    social: {
      [breakpoints.up('md')]: {
        alignSelf: 'center',
      },

      '& ul': {
        listStyleType: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
      },

      '& li': {
        marginRight: spacing(2.5),
        '&:last-child': {
          marginRight: 0,
        },
      },

      '& a:hover svg': {
        fill: palette.primary.main,
      },

      '& svg': {
        width: 32,
        height: 32,
        fill: palette.grey[200],
        transition: 'all .3s',
      },
    },
  })
);
