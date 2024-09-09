import { App } from "aws-cdk-lib";
import { DDBTableStack } from "../lib/ddb-table-stack";

const app = new App();
const env = { account: '183295434266', region: 'us-east-1' };
new DDBTableStack(app, 'DDBTableStack', { env: env });

app.synth();