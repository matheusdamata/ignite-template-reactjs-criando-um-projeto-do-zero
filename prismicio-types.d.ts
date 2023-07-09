// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for posts documents */
interface PostsDocumentData {
  /**
   * Title field in *posts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: posts.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * subtitle field in *posts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: posts.subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  subtitle: prismic.KeyTextField;
  /**
   * author field in *posts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: posts.author
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  author: prismic.KeyTextField;
  /**
   * banner field in *posts*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: posts.banner
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  banner: prismic.ImageField<never>;
  /**
   * content field in *posts*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: posts.content[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  content: prismic.GroupField<Simplify<PostsDocumentDataContentItem>>;
  /**
   * Meta Description field in *posts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: posts.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Image field in *posts*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: posts.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *posts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: posts.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Item in posts → content
 *
 */
export interface PostsDocumentDataContentItem {
  /**
   * heading field in *posts → content*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: posts.content[].heading
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  heading: prismic.KeyTextField;
  /**
   * body field in *posts → content*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: posts.content[].body
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  body: prismic.RichTextField;
}
/**
 * posts document from Prismic
 *
 * - **API ID**: `posts`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PostsDocumentData>, 'posts', Lang>;
export type AllDocumentTypes = PostsDocument;
declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      PostsDocumentData,
      PostsDocumentDataContentItem,
      PostsDocument,
      AllDocumentTypes,
    };
  }
}
