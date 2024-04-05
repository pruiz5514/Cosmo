import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { CursosComponent } from './pages/cursos/cursos.component'
import { SextoComponent } from './pages/sexto/sexto.component'
import { SeptimoComponent } from './pages/septimo/septimo.component'
import { OctavoComponent } from './pages/octavo/octavo.component'

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'cursos',
        component: CursosComponent
    },
    {
        path: 'sexto',
        component: SextoComponent
    },
    {
        path: 'septimo',
        component: SeptimoComponent
    },
    {
        path: 'octavo',
        component: OctavoComponent
    }
];