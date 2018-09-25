import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { UserData } from '../providers/user-data';
import { MyApp } from './app.component';
import { Stripe } from '@ionic-native/stripe';
import { AgentListPage } from '../pages/agent-list/agent-list';
import { LoginPage } from '../pages/login/login';
import { CodegeneratorPage } from '../pages/codegenerator/codegenerator';
import { AllreviewsPage } from '../pages/allreviews/allreviews';
import { PayPage } from '../pages/pay/pay';
import { MyHousesPage } from '../pages/my-houses/my-houses';
import { PropertyListPage } from '../pages/property-list/property-list';
import { SignupPage } from '../pages/signup/signup';
import { AccountPage } from '../pages/account/account';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { UserinspecttimePage} from '../pages/userinspecttime/userinspecttime';
import { ReviewPage } from '../pages/review/review';
import { MapPage } from '../pages/map/map';
import { AgentRequestPage } from '../pages/agent-request/agent-request';
import { AgentAddtimePage } from '../pages/agent-addtime/agent-addtime';
import { MypropertiesPage } from '../pages/myproperties/myproperties';
import { SubmitHousePage } from '../pages/submit-house/submit-house';
import { PropertyDetailPage } from '../pages/property-detail/property-detail';
import { HttpModule } from "@angular/http";
import { IonicStorageModule } from '@ionic/storage';
import { FileUploadModule } from 'ng2-file-upload';
import { IonRating } from '../ion-rating/ion-rating';
import { FileSelectDirective,FileUploader  } from 'ng2-file-upload';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AgentListPage,
    LoginPage,
    IonRating,
    MyHousesPage,
    PropertyListPage,
    UserinspecttimePage,
    SignupPage,
    ReviewPage,
    AccountPage,
    AboutPage,
    MapPage,
    CodegeneratorPage,
    AllreviewsPage,
    PropertyDetailPage,
    SubmitHousePage,
    MypropertiesPage,
    AgentRequestPage,
    AgentAddtimePage,
    PayPage

  ],
  imports: [
    BrowserModule,HttpModule,FileUploadModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AgentListPage,
    LoginPage,
    MyHousesPage,
    PropertyListPage,
    SignupPage,
    UserinspecttimePage,
    CodegeneratorPage,
    ReviewPage,
    AllreviewsPage,
    AccountPage,
    AboutPage,
    MapPage,
    PropertyDetailPage,
    SubmitHousePage,
    MypropertiesPage,
    AgentRequestPage,
    AgentAddtimePage,
    PayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserData,Stripe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
