import * as Yup from 'yup';

import Recipient from '../models/Recipient';

class RecipientController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.string().required(),
      cep: Yup.string().required(),
      cidade: Yup.string().required(),
      estado: Yup.string().required(),
      complemento: Yup.string().required(),
    });

    const schemaValid = await schema.isValid(request.body);

    if (!schemaValid) {
      return response.status(400).json({ error: 'Fail to validade request.' });
    }

    const recipient = await Recipient.create(request.body);

    return response.json(recipient);
  }

  async index(request, response) {
    const recipients = await Recipient.findAll({
      attributes: [
        'name',
        'rua',
        'numero',
        'complemento',
        'cidade',
        'estado',
        'cep',
      ],
    });

    return response.status(200).json(recipients);
  }
}

export default new RecipientController();
