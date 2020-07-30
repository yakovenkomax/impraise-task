import { RepositoryFieldsFragment } from 'types/operations.types';
import * as Types from 'types/schema.types';
import { License, Repository } from 'types/schema.types';

export type RepositoryListType = Types.Maybe<
  Array<
    Types.Maybe<
      { __typename?: 'Repository' } & Pick<Types.Repository, 'updatedAt'> & {
          parent?: Types.Maybe<
            { __typename?: 'Repository' } & Pick<
              Types.Repository,
              'nameWithOwner'
            >
          >;
          licenseInfo?: Types.Maybe<
            { __typename?: 'License' } & Pick<Types.License, 'spdxId'>
          >;
        } & RepositoryFieldsFragment
    >
  >
>;
