import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  pageWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
    backgroundColor: '#FFD733',
    width: '100%',
    height: 'auto',
  },
  pageHeader: {
    display: 'grid',
    gridTemplateColumns: '1fr 5fr',
    justifyItems: 'center',
    alignItems: 'center',
    width: '100%',
    height: '60px',
    position: 'relative',
    top: '20px',
    left: '20px',
  },
  BackArrow: {},
  contentWrapper: {
    width: '100%',
    height: '100%',
    borderRadius: '20px 20px 0px 0px',
    boxShadow: '0 -15px 15px -15px #777777',
    backgroundColor: '#ffffff',
    position: 'relative',
    top: '30px',
  },
  thumbnailSubtitle: {
    fontFamily: 'Montserrat',
    color: '#000000',
    width: '80%',
    fontSize: '1.2rem',
    textAlign: 'center',
  },
  textWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    width: '95%',
    height: 'auto',
    position: 'relative',
    left: '20px',
    top: '10px',
  },
  pageTitle: {
    fontFamily: 'Montserrat',
    color: '#1958BC',
    fontWeight: 'normal',
    width: '70%',
    fontSize: '1.7rem',
  },
  pageText: {
    fontFamily: 'Montserrat',
    color: '#000000',
    width: '80%',
    fontSize: '1.2rem',
  },
  thumbnailWrapper: {
    width: '95%',
    height: '34em',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyItems: 'center',
    position: 'relative',
    top: '20px',
    gap: 0,
  },
  frontImage: {
    width: '80%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    justifyItems: 'center',
    backgroundColor: '#FFD733',
  },
  sideImage: {
    width: '80%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    justifyItems: 'center',
    backgroundColor: '#FFD733',
  },
})