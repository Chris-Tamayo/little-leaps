package com.example.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbBean;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbPartitionKey;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbSortKey;

@NoArgsConstructor
@AllArgsConstructor
@Data
@DynamoDbBean
public class Task {
    private String email;
    private int taskId;
    private String name;

    @DynamoDbPartitionKey
    public String getEmail() {
        return email;
    }

    @DynamoDbSortKey
    public int getTaskId() {
        return taskId;
    }
}
