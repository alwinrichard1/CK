import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodePageComponent } from './modules/code-page/code-page.component';


/** INCLUDE PATH IN ROUTES */
const routes: Routes = [
    { path: 'code', component: CodePageComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }

/**ADD COMPONENTS IN routingComponents */
export const routingComponents = [
    CodePageComponent
];
