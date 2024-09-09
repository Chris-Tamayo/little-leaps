import { Stack, StackProps, aws_dynamodb } from 'aws-cdk-lib';
import { AttributeType } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

export class DDBTableStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const tableName = 'Tasks';
    const partitionKeyName = 'email';
    const sortKeyName = 'taskId';
    
    const tableProps = {
      tableName: tableName,
      partitionKey: { name: partitionKeyName, type: AttributeType.STRING },
      sortKey: { name: sortKeyName, type: AttributeType.NUMBER }
    }
    
    new aws_dynamodb.TableV2(this, tableName, tableProps);
  }
}