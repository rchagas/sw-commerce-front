import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../app-material/app-material.module';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';

const contentRoutes =[
    {path:'', component: ContentComponent},
];

@NgModule({
    imports:[
        CommonModule,
        AppMaterialModule,
        RouterModule.forChild(contentRoutes),
    ],
    exports:[
        ContentComponent,
    ],
    declarations:[
        ContentComponent,
        AddCartComponent,
    ],
    entryComponents:[
        AddCartComponent,
    ],
    providers:[CookieService]
})

export class ContentModule{}