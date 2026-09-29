import { Routes } from '@angular/router';
import { About } from './Components/Pages/about/about';
import { Home } from './Components/Pages/home/home';
import { Programmes } from './Components/Pages/programmes/programmes';
import { Resources } from './Components/Pages/resources/resources';
import { Events } from './Components/Pages/events/events';
import { Media } from './Components/Pages/media/media';
import { Opportunities } from './Components/Pages/opportunities/opportunities';
import { Community } from './Components/Pages/community/community';
import { Login } from './Components/Pages/login/login';
import { JoinYra } from './Components/Pages/join-yra/join-yra';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "about", component: About },
    { path: "programmes", component: Programmes },
    { path: "resources", component: Resources },
    { path: "events", component: Events },
    { path: "media", component: Media },
    { path: "opportunities", component: Opportunities },
    { path: "community", component: Community },
    { path: "login", component: Login },
    { path: "join-yra", component: JoinYra },
];
