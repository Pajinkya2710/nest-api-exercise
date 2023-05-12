import { Module } from '@nestjs/common';
import { CommonXService } from './common-x.service';
//Modules can export their internal providers. In addition, they can re-export modules that they import the CommonXModule is both imported into and exported from the CoreModule
@Module({
  providers: [CommonXService],
  exports: [CommonXService],
})
export class CommonXModule {}
