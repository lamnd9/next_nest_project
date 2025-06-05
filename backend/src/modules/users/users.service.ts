import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model, SortOrder } from 'mongoose';
import { hashPassword } from 'src/helpers/util';
import aqp from 'api-query-params';

@Injectable()
export class UsersService {
  constructor (
    @InjectModel(User.name) 
    private userModel: Model<User>
  ) {}
  isEmailExists = async (email: string) => await this.userModel.exists({ email });
  
  async create(createUserDto: CreateUserDto) {
    // hash password
    const hashedPassword = await hashPassword(createUserDto.password);
    const isEmailExists = await this.isEmailExists(createUserDto.email);
    if (isEmailExists) {
      throw new BadRequestException('Email already exists: ' + createUserDto.email);
    }
    const user = new this.userModel({
      ...createUserDto,
      password: hashedPassword
    });
    return await user.save(); 
    // return 'This action adds a new user';
  }

  async findAll(query: string) {
    const { filter, skip, limit, sort, projection, population } = aqp(query);
    
    // Tính toán skip dựa trên current và pageSize
    const current = Number(filter.current) || 1;
    const pageSize = Number(filter.pageSize) || 10;
    const skipValue = (current - 1) * pageSize;

    // Xóa các trường không cần thiết khỏi filter
    delete filter.current;
    delete filter.pageSize;

    const [users, total] = await Promise.all([
      this.userModel.find(filter)
        .skip(skipValue)
        .limit(pageSize)
        .sort(sort as { [key: string]: SortOrder })
        .select(projection)
        .populate(population),
      this.userModel.countDocuments(filter)
    ]);

    return {
      meta: {
        current: current,
        pageSize: pageSize,
        total: total,
        totalPages: Math.ceil(total / pageSize)
      },
      data: users
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
