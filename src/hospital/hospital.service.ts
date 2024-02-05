import { Injectable } from '@nestjs/common';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HospitalService {
  constructor(private prisma: PrismaService) {}

  createHospital(createHospitalDto: CreateHospitalDto) {
    return 'this action add a new hospital';
  }

  findAll() {
    return this.prisma.hospital.findMany();
  }

  findOne(id: number) {
    return this.prisma.hospital.findUnique({ where: { id } });
  }

  update(id: number, updateHospitalDto: UpdateHospitalDto) {
    return this.prisma.hospital.update({
      where: { id },
      data: updateHospitalDto,
    });
  }

  remove(id: number) {
    return this.prisma.hospital.delete({ where: { id } });
  }
}
