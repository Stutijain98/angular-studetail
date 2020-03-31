import { Routes, RouterModule, PreloadAllModules,NoPreloading } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import {InsertComponent} from './insert/insert.component';


const ROUTES: Routes =[
  {
    path: 'insert', component: InsertComponent
  },
];
export const Route: ModuleWithProviders = RouterModule.forRoot(ROUTES, {
  preloadingStrategy: NoPreloading,
});