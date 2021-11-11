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
import { DigitallogicComponent } from './digitallogic/digitallogic.component';
import { CoaComponent } from './coa/coa.component';
import { DatastructuresComponent } from './datastructures/datastructures.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { TheoryofcomputationComponent } from './theoryofcomputation/theoryofcomputation.component';
import { CompilerdesignComponent } from './compilerdesign/compilerdesign.component';
import { OperatingsystemComponent } from './operatingsystem/operatingsystem.component';
import { DatabasesComponent } from './databases/databases.component';
import { ComputernetworksComponent } from './computernetworks/computernetworks.component';


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
  {
    path: "digitallogic",
    component: DigitallogicComponent
  },
  {
    path: "coa",
    component: CoaComponent
  },
  {
    path: "datastructures",
    component: DatastructuresComponent
  },
  {
    path: "algorithms",
    component: AlgorithmsComponent
  },
  {
    path: "theoryofcomputation",
    component: TheoryofcomputationComponent
  },
  {
    path: "compilerdesign",
    component: CompilerdesignComponent
  },
  {
    path: "operatingsystem",
    component: OperatingsystemComponent
  },
  {
    path: "databases",
    component: DatabasesComponent
  },
  {
    path: "computernetworks",
    component: ComputernetworksComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
