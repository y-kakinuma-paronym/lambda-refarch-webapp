// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "1md4pn9f916kabhdgc0ph0fnlq",     // CognitoClientID
  "api_base_url": "https://qqtsb8u065.execute-api.ap-northeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-serverless-app-todo-202011291700.auth.ap-northeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1comdi5ky1t42.amplifyapp.com"                                      // AmplifyURL
};

export default config;
