package com.example.btmodul4.service.impl;


import com.example.btmodul4.model.Employee;
import com.example.btmodul4.repository.IEmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private IEmployeeRepo employeeRepo;


    public List<Employee> findAll() {
      List<Employee> list = employeeRepo.findAll();
      return list;
    }



    public void save(Employee employee) {
        employeeRepo.save(employee);

    }
    public Employee findOne(Long id){
        return employeeRepo.findById(id).orElse(null);
    }
    public void delete(Long id){
        employeeRepo.deleteById(id);
    }


}
