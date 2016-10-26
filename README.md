# mongodb-query

## 1 Membuat database akademik

```
use akademik
```

## 2 Menampilkan semua data database

```
show dbs
```

## 3. Membuat atau mengaktifkan database

```
use <NAMA_DATABASE>
```

## 4. Membuat collection prodi

```
db.createCollection("prodi")
```

## 5. Membuat collection mahasiswa

```
db.createCollection("mahasiswa")
```

## 6. Melihat struktur collection mahasiswa

```
for(key in db.mahasiswa.findOne()) {print(key, typeof key)}
```

## 7. Menginputkan 5 data ke dalam collection prodi

```
db.prodi.insert({kode:"mt", nama:"matematika", jurusan:"teknik informatika"})

db.prodi.insert({kode:"fis", nama:"fisika", jurusan:"teknik fisika"})

db.prodi.insert({kode:"kim", nama:"kimia", jurusan:"teknik kimia"})

db.prodi.insert({kode:"bio", nama:"biologi", jurusan:"kedokteran"})

db.prodi.insert({kode:"dt", nama:"dota", jurusan:"game"})
```

## 8. Menginputkan 3 data ke dalam collection mahasiswa

```
db.mahasiswa.insert({nim:"1601247621", nama:"dharmadi", alamat:"suter hijau", prodi:{"$ref":"prodi", "$id":"ObjectId('58102b4263954db8af2b3970')","$db":"akademik" }})

db.mahasiswa.insert({nim:"1501206192", nama:"alexander", alamat:"pluit", prodi:{"$ref":"prodi", "$id":"ObjectId('58102bc763954db8af2b3971')","$db":"akademik" }})

db.mahasiswa.insert({nim:"1601271956", nama:"toni", alamat:"permata hijau", prodi:{"$ref":"prodi", "$id":"ObjectId('58102bf163954db8af2b3972')","$db":"akademik" }})
```

## 9. Melihat isi collection mahasiswa

```
db.getCollection("mahasiswa").find()
```

## 10. Menampilkan key nama dan alamat dalam collection mahasiswa

```
db.mahasiswa.find({}, {nama:true, alamat:true})
```

## 11. Menampilkan key nim, nama, dan alamat dari data mahasiswa yang mempunyai nim tertentu

```
db.mahasiswa.find({nim:"1601247621"}, {nim:true, nama:true, alamat:true})
```

## 12. Menampilkan semua data mahasiswa secara urut berdasarkan nama dengan sort() secara ascending maupun descending

```
ASC
db.mahasiswa.find().sort({"nama": 1})

DESC
db.mahasiswa.find().sort({"nama": -1})
```

## 13. Menampikan semua data prodi secara urut berdasarkan nama secara ascending maupun descending

```
ASC
db.prodi.find().sort({"nama": 1})

DESC
db.prodi.find().sort({"nama": -1})
```