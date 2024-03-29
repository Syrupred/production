import { User } from 'entities/User';

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT'
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    src: string;
    title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    paragraphs: string[];
    title?: string;
}

export type ArticleBlocks = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

export interface Article {
      id: string,
      user: User;
      title: string,
      subtitle: string,
      img: string,
      views: number,
      createdAt: string,
      type: ArticleType[],
      blocks: ArticleBlocks[]
}
