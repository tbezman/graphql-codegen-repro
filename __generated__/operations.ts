export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Node = {
  id: Scalars['ID'];
};

export type Post = Node & {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  post: Maybe<Post>;
};

export type SomeComponentTestQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SomeComponentTestQueryQuery = { __typename?: 'Query', post: { __typename?: 'Post', title: string | null } | null };

export type SomeComponentFragmentFragment = { __typename?: 'Query', post: { __typename?: 'Post', title: string | null } | null };
