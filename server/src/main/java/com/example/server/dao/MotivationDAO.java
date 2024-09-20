package com.example.server.dao;

import com.example.server.model.Motivation;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbTable;
import software.amazon.awssdk.enhanced.dynamodb.Key;

@AllArgsConstructor
@Repository
public class MotivationDAO {
    private DynamoDbTable<Motivation> dynamoDbTable;

    /**
     * Retrieve Motivation object based on primary key.
     * @param email - Partition key
     * @param id - Sort key
     * @return Retrieved Motivation from database
     */
    public Motivation findByPrimaryKey(final String email, final String id) {
        final Key key = Key.builder()
                .partitionValue(email)
                .sortValue(id)
                .build();

        return dynamoDbTable.getItem(key);
    }

    /**
     * Save Motivation object in database.
     * @param motivation - Motivation to save
     */
    public void save(final Motivation motivation) {
        dynamoDbTable.putItem(motivation);
    }

    /**
     * Update Motivation in database.
     * @param motivation - Updated Motivation
     * @return Updated Motivation object in database
     */
    public Motivation update(final Motivation motivation) {
        return dynamoDbTable.updateItem(motivation);
    }

    /**
     * Delete Motivation object in database by primary key
     * @param email - Partition key
     * @param id - Sort key
     * @return Deleted Motivation object from database
     */
    public Motivation delete(final String email, final String id) {
        final Key key = Key.builder()
                .partitionValue(email)
                .sortValue(id)
                .build();

        return dynamoDbTable.deleteItem(key);
    }
}
