package com.example.server.dao;

import com.example.server.model.Task;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbTable;
import software.amazon.awssdk.enhanced.dynamodb.Key;

public class TaskDAOTests {
    @Mock
    private DynamoDbTable<Task> dynamoDbTable;
    private final String EMAIL = "user@gmail.com";
    private final String ID = "id";
    private final String NAME = "task";
    private final Task TASK = new Task(EMAIL, ID, NAME);

    @InjectMocks
    private TaskDAO taskDAO;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testFindByPrimaryKey() {
        final Key key = Key.builder()
                .partitionValue(EMAIL)
                .sortValue(ID)
                .build();
        Mockito.when(dynamoDbTable.getItem(key))
                .thenReturn(TASK);

        final Task retrievedTask = taskDAO.findByPrimaryKey(EMAIL, ID);

        Assertions.assertEquals(TASK, retrievedTask);
    }

    @Test
    public void testSave() {
        Mockito.doNothing().when(dynamoDbTable).putItem(TASK);

        taskDAO.save(TASK);

        Mockito.verify(dynamoDbTable).putItem(TASK);
    }

    @Test
    public void testUpdate() {
        Mockito.when(dynamoDbTable.updateItem(TASK))
                .thenReturn(TASK);

        final Task updatedTask = taskDAO.update(TASK);

        Assertions.assertEquals(TASK, updatedTask);
    }

    @Test
    public void testDeleteByPrimaryKey() {
        final Key key = Key.builder()
                .partitionValue(EMAIL)
                .sortValue(ID)
                .build();
        Mockito.when(dynamoDbTable.deleteItem(key))
                .thenReturn(TASK);

        final Task deletedTask = taskDAO.deleteByPrimaryKey(EMAIL, ID);

        Assertions.assertEquals(TASK, deletedTask);
    }
}
