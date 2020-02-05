import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cep: Sequelize.STRING,
        rua: Sequelize.STRING,
        numero: Sequelize.STRING,
        cidade: Sequelize.STRING,
        estado: Sequelize.STRING,
        complemento: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Recipient;
