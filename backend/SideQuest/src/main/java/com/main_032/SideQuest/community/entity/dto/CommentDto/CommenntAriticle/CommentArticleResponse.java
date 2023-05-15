package com.main_032.SideQuest.community.entity.dto.CommentDto.CommenntAriticle;

import com.main_032.SideQuest.community.entity.entity.Category;
import lombok.Getter;

@Getter
public class CommentArticleResponse {
    private Long id;
    private Long memberId;
    private Category category;
    private String content;
    private int totalLikes;
    private Long articleId; //assuming there's an articleId in Article entity
    private boolean deleted;

    // CommentArticleResponse 생성자나 필요한 메소드가 있다면 여기에 추가하세요.

    public CommentArticleResponse(
            Long id,
            Long memberId,
            Category category,
            String content,
            int totalLikes,
            Long articleId,
            boolean deleted) {
        this.id = id;
        this.memberId = memberId;
        this.category = category;
        this.content = content;
        this.totalLikes = totalLikes;
        this.articleId = articleId;
        this.deleted = deleted;
    }
}