import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { AboutgateComponent } from './aboutgate/aboutgate.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { StreamsComponent } from './streams/streams.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { LogoutComponent } from './logout/logout.component';
import { MentorComponent } from './mentor/mentor.component';
import { TermsofuseComponent } from './termsofuse/termsofuse.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CseComponent } from './cse/cse.component';
import { EmComponent } from './em/em.component';

const routes: Routes = [
  {
    path: "register",
    component: AccountComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "aboutus",
    component: AboutusComponent
  },
  {
    path: "aboutgate",
    component: AboutgateComponent
  },
  {
    path: "aboutgate",
    component: AboutgateComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "feedback",
    component: FeedbackComponent

  },
  {
    path: "streams",
    component: StreamsComponent
  },
  {
    path: "privacy",
    component: PrivacypolicyComponent
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "mentor",
    component: MentorComponent
  },
  {
    path: "terms",
    component: TermsofuseComponent
  },
  {
    path: "home",
    component: HomepageComponent
  },
  {
    path: "cse",
    component: CseComponent
  },
  {
    path: "em",
    component: EmComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
