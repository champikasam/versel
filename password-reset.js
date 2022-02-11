export default async function handler(req, res) {
    const resetOtp = req.body.resetOtp;
    const newPassword = 'HelloWorld!234';

    console.log(resetOtp);

    const completePasswordResetMutation = `
mutation CompleteConsumerPasswordReset {
  completeConsumerPasswordReset(input: {
    resetOtp: "${resetOtp}"
    newPassword: "${newPassword}"
  }) {
    idpUserId
  }
}
`;

  const gqlQuery = {
    query: completePasswordResetMutation,
    variables: null,
    operationName: 'CompleteConsumerPasswordReset',
  };

  const completePasswordResetResponse = await (
    await fetch(`http://localhost:10601/graphql`, {
      method: 'POST',
      cache: 'no-cache',
      redirect: 'follow',
      referrerPolicy: 'origin',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(gqlQuery),
    })
  ).json();
    console.log(completePasswordResetResponse);
    
    res.status(200).json(completePasswordResetResponse)
  }
  