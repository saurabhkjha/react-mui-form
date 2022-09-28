import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
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

import SearchPopup from './components/searchPopup';

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

  const [searchPopupOpen, setSearchPopupOpen] = React.useState(false);

  const handleSearchPopup = (type) => {
    setSearchPopupOpen(true);
  };

  const searchPopupClose = () => {
    setSearchPopupOpen(false);
  };

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
            position: 'relative',
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
                  <InputLabel id="business-area-label">
                    Business Area*
                  </InputLabel>
                  <Select
                    labelId="business-area-label"
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
                  <InputLabel id="pageout-type-label">PageOut Type*</InputLabel>
                  <Select
                    labelId="pageout-type-label"
                    id="pageout-type"
                    label="PageOut Type"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText>
                    Please change when sending updated Pageout type
                  </FormHelperText>
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <FormControl fullWidth>
                  <InputLabel id="priority-label">Priority*</InputLabel>
                  <Select
                    labelId="priority-label"
                    id="pageout-type"
                    label="Priority"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText>
                    Level of priority this issue is being driven at
                  </FormHelperText>
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <FormControl fullWidth>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Reclassify"
                  />
                  <FormHelperText>Reclassify incident priority</FormHelperText>
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item>
                <InputLabel id="tenats-label">Tenants</InputLabel>
                <Button
                  variant="outlined"
                  onClick={() => handleSearchPopup('tenants')}
                >
                  Add Values
                </Button>
                <FormHelperText>
                  Tenant, market impacted *TEST TENANT* used for mock drills and
                  test validation
                </FormHelperText>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-multiline-static"
                    label="Email Description"
                    multiline
                    rows={4}
                  />
                  <FormHelperText>
                    Briefly describe the issue being experienced. Please do not
                    include the priority level in the field
                  </FormHelperText>
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-multiline-static"
                    label="Start Impact"
                  />
                  <FormHelperText>YYYY-MM-DD HH:MM:SS</FormHelperText>
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item>
                <InputLabel id="responder-label">Responders</InputLabel>
                <Button variant="outlined">Add Values</Button>
                <FormHelperText>
                  Tenant, market impacted *TEST TENANT* used for mock drills and
                  test validation
                </FormHelperText>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <FormControl fullWidth>
                  <InputLabel id="ccc-manager-label">CCC Manager*</InputLabel>
                  <Select
                    labelId="ccc-manager-label"
                    id="ccc-manager-type"
                    label="CCC Manager*"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText>Manager on call</FormHelperText>
                </FormControl>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignContent="center"
          alignItems="center"
          sx={{
            background: 'white',
            position: 'relative',
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
            Enter Valid INC, Slack, Zoom or leave blank to create
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
                  <TextField
                    id="outlined-multiline-static"
                    label="Incident Number"
                  />
                  <FormHelperText>
                    Please provide valid ServiceNOw INC or Leave blank to create
                  </FormHelperText>
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-multiline-static"
                    label="Channel ID"
                  />
                  <FormHelperText>
                    Provide channel name is exists - Leave blank to create
                  </FormHelperText>
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <FormControl fullWidth>
                  <TextField id="outlined-multiline-static" label="Zoom" />
                  <FormHelperText>
                    URL for zoom join - Leave blank to create
                  </FormHelperText>
                </FormControl>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignContent="center"
          alignItems="center"
          sx={{
            background: 'white',
            position: 'relative',
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
            Common
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
                  <TextField
                    id="outlined-multiline-static"
                    label="Impact"
                    multiline
                    rows={4}
                  />
                  <FormHelperText>
                    What impact our associates, customer, or suppliers are
                    seeing
                  </FormHelperText>
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-multiline-static"
                    label="Status"
                    multiline
                    rows={4}
                  />
                  <FormHelperText>Current incident status</FormHelperText>
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-multiline-static"
                    label="Action Items"
                    multiline
                    rows={4}
                  />
                  <FormHelperText>
                    Field for logging actions taken in the course of
                    troubleshooting the issue
                  </FormHelperText>
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-multiline-static"
                    label="Issue Owner"
                  />
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-multiline-static"
                    label="Directors Statement"
                    multiline
                    rows={4}
                  />
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <FormControl fullWidth>
                  <InputLabel id="issue-detection-label">
                    Issue Detection Method
                  </InputLabel>
                  <Select
                    labelId="issue-detection-label"
                    id="issue-detection-type"
                    label="Issue Detection Method"
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
                  <TextField
                    id="outlined-multiline-static"
                    label="Teams Engaged"
                    multiline
                    rows={4}
                  />
                  <FormHelperText>
                    Field for listing team engaged on the issue
                  </FormHelperText>
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-multiline-static"
                    label="Next Update"
                  />
                </FormControl>
                <FormHelperText>Next Update</FormHelperText>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignContent="center"
          alignItems="center"
          sx={{
            background: 'white',
            position: 'relative',
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
            Store, Club & Logistics
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
            <Grid item xs={12} md={12}>
              <Item>
                <InputLabel id="tenats-label">Tenants</InputLabel>
                <Button
                  variant="outlined"
                  onClick={() => handleSearchPopup('tenants')}
                >
                  Country
                </Button>
                <FormHelperText>
                  (Select one or more) Country code
                </FormHelperText>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item>
                <InputLabel id="tenats-label">Tenants</InputLabel>
                <Button
                  variant="outlined"
                  onClick={() => handleSearchPopup('tenants')}
                >
                  Focus
                </Button>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-multiline-static"
                    label="Site ID/Box ID"
                  />
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <FormControl fullWidth>
                  <InputLabel id="vendor-caused-label">
                    Vendor caused?
                  </InputLabel>
                  <Select
                    labelId="vendor-caused-label"
                    id="vendor-caused-type"
                    label="Vendor caused?"
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
                  <InputLabel id="issue-detection-label">HelpDesk</InputLabel>
                  <Select
                    labelId="issue-detection-label"
                    id="issue-detection-type"
                    label="Issue Detection Method"
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
                  <TextField
                    id="outlined-multiline-static"
                    label="Total Time of Outage"
                  />
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-multiline-static"
                    label="Confirm Impact"
                  />
                </FormControl>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignContent="center"
          alignItems="center"
          sx={{
            background: 'white',
            position: 'relative',
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
            Resolution Properties - Please remember to enter and impact time
            when sending RESOLVED
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
                  <TextField
                    id="outlined-multiline-static"
                    label="Root Cause"
                    multiline
                    rows={4}
                  />
                  <FormHelperText>
                    If known, please specify waht is belived to be the root
                    cause of this issue, Otherwise, leave it as "TBD"
                  </FormHelperText>
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-multiline-static"
                    label="End Impact"
                  />
                </FormControl>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignContent="center"
          alignItems="center"
          sx={{
            background: 'white',
            position: 'relative',
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
            !!!!!!!!!!!!!!!!!! PLEASE CHECK BEFORE SENDING !!!!!!!!!!!!!!!!!!
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
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Check To Send Notification*"
                  />
                </FormControl>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Item>
      <SearchPopup
        mode={searchPopupOpen}
        onClose={searchPopupClose}
        title="Tenants"
      />
    </div>
  );
}
