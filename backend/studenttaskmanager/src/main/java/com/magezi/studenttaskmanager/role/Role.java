package com.magezi.studenttaskmanager.role;

import jakarta.persistence.*;
//Spring to map to db
@Entity
@Table(name = "roles") //map to the table roles in the database
public class Role {

    //Auto incrementing Primary Key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String name;

    public Role() {}

    public Role(String name) {
        this.name = name;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}