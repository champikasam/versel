export default async function handler(req, res) {
    const signUpOtp = req.body.signUpOtp;

    const completeUserSignUpMutation = `
mutation CompleteConsumerSignUp {
  completeConsumerSignUp(input: {
    signUpOtp: "${signUpOtp}"
  }) {
    idpUserId
  }
}
`;

  const gqlQuery = {
    query: completeUserSignUpMutation,
    variables: null,
    operationName: 'CompleteConsumerSignUp',
  };

  const completeUserSignUpResponse = await (
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
    
    res.status(200).json(completeUserSignUpResponse)
  }
  