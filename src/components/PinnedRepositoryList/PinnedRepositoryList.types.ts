import { RepositoryFieldsFragment } from 'types/operations.types';
import * as Types from 'types/schema.types';
import { Repository } from 'types/schema.types';

export type PinnedItem = Types.Maybe<{ __typename?: 'Gist' } | (
  { __typename?: 'Repository' }
  & RepositoryFieldsFragment
  )>

export type PinnedItemListType = Types.Maybe<Array<PinnedItem>>

export type PinnedRepository = Types.Maybe<(
  { __typename?: 'Repository' }
  & RepositoryFieldsFragment
  )>

export type PinnedRepositoryListType = Types.Maybe<Array<PinnedRepository>>
