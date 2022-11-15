// Core
import {
  Column,
  Model,
  PrimaryKey,
  Table,
  AutoIncrement,
  Default,
} from "sequelize-typescript";
import { DataTypes, NOW } from "sequelize";


@Table({ modelName: "Users" })
export class Users extends Model<Users, CreationAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataTypes.INTEGER })
  id!: number;

  @Column({ field: "firstName", type: DataTypes.STRING })
  firstName!: string;

  @Column({ field: "lastName", type: DataTypes.STRING })
  lastName!: string;

  @Column({ field: "emailAddress", type: DataTypes.STRING })
  emailAddress!: string;

  @Default(NOW)
  @Column({ field: "createdAt", type: DataTypes.DATE })
  createdAt!: Date;

  @Column({ field: "updatedAt", type: DataTypes.DATE })
  updatedAt!: Date;
}

interface CreationAttributes {
  firstName: string;
  lastName: string;
  emailAddress: string;
  createdAt: string;
  updatedAt: string;
}

export default Users;
