import { DataTypes } from 'sequelize';
import { sequelize } from '../connection';

const UsersInvs = sequelize.define('UsersInvs', {
  uuid: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  },
  inventory: {
    type: DataTypes.STRING
  }
});

// `sequelize.define` also returns the model
console.log(UsersInvs === sequelize.models.User);

export default UsersInvs