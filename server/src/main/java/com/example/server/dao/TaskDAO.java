package com.example.server.dao;

import com.example.server.model.Task;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbTable;
import software.amazon.awssdk.enhanced.dynamodb.Key;

/**
 * Data access object for CRUD operations on Task objects
 */
@AllArgsConstructor
@Repository
public class TaskDAO {
    private DynamoDbTable<Task> dynamoDbTable;

    /**
     * Retrieve Task object based on primary key.
     * @param email - Partition key of task
     * @param taskId - Sort key of task
     * @return Retrieved Task from database
     */
    public Task findByPrimaryKey(final String email, final int taskId) {
        final Key key = Key.builder()
                .partitionValue(email)
                .sortValue(taskId)
                .build();

        return dynamoDbTable.getItem(key);
    }

    /**
     * Save Task object in database.
     * @param task - Task object to save
     */
    public void save(final Task task) {
        dynamoDbTable.putItem(task);
    }

    /**
     * Update Task object in database.
     * @param task - Task object to update
     * @return Updated Task from database
     */
    public Task update(final Task task) {
        return dynamoDbTable.updateItem(task);
    }

    /**
     * Delete Task object based on primary key.
     * @param email - Partition key of task
     * @param taskId - Sort key of task
     * @return Deleted Task from database
     */
    public Task deleteByPrimaryKey(final String email, final int taskId) {
        final Key key = Key.builder()
                .partitionValue(email)
                .sortValue(taskId)
                .build();

        return dynamoDbTable.deleteItem(key);
    }
}
