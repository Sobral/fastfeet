import Recipient from '../models/Recipient';

class RecipientController {
  async store(request, response) {
    const recipient = await Recipient.create(request.body);

    return response.json(recipients);
  }
}

export default new RecipientController();
