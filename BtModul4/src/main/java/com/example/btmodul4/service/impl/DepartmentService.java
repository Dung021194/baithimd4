package com.example.btmodul4.service.impl;

import com.example.btmodul4.model.Department;
import com.example.btmodul4.repository.IDepartmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {
    @Autowired
    IDepartmentRepo departmentRepo;
    public List<Department> findAll() {
        return departmentRepo.findAll();
    }

    public Department findOne(Long id) {
        return departmentRepo.findById(id).orElse(null);
    }


    public void save(Department department) {
        departmentRepo.save(department);

    }

    public void delete(Long id) {
        departmentRepo.deleteById(id);

    }
}
