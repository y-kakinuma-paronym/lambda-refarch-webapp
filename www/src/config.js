// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7780g7pa3l6d6t118u3uauej3t",     // CognitoClientID
  "api_base_url": "https://o4uo6256sa.execute-api.ap-northeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-serverless-app-todo-202012032249.auth.ap-northeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d2861nlb6b4r63.amplifyapp.com"                                      // AmplifyURL
};

export default config;
