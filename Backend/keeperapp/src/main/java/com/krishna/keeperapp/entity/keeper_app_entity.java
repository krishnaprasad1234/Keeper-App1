package com.krishna.keeperapp.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Transactional
@Data
@NoArgsConstructor
@Table(name = "keeper_content")
public class keeper_app_entity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long sno;
    private String title;
    private String description; 
}
