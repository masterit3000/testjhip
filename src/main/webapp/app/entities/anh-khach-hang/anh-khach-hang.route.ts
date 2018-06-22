import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { AnhKhachHangComponent } from './anh-khach-hang.component';
import { AnhKhachHangDetailComponent } from './anh-khach-hang-detail.component';
import { AnhKhachHangPopupComponent } from './anh-khach-hang-dialog.component';
import { AnhKhachHangDeletePopupComponent } from './anh-khach-hang-delete-dialog.component';

export const anhKhachHangRoute: Routes = [
    {
        path: 'anh-khach-hang',
        component: AnhKhachHangComponent,
        data: {
            // authorities: ['ROLE_USER'],
            pageTitle: 'AnhKhachHangs'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'anh-khach-hang/:id',
        component: AnhKhachHangDetailComponent,
        data: {
            // authorities: ['ROLE_USER'],
            pageTitle: 'AnhKhachHangs'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const anhKhachHangPopupRoute: Routes = [
    {
        path: 'anh-khach-hang-new',
        component: AnhKhachHangPopupComponent,
        data: {
            // authorities: ['ROLE_USER'],
            pageTitle: 'AnhKhachHangs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'anh-khach-hang/:id/edit',
        component: AnhKhachHangPopupComponent,
        data: {
            // authorities: ['ROLE_USER'],
            pageTitle: 'AnhKhachHangs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'anh-khach-hang/:id/delete',
        component: AnhKhachHangDeletePopupComponent,
        data: {
            // authorities: ['ROLE_USER'],
            pageTitle: 'AnhKhachHangs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
