# API SPEC

* [README.md](../README.md)

# Introduction

Basically all API follow RESTful.
we highly recommend read this 
* [Architectural Styles and the Design of Network-based Software Architectures](https://www.ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf)

> *do not forget [encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)*
> 
> if queryString include special charater you must use encodeURIComponent()
> e.g
> ```  
> const preconditionAttributes = `test1:${encodeURIComponent('tes!@#t1::Value')},test2:test2Value`;
> ```
<br>
<br>

# Response status

basically follow [standard HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

| statusCode | standard mean         |                             |
|------------|-----------------------|-----------------------------|
| 200        | OK                    | model get / success request |
| 201        | Created               | model created               |
| 204        | No Content            | model deleted               |
| 404        | Not Found             | model not found             |
| 406        | Not Acceptable        | validation error            |
| 500        | Internal Server Error | undefined error             |

<br>
<br>

# Response data structure
### CREATE `/model`
e.g response
```
<modelObject>
```

### Bulk CREATE `/model`
**accept request body up to 100**

e.g response
```
{
  data: [
    data<Object>,
  ],
  affectedRows: 1,
}
```

### GET list `/model`
**accept pageSize up to 100**

e.g response
```
{              
  count: count
  data: [
    data1<Object>,
    data2<Object>,
    data3<Object>,
    ...
  ]
  prev: prevLink,
  next: nextLink,
  pageSize: 25,
}
```

now 'getList' support these queries   
please ref documentation of search API in swagger
* preconditionAttributes
* preconditionOperator

### GET `/model/:modelId`
e.g response
```
<modelObject>
```

<br>
<br>

### UPDATE `/model/:modelId`
**accept request body up to 100**

e.g response
```
{
  data: [
    data<Object>,
  ],
  affectedRows: 1,
}
```

<br>
<br>

### Bulk UPDATE `/model`
**accept request body up to 100**

> if request `/aModel/:aModelId/bModel`
> This request can be deleted without a limit of 100.

e.g request body
```
[
  data1<Object>,
  data2<Object>,
  data3<Object>,
  ...
]
```

e.g response
```
{
  data: [
    data1<Object>,
    data2<Object>,
    data3<Object>,
    ...
  ],
  affectedRows: 25
}
```

<br>
<br>

### DELETE `/model/:modelId`

e.g response
```
{
  affectedRows: 1
}
```

<br>
<br>

### Bulk DELETE `/model`
**not yet support.** but same response structure with `DELETE /model/:modelId`

e.g request body
```
[
  modelId1,
  modelId2,
  modelId3,
  ... 
]
```
> if you do not input body it will delete everything  
> e.g DELETE `/model/:modelId/subModel`  
> this request will delete every subModel

e.g response
```
{
  affectedRows: 25
}
```

<br>
<br>

# Common query options
all **getList** api support `includeAttributes, includeModels, page, pageSize` query parameters for now

**warning**
it will be under control based on access role

| action          | attributeName     | purpose                           | e.g                                                |   |
|--------------|-------------------|-----------------------------------|----------------------------------------------------|---|
| getList, get | includeModels     | get submodel                      | /apis/wuc/users?includeModels=presence,userSetting |   |
| getList, get | includeAttributes | get specificModels                | /apis/wuc/users?includeAttributes=a,b,c            |   |
| getList      | page              | get specific page                 | /apis/wuc/users?page=10                            |   |
| getList      | pageSize          | set pageSize default: 25 max: 100 | /apis/wuc/users?pageSize=50                        |   |
| getList      | orderBy          | custom ordering such as 'orderSequence' | /apis/wuc/users?orderby=orderSequence:desc                        |   |
|   |           | | /apis/wuc/users?orderby=orderSequence:desc,displayName:asc                        |   |


<br>

### about `includeModels`
this attributes allow up to 2

<br>

### about `includeAttributes`
you can get specific attributes

e.g
```
testModel {
  a: 'aValue',
  b: 'aValue',
  c: 'aValue',
  d: 'aValue',
  ...
}
```

`GET /testModels?includeAttributes=a,b` will return
```
[
  <testModel> {
    a: 'aValue',
    b: 'bValue,
  },
  <testModel> {
    a: 'aValue',
    b: 'bValue,
  },
  <testModel> {
    a: 'aValue',
    b: 'bValue,
  },
  ...
]
```


```
"preconditionAttributes=searchField1:['type-a','type-b','type-c','type-d']:string:in,isActive:true:boolean:eq";


"filter=
    searchField1:['type-a','type-b','type-c','type-d']:string:in,
    isActive:true:boolean:eq";
```
