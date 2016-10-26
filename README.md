# Mongodb-query

### 1. Check mongodb version on the desktop
```
mongod -version
```
and you will *probably* get the result similar like this
```
db version v3.2.9
```


### 2. Start mongodb on CLI, you can type this
```
mongo
```


### 3. Create *academics* database, you can type this on your console.
To create database in Mongodb, you can simply use ```use``` following with your database's name
```
> use academics
switched to db academics
```
And the focus of your mongodb will be directed to the newly created database.

### 4. Create a *collection* in *academics* database, you can type this on your console.
```
# create a collection. In this case, major as my collection.

> db.createCollection("faculty")
{ "ok" : 1 }

# check the collection

> show dbs
academics  0.000GB
linky      0.000GB
local      0.000GB
```

### 5. Insert fields inside the faculty 'table', you can use ```insert```.

```
db.faculty.insert({code:"1",department:"engineering",major:"civil"})
WriteResult({ "nInserted" : 1 })
```

### 6. create student collection and insert the fields to database.

```
db.createCollection("student")
db.student.insert({nim:123,name:"aji",address:"depok",faculty:"engineering"})
```

### 7. Check whether your collection is already in database or not.

```
# to show the available database
show db

#to show the available collection
show collection

#to find all the student available on your database
> db.student.find()

# the result will look like this

{
	"_id" : ObjectId("5810538dd7949229179c216d"),
	"nim" : 123,
	"name" : "aji",
	"address" : "depok",
	"faculty" : {
		"$ref" : "faculty",
		"_id" : ObjectId("58102da5a48629f90671b33f"), # object id of the faculty
		"db" : "academics"
	}
}
```

### 8 and 9. Showing all the faculties and students data
```
> db.student.find()

/* 1 */
{
    "_id" : ObjectId("58102da5a48629f90671b33f"),
    "code" : "1",
    "department" : "engineering",
    "major" : "civil"
}

/* 2 */
{
    "_id" : ObjectId("581055c3d7949229179c216e"),
    "code" : 2.0,
    "department" : "economics",
    "major" : "behavioral economics"
}

/* 3 */
{
    "_id" : ObjectId("58105602d7949229179c2170"),
      "code" : 3.0,
    "department" : "humanities",
    "major" : "philosophy"
}




> db.student.find()

/* 1 */
{
    "_id" : ObjectId("5810339bd7949229179c216b"),
    "nim" : 123.0,
    "name" : "aji",
    "address" : "depok",
    "faculty" : "engineering"
}

/* 2 */
{
    "_id" : ObjectId("5810530fd7949229179c216c"),
    "nim" : 123.0,
    "name" : "aji",
    "address" : "depok",
    "faculty" : {}
}

/* 3 */
{
    "_id" : ObjectId("5810538dd7949229179c216d"),
    "nim" : 123.0,
    "name" : "aji",
    "address" : "depok",
    "faculty" : {
        "$ref" : "faculty",
        "_id" : ObjectId("58102da5a48629f90671b33f"),
        "db" : "academics"
    }
}

/* 4 */
{
    "_id" : ObjectId("58105766d7949229179c2171"),
    "nim" : 1234.0,
    "name" : "baji",
    "address" : "jakarta",
    "faculty" : {
        "$ref" : "faculty",
        "_id" : ObjectId("58102da5a48629f90671b33f"),
        "db" : "academics"
    }
}

/* 5 */
{
    "_id" : ObjectId("581057ddd7949229179c2172"),
    "nim" : 1234.0,
    "name" : "baji",
    "address" : "jakarta",
    "faculty" : {
        "$ref" : "faculty",
        "_id" : ObjectId("58105602d7949229179c2170"),
        "db" : "academics"
    }
}
```

### 10. Showing name's key and address' key in student collection
```
db.student.find({},{name:true, address:true})

```

### 11. Showing all the fields inside the students with calling specific key
```
db.student.find({nim:1234},{nim: true,name:true, address:true})

```

### 12. Ascending and Descending student by name field
```
ascending order by name
db.student.find().sort({ name: 1})
descending order by name
db.student.find().sort({ name: -1})
```

### 13. Ascending and Descending faculty by name field
```
ascending order by name
db.faculty.find().faculty({ name: 1})
descending order by name
db.faculty.find().sort({ name: 1})
```

### 14. Find the specific name inside the student collection
```
ascending order by name
db.student.find({name:"the_name_in_your_field"})
```














To get a collection, one can use db.collection('<collection name>').
