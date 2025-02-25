import { Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { RandomComponent } from './random/random.component';
import { Random2Component } from './random2/random2.component';

export const routes: Routes = [
    {
        path: "",
        component: UserlistComponent
    },
    {
        path: "users/:userid",
        component: UserdetailComponent,
        children: [
            {
                path: 'skill',
                component: RandomComponent
            },
            {
                path: "edu",
                component: Random2Component
            }
        ]
    },
    {
        path:"search",
        component: UsersearchComponent
    }
];
