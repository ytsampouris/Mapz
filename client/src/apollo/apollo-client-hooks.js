import { createUploadLink } from "apollo-upload-client";
import { setContext } from "apollo-link-context";
let apollo = {};
export function apolloClientBeforeCreate(
  {
    apolloClientConfigObj
  } /* { apolloClientConfigObj, app, router, store, ssrContext, urlPath, redirect } */
) {
  const linkString = `${process.env.API_HOST_URL}:${process.env.PORT}/graphql`.replace(/['"]+/g, '');
  // console.log('link apollo :: ', linkString.replace(/['"]+/g, ''));
  let link = new createUploadLink({
    uri: linkString
  });
  // console.log(localStorage.getItem("token"));
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("token");
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        ...(token && {
          authorization: `Bearer ${token}`,
          token: `${token}`
        })
      }
    };
  });
  apolloClientConfigObj.link = authLink.concat(link);
}

export function apolloClientAfterCreate(
  apolloClient /* { apolloClient, app, router, store, ssrContext, urlPath, redirect } */
) {
  // if needed you can modify here the created apollo client
  apollo = apolloClient;
}

export { apollo };
