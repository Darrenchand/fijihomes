import { Component,ViewChild } from '@angular/core';
import { Platform,Nav,MenuController,Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AgentListPage } from '../pages/agent-list/agent-list';
import { LoginPage } from '../pages/login/login';
import { MyHousesPage } from '../pages/my-houses/my-houses';
import { PropertyListPage } from '../pages/property-list/property-list';
import { SignupPage } from '../pages/signup/signup';
import { AllreviewsPage } from '../pages/allreviews/allreviews';
import { UserinspecttimePage} from '../pages/userinspecttime/userinspecttime';
import { AccountPage } from '../pages/account/account';
import { AboutPage } from '../pages/about/about';
import { ReviewPage } from '../pages/review/review';
import { CodegeneratorPage } from '../pages/codegenerator/codegenerator';
import { MapPage } from '../pages/map/map';
import { UserData } from '../providers/user-data';
import { SubmitHousePage } from '../pages/submit-house/submit-house';
import { MypropertiesPage } from '../pages/myproperties/myproperties';
import { AgentRequestPage } from '../pages/agent-request/agent-request';
import { AgentAddtimePage } from '../pages/agent-addtime/agent-addtime';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html',
  
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any;
  userrole:any;

  appPages: PageInterface[] = [
    { title: 'Properties', name:'PropertyListPage', component:PropertyListPage,  icon: 'home' },
    { title: 'Agents', name:'AgentListPage', component:AgentListPage,  icon: 'contacts' },
    { title: 'Map', name:'MapPage', component:MapPage, icon: 'map' },
    { title: 'About', name:'AboutPage', component:AboutPage,icon: 'information-circle' }
  ];

  loggedInPages: PageInterface[] = [
    { title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'person' },
    { title: 'My Favourites', name: 'MyHousesPage', component: MyHousesPage, icon: 'star' },
    { title: 'Submit House', name: 'SubmitHousePage', component: SubmitHousePage,icon: 'add-circle' },
    { title: 'Inspection Time', name: 'UserinspecttimePage', component: UserinspecttimePage,icon: 'eye' },
    { title: 'Review', name: 'ReviewPage', component: ReviewPage,icon: 'star-half' },
    { title: 'My Houses', name: 'MypropertiesPage', component: MypropertiesPage,icon: 'home' }
  ];

  agentInPages: PageInterface[] = [
    { title: 'Requests', name: 'AgentRequestPage', component: AgentRequestPage, icon: 'checkmark' },
    { title: 'Open House Time', name: 'AgentAddtimePage', component: AgentAddtimePage, icon: 'time' },
    { title: 'Code Generator', name: 'CodegeneratorPage', component: CodegeneratorPage, icon: 'barcode' },
    { title: 'All Reviews', name: 'AllreviewsPage', component: AllreviewsPage, icon: 'star' },
    { title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'person' }
  ];

  loggedOutPages: PageInterface[] = [
    { title: 'Login', name: 'LoginPage', component: LoginPage, icon: 'log-in' },
    { title: 'Signup', name: 'SignupPage', component: SignupPage, icon: 'person-add' }
  ];

  constructor(public userData: UserData,public storage: Storage,public events: Events,public menu: MenuController,public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen) {
    
    this.storage.get('haSeenTutorial').then((hasSeenTutorial) => {
        if (hasSeenTutorial) {
          if(localStorage.getItem('userdata'))
            {
              this.userrole = JSON.parse(localStorage.getItem('userdata'));
              console.log(this.userrole);
              this.enableMenu(this.userrole.role);
              this.rootPage = PropertyListPage;
            }
            else
            {
              this.rootPage = LoginPage;
              console.log("no storage",localStorage.getItem('userdata'));
            }            
        }
        else{
          console.log("fucked",localStorage.getItem('userdata'));
          this.rootPage = HomePage;
          
        }
        this.platformReady()
      });

    this.listenToLoginEvents();
  }

  platformReady() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  openPage(page: PageInterface) {
    let params = {};
      this.nav.setRoot(page.component).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    

    if (page.logsOut === true) {

    }
  }

  enableMenu(loggedIn: string) {
    if(loggedIn == "user")
    {
      this.menu.enable(true, 'loggedInMenu');
    }else if(loggedIn == "agent")
    {
      this.menu.enable(true,'agentInMenu');
    }
    else{
      this.menu.enable(true, 'loggedOutMenu');
    }
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu("user");
    });

    this.events.subscribe('agent:login', () => {
      this.enableMenu("agent");
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu("user");
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu("logout");
    });
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }
}