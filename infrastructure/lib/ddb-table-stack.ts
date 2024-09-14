import { Stack, StackProps, aws_dynamodb } from 'aws-cdk-lib';
import { AttributeType } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

export class DDBTableStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    const taskTableProps = {
      tableName: 'Tasks',
      partitionKey: { name: 'email', type: AttributeType.STRING },
      sortKey: { name: 'taskId', type: AttributeType.NUMBER }
    }

    const motivationTableProps = {
      tableName: 'Motivations',
      partitionKey: { name: 'email', type: AttributeType.STRING },
      sortKey: { name: 'motivationId', type: AttributeType.NUMBER }
    }
    
    new aws_dynamodb.TableV2(this, 'Tasks', taskTableProps);
    new aws_dynamodb.TableV2(this, 'Motivations', motivationTableProps);
  }
}