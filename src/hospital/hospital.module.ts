import { Module } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { HospitalController } from './hospital.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  controllers: [HospitalController],
  providers: [HospitalService],
  imports:[PrismaModule],
})
export class HospitalModule {}
