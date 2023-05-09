package com.main_032.SideQuest.domain.article.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long articleId;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @Column
    private String title;

    @Column
    private String content;

    @Column
    private String category;

    @Column
    private int views;

    @Column
    private String status;

    @OneToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer acceptedAnswer;

    @Column
    private int totalLikes;

    @Column
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column
    private LocalDateTime updatedAt;

    @Column(columnDefinition = "TINYINT")
    private boolean deleted;

    @OneToMany(mappedBy = "article")
    private List<ArticleTechStack> articleTechStackList = new ArrayList<>();

    @OneToMany(mappedBy = "article")
    private List<ArticleAnswer> articleAnswerList = new ArrayList<>();
}