import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { CursosComponent } from './pages/cursos/cursos.component'

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'cursos',
        component: CursosComponent
    }
];
