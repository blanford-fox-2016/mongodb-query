# mongodb-query

Mongodb Queries

### 1. Create or switch to `academic` database
```
use academic
```
### 2. Show all database
```
show dbs
```
### 3. Switch to `academic` database
```
use academic
```
### 4. Create `department` collection
```
db.createCollection('department')
```
### 5. Create a collection named `mahasiswa` with reference to `department`

```
db.students.insert({"nim": "123123123123", "name": "Alessandro", "address": "Jakarta", "department": {"$ref": "department", "$id": ObjectId("<ObjectId from department>"), "$db": "academic" }})
```
### 6. Show `mahasiswa` collection structure
```
for(var key in db.students.findOne()) {print(key, typeof key)}
```
### 7.  Insert 5 datas to `department` collection.
```
db.department.insertMany([
  {'code': 'ME', 'name': 'Mechanical Engineering', 'major': 'science'},
  {'code': 'CE', 'name': 'Civil Engineering', 'major': 'science'},
  {'code': 'EE', 'name': 'Electrical Engineering', 'major': 'science'},
  {'code': 'AC', 'name': 'Accounting', 'major': 'business'},
  {'code': 'BM', 'name': 'Business and Marketing', 'major': 'business'}
  ])
```
### 8. Insert 3 datas to `mahasiswa` collection.
```
db.students.insertMany([
  {
    "nim": "123123123123",
    "name": "Alessandro",
    "address": "Jakarta",
    "department": {
      "$ref": "department",
      "$id": ObjectId("<ObjectId from department>"),
      "$db": "academic"
    }
  },
  {
    "nim": "123123123124",
    "name": "Alex",
    "address": "Bekasi",
    "department": {
      "$ref": "department",
      "$id": ObjectId("<ObjectId from department>"),
      "$db": "academic"
    }
  },
  {
    "nim": "123123123125",
    "name": "Aji",
    "address": "Tangerang",
    "department": {
      "$ref": "department",
      "$id": ObjectId("<ObjectId from department>"),
      "$db": "academic"
    }
  },
  ])
  ```

### 9. Show `mahasiswa` collection.
```
db.mahasiswa.find()
```
### 10. Display keys `name` and `address` from `mahasiswa`.
```
db.mahasiswa.find({}, {name: true, address, true})
```
### 11. Display keys `nim`, `name` and `address` from `mahasiswa` with a specific `nim`.
```
db.mahasiswa.find({nim: '123123123123'}, {name: true, address, true})
```
### 12. Display all `mahasiswa` and sort by its `name`.
```
db.mahasiswa.find().sort({ name: <1 for ascending and -1 for descending>}).pretty()
```
### 13. Display all `department` and sort by its `name`.
```
db.department.find().sort({ name : -1}).pretty()
```
### 14. Search `mahasiswa` with a `name`
```
db.mahasiswa.find({name: 'Alex'})
```
