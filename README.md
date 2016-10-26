# mongodb-query

List of simple mongodb-query.

### 1. Create or switch to `academic` database
* Query: `use academic`
* Expected output: `switched to db academic`

### 2. Show all data database
* Query: `show dbs`
* Expected output: `academic local`

### 3. Create or switch to `academic` database
* Query: `use (db_name)`
* Expected output: `switched to db (db_name)`

### 4. Create `departments` collection
* Query: `db.createCollection('departments')`
* Expected output: `{ "ok" : 1 }`

### 5. Create a collection named `students` with a refences to `departments`
* Query: `db.students.insert({ "studentID": "199809091234", "name": "Septian Adhi Tama", "address": "Jakarta Timur", "department": {"$ref": "departments", "$id": ObjectId("581027be8e44bacd3398f4ab"), "$db": "academic"}})`
* Expected output: `WriteResult({ "nInserted" : 1 })`

### 6. Show `students` collection structure
* Query: `for(var key in db.students.findOne()) { print(key, typeof key) }`
* Expected output:
  ```
  _id string
  studentID string
  name string
  address string
  department string
  ```

### 7. Insert 5 datas to `departments` collection.
* Query:
  ```
  db.departments.insertMany(
    [
      {code: 'B-M', name: 'Bussiness Management', department: 'Economy'},
      {code: 'D-M', name: 'Discrete Mathematics', department: 'Mathematics'},
      {code: 'L-N', name: 'Linear Algebra', department: 'Mathematics'},
      {code: 'D-M', name: 'Multimedia Design', department: 'Computer Science'},
      {code: 'N-A', name: 'Network Administration', department: 'Computer Science'}
    ]
  )
  ```

* Expected output:
  ```
  {
  	"acknowledged" : true,
  	"insertedIds" : [
  		ObjectId("5810586d8e0acd011f58ba0b"),
  		ObjectId("5810586d8e0acd011f58ba0c"),
  		ObjectId("5810586d8e0acd011f58ba0d"),
  		ObjectId("5810586d8e0acd011f58ba0e"),
  		ObjectId("5810586d8e0acd011f58ba0f")
  	]
  }
  ```

### 8. Insert 3 datas to `students` collection.
* Query:
  ```
  db.students.insertMany(
    [
      {
        "studentID" : "123456789012",
        "name" : "Ken Duigraha Putra",
        "address" : "Jakarta Pusat",
        "department" : {
            "$ref" : "departments",
            "$id" : ObjectId("581027be8e44bacd3398f4ab"),
            "$db" : "academic"
        }
      },
      {
        "studentID" : "123456789011",
        "name" : "Aji Lantang",
        "address" : "Depok",
        "department" : {
            "$ref" : "departments",
            "$id" : ObjectId("5810586d8e0acd011f58ba0d"),
            "$db" : "academic"
        }
      },
      {
        "studentID" : "123456789013",
        "name" : "Alexander HT",
        "address" : "Jakarta Utara",
        "department" : {
            "$ref" : "departments",
            "$id" : ObjectId("5810586d8e0acd011f58ba0f"),
            "$db" : "academic"
        }
      }
    ]
  )
  ```

* Expected output:
  ```
  {
      "acknowledged" : true,
      "insertedIds" : [
          ObjectId("58105a54fa0e7dc555cba33d"),
          ObjectId("58105a54fa0e7dc555cba33e"),
          ObjectId("58105a54fa0e7dc555cba33f")
      ]
  }
  ```

### 9. Show `students` collection
* Query: `db.students.find()`
* Expected output:
  ```
  /* 1 */
  {
      "_id" : ObjectId("581053ac8e0acd011f58ba0a"),
      "studentID" : "199809091234",
      "name" : "Septian Adhi Tama",
      "address" : "Jakarta Timur",
      "department" : {
          "$ref" : "departments",
          "$id" : ObjectId("581027be8e44bacd3398f4ab"),
          "$db" : "academic"
      }
  }

  /* 2 */
  {
      "_id" : ObjectId("58105b4bfa0e7dc555cba340"),
      "studentID" : "123456789012",
      "name" : "Ken Duigraha Putra",
      "address" : "Jakarta Pusat",
      "department" : {
          "$ref" : "departments",
          "$id" : ObjectId("581027be8e44bacd3398f4ab"),
          "$db" : "academic"
      }
  }

  /* 3 */
  {
      "_id" : ObjectId("58105b4bfa0e7dc555cba341"),
      "studentID" : "123456789011",
      "name" : "Aji Lantang",
      "address" : "Depok",
      "department" : {
          "$ref" : "departments",
          "$id" : ObjectId("5810586d8e0acd011f58ba0d"),
          "$db" : "academic"
      }
  }

  /* 4 */
  {
      "_id" : ObjectId("58105b4bfa0e7dc555cba342"),
      "studentID" : "123456789013",
      "name" : "Alexander HT",
      "address" : "Jakarta Utara",
      "department" : {
          "$ref" : "departments",
          "$id" : ObjectId("5810586d8e0acd011f58ba0f"),
          "$db" : "academic"
      }
  }
  ```

### 10. Display name and address key from `students` collection
* Query: `db.students.find({}, { name:true, address:true })`
* Expected output:
  ```
  /* 1 */
  {
      "_id" : ObjectId("581053ac8e0acd011f58ba0a"),
      "name" : "Septian Adhi Tama",
      "address" : "Jakarta Timur"
  }

  /* 2 */
  {
      "_id" : ObjectId("58105b4bfa0e7dc555cba340"),
      "name" : "Ken Duigraha Putra",
      "address" : "Jakarta Pusat"
  }

  /* 3 */
  {
      "_id" : ObjectId("58105b4bfa0e7dc555cba341"),
      "name" : "Aji Lantang",
      "address" : "Depok"
  }

  /* 4 */
  {
      "_id" : ObjectId("58105b4bfa0e7dc555cba342"),
      "name" : "Alexander HT",
      "address" : "Jakarta Utara"
  }
  ```

### 11. Display data from `students` collection with a spesific `studentID`
* Query: `db.students.find({studentID: '199809091234'}, { name:true, address:true })`
* Expected output:
  ```
  /* 1 */
  {
      "_id" : ObjectId("581053ac8e0acd011f58ba0a"),
      "name" : "Septian Adhi Tama",
      "address" : "Jakarta Timur"
  }
  ```

### 12. Display data from `departments` collection with asc and desc order by name
* Query: `db.students.find().sort({ name: 1 }).pretty();`
* Expected output:
  ```
  /* 1 */
  {
      "_id" : ObjectId("58105b4bfa0e7dc555cba341"),
      "studentID" : "123456789011",
      "name" : "Aji Lantang",
      "address" : "Depok",
      "department" : {
          "$ref" : "departments",
          "$id" : ObjectId("5810586d8e0acd011f58ba0d"),
          "$db" : "academic"
      }
  }

  /* 2 */
  {
      "_id" : ObjectId("58105b4bfa0e7dc555cba342"),
      "studentID" : "123456789013",
      "name" : "Alexander HT",
      "address" : "Jakarta Utara",
      "department" : {
          "$ref" : "departments",
          "$id" : ObjectId("5810586d8e0acd011f58ba0f"),
          "$db" : "academic"
      }
  }

  /* 3 */
  {
      "_id" : ObjectId("58105b4bfa0e7dc555cba340"),
      "studentID" : "123456789012",
      "name" : "Ken Duigraha Putra",
      "address" : "Jakarta Pusat",
      "department" : {
          "$ref" : "departments",
          "$id" : ObjectId("581027be8e44bacd3398f4ab"),
          "$db" : "academic"
      }
  }

  /* 4 */
  {
      "_id" : ObjectId("581053ac8e0acd011f58ba0a"),
      "studentID" : "199809091234",
      "name" : "Septian Adhi Tama",
      "address" : "Jakarta Timur",
      "department" : {
          "$ref" : "departments",
          "$id" : ObjectId("581027be8e44bacd3398f4ab"),
          "$db" : "academic"
      }
  }
  ```

### 13. Display name and address key from `students` collection
* Query:

  asc: `db.departments.find().sort({ name: 1 }).pretty()`

  desc: `db.departments.find().sort({ name: -1 }).pretty()`
* Expected output:

  asc:
  ```
  /* 1 */
  {
      "_id" : ObjectId("5810586d8e0acd011f58ba0b"),
      "code" : "B-M",
      "name" : "Bussiness Management",
      "department" : "Economy"
  }

  /* 2 */
  {
      "_id" : ObjectId("5810586d8e0acd011f58ba0c"),
      "code" : "D-M",
      "name" : "Discrete Mathematics",
      "department" : "Mathematics"
  }

  /* 3 */
  {
      "_id" : ObjectId("5810586d8e0acd011f58ba0d"),
      "code" : "L-N",
      "name" : "Linear Algebra",
      "department" : "Mathematics"
  }

  /* 4 */
  {
      "_id" : ObjectId("5810586d8e0acd011f58ba0e"),
      "code" : "D-M",
      "name" : "Multimedia Design",
      "department" : "Computer Science"
  }

  /* 5 */
  {
      "_id" : ObjectId("5810586d8e0acd011f58ba0f"),
      "code" : "N-A",
      "name" : "Network Administration",
      "department" : "Computer Science"
  }

  /* 6 */
  {
      "_id" : ObjectId("581028858e44bacd3398f4ac"),
      "code" : "S-A ",
      "name" : "System Administration",
      "department" : "Computer Science"
  }
  ```

  desc:
  ```
  /* 1 */
  {
      "_id" : ObjectId("581028858e44bacd3398f4ac"),
      "code" : "S-A ",
      "name" : "System Administration",
      "department" : "Computer Science"
  }

  /* 2 */
  {
      "_id" : ObjectId("5810586d8e0acd011f58ba0f"),
      "code" : "N-A",
      "name" : "Network Administration",
      "department" : "Computer Science"
  }

  /* 3 */
  {
      "_id" : ObjectId("5810586d8e0acd011f58ba0e"),
      "code" : "D-M",
      "name" : "Multimedia Design",
      "department" : "Computer Science"
  }

  /* 4 */
  {
      "_id" : ObjectId("5810586d8e0acd011f58ba0d"),
      "code" : "L-N",
      "name" : "Linear Algebra",
      "department" : "Mathematics"
  }

  /* 5 */
  {
      "_id" : ObjectId("5810586d8e0acd011f58ba0c"),
      "code" : "D-M",
      "name" : "Discrete Mathematics",
      "department" : "Mathematics"
  }

  /* 6 */
  {
      "_id" : ObjectId("5810586d8e0acd011f58ba0b"),
      "code" : "B-M",
      "name" : "Bussiness Management",
      "department" : "Economy"
  }
  ```

### 14. Search student by a spesific name
* Query: `db.students.find({name: 'Ken Duigraha Putra'})`

* Expected output:
  ```
  /* 1 */
  {
      "_id" : ObjectId("58105b4bfa0e7dc555cba340"),
      "studentID" : "123456789012",
      "name" : "Ken Duigraha Putra",
      "address" : "Jakarta Pusat",
      "department" : {
          "$ref" : "departments",
          "$id" : ObjectId("581027be8e44bacd3398f4ab"),
          "$db" : "academic"
      }
  }
  ```

## Contact
#### Developer/Projects
* Homepage: [TamaTamvan's Note](https://tamatamvan.web.id)
* e-mail: tama@tamatamvan.web.id
* Twitter: [@tamaadhi1](https://twitter.com/tamaadhi1 "tamaadhi1 on twitter")
* Facebook: [Septian Adhi Tama](https://facebook.com/light.akira21 "Septian Adhi Tama on Facebook")

## Contributor

[![TamaTamvan](https://tamatamvan.web.id/wp-content/uploads/2016/04/bner-e1463908127607.png)](https://tamatamvan.web.id)

Septian Adhi Tama & Ken Duigraha Putra &copy; 2016
