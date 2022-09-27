import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  styled,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import * as React from 'react';
import './style.css';

const Container = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  padding: '1.5em',
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  // textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: 'none',
}));

export const FormContext = React.createContext({});

export default function App() {
  const theme = useTheme();
  const isMobileBrkPt = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>
      <Item
        sx={{
          borderRadius: '4px',
          boxShadow:
            '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        }}
        elevation={4}
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignContent="center"
          alignItems="center"
          sx={{
            background: 'white',
            position: 'sticky',
            top: 60,
            bottom: 60,
            padding: '10px 20px',
            zIndex: 5,
          }}
        >
          <Typography
            sx={{
              flex: '1 1 100%',
              color: 'rgba(0, 0, 0, 0.87)',
              fontWeight: '600',
              fontSize: { md: '1.5em', xs: '1.25em' },
              borderBottom: '1px solid grey',
            }}
            component="div"
          >
            Required
          </Typography>
        </Stack>
        <Box
          sx={{
            flexGrow: 1,
            background: '#fff',
            padding: '0 1em 1em 1em',
            marginTop: '4em',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Item>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Business Area*
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="business-area"
                    label="Business Area"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    PageOut Type*
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="pageout-type"
                    label="PageOut Type"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Item>
    </div>
  );
}
