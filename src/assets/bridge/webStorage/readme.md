# WebStorage Bridge
a native bridge to store data on local storage.

## Compatibility
web browser, mobile (through cordova)




## API Docs

### Store
To store data to local storage

params:

    key: stored index name for data (String)
    value: your data (String - Json)

return:

    // on success
    status: true
    data: null
    error: null  

    // on fail
    status: false
    data: null
    error: error message      

#### Get
To read stored data from local storage

params:

    key: stored index name for data (String)

return:

    // on success
    status: true
    data: object of your requested data
    error: null  

    // on fail
    status: false
    data: null
    error: error message  

#### Remove
To remove stored data from local storage

params:
    
    key: stored index name for data (String)

return:

    // on success
    status: true
    data: null
    error: null  

    // on fail
    status: false
    data: null
    error: error message      