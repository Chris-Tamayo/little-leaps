import { App } from 'aws-cdk-lib';
import { DDBTableStack } from '../lib/ddb-table-stack';
import { Template } from 'aws-cdk-lib/assertions';

test('DDB Table Created', () => {
  const app = new App();
  const stack = new DDBTableStack(app, 'DDBTableTestStack');
  const template = Template.fromStack(stack);

  template.hasResource('AWS::DynamoDB::GlobalTable', {});
})