package com.example.btmodul4.controller;

import com.example.btmodul4.model.Department;
import com.example.btmodul4.model.Employee;
import com.example.btmodul4.service.impl.DepartmentService;
import com.example.btmodul4.service.impl.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/employees")
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;
    @Autowired
    DepartmentService departmentService;
    @GetMapping
    public ResponseEntity<List<Employee>> findALl(){
        return new ResponseEntity<>(employeeService.findAll(), HttpStatus.OK);
    }
    @GetMapping("/departments")
    public ResponseEntity<List<Department>> getDepartments(){
        return new ResponseEntity<>(departmentService.findAll(), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Void>save(@RequestBody Employee employee){
        employeeService.save(employee);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Employee> updateForm(@PathVariable Long id){
        return new ResponseEntity<>(employeeService.findOne(id),HttpStatus.ACCEPTED);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        employeeService.delete(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    @GetMapping("/detail/{id}")
    public ResponseEntity<Employee> detail(@PathVariable Long id){
        return new ResponseEntity<>(employeeService.findOne(id),HttpStatus.ACCEPTED);
    }






}
