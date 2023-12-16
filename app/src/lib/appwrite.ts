import sdk from "node-appwrite";

const client = new sdk.Client();

const URL = process.env.NEXT_APPWRITE_URL!;
const PROJECT = process.env.NEXT_APPWRITE_PROJECT!;
const APIKEY = process.env.APP_WRITE_API_KEY!;

client.setEndpoint(URL).setProject(PROJECT).setKey(APIKEY);

export default client;
