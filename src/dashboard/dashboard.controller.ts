import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DashboardService } from './dashboard.service';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';

@Controller()
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @MessagePattern('createDashboard')
  create(@Payload() createDashboardDto: CreateDashboardDto) {
    return this.dashboardService.create(createDashboardDto);
  }

  @MessagePattern('findAllDashboard')
  findAll() {
    return this.dashboardService.findAll();
  }

  @MessagePattern('findOneDashboard')
  findOne(@Payload() id: number) {
    return this.dashboardService.findOne(id);
  }

  @MessagePattern('updateDashboard')
  update(@Payload() updateDashboardDto: UpdateDashboardDto) {
    return this.dashboardService.update(updateDashboardDto.id, updateDashboardDto);
  }

  @MessagePattern('removeDashboard')
  remove(@Payload() id: number) {
    return this.dashboardService.remove(id);
  }
}
