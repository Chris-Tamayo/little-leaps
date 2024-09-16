package com.example.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbBean;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbPartitionKey;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbSortKey;

@NoArgsConstructor
@AllArgsConstructor
@Data
@DynamoDbBean
public class Motivation {
    @Getter(onMethod_=@DynamoDbPartitionKey)
    private String email;
    @Getter(onMethod_=@DynamoDbSortKey)
    private int motivationId;
    private String text;
}