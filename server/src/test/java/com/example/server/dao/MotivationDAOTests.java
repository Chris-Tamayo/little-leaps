package com.example.server.dao;

import com.example.server.model.Motivation;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbTable;
import software.amazon.awssdk.enhanced.dynamodb.Key;

public class MotivationDAOTests {
    @Mock
    private DynamoDbTable<Motivation> dynamoDbTable;
    private final String EMAIL = "user@gmail.com";
    private final int MOTIVATION_ID = 1;
    private final String TEXT = "text";
    private final Motivation MOTIVATION = new Motivation(EMAIL, MOTIVATION_ID, TEXT);

    @InjectMocks
    private MotivationDAO motivationDAO;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testFindByPrimaryKey() {
        final Key key = Key.builder()
                .partitionValue(EMAIL)
                .sortValue(MOTIVATION_ID)
                .build();
        Mockito.when(dynamoDbTable.getItem(key))
                .thenReturn(MOTIVATION);

        final Motivation retrievedMotivation = motivationDAO.findByPrimaryKey(EMAIL, MOTIVATION_ID);

        Assertions.assertEquals(MOTIVATION, retrievedMotivation);
    }

    @Test
    public void testSave() {
        Mockito.doNothing().when(dynamoDbTable).putItem(MOTIVATION);

        motivationDAO.save(MOTIVATION);

        Mockito.verify(dynamoDbTable).putItem(MOTIVATION);
    }

    @Test
    public void testUpdate() {
        Mockito.when(dynamoDbTable.updateItem(MOTIVATION))
                .thenReturn(MOTIVATION);

        final Motivation updatedMotivation = motivationDAO.update(MOTIVATION);

        Assertions.assertEquals(MOTIVATION, updatedMotivation);
    }

    @Test
    public void testDeleteByPrimaryKey() {
        final Key key = Key.builder()
                .partitionValue(EMAIL)
                .sortValue(MOTIVATION_ID)
                .build();
        Mockito.when(dynamoDbTable.deleteItem(key))
                .thenReturn(MOTIVATION);

        final Motivation deletedMotivation = motivationDAO.delete(EMAIL, MOTIVATION_ID);

        Assertions.assertEquals(MOTIVATION, deletedMotivation);
    }

    @Test
    public void testDelete() {
        Mockito.when(motivationDAO.delete(MOTIVATION)).thenReturn(MOTIVATION);
        final Motivation deletedMotivation = motivationDAO.delete(MOTIVATION);
        Assertions.assertEquals(deletedMotivation, MOTIVATION);
    }
}
