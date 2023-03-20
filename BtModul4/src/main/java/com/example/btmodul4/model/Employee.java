package com.example.btmodul4.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id;
    private String code;
    private String name;
    private Integer age;
    private Double salary;
    @ManyToOne
    private Department department;


}
