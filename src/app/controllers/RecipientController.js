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
}

export default new RecipientController();