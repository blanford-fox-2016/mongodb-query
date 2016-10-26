# mongodb-query

### 1. Query Membuat Database Akademik
```
  use academic
```

### 2. Query Menampilkan semua database
```
  show dbs
```

### 3. Query Membuat atau mengaktifkan database
```
  use academic
```

### 4. Membuat Collection `Prodi`
```
db.createCollection("Prodi" )
```

### 5. Membuat Collection `Mahasiswa` beserta referencenya
```
db.Mahasiswa.insert({"nim":"1501199887","nama":"Sahbana Lubis","alamat":"Padang","Prodi":{"$ref":"Prodi","$id":ObjectId("57eb6df75bb5446cd588e796"),"$db":"academic"}})
```

### 6. Melihat struktur Collection `Mahasiswa`
```
var list_structure = db.Mahasiswa.findOne() for (var key in list_structure) { print (key, typeof key) ; }
```

### 7. Menginput 5 data kedalam collection `Prodi`
```
db.Prodi.insert({ "kode_prodi":"A01", "nama_prodi":"Ilmu Komputer", "jurusan":"Teknik Informatika"})
```

### 8. Menginput 3 data kedalam collection `Mahasiswa`
```
db.mahasiswa.insert({"nim":"1501199887","nama":"Sahbana Lubis","alamat":"Padang","Prodi":{"$ref":"Prodi","$id":ObjectId("57eb6df75bb5446cd588e796"),"$db":"academic"}})

```

### 9. melihat isi collection `Mahasiswa`
```
db.Mahasiswa.find().pretty()
```

### 10. Menampilkan key nama dan alamat dalam collection `Mahasiswa`
```
db.Mahasiswa.find({}, {key:true,nama:true,alamat:true}).pretty()
```

### 11. Menampilkan key nim,nama,alamat, dari data `Mahasiswa` yang mempunyai nim tertentu
```
db.mahasiswa.find({"nim" : "1401078576"}).pretty()
```

### 12. Menampilkan semua data `Mahasiswa` secara urut berdasarkan nama secara orderby
```
db.Mahasiswa.find()._addSpecial( "$orderby", { nama : -1 } ) db.Mahasiswa.find().sort( { "nama": 1 } ).pretty()
```

### 13. Menampilkan semua data prodi secara urut berdasarkan nama `Prodi` secara ascending maupun descending
```
db.mahasiswa.find().sort( { "nama": 1 } ).pretty() db.mahasiswa.find().sort( { "nama": -1 } ).pretty()
```
