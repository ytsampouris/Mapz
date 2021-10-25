(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"1fee":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return n}));var i={};a.r(i),a.d(i,"getLayers",(function(){return g})),a.d(i,"getPublishedLayers",(function(){return _})),a.d(i,"getSpecies",(function(){return y})),a.d(i,"getUsers",(function(){return S})),a.d(i,"getContacts",(function(){return v})),a.d(i,"getDepartments",(function(){return I})),a.d(i,"getUsersOfDepartment",(function(){return k})),a.d(i,"queryXY",(function(){return h}));var n={};a.r(n),a.d(n,"createUser",(function(){return V})),a.d(n,"updateUser",(function(){return Y})),a.d(n,"deleteUser",(function(){return J})),a.d(n,"createDocument",(function(){return M})),a.d(n,"deleteLayer",(function(){return R})),a.d(n,"createDepartment",(function(){return X})),a.d(n,"updateDepartment",(function(){return A})),a.d(n,"updateDepartmentManager",(function(){return W})),a.d(n,"deleteDepartment",(function(){return G})),a.d(n,"singleUpload",(function(){return H})),a.d(n,"signIn",(function(){return K})),a.d(n,"addLayer",(function(){return Z})),a.d(n,"addSpecies",(function(){return ee})),a.d(n,"updateSpecies",(function(){return te})),a.d(n,"deleteSpecies",(function(){return ae})),a.d(n,"updateLayer",(function(){return ie}));var r=a("5184");let l,s=e=>e;Object(r["a"])(l||(l=s`
  type Document {
    title: String!
  }
  type Mutation {
    addDocument(text: String!): Document
    editDocument(text: String!, id: String!): Document
  }
  type RoleInput {
    label: String
    value: String
  }
  type DepartmentInput {
    _id: ID
    title: String
    description: String
  }
`));let d,o,c,u,b,p,m,$,f=e=>e;const g=Object(r["a"])(d||(d=f`
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
`)),_=Object(r["a"])(o||(o=f`
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
`)),y=Object(r["a"])(c||(c=f`
  query getSpecies {
    species {
      id
      type
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
      latin_name
      taxonomy
      common_name
      directive_09
    }
  }
`)),S=Object(r["a"])(u||(u=f`
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
`)),v=Object(r["a"])(b||(b=f`
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
`)),I=Object(r["a"])(p||(p=f`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),k=Object(r["a"])(m||(m=f`
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
`)),h=Object(r["a"])($||($=f`
  query queryXY($layer: String, $type: String, $zoom: Int, $x: Float, $y: Float){
    queryXY(layer: $layer, type: $type, zoom: $zoom, x: $x, y: $y)
  }
`));a("ffd6");let D,q,x,C,w,O,j,U,N,z,E,L,T,F,Q,B,P=e=>e;const V=Object(r["a"])(D||(D=P`
  mutation(
    $username: String
    $fullname: String
    $password: String
    $department: [ID]
    $email: String
  ) {
    createUser(
      username: $username
      fullname: $fullname
      password: $password
      department: $department
      email: $email
    ) {
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
`)),Y=Object(r["a"])(q||(q=P`
  mutation(
    $_id: ID!
    $username: String
    $fullname: String
    $password: String
    $department: [ID]
    $email: String
  ) {
    updateUser(
      _id: $_id
      username: $username
      fullname: $fullname
      password: $password
      department: $department
      email: $email
    ) {
      username
      _id
    }
  }
`)),J=Object(r["a"])(x||(x=P`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),M=Object(r["a"])(C||(C=P`
  mutation(
    $title: String!
    $description: String
    $sender: ID!
    $receivers: [ID!]
    $date: Date
    $files: [ID]
    $transactionType: String
    $timestamp: String
  ) {
    createDocument(
      title: $title
      description: $description
      sender: $sender
      receivers: $receivers
      date: $date
      files: $files
      transactionType: $transactionType
      timestamp: $timestamp
    ) {
      _id
      title
      description
      sender
      receivers
      date
      files
      transactionType
      timestamp
    }
  }
`)),R=Object(r["a"])(w||(w=P`
  mutation($id: String!) {
    deleteLayer(id: $id)
  }
`)),X=Object(r["a"])(O||(O=P`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),A=Object(r["a"])(j||(j=P`
  mutation($_id: ID!, $title: String, $description: String, $manager: ID) {
    updateDepartment(
      _id: $_id
      title: $title
      description: $description
      manager: $manager
    ) {
      _id
      title
      description
      manager
    }
  }
`)),W=Object(r["a"])(U||(U=P`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),G=Object(r["a"])(N||(N=P`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),H=Object(r["a"])(z||(z=P`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),K=Object(r["a"])(E||(E=P`
  mutation signIn($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`)),Z=Object(r["a"])(L||(L=P`
  mutation addLayer(
    $label: String,
    $details: String,
    $timespan: String,
    $filetype: String,
    $crs: String,
    $attributions: String,
    $filename: String,
    $type: String,
    $url: String,
    $visible: Boolean,
    $published: Boolean,
    $apikey: String,
    $dbtablename: String,
    $zindex: Int
  )
  {
    addLayer(
      label: $label
      details: $details
      timespan: $timespan
      filetype: $filetype
      crs: $crs
      attributions: $attributions
      filename: $filename
      type: $type
      url: $url
      visible: $visible
      published: $published
      apikey: $apikey
      dbtablename: $dbtablename
      zindex: $zindex
    ) {
      id
      label
    }
  }
`)),ee=Object(r["a"])(T||(T=P`
  mutation addSpecies(
    $species: String
    $family: String
    $classification: String
    $n2k: String
    $code_n2k: String
    $iunc: String
    $directive_92: String
    $bern: String
    $bonn: String
    $cites: String
    $date: String
    $source: String
    $eunis: String
  )
  {
    addSpecies(
      species: $species
      family: $family
      classification: $classification
      n2k: $n2k
      code_n2k: $code_n2k
      iunc: $iunc
      directive_92: $directive_92
      bern: $bern
      bonn: $bonn
      cites: $cites
      date: $date
      source: $source
      eunis: $eunis
    ) {
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
`)),te=Object(r["a"])(F||(F=P`
  mutation(
    $id: String
    $species: String
    $family: String
    $classification: String
    $n2k: String
    $code_n2k: String
    $iunc: String
    $directive_92: String
    $bern: String
    $bonn: String
    $cites: String
    $date: String
    $source: String
    $eunis: String
  ) {
    updateSpecies(
      id: $id
      species: $species
      family: $family
      classification: $classification
      n2k: $n2k
      code_n2k: $code_n2k
      iunc: $iunc
      directive_92: $directive_92
      bern: $bern
      bonn: $bonn
      cites: $cites
      date: $date
      source: $source
      eunis: $eunis
    ) {
      id
    }
  }
`)),ae=Object(r["a"])(Q||(Q=P`
  mutation($id: String) {
    deleteSpecies(id: $id)
  }
`)),ie=Object(r["a"])(B||(B=P`
  mutation updateLayer(
    $id: String,
    $label: String,
    $details: String,
    $timespan: String,
    $filetype: String,
    $crs: String,
    $attributions: String,
    $filename: String,
    $type: String,
    $url: String,
    $visible: Boolean,
    $published: Boolean,
    $apikey: String,
    $dbtablename: String,
    $zindex: Int
  )
  {
    updateLayer(
      id: $id
      label: $label
      details: $details
      timespan: $timespan
      filetype: $filetype
      crs: $crs
      attributions: $attributions
      filename: $filename
      type: $type
      url: $url
      visible: $visible
      published: $published
      apikey: $apikey
      dbtablename: $dbtablename
      zindex: $zindex
    ) {
      id
      label
      details
      timespan
      filetype
      crs
      attributions
      filename
      type
      url
      visible
      published
      apikey
      dbtablename
      zindex
    }
  }
`))},"2eb2":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("q-tabs",{staticClass:"bg-green-8 text-white shadow-2",model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab",{attrs:{name:"plants",icon:"fas fa-leaf",label:"Χλωρίδα"}}),a("q-tab",{attrs:{name:"animals",icon:"fas fa-frog",label:"Πανίδα"}})],1),a("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"plants"}},[e.$apollo.loading?a("div",{staticStyle:{width:"100%",height:"100vh","text-align":"center","vertical-align":"middle","z-index":"999",color:"grey",position:"absolute",top:"40%"}},[a("q-spinner-gears",{attrs:{color:"grey",size:"4em"}}),a("div",{staticStyle:{margin:"1em"}},[e._v("Φόρτωση...")])],1):e._e(),e.$apollo.loading?e._e():a("div",{staticClass:"q-pa-xs"},[a("q-table",{staticClass:"my-sticky-column-table",attrs:{title:"Είδη",data:e.flora,columns:e.columns_flora,filter:e.tableFilter,"row-key":"name","wrap-cells":""},scopedSlots:e._u([{key:"top",fn:function(t){return[a("div",{staticClass:"col-2 q-table__title"},[e._v("Είδη")]),a("q-space"),a("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!0),model:{value:e.tableFilter,callback:function(t){e.tableFilter=t},expression:"tableFilter"}}),a("q-btn",{staticClass:"q-ml-md",attrs:{round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}})]}}],null,!1,1033238615)})],1),a("q-btn",{attrs:{color:"red","icon-right":"fab fa-youtube",label:"Οδηγίες χρήσης",type:"a",target:"new_tab",href:"https://youtu.be/9tLArub6QPY"}}),a("table",{staticClass:"tableizer-table"},[a("thead",[a("tr",{staticClass:"tableizer-firstrow"},[a("th",{attrs:{colspan:"4"}},[e._v("Υπόμνημα βάσης δεδομένων ειδών χλωρίδας της Κεφαλλονιάς")]),a("th",[e._v(" ")])])]),a("tbody",[a("tr",[a("td",[e._v("Τάξη")]),a("td",[e._v("Λατινική ονομασία της τάξης")])]),a("tr",[a("td",[e._v("Οικογένεια")]),a("td",[e._v("Λατινική ονομασία της οικογένειας")])]),a("tr",[a("td",[e._v("Είδος")]),a("td",[e._v("Λατινική ονομασία του είδους")])]),a("tr",[a("td",[e._v("Ευρωπαϊκό Καθεστώς Απειλής IUCN")]),a("td",[e._v("Αναγράφεται η κατηγορία απειλής στην οποία κατατάσσονται για την Ευρώπη τα είδη σύμφωνα με τον Κόκκινο Κατάλογο της IUCN (ενημέρωση Ιούνιος 2021). Κάθε είδος κατατάσσεται σε κάποια από τις εξής κατηγορίες: ΕΧ: Εξαφανισθέντα EW: Εξαφανισθέντα στη Φύση CR: Κρισίμως Κινδυνεύοντα EN: Κινδυνεύοντα VU: Εύτρωτα NT: Εγγύς Απειλούμενα LC: Ελάχιστης Ανησυχίας DD: Ανεπαρκώς Γνωστά NE: Μη Αξιολογημένα")])]),a("tr",[a("td",[e._v("Οδηγία 92/43/ΕΟΚ")]),a("td",[e._v("Αναγράφεται το παράρτημα της Οδηγίας 92/43/ΕΟΚ για τη διατήρηση των φυσικών οικοτόπων καθώς και της άγριας πανίδας και χλωρίδας στο οποίο περιλαμβάνεται κάθε είδος. Ένα είδος μπορεί να ανήκει σε ένα ή περισσότερα από τα εξής παραρτήματα: II : Ζωικά και φυτικά είδη κοινοτικού ενδιαφέροντος των οποίων η διατήρηση επιβάλλει τον καθορισμό ειδικών ζωνών διατήρησης IV: Ζωικά και φυτικά είδη κοινοτικού ενδιαφέροντος που απαιτούν αυστηρή προστασία V: Ζωικά και φυτικά είδη κοινοτικού ενδιαφέροντος των οποίων η σύλληψη στη φύση και η εκμετάλλευση υπόκεινται, ενδεχομένως, σε διαχειριστικά μέτρα")])]),a("tr",[a("td",[e._v("Σύμβαση Βέρνης")]),a("td",[e._v("Αναγράφεται το παράρτημα της Σύμβασης της Βέρνης περί της διατήρησης της άγριας ζωής και του φυσικού περιβάλλοντος της Ευρώπης στο οποίο περιλαμβάνεται κάθε είδος. Ένα είδος μπορεί να ανήκει σε ένα ή περισσότερα από τα εξής παραρτήματα: I: Είδη για τα οποία απαιτείται να εφαρμόζονται ειδικά μέτρα διατήρησης (αναθεωρημένο παράρτημα I) ΙΙ: Είδη πανίδας που βρίσκονται υπό αυστηρή προστασία ΙΙΙ:  Είδη πανίδας που βρίσκονται υπό προστασία")])]),a("tr",[a("td",[e._v("Σύμβαση CITES")]),a("td",[e._v("Αναγράφεται το παράρτημα της Σύμβαση για το Διεθνές Εμπόριο Ειδών Άγριας Πανίδας και Χλωρίδας που απειλούνται με εξαφάνιση (CITES) στο οποίο περιλαμβάνεται κάθε είδος. Ένα είδος μπορεί να ανήκει στα εξής παραρτήματα: Ι: Είδη που απειλούνται με εξαφάνιση και τα οποία επηρεάζονται ή ενδέχεται να επηρεαστούν από το διεθνές εμπόριο και η CITES γενικά απαγορεύει κάθε είδος διεθνούς εμπορίας αυτών των ειδών ΙΙ: Είδη τα οποία δεν απειλούνται απαραιτήτως με εξαφάνιση, αλλά ενδέχεται να απειληθούν εκτός κι αν το εμπόριό τους ελέγχεται III: Είδη που υπόκεινται σε έλεγχο από μια συγκεκριμένη χώρα και για τα οποία απαιτείται η συνεργασία άλλων χωρών για τον έλεγχο του διεθνούς εμπορίου")])]),a("tr",[a("td",[e._v("Ημερομηνία Καταγραφής")]),a("td",[e._v("Ημερομηνία της καταγραφής του είδους που περιλαμβάνεται στη βάση")])]),a("tr",[a("td",[e._v("Πηγή")]),a("td",[e._v("Πηγή της καταγραφής του είδους που περιλαμβάνεται στη βάση")])]),a("tr",[a("td",[e._v("Σύνδεσμος EUNIS")]),a("td",[e._v("Διεύθυνση url της εγγραφής του είδους στη διαδικτυακή βάση EUNIS για τα είδη")])])])])],1),a("q-tab-panel",{attrs:{name:"animals"}},[e.$apollo.loading?e._e():a("div",{staticClass:"q-pa-xs"},[a("q-table",{staticClass:"my-sticky-column-table",attrs:{title:"Είδη",data:e.fauna,columns:e.columns_fauna,filter:e.tableFilter,"row-key":"name","wrap-cells":""},scopedSlots:e._u([{key:"top",fn:function(t){return[a("div",{staticClass:"col-2 q-table__title"},[e._v("Είδη")]),a("q-space"),a("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!0),model:{value:e.tableFilter,callback:function(t){e.tableFilter=t},expression:"tableFilter"}}),a("q-btn",{staticClass:"q-ml-md",attrs:{round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}})]}}],null,!1,1033238615)})],1),a("q-btn",{attrs:{color:"red","icon-right":"fab fa-youtube",label:"Οδηγίες χρήσης",type:"a",target:"new_tab",href:"https://youtu.be/9tLArub6QPY"}}),a("table",{staticClass:"tableizer-table"},[a("thead",[a("tr",{staticClass:"tableizer-firstrow"},[a("th",{attrs:{colspan:"4"}},[e._v("Υπόμνημα βάσης δεδομένων ειδών πανίδας της Κεφαλλονιάς")]),a("th",[e._v(" ")])])]),a("tbody",[a("tr",[a("td",[e._v("Φύλο")]),a("td",[e._v("Λατινική ονομασία του φύλου")])]),a("tr",[a("td",[e._v("Κλάση")]),a("td",[e._v("Λατινική ονομασία της κλάσης")])]),a("tr",[a("td",[e._v("Τάξη")]),a("td",[e._v("Λατινική ονομασία της τάξης")])]),a("tr",[a("td",[e._v("Οικογένεια")]),a("td",[e._v("Λατινική ονομασία της οικογένειας")])]),a("tr",[a("td",[e._v("Είδος")]),a("td",[e._v("Λατινική ονομασία του είδους")])]),a("tr",[a("td",[e._v("Κοινή ονομασία είδους")]),a("td",[e._v("Ελληνική κοινή ονομασία του είδους")])]),a("tr",[a("td",[e._v("Κωδικός είδους Natura 2000")]),a("td",[e._v("Κωδικός ειδών κοινοτικού ενδιαφέροντος, διαθέσιμος από https://eunis.eea.europa.eu/species.jsp")])]),a("tr",[a("td",[e._v("Περιοχή Δικτύου Natura 2000")]),a("td",[e._v("Περιοχή του δικτύου Natura 2000 στην οποία έχει καταγραφεί το είδος, διαθέσιμη από https://natura2000.eea.europa.eu/")])]),a("tr",[a("td",[e._v("Ευρωπαϊκό Καθεστώς Απειλής IUCN")]),a("td",[e._v("Αναγράφεται η κατηγορία απειλής στην οποία κατατάσσονται για την Ευρώπη τα είδη σύμφωνα με τον Κόκκινο Κατάλογο της IUCN (ενημέρωση Ιούνιος 2021). Κάθε είδος κατατάσσεται σε κάποια από τις εξής κατηγορίες: ΕΧ: Εξαφανισθέντα EW: Εξαφανισθέντα στη Φύση CR: Κρισίμως Κινδυνεύοντα EN: Κινδυνεύοντα VU: Εύτρωτα NT: Εγγύς Απειλούμενα LC: Ελάχιστης Ανησυχίας DD: Ανεπαρκώς Γνωστά NE: Μη Αξιολογημένα")])]),a("tr",[a("td",[e._v("Οδηγία 92/43/ΕΟΚ")]),a("td",[e._v("Αναγράφεται το παράρτημα της Οδηγίας 92/43/ΕΟΚ για τη διατήρηση των φυσικών οικοτόπων καθώς και της άγριας πανίδας και χλωρίδας στο οποίο περιλαμβάνεται κάθε είδος. Ένα είδος μπορεί να ανήκει σε ένα ή περισσότερα από τα εξής παραρτήματα: II : Ζωικά και φυτικά είδη κοινοτικού ενδιαφέροντος των οποίων η διατήρηση επιβάλλει τον καθορισμό ειδικών ζωνών διατήρησης IV: Ζωικά και φυτικά είδη κοινοτικού ενδιαφέροντος που απαιτούν αυστηρή προστασία V: Ζωικά και φυτικά είδη κοινοτικού ενδιαφέροντος των οποίων η σύλληψη στη φύση και η εκμετάλλευση υπόκεινται, ενδεχομένως, σε διαχειριστικά μέτρα")])]),a("tr",[a("td",[e._v("Οδηγία 2009/147/ΕΚ")]),a("td",[e._v("Αναγράφεται το παράρτημα της Οδηγίας  2009/147/ΕΚ περί της διατηρήσεως των αγρίων πτηνών στο οποίο περιλαμβάνεται κάθε είδος. Ένα πτηνό μπορεί να ανήκει σε ένα ή περισσότερα από τα εξής παραρτήματα: Ι: Είδη που υπόκεινται σε ειδικά μέτρα, τα οποία αφορούν τον οικότοπό τους, για να εξασφαλισθεί η επιβίωση και η αναπαραγωγή στη ζώνη εξαπλώσεώς τους ΙΙ: Είδη για τα οποία επιτρέπεται η θήρα, εφόσον το επιτρέπει το επίπεδο του πληθυσμού τους  και δεν υπονομεύονται οι προσπάθειες διατηρήσεως που αναλαμβάνονται στη ζώνη εξαπλώσεως των ειδών αυτών ΙΙI: Είδη για τα οποία δραστηριότητες όπως η πώληση, μεταφορά, κατοχή και διάθεση δεν απαγορεύονται εφόσον τα πτηνά έχουν φονευθεί ή συλληφθεί νόμιμα ή έχουν με άλλο νόμιμο τρόπο αποκτηθεί και εφόσον δεν έχουν προβλεφθεί περιορισμοί για αυτό το σκοπό")])]),a("tr",[a("td",[e._v("Σύμβαση Βέρνης")]),a("td",[e._v("Αναγράφεται το παράρτημα της Σύμβασης της Βέρνης περί της διατήρησης της άγριας ζωής και του φυσικού περιβάλλοντος της Ευρώπης στο οποίο περιλαμβάνεται κάθε είδος. Ένα είδος μπορεί να ανήκει σε ένα ή περισσότερα από τα εξής παραρτήματα: I: Είδη για τα οποία απαιτείται να εφαρμόζονται ειδικά μέτρα διατήρησης (αναθεωρημένο παράρτημα I) ΙΙ: Είδη πανίδας που βρίσκονται υπό αυστηρή προστασία ΙΙΙ:  Είδη πανίδας που βρίσκονται υπό προστασία")])]),a("tr",[a("td",[e._v("Σύμβαση Βόννης")]),a("td",[e._v("Αναγράφεται το παράρτημα της Σύμβασης της Βόννης για τη διατήρηση των αποδημητικών ειδών που ανήκουν στην άγρια πανίδα στο οποίο περιλαμβάνεται κάθε είδος. Ένα είδος μπορεί να ανήκει στα εξής παραρτήματα: I: Κινδυνεύοντα αποδημητικά είδη που πρέπει να προστατευτούν από τα μέρη της σύμβασης ΙΙ: Αποδημητικά είδη των οποίων η κατάσταση διατήρησης είναι δυσμενής και για τα οποία χρειάζεται η σύναψη Διεθνών Συμφωνιών για τη διατήρηση και διαχείρισή τους, καθώς και είδη των οποίων η κατάσταση διατήρησης θα επωφελείτο σημαντικά από τη διεθνή συνεργασία η οποία θα προέκυπτε από μια Διεθνή Συμφωνία")])]),a("tr",[a("td",[e._v("Σύμβαση CITES")]),a("td",[e._v("Αναγράφεται το παράρτημα της Σύμβαση για το Διεθνές Εμπόριο Ειδών Άγριας Πανίδας και Χλωρίδας που απειλούνται με εξαφάνιση (CITES) στο οποίο περιλαμβάνεται κάθε είδος. Ένα είδος μπορεί να ανήκει στα εξής παραρτήματα: Ι: Είδη που απειλούνται με εξαφάνιση και τα οποία επηρεάζονται ή ενδέχεται να επηρεαστούν από το διεθνές εμπόριο και η CITES γενικά απαγορεύει κάθε είδος διεθνούς εμπορίας αυτών των ειδών ΙΙ: Είδη τα οποία δεν απειλούνται απαραιτήτως με εξαφάνιση, αλλά ενδέχεται να απειληθούν εκτός κι αν το εμπόριό τους ελέγχεται III: Είδη που υπόκεινται σε έλεγχο από μια συγκεκριμένη χώρα και για τα οποία απαιτείται η συνεργασία άλλων χωρών για τον έλεγχο του διεθνούς εμπορίου")])]),a("tr",[a("td",[e._v("Ημερομηνία Καταγραφής")]),a("td",[e._v("Ημερομηνία της καταγραφής του είδους που περιλαμβάνεται στη βάση")])]),a("tr",[a("td",[e._v("Πηγή")]),a("td",[e._v("Πηγή της καταγραφής του είδους που περιλαμβάνεται στη βάση")])]),a("tr",[a("td",[e._v("Σύνδεσμος EUNIS")]),a("td",[e._v("Διεύθυνση url της εγγραφής του είδους στη διαδικτυακή βάση EUNIS για τα είδη")])])])])],1)],1)],1)},n=[],r=a("1fee"),l={name:"Database",apollo:{species:{query:r["b"].getSpecies,error(e){this.error=JSON.stringify(e.message),console.log("error:: ",e)}}},computed:{fauna:{get(){return this.species.filter((e=>"fauna"===e.type))}},flora:{get(){return this.species.filter((e=>"flora"===e.type))}}},data(){return{error:null,tab:"plants",tableFilter:"",columns_flora:[{name:"taxonomy",label:"Τάξη",field:"taxonomy",sortable:!0},{name:"family",label:"Οικογένεια",field:"family",sortable:!0},{name:"species",label:"Είδος",field:"species",sortable:!0},{name:"iunc",label:"IUNC",field:"iunc",sortable:!0},{name:"directive_92",label:"Οδηγία 92/43/ΕΟΚ",field:"directive_92",sortable:!0},{name:"bern",label:"Σύμβαση Βέρνης",field:"bern",sortable:!0},{name:"cites",label:"Cites",field:"cites",sortable:!0},{name:"date",label:"Ημερομηνία",field:"date",sortable:!0},{name:"source",label:"Πηγή",field:"source",sortable:!0},{name:"eunis",label:"Σύνδεσμος EUNIS",field:"eunis",sortable:!0}],columns_fauna:[{name:"latin_name",label:"Φύλο",field:"latin_name",sortable:!0},{name:"class",label:"Κλάση",field:"class",sortable:!0},{name:"taxonomy",label:"Τάξη",field:"taxonomy",sortable:!0},{name:"family",label:"Οικογένεια",field:"family",sortable:!0},{name:"species",label:"Είδος",field:"species",sortable:!0},{name:"common_name",label:"Κοινή ονομασία",field:"common_name",sortable:!0},{name:"n2k",label:"Κωδικός Ν2Κ",field:"n2k",sortable:!0},{name:"code_n2k",label:"Περιοχή Ν2Κ",field:"code_n2k",sortable:!0},{name:"iunc",label:"IUNC",field:"iunc",sortable:!0},{name:"directive_92",label:"Οδηγία 92/43/ΕΟΚ",field:"directive_92",sortable:!0},{name:"directive_09",label:"Οδηγία 2009/147/ΕΚ",field:"directive_09",sortable:!0},{name:"bern",label:"Σύμβαση Βέρνης",field:"bern",sortable:!0},{name:"bonn",label:"Σύμβαση Βόννης",field:"bonn",sortable:!0},{name:"cites",label:"Cites",field:"cites",sortable:!0},{name:"date",label:"Ημερομηνία",field:"date",sortable:!0},{name:"source",label:"Πηγή",field:"source",sortable:!0},{name:"eunis",label:"Σύνδεσμος EUNIS",field:"eunis",sortable:!0}]}}},s=l,d=a("2877"),o=a("9989"),c=a("429b"),u=a("7460"),b=a("adad"),p=a("823b"),m=a("cf57"),$=a("eaac"),f=a("2c91"),g=a("27f9"),_=a("0016"),y=a("9c40"),S=a("eebe"),v=a.n(S),I=Object(d["a"])(s,i,n,!1,null,null,null);t["default"]=I.exports;v()(I,"components",{QPage:o["a"],QTabs:c["a"],QTab:u["a"],QTabPanels:b["a"],QTabPanel:p["a"],QSpinnerGears:m["a"],QTable:$["a"],QSpace:f["a"],QInput:g["a"],QIcon:_["a"],QBtn:y["a"]})},ffd6:function(e,t){}}]);