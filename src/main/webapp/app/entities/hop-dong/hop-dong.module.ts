import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestjhipSharedModule } from '../../shared';
import {
    HopDongService,
    HopDongPopupService,
    HopDongComponent,
    HopDongDetailComponent,
    HopDongDialogComponent,
    HopDongPopupComponent,
    HopDongDeletePopupComponent,
    HopDongDeleteDialogComponent,
    hopDongRoute,
    hopDongPopupRoute,
} from './';

const ENTITY_STATES = [
    ...hopDongRoute,
    ...hopDongPopupRoute,
];

@NgModule({
    imports: [
        TestjhipSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        HopDongComponent,
        HopDongDetailComponent,
        HopDongDialogComponent,
        HopDongDeleteDialogComponent,
        HopDongPopupComponent,
        HopDongDeletePopupComponent,
    ],
    entryComponents: [
        HopDongComponent,
        HopDongDialogComponent,
        HopDongPopupComponent,
        HopDongDeleteDialogComponent,
        HopDongDeletePopupComponent,
    ],
    providers: [
        HopDongService,
        HopDongPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestjhipHopDongModule {}
