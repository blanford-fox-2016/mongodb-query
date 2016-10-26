# mongodb-query

## 1. Membuat database akademik
```
use academic
```

## 2. Menampilkan semua data database
```
show dbs
```

## 3. Membuat atau mengaktifkan database
```
use academic
```

## 4. membuat collection prodi
```
db.createCollection("prodi")
```

## 5. Membuat collection mahasiswa
```
db.createCollection("mahasiswa")
```
## 6. melihat struktur collection mahasiswa
```
/* query ini menampilkan atribut apa saja yang ada di dalam collection */

Object.getOwnPropertyNames(db.mahasiswa.findOne())

/* query ini menampilkan atribut dan tipe data yang ada di dalam collection */

var list_structure = db.mahasiswa.findOne()
for (var key in list_structure) { print (key, typeof key) ; }
```

## 7. menginputkan 5 data ke dalam collection prodi
```
db.prodi.insert({kode:"1",nama:"database",jurusan:"Teknik Informatika"})
db.prodi.insert({kode:"2",nama:"multimedia",jurusan:"Teknik Informatika"})
db.prodi.insert({kode:"3",nama:"game",jurusan:"Game Application and Technology"})
db.prodi.insert({kode:"4",nama:"art",jurusan:"Desain Visual"})
db.prodi.insert({kode:"5",nama:"sastra jepang",jurusan:"Sastra"})
```

## 8. menginputkan 3 data ke dalam collection mahasiswa
```
db.mahasiswa.insert({nim:"1501206192",nama:"alex",alamat:"Jakarta Utara",prodi:{"$ref":"prodi","$id":"ObjectId('58102ab75b0519190fc81549')","$db":"academic"}})

db.mahasiswa.insert({nim:"1601271955",nama:"toni",alamat:"Jakarta Selatan",prodi:{"$ref":"prodi","$id":"ObjectId('58102bba5b0519190fc8154a')","$db":"academic"}})

db.mahasiswa.insert({nim:"1601241235",nama:"albert",alamat:"Jakarta Barat",prodi:{"$ref":"prodi","$id":"ObjectId('58102bd75b0519190fc8154b')","$db":"academic"}})
```

## 9. melihat isi collection mahasiswa
```
db.getCollection("mahasiswa").find()
```

## 10. Menampilkan key nama dan alamat dalam collection mahasiswa
```
db.mahasiswa.find({},{_id:false,nama:true,alamat:true})
```

## 11. Memapilkan key nim, nama, dan alamat dari data mahasiswa yang mempunyai nim tertentu
```
db.mahasiswa.find({ nim: "1601271955" },{ _id: false, nim: true, nama: true, alamat: true } )
```

## 12. Menampilkan semua data mahasiswa secara urut berdasarkan nama dan sort(  ) secara ascending maupun descending
```
--ASC--
db.mahasiswa.find({},{ _id: false, nim: true, nama: true, alamat: true } ).sort({nama:1})

--DESC--
db.mahasiswa.find({},{ _id: false, nim: true, nama: true, alamat: true } ).sort({nama:-1})
```
## 13. Menampilkan semua data prodi secara urut berdasakan nama secara ascending maupun descending
```
--ASC--
db.prodi.find({},{ _id: false, nim: true, nama: true, alamat: true } ).sort({nama:1})

--DESC--
db.prodi.find({},{ _id: false, nim: true, nama: true, alamat: true } ).sort({nama:-1})
```
## 14. mencari data mahasiswa dengan nama
```
db.mahasiswa.find({nama:"toni"},{})
```
