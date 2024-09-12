import { Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

export const routes: Routes = [
    {path:"second",component:SecondComponent},
    {path:"third",component:ThirdComponent}

];
