import { Button, Chip, Divider, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

import './style.css';
import { namanHR_logo, namanStaffing_logo, nhrt_logo } from '../../services/constants';

function createTenantData(
  logo: string,
  name: string,
  desc: string,
  domain: string,
  industry: string,
  isActive: boolean
) {
  return { logo, name, desc, domain, industry, isActive };
}

const rows = [
  createTenantData(
    nhrt_logo,
    'NHRTechnologies',
    'Organization Culture Transformation',
    'nhrtechnologies.com',
    'Human Resources',
    true
  ),
  createTenantData(
    namanStaffing_logo,
    'Naman Staffing',
    'Organization Culture Transformation',
    'namanstaffing.com',
    'Human Resources',
    false
  ),
  createTenantData(
    namanHR_logo,
    'Naman HR',
    'Organization Culture Transformation',
    'namanhr.com',
    'Human Resources',
    false
  )
];

const TenantManagement = () => {
  let navigate = useNavigate();

  const handleCreateTenant = () => {
    navigate('/tenants/create', { state: { mode: 'CREATE_MODE' } });
  };

  const handleViewTenant = (tenant: any) => {};

  const handleEditTenant = (tenant: any) => {};

  return (
    <>
      <div className="main">
        <div className="head">
          <Typography variant="h4">All Tenants</Typography>
          <div className="right">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={handleCreateTenant}
            >
              Add Tenant
            </Button>
          </div>
        </div>
        <TableContainer component={Paper} className="m-t-10">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell colSpan={2} align="left">
                  Tenant Name
                </TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Domain</TableCell>
                <TableCell>Industry</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    <div className="tenant-name-logo">
                      <img src={`data:image/png;base64,${row.logo}`} className="tenant-logo" />
                    </div>
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.desc}</TableCell>
                  <TableCell>{row.domain}</TableCell>
                  <TableCell>{row.industry}</TableCell>
                  <TableCell>
                    {row.isActive ? (
                      <Chip label="Active" color="success" />
                    ) : (
                      <Chip label="In-Active" color="error" />
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton aria-label="view" onClick={(row) => handleViewTenant(row)}>
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton aria-label="edit" onClick={(row) => handleEditTenant(row)}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default TenantManagement;
