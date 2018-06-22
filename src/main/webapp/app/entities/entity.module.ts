import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TestjhipTinhModule } from './tinh/tinh.module';
import { TestjhipHuyenModule } from './huyen/huyen.module';
import { TestjhipXaModule } from './xa/xa.module';
import { TestjhipKhachHangModule } from './khach-hang/khach-hang.module';
import { TestjhipCuaHangModule } from './cua-hang/cua-hang.module';
import { TestjhipNhanVienModule } from './nhan-vien/nhan-vien.module';
import { TestjhipAnhKhachHangModule } from './anh-khach-hang/anh-khach-hang.module';
import { TestjhipHopDongModule } from './hop-dong/hop-dong.module';
import { TestjhipLichSuDongTienModule } from './lich-su-dong-tien/lich-su-dong-tien.module';
import { TestjhipBatHoModule } from './bat-ho/bat-ho.module';
import { TestjhipVayLaiModule } from './vay-lai/vay-lai.module';
import { TestjhipGhiNoModule } from './ghi-no/ghi-no.module';
import { TestjhipLichSuThaoTacHopDongModule } from './lich-su-thao-tac-hop-dong/lich-su-thao-tac-hop-dong.module';
import { TestjhipThuChiModule } from './thu-chi/thu-chi.module';
import { TestjhipTaiSanModule } from './tai-san/tai-san.module';
import { TestjhipAnhTaiSanModule } from './anh-tai-san/anh-tai-san.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        TestjhipTinhModule,
        TestjhipHuyenModule,
        TestjhipXaModule,
        TestjhipKhachHangModule,
        TestjhipCuaHangModule,
        TestjhipNhanVienModule,
        TestjhipAnhKhachHangModule,
        TestjhipHopDongModule,
        TestjhipLichSuDongTienModule,
        TestjhipBatHoModule,
        TestjhipVayLaiModule,
        TestjhipGhiNoModule,
        TestjhipLichSuThaoTacHopDongModule,
        TestjhipThuChiModule,
        TestjhipTaiSanModule,
        TestjhipAnhTaiSanModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestjhipEntityModule {}
