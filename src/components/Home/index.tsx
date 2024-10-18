// import { Button } from "@mui/material";
// import { useAuth } from "../../hooks/useAuth";
// import { UserService } from "../../services/UserService";
// import { useTranslation } from 'react-i18next';
import { Card } from '@mui/material';
import Admin from '../DashBoard/Admin';
const Dashboard = () => {
  // const { t } = useTranslation();

  // const { signOut, getAuthMethodType, user } = useAuth();
  // const getUserDetails = async () => {
  //     const users = await UserService.getUsersList();
  //     console.log(users);
  // }
  return (
    <>
      {/* <div>
            <h1>{t('Home Dashboard')} {t('hello_world')}</h1>
            {!user ? (
                <h1>...</h1>
            ) : (
                <div>
                    {!!user.photo && (
                        <aside className="photo">
                            <img src={user.photo} />
                        </aside>
                    )}
                    <p>
                        <span>E-mail: </span>
                        <strong>{user.email}</strong>
                    </p>
                    <p>
                        <span>Name: </span>
                        <strong>{user.username}</strong>
                    </p>
                    <p>
                        <span>Authentication Type </span>
                        <strong>{getAuthMethodType()}</strong>
                    </p>
                </div>
            )}
            <Button color="primary" onClick={() => getUserDetails()}>Get User Details</Button>
            <Button color="primary" variant="contained" onClick={() => signOut()}>Logout</Button>
        </div> */}
      {/* <Card sx={{ display: 'flex', justifyContent: 'center' }}> */}
      <Admin />
      {/* </Card> */}
    </>
  );
};

export default Dashboard;
