package com.fraternity.fsp.domain;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A HelpRequest.
 */
@Entity
@Table(name = "help_request")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class HelpRequest implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "date_post")
    private LocalDate datePost;

    @Column(name = "date_start")
    private LocalDate dateStart;

    @Column(name = "date_end")
    private LocalDate dateEnd;

    @ManyToOne
    @JsonIgnoreProperties("helpRequests")
    private User user;

    @ManyToOne
    @JsonIgnoreProperties("helpRequests")
    private Category category;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public HelpRequest title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public HelpRequest description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDatePost() {
        return datePost;
    }

    public HelpRequest datePost(LocalDate datePost) {
        this.datePost = datePost;
        return this;
    }

    public void setDatePost(LocalDate datePost) {
        this.datePost = datePost;
    }

    public LocalDate getDateStart() {
        return dateStart;
    }

    public HelpRequest dateStart(LocalDate dateStart) {
        this.dateStart = dateStart;
        return this;
    }

    public void setDateStart(LocalDate dateStart) {
        this.dateStart = dateStart;
    }

    public LocalDate getDateEnd() {
        return dateEnd;
    }

    public HelpRequest dateEnd(LocalDate dateEnd) {
        this.dateEnd = dateEnd;
        return this;
    }

    public void setDateEnd(LocalDate dateEnd) {
        this.dateEnd = dateEnd;
    }

    public User getUser() {
        return user;
    }

    public HelpRequest user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Category getCategory() {
        return category;
    }

    public HelpRequest category(Category category) {
        this.category = category;
        return this;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        HelpRequest helpRequest = (HelpRequest) o;
        if (helpRequest.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), helpRequest.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "HelpRequest{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", description='" + getDescription() + "'" +
            ", datePost='" + getDatePost() + "'" +
            ", dateStart='" + getDateStart() + "'" +
            ", dateEnd='" + getDateEnd() + "'" +
            "}";
    }
}
