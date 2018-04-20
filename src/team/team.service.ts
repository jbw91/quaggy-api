import { Component, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';
import { Z_STREAM_ERROR } from 'zlib';
import { TeamNameExeption } from './team.exceptions';

@Component()
export class TeamService {
  constructor(@InjectRepository(Team) private readonly teamRepository: Repository<Team>) {}

  async findAll(): Promise<Team[]> {
    return await this.teamRepository.find();
  }

  async findOne(id: number): Promise<Team> {
    return await this.teamRepository.findOneById(id);
  }

  async createTeam(team: Team): Promise<Team> {
    const newTeam = new Team();
    newTeam.name = team.name;
    newTeam.owner = team.owner;
    newTeam.users = team.users;
    try {
      return await this.teamRepository.save(newTeam);
    } catch (e) {
      if (e.code === 'ER_DUP_ENTRY') {
        if (e.message.indexOf('name') !== -1) {
          throw new TeamNameExeption(newTeam.name);
        }
      }
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateTeam(id: number, team: Team): Promise<void> {
    return await this.teamRepository.updateById(id, team);
  }

  async deleteTeam(id: number): Promise<void> {
    return await this.teamRepository.deleteById(id);
  }
}
