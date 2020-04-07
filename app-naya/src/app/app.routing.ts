import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core'

const  routes:  Routes  = [
    {path:  'auth', loadChildren:  './auth/auth.module#AuthModule'}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes)