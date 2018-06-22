import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestjhipSharedModule } from '../../shared';
import {
    LichSuDongTienService,
    LichSuDongTienPopupService,
    LichSuDongTienComponent,
    LichSuDongTienDetailComponent,
    LichSuDongTienDialogComponent,
    LichSuDongTienPopupComponent,
    LichSuDongTienDeletePopupComponent,
    LichSuDongTienDeleteDialogComponent,
    lichSuDongTienRoute,
    lichSuDongTienPopupRoute,
} from './';

const ENTITY_STATES = [
    ...lichSuDongTienRoute,
    ...lichSuDongTienPopupRoute,
];

@NgModule({
    imports: [
        TestjhipSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        LichSuDongTienComponent,
        LichSuDongTienDetailComponent,
        LichSuDongTienDialogComponent,
        LichSuDongTienDeleteDialogComponent,
        LichSuDongTienPopupComponent,
        LichSuDongTienDeletePopupComponent,
    ],
    entryComponents: [
        LichSuDongTienComponent,
        LichSuDongTienDialogComponent,
        LichSuDongTienPopupComponent,
        LichSuDongTienDeleteDialogComponent,
        LichSuDongTienDeletePopupComponent,
    ],
    providers: [
        LichSuDongTienService,
        LichSuDongTienPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestjhipLichSuDongTienModule {}
