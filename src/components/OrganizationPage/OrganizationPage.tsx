import React from 'react';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { GetOrganizationQuery, GetOrganizationQueryVariables } from 'types/operations.types';


const GetOrganization = loader('src/operations/GetOrganization.graphql');

type Props = {
  login: string,
}

const OrganizationPage: React.FC<Props> = (props) => {
  const { login } = props;
  const { loading, data, error } = useQuery<GetOrganizationQuery, GetOrganizationQueryVariables>(
    GetOrganization,
    { variables: { login } }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!data) {
    return null;
  }

  const { organization } = data;

  if (!organization) {
    return null;
  }

  const { name, location, websiteUrl } = organization;

  return (
    <div className="OrganizationPage">
      <div>Name: { name }</div>
      <div>Location: { location }</div>
      <div>WebsiteUrl: { websiteUrl }</div>
    </div>
  );
}

export default OrganizationPage;
