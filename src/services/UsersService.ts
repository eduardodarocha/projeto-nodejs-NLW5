import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UsersService {
  private usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string) {
    const userExists = await this.usersRepository.findOne({ email });
//Verificar se user existe
    if (userExists) {
      return userExists;
    }
//Se não existir user então cria um e salva no DB
    const user = this.usersRepository.create({ email });

    await this.usersRepository.save(user);

    return user;
  }
}

export { UsersService };