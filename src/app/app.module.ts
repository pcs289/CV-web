import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MyAsideComponent } from './my-aside/my-aside.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { InterestsComponent } from './interests/interests.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'skills',      component: SkillsComponent },
  { path: 'experience',component: ExperienceComponent},
  { path: 'interests',component: InterestsComponent},
  { path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },{
      path: '**',
    redirectTo: '/about'}
];

@NgModule({
  declarations: [
    AppComponent,
    MyAsideComponent,
    MyNavComponent,
    ContactComponent,
    SkillsComponent,
    ExperienceComponent,
    InterestsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true}) // <-- debugging purposes only
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
