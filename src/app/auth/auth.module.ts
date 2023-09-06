import { NgModule } from "@angular/core";
import SharedModule from "../shared.module";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LoginComponent } from "./login/login.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'signup',
      component: SignUpComponent
    }
  ]

@NgModule({
    declarations: [SignUpComponent, LoginComponent],
    imports: [SharedModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export default class AuthModule {}