import React, { useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { setGoogleLogin } from "../redux/slice/userData/userData";
import { setgoogleauthData } from "../redux/slice/userData/userData";

const GoogleOAuth = () => {

    const dispatch = useDispatch();
    
  return (
    <div className="boder rounded-md">
      <GoogleOAuthProvider clientId="1046468207820-22guv1f37klpq244s5d367rd4u5v3oq7.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const token =  jwtDecode(JSON.stringify(credentialResponse));
            dispatch(setgoogleauthData(token))
            dispatch(setGoogleLogin(true));
            
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleOAuth;
