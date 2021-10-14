import gql from "graphql-tag";

export const getLayers = gql`
  query getLayers {
    layers {
      id
      label
      details
      timespan
      filetype
      crs
      attributions
      filename
      crossorigin
      preload
      type
      url
      visible
      published
      zindex
      apikey
      dbtablename
    }
  }
`;

export const getPublishedLayers = gql`
  query getPublishedLayers {
    publishedLayers {
      id
      label
      details
      timespan
      filetype
      crs
      attributions
      filename
      crossorigin
      preload
      type
      url
      visible
      zindex
      apikey
      dbtablename
    }
  }
`;

export const getSpecies = gql`
  query getSpecies {
    species {
      id
      species
      family
      classification
      n2k
      code_n2k
      iunc
      directive_92
      bern
      bonn
      cites
      date
      source
      eunis
    }
  }
`;


export const getUsers = gql`
  query getUsers {
    users {
      id
      username
      fullname
      password
      department {
        _id
        title
      }
      email
    }
  }
`;

export const getContacts = gql`
  query getContacts {
    contacts {
      _id
      fullname
      organization
      street
      streetNumber
      postalCode
      area
      city
      website
      email
      position
      department
      phone
      fax
      country
      region
      prefecture
    }
  }
`;

export const getDepartments = gql`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`;

export const getUsersOfDepartment = gql`
  query usersByDepartment($_id: ID) {
    usersByDepartment(_id: $_id) {
      _id
      username
      fullname
      password
      department {
        _id
        title
        description
      }
      email
    }
  }
`;

// export const searchDocuments = gql`
//   query searchDocuments($searchText: String) {
//     searchDocuments(searchText: $searchText) {
//       _id
//       title
//       description
//       sender
//       receivers
//       date
//       files
//       transactionType
//       timestamp
//     }
//   }
// `;

export const queryXY = gql`
  query queryXY($layer: String, $type: String, $zoom: Int, $x: Float, $y: Float){
    queryXY(layer: $layer, type: $type, zoom: $zoom, x: $x, y: $y)
  }
`;