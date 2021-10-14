export function apolloProviderBeforeCreate ({ apolloProviderConfigObj, router }/* { apolloProviderConfigObj, app, router, store, ssrContext, urlPath, redirect } */) {
  // if needed you can modify here the config object used for apollo provider
  // instantiation
  apolloProviderConfigObj.errorHandler = function errorHandler ({ graphQLErrors, networkError }) {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )
    }
    if (networkError) {
      // console.log(`[Network error]: ${networkError}`);
      // console.log(router);
      // console.log(localStorage.getItem('user'), localStorage.getItem('token'));
      router.push('/login')
      // localStorage.removeItem('token');
      // localStorage.removeItem('user');
      // router.replace('/login');
    }
  }
}

export function apolloProviderAfterCreate ({ apolloProvider }/* { apolloProvider, app, router, store, ssrContext, urlPath, redirect } */) {
  // if needed you can modify here the created apollo provider
  // console.log(apolloProvider)
}
