import { GraphQLClient } from "graphql-request";
export function request({ query, variables, includeDrafts, excludeInvalid }) {
  const headers = {
   // authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    authorization: `Bearer 7a74c9025965875985d5233e22e660`,
  };
  if (includeDrafts) {
    headers['X-Include-Drafts'] = 'true';
  }
  if (excludeInvalid) {
    headers['X-Exclude-Invalid'] = 'true';
  }
  const client = new GraphQLClient('https://graphql.datocms.com', { headers });
  return client.request(query, variables);
}