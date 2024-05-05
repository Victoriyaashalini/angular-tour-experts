import { Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HomeCarouselComponent } from './views/home-carousel/home-carousel.component';
import { AboutComponent } from './views/about/about.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'navbar', pathMatch: 'full' },
	{path:'navbar', component:NavbarComponent},
	{path:'home-carousel',component:HomeCarouselComponent},
	{path:'about',component:AboutComponent}
];


