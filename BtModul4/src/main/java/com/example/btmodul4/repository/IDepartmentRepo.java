package com.example.btmodul4.repository;

import com.example.btmodul4.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDepartmentRepo extends JpaRepository<Department,Long> {
}
