import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'geofence',
    loadChildren: () => import('./geofence/geofence.module').then( m => m.GeofencePageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'add-fingerprint',
    loadChildren: () => import('./add-fingerprint/add-fingerprint.module').then( m => m.AddFingerprintPageModule)
  },
  {
    path: 'verify-fingerprint',
    loadChildren: () => import('./verify-fingerprint/verify-fingerprint.module').then( m => m.VerifyFingerprintPageModule)
  },
  {
    path: 'add-face',
    loadChildren: () => import('./add-face/add-face.module').then( m => m.AddFacePageModule)
  },
  {
    path: 'verify-face',
    loadChildren: () => import('./verify-face/verify-face.module').then( m => m.VerifyFacePageModule)
  },
  {
    path: 'leave',
    loadChildren: () => import('./leave/leave.module').then( m => m.LeavePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
