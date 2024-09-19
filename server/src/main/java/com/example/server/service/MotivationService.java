package com.example.server.service;

import com.example.server.dao.MotivationDAO;
import com.example.server.model.Motivation;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class MotivationService {
    private MotivationDAO motivationDAO;

    /**
     * Retrieve Motivation object based on primary key.
     * @param email - Partition key
     * @param motivationId - Sort key
     * @return Retrieved Motivation from database
     */
    public Motivation findByPrimaryKey(final String email, final int motivationId) {
        return motivationDAO.findByPrimaryKey(email, motivationId);
    }

    /**
     * Save Motivation object in database.
     * @param motivation - Motivation object to save
     */
    public void save(final Motivation motivation) {
        motivationDAO.save(motivation);
    }

    /**
     * Update Motivation object in database.
     * @param motivation - Motivation object to update
     * @return Updated Motivation from database
     */
    public Motivation update(final Motivation motivation) {
        return motivationDAO.update(motivation);
    }

    /**
     * Delete Motivation object based on primary key.
     * @param email - Partition key
     * @param motivationId - Sort key
     * @return Deleted Motivation from database
     */
    public Motivation delete(final String email, final int motivationId) {
        return motivationDAO.delete(email, motivationId);
    }
}
