import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkComponent }        from './modules/work/work.component';
import { HomeComponent }        from "./modules/home/home.component";

const appRoutes: Routes = [
    {
        path: 'work',
        component: WorkComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
