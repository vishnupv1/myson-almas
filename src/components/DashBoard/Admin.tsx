import './Admin.css';
import { Box, Button, Card, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
const arr = [
  {
    name: 'Organization',
    numOfOrg: 15,
    feed: '+2 customers in 30 days'
  },
  {
    name: 'Employee',
    numOfOrg: 7,
    feed: '+50 customers in 30 days'
  },
  {
    name: 'Vendor',
    numOfOrg: 15,
    feed: '+1 customers in 30 days'
  }
];
const arr1 = [
  {
    name: 'feedback 2.0',
    r: 15,
    e: '+2 customers in 30 days',
    f: 'rttttt'
  },
  {
    name: 'feedback 2.0',
    r: 15,
    e: '+2 customers in 30 days',
    f: 'rttttt'
  }
];
const Admin = () => {
  return (
    <Box
      //   className="container"
      sx={{
        padding: '1px',
        width: {
          sm: '600px',
          md: '899px',
          ls: '1200px'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '5px',
          marginBottom: '10px',
          // marginRight: '15px',
          width: {
            sm: '560px',
            md: '886px'
          }
        }}
      >
        <Typography>Last 3 month's</Typography>
        <Card className="icon-card" sx={{ padding: '0px', margin: '0px' }}>
          <CalendarMonthIcon fontSize="small" />
        </Card>
        <Card className="icon-card" sx={{ padding: '0px', margin: '0px' }}>
          <FilterAltIcon fontSize="small" />
        </Card>
      </Box>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '24px',
            margin: '0px',
            padding: '0px'
          }}
        >
          <Box className="card-container">
            {arr.map((item, index) => (
              <Card key={index} className="card">
                <Typography sx={{ fontSize: '14px', opacity: 0.8, textAlign: 'center' }}>
                  {item.name}
                </Typography>
                <Typography variant="h5" sx={{ fontSize: '25px', fontWeight: 700 }}>
                  {item.numOfOrg}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '10px',
                    opacity: 0.6,
                    fontWeight: 650,
                    width: '80px',
                    textAlign: 'center'
                  }}
                >
                  {item.feed}
                </Typography>
              </Card>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { sm: 'space-evenly', md: 'flex-start' },
              //   marginTop: '10px',
              gap: '10px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { sm: 'column', md: 'row' },
                gap: '16px',
                justifyContent: 'flex-start'
              }}
            >
              {/* FD-cards */}
              {arr1.map((item, index) => (
                <Card
                  className="container"
                  key={index}
                  sx={{
                    // padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                    // width: '150px'
                  }}
                >
                  <Typography variant="h5" fontSize={12} fontWeight={700}>
                    {item.name}
                  </Typography>
                  <Typography fontSize={12}>{item.e}</Typography>
                  <Typography fontSize={12}>{item.f}</Typography>
                  <Typography fontSize={12}>{item.f}</Typography>
                  <Typography fontSize={12}>{item.f}</Typography>
                  <Button color="primary" variant="contained" className="btn">
                    report
                  </Button>
                </Card>
              ))}
            </Box>
            <Box className="support inner">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  gap: '14px',
                  flexDirection: 'column'
                  // lineheight: '20px', /* 125% */
                  // paddingBottom:'26px',
                }}
              >
                <Typography variant="h5" fontWeight={600} fontFamily={'Roboto'} fontSize={'16px'}>
                  SUPPORT STATUS
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '14px',
                  flexDirection: 'column',
                  padding: '16px'
                }}
              >
                {[
                  { name: 'total tikets', price: 23 },
                  { name: 'total tikets', price: 23 },
                  { name: 'total tikets', price: 23 }
                ].map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      backgroundColor: 'rgba(250, 250, 250, 1)'
                    }}
                  >
                    <Typography>{item.name}</Typography>
                    <Typography>{item.price}</Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ bottom: 10, left: 130, position: 'absolute', margin: '0px' }}>
                <Button
                  className="btn"
                  variant="contained"
                  // sx={{  position: 'absolute', margin: '0px',textAlign:"center" }}>
                >
                  report
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className="support outter"
          sx={{
            width: '319px',
            // height: '453px',
            // height: 453px;
            padding: '24px 16px 16px 16px',
            // width: '50%',
            // backgroundColor: 'yellow',
            // padding: '20px',
            display: { sm: 'none', md: 'block' },
            position: 'relative',
            // justifyContent: 'center',
            alignItems: 'center'
            // textAlign: 'center'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: '14px',
              flexDirection: 'column'
              // lineheight: '20px', /* 125% */
              // paddingBottom:'26px',
            }}
          >
            <Typography variant="h5" fontWeight={600} fontFamily={'Roboto'} fontSize={'16px'}>
              SUPPORT STATUS
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '14px',
              flexDirection: 'column',
              padding: '16px'
            }}
          >
            {[
              { name: 'total tikets', price: 23 },
              { name: 'total tikets', price: 23 },
              { name: 'total tikets', price: 23 }
            ].map((item, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  backgroundColor: 'rgba(250, 250, 250, 1)'
                }}
              >
                <Typography>{item.name}</Typography>
                <Typography>{item.price}</Typography>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              bottom: 10,
              left: 130,
              position: 'absolute',
              margin: '0px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Button className="btn" variant="contained">
              report
            </Button>
            <Typography></Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;
