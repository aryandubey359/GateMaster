import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    LoginComponent,
    AboutgateComponent,
    AboutusComponent,
    ContactComponent,
    FeedbackComponent,
    StreamsComponent,
    PrivacypolicyComponent,
    LogoutComponent,
    MentorComponent,
    TermsofuseComponent,
    HomepageComponent,
    CseComponent,
    EmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
