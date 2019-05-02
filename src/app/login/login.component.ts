import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";


import { configureTnsOAuth } from "nativescript-oauth2";
import {
  TnsOaProvider,
  TnsOaProviderOptionsFacebook,
  TnsOaProviderFacebook,
} from "nativescript-oauth2/providers";

function configureOAuthProviderFacebook(): TnsOaProvider {
  const facebookProviderOptions: TnsOaProviderOptionsFacebook = {
    openIdSupport: "oid-none",
    clientId: "389174785263622",
    clientSecret: "e0459e0e3558312a69beb4ba6c992802",
    redirectUri: "https://www.facebook.com/connect/login_success.html",
    scopes: ["email"]
  };
  const facebookProvider = new TnsOaProviderFacebook(facebookProviderOptions);
  return facebookProvider;
}

configureTnsOAuth([
  configureOAuthProviderFacebook()
]);


import { TnsOAuthClient, ITnsOAuthTokenResult } from "nativescript-oauth2";
const client = new TnsOAuthClient('facebook');

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  moduleId: module.id,
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  facebookLogin(): void {
    client.loginWithCompletion((tokenResult: ITnsOAuthTokenResult, error) => {
        if (error) {
            console.error("back to main page with error: ");
            console.error(error);
        } else {
            console.log("back to main page with access token: ");
            console.log(tokenResult);
        }
    });
}

}
