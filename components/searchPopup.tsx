import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import Typography from '@mui/material/Typography';
import { Grid, Paper, Stack } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    paddingLeft: 0,
    paddingRight: 0,
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  paddingLeft: theme.spacing(2),
  color: theme.palette.text.secondary,
  boxShadow: 'none',
}));

export interface DialogTitleProps {
  id: string;
  fullScreen: boolean;
  children?: React.ReactNode;
  onClose: () => void;
  onFullScreen: () => void;
}

export interface SearchPopupProps {
  mode: boolean;
  title: string;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, onFullScreen, fullScreen, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
      {onFullScreen ? (
        <IconButton
          aria-label="close"
          onClick={onFullScreen}
          sx={{
            position: 'absolute',
            right: 40,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {fullScreen ? <CloseFullscreenIcon /> : <OpenInFullIcon />}
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function SearchPopup(props: SearchPopupProps) {
  const { mode, title, onClose } = props;
  const [open, setOpen] = React.useState(false);
  const [fullScreen, setFullScreen] = React.useState(false);

  React.useEffect(() => {
    setOpen(mode);
  }, [mode]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleFullScreen = () => {
    setFullScreen((prev) => !prev);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullScreen={fullScreen}
        maxWidth="md"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          onFullScreen={handleFullScreen}
          fullScreen={fullScreen}
        >
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="space-evenly"
            alignItems="top"
          >
            <Grid item md={6}>
              <Stack spacing={2}>
                <Typography
                  gutterBottom
                  sx={{
                    flex: '1 1 100%',
                    background: '#D3D3D3',
                    color: '#A9A9A9',
                    fontWeight: 'bold',
                    fontSize: '1em',
                    paddingX: '1em',
                    paddingY: '.5em',
                  }}
                >
                  AVAILABLE
                </Typography>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Stack>
            </Grid>

            <Grid
              item
              md={6}
              style={{
                paddingLeft: '10px',
                borderStyle: 'solid',
                borderColor: 'rgba(0, 0, 0, 0.12)',
                borderWidth: '0 0 0 1px',
              }}
            >
              <Typography gutterBottom>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained">Apply</Button>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
