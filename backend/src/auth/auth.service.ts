import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './auth.entity';  // Asegúrate de que la ruta sea correcta
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user:User[] = await this.findAll();
     // Aquí deberías buscar el usuario por username
    for (let index = 0; index < user.length; index++) {

        if (user[index].username == username && user[index].password === password) {
          return user[index]
          }


    }

    return null;
  }

  async login(username: string, password: string): Promise<{ token: string }> {
    const user = await this.validateUser(username, password);

    if (!user) {

      throw new Error('Invalid credentials');

    }
  

    let payload  = { username: user.username, sub: user.id,admin:false};

    if(user.admin){
       payload = { username: user.username, sub: user.id ,admin: true};
    }
    return {

        token: this.jwtService.sign(payload),

    };

}
  // Crear un nuevo usuario
  async create(username: string, password: string, admin?: boolean): Promise<User> {
    const user = this.userRepository.create({ username, password, admin });
    return await this.userRepository.save(user);
  }

  // Obtener todos los usuarios
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  // Obtener un usuario por ID
  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne({where:{id}});
  }

  // Actualizar un usuario
  async update(id: number, username?: string, password?: string, admin?: boolean): Promise<User> {
    await this.userRepository.update(id, { username, password, admin });
    return this.findOne(id);
  }

  // Eliminar un usuario
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
