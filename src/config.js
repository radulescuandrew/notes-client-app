const dev = {
    s3: {
        REGION: "eu-central-1",
        BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1kdlzcydt0p9y",
    },
    apiGateway: {
        REGION: "eu-central-1",
        URL: "https://9ddr5ln8kf.execute-api.eu-central-1.amazonaws.com/dev",
    },
    cognito: {
        REGION: "eu-central-1",
        USER_POOL_ID: "eu-central-1_uBe7kcHzR",
        APP_CLIENT_ID: "20k6bjbfe13vus842thitdmr05",
        IDENTITY_POOL_ID: "eu-central-1:56aab227-b306-4151-b165-9d9c1ca5d3eb",
    },
    STRIPE_KEY:
        "pk_test_51HenXTCnOHMm2kj1ogMd61r5FP53TlLpPqsYFmRvY6nIPMKIVNIPu5xWDhcChEkuwTuvirj2BtLuK8zkE3ZEWo9h00ig3tJaSd",
};

const config = process.env.REACT_APP_STAGE == "prod" ? null : dev;

export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config,
};
