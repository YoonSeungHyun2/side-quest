// 기타 타입 선언을 해주시면 됩니다. 특정 타입들은 새 파일을 생성해주세요.

export interface StackCategoryName {
  [key: string]: string;
}

export interface Form extends StackCategoryName {}

export interface ProjectFilter extends StackCategoryName {}

export interface CommunityFilter extends StackCategoryName {}

export interface StackCategory {
  [key: string]: string[];
}

export interface FooterCategory extends StackCategory {}
