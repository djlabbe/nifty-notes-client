export default {
    s3: {
        REGION: "us-west-2", 
        BUCKET: "nifty-notes"
    }, 
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://97yxujesnj.execute-api.us-west-2.amazonaws.com/prod" 
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_MGUCpYLHn",
        APP_CLIENT_ID: "6c2qv247ah1ll5gbmmpvqda2j9",
        IDENTITY_POOL_ID: "us-west-2:0ef8608d-b0ec-4b3c-ad37-312b91d7fa67"
    }
}