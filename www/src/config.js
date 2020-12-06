// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7m31018rapva3jj5quc2qdv55v",     // CognitoClientID
  "api_base_url": "https://r5ff8dheji.execute-api.ap-northeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-serverless.auth.ap-northeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d14yu0p8gd7nex.amplifyapp.com"                                      // AmplifyURL
};

export default config;
