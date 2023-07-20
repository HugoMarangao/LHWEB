import paypal from '@paypal/checkout-server-sdk';
import { cliente } from '../../Components/Config/paypalConfig'; // Importando a função cliente do arquivo paypalConfig

const payPalClient = cliente();  // Use a função para pegar a instância do cliente

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  try {
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer('return=representation');
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: '99.00',
          },
        },
      ],
    });

    const order = await payPalClient.execute(request);
    const orderID = order.result.id;

    res.status(200).json({ orderID });
  } catch (error) {
    console.error('Erro ao criar a ordem de pagamento:', error.message, error.stack); 
    res.status(500).json({ error: 'Ocorreu um erro ao processar o pagamento. Por favor, tente novamente mais tarde.', detailedError: error.message });
  }
}
