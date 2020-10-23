export default {
    s3: {
        REGION: "eu-central-1",
        BUCKET: "serverless-stack-notes-app-uploads-ndru",
    },
    apiGateway: {
        REGION: "eu-central-1",
        URL: "https://9ddr5ln8kf.execute-api.eu-central-1.amazonaws.com/dev",
    },
    cognito: {
        REGION: "eu-central-1",
        USER_POOL_ID: "eu-central-1_Jzz33Xd82",
        APP_CLIENT_ID: "it8ojvit49tqbumif3bmsnru1",
        IDENTITY_POOL_ID: "eu-central-1:de8a592a-469d-4056-9a72-f066c3793fcd",
    },
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY:
        "pk_test_51HenXTCnOHMm2kj1ogMd61r5FP53TlLpPqsYFmRvY6nIPMKIVNIPu5xWDhcChEkuwTuvirj2BtLuK8zkE3ZEWo9h00ig3tJaSd",
};
