import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../connection';

const SampleModel = sequelize.define('SampleModel', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
});

// `sequelize.define` also returns the model
console.log(SampleModel === sequelize.models.User);

export default SampleModel