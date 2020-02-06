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
        'id',
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

  async show(request, response) {
    const schema = Yup.object().shape({
      id: Yup.number(),
    });

    const schemaValid = await schema.isValid(request.params);

    if (!schemaValid) {
      return response.status(400).json({ error: 'Fail to validade request.' });
    }
    const { id } = request.params;

    const recipient = await Recipient.findOne(
      { where: { id } },
      {
        attributes: [
          'name',
          'rua',
          'numero',
          'complemento',
          'cidade',
          'estado',
          'cep',
        ],
      }
    );

    if (!recipient) {
      return response.status(401).json({ error: 'Recipient not found.' });
    }

    return response.status(200).json(recipient);
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string(),
      rua: Yup.string(),
      numero: Yup.string(),
      cep: Yup.string(),
      cidade: Yup.string(),
      estado: Yup.string(),
      complemento: Yup.string(),
    });

    const schemaValidParams = await schema.isValid(request.params);
    const schemaValidBody = await schema.isValid(request.params);
    const schemaValid = schemaValidBody && schemaValidParams;

    if (!schemaValid) {
      return response.status(400).json({ error: 'Fail to validade request.' });
    }

    const { id } = request.params;

    const recipient = await Recipient.findOne({ where: { id } });

    if (!recipient) {
      return response.status(400).json({ error: 'Recipient not found!' });
    }

    await recipient.update(request.body);

    return response.status(201).json({
      id,
      name: recipient.name,
      rua: recipient.rua,
      numero: recipient.admin,
      complemento: recipient.complemento,
      cidade: recipient.cidade,
      estado: recipient.estado,
      cep: recipient.cep,
    });
  }

  async delete(request, response) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    const schemaValid = await schema.isValid(request.params);

    if (!schemaValid) {
      return response.status(400).json({ error: 'Fail to validade request.' });
    }

    const { id } = request.params;

    const recipient = await Recipient.findOne({ where: { id } });

    if (!recipient) {
      return response.status(400).json({ error: 'Recipient not found!' });
    }

    Recipient.destroy({ where: { id } });

    return response.sendStatus(204);
  }
}

export default new RecipientController();
