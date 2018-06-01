package com.eikesi.customer.service.service.mapper;

import com.eikesi.customer.service.domain.*;
import com.eikesi.customer.service.service.dto.CustomerRelationDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity CustomerRelation and its DTO CustomerRelationDTO.
 */
@Mapper(componentModel = "spring", uses = {CustomerMapper.class})
public interface CustomerRelationMapper extends EntityMapper<CustomerRelationDTO, CustomerRelation> {

    @Mapping(source = "customer.id", target = "customerId")
    @Mapping(source = "customer.firstName", target = "customerFirstName")
    CustomerRelationDTO toDto(CustomerRelation customerRelation);

    @Mapping(source = "customerId", target = "customer")
    CustomerRelation toEntity(CustomerRelationDTO customerRelationDTO);

    default CustomerRelation fromId(Long id) {
        if (id == null) {
            return null;
        }
        CustomerRelation customerRelation = new CustomerRelation();
        customerRelation.setId(id);
        return customerRelation;
    }
}
