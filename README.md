# mongodb-query

### Membuat Database Academic

```
use academic
```

### Menampilkan semua data Database

```
show dbs
```

### Membuat atau mengaktifkan database

```
use (new database)
```

### Membuat collection prodi / major

```
db.collection('major', <options>)
```

### Membuat collection Student dan reference nya

```
//format
db.student.insert({
  "name":"newName", "major":{"$ref":"(targetCollectionToReference)","$id":"(collectionIdToReference)","$db":"(used database)"},
  "email":"newEmail"
})

//example
db.student.insert({
  "name":"ariz", "major":{"$ref":"major","$id":"ObjectId(58102930f5e84e4077af632b)","$db":"academic"},
  "email":"ariz@gmail.com"
})
```

### Menginputkan 5 data ke dalam collection major
```
db.major.insert([{"name":"mechanical engineering"},{"name":"computer science"},{"name":"architecture"},{"name":"environmental engineering"},{"name":"pharmacy"}])

//checking
db.major.find()
{ "_id" : ObjectId("58102930f5e84e4077af632b"), "name" : "mechanical engineering" }
{ "_id" : ObjectId("58102930f5e84e4077af632c"), "name" : "computer science" }
{ "_id" : ObjectId("58102bedf5e84e4077af632e"), "name" : "architecture" }
{ "_id" : ObjectId("58102bedf5e84e4077af632f"), "name" : "environmental engineering" }
{ "_id" : ObjectId("58102bedf5e84e4077af6330"), "name" : "pharmacy" }

```

### Menginputkan 3 data ke dalam collection student
```
db.student.insert([{
  "name":"ariz", "major":{"$ref":"major","$id":"ObjectId(58102930f5e84e4077af632b)","$db":"academic"},
  "email":"ariz@gmail.com"
  },
  {
  "name":"tama", "major":{"$ref":"major","$id":"ObjectId(58102930f5e84e4077af632c)","$db":"academic"},
  "email":"tama@gmail.com"
    },
    {
  "name":"ken", "major":{"$ref":"major","$id":"ObjectId(58102bedf5e84e4077af6330)","$db":"academic"},
  "email":"tama@gmail.com"
    }])

//checking with pretty
db.student.find().pretty()
{
       	"_id" : ObjectId("58102ad3f5e84e4077af632d"),
       	"name" : "ariz",
       	"major" : DBRef("major", "ObjectId(58102930f5e84e4077af632b)", "academic"),
       	"email" : "ariz@gmail.com"
}
{
       	"_id" : ObjectId("58102e28f5e84e4077af6331"),
       	"name" : "tama",
       	"major" : DBRef("major", "ObjectId(58102930f5e84e4077af632c)", "academic"),
       	"email" : "tama@gmail.com"
}
{
       	"_id" : ObjectId("58102e28f5e84e4077af6332"),
       	"name" : "ken",
       	"major" : DBRef("major", "ObjectId(58102bedf5e84e4077af6330)", "academic"),
       	"email" : "ken@gmail.com"
}
```

### Melihat isi collection student
```
db.student.find().pretty()
{
       	"_id" : ObjectId("58102ad3f5e84e4077af632d"),
       	"name" : "ariz",
       	"major" : DBRef("major", "ObjectId(58102930f5e84e4077af632b)", "academic"),
       	"email" : "ariz@gmail.com"
}
{
       	"_id" : ObjectId("58102e28f5e84e4077af6331"),
       	"name" : "tama",
       	"major" : DBRef("major", "ObjectId(58102930f5e84e4077af632c)", "academic"),
       	"email" : "tama@gmail.com"
}
{
       	"_id" : ObjectId("58102e28f5e84e4077af6332"),
       	"name" : "ken",
       	"major" : DBRef("major", "ObjectId(58102bedf5e84e4077af6330)", "academic"),
       	"email" : "ken@gmail.com"
}
```
### Menampilkan key name dan email dari student
```
db.student.find({}, {"name":1, "email":1})

//or

db.student.find({}, {"major":0})
```

### Menampilkan data dari student yang memiliki attribut tertentu
```
db.student.find({id:1})
```

### Menampilkan semua data student secara urut dengan sort() baik ascending maupun descending

```
db.student.find().sort({key:1})

1 is for ascending
-1 is for descending

//example select all descending name
db.student.find().sort({name:-1})
```

### Menampilkan semua data major secara urut dengan sort() baik ascending maupun descending

```
db.major.find().sort({key:1})

1 is for ascending
-1 is for descending

//example select all descending name
db.major.find().sort({name:-1})
```
