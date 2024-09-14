import { App } from 'aws-cdk-lib';
import { DDBTableStack } from '../lib/ddb-table-stack';
import { Template } from 'aws-cdk-lib/assertions';

test('DDB Tables Created', () => {
  const app = new App();
  const stack = new DDBTableStack(app, 'DDBTableTestStack');
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::DynamoDB::GlobalTable', {
    TableName: 'Tasks'
  });

  template.hasResourceProperties('AWS::DynamoDB::GlobalTable', {
    TableName: 'Motivations'
  });
})
