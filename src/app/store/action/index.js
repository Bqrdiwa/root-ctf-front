import {LOGIN_USER_DATA} from '../constant/Constant';

export  const getUserDataLogin=(fullname)=>{
  const action={
    type:LOGIN_USER_DATA,
    fullname,
  }
  console.log("action in getUserDataLogin",action)
  return action;
} 
