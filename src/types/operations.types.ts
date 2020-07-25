import { Exact, Maybe, Organization, Scalars } from 'types/schema.types';

export type GetOrganizationQueryVariables = Exact<{
  login: Scalars['String'];
}>;

export type GetOrganizationQuery = (
  { __typename?: 'Query' }
  & { organization?: Maybe<(
    { __typename?: 'Organization' }
    & Pick<Organization, 'name' | 'location' | 'websiteUrl'>
    )> }
  );
