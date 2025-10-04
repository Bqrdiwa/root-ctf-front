import React from 'react';
import Icon from '../../@material/Icon/Icon';
import { logout } from '../../../store/action/user';
import { useDispatch } from 'react-redux';
import { ACCESS_TOKEN, REFRESH_TOKEN, USER_AVATAR, USER_ID, USER_NAME, USER_ROLE } from '../../../store/constant/locaStorageNames';


const Logout = () => {

  const dispatch = useDispatch();

  const logoutHandle = () => {

    localStorage.removeItem(USER_NAME);
    localStorage.removeItem(USER_ROLE);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(USER_AVATAR);

    localStorage.removeItem('searchUsers')
    localStorage.removeItem('searchKeyword')
    localStorage.removeItem('searchChallenges')
    localStorage.removeItem('searchWorkshops')
    localStorage.removeItem('workshopId')
    localStorage.removeItem('work')
    localStorage.removeItem('workshop')

    dispatch(logout());
  }

  return (
    <div onClick={logoutHandle}>
      <Icon name="logout" className="cursor-pointer " alt="logout"/>
    </div>
  )
}


export default Logout;


