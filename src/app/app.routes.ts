import { Routes } from '@angular/router';
import { Home } from './Components/Pages/home/home';
import { ResourceOpportunities } from './Components/Pages/opportunities/resource-opportunities/resource-opportunities';
import { ProgramsOpportunities } from './Components/Pages/opportunities/programs-opportunities/programs-opportunities';
import { CommunityOpportunities } from './Components/Pages/opportunities/community-opportunities/community-opportunities';
import { authGuard } from './Guards/auth-guard';
import { opportunitiesChildGuard } from './Guards/opportunities-child-guard';
import { matchGuard } from './Guards/match-guard';
import { unsavedProgressGuard } from './Guards/unsaved-progress-guard';

export const routes: Routes = [
    { path: "", component: Home },
    {
        path: "about",
        loadComponent: () => import('./Components/Pages/about/about').then((c) => c.About),
    },
    {
        path: "programmes",
        loadComponent: () => import('./Components/Pages/programmes/programmes').then((c) => c.Programmes),
    },
    {
        path: "resources",
        loadComponent: () => import('./Components/Pages/resources/resources').then((c) => c.Resources),
        canActivate: [authGuard],
        canMatch: [matchGuard],
    },
    {
        path: "events",
        loadComponent: () => import('./Components/Pages/events/events').then((c) => c.Events),
    },
    {
        path: "opportunities",
        canActivateChild: [opportunitiesChildGuard],
        canDeactivate: [unsavedProgressGuard],
        loadComponent: () => import('./Components/Pages/opportunities/opportunities').then((c) => c.Opportunities),
        children: [
            { path: '', redirectTo: 'resource-opportunities', pathMatch: 'full' },
            { path: 'resource-opportunities', component: ResourceOpportunities },
            { path: 'programs-opportunities', component: ProgramsOpportunities },
            { path: 'community-opportunities', component: CommunityOpportunities },
        ],
    },
    {
        path: "community",
        loadComponent: () => import('./Components/Pages/community/community').then((c) => c.Community)
    },
];
