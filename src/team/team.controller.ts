import { Get, Controller, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Team } from './team.entity';
import { TeamService } from './team.service';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  async findAll(): Promise<Team[]> {
    return await this.teamService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Team> {
    return await this.teamService.findOne(params.id);
  }

  @Post()
  async createTeam(@Body() team: Team): Promise<Team> {
    return await this.teamService.createTeam(team);
  }

  @Put(':id')
  async updateTeam(@Param() { id }, @Body() team: Team) {
    return await this.teamService.updateTeam(id, team);
  }

  @Delete(':id')
  async deleteTeam(@Param() { id }) {
    return await this.teamService.deleteTeam(id);
  }
}
