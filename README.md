# mongodb-query

**1. Membuat database akademik**

`use academic`

**2. Menampilkan semua data database**

`show dbs`

**3. Membuat atau mengaktifkan database**

`use academic`

**4. Membuat collection prodi**

```
db.createCollection("prodi")
db.prodi.insert({"kode_prodi":"001","nama_prodi":"Physics 101","jurusan":"Physics"})
```

**5. Membuat collection mahasiswa beserta reference-nya**

```
db.createCollection("mahasiswa")
db.mahasiswa.insert({nim:"001",nama:"Peter1",alamat:"Senayan",prodi:{ "$ref" : "prodi", "$id" : ObjectId("57eb79221ba1bd3975233629"), "$db" : "academic" }})
```

**6. Melihat struktur collection mahasiswa**

```
var keys = [];
db.mahasiswa.find().forEach(function(data){
    for (var key in data){
        if(keys.indexOf(key) < 0){
           keys.push(key);
        }
    }
});
print(keys);
```

**7. Menginputkan 5 data ke dalam collection prodi**

```
db.prodi.insert({"kode_prodi":"002","nama_prodi":"Physics 102","jurusan":"Physics"})
db.prodi.insert({"kode_prodi":"003","nama_prodi":"Physics 103","jurusan":"Physics"})
db.prodi.insert({"kode_prodi":"004","nama_prodi":"Physics 104","jurusan":"Physics"})
db.prodi.insert({"kode_prodi":"005","nama_prodi":"Physics 105","jurusan":"Physics"})
db.prodi.insert({"kode_prodi":"006","nama_prodi":"Physics 106","jurusan":"Physics"})
```

**8. Menginputkan 3 data ke dalam collection mahasiswa**

```
db.mahasiswa.insert({nim:"002",nama:"Peter2",alamat:"Senayan",prodi:{ "$ref" : "prodi", "$id" : ObjectId("57eb79221ba1bd3975233629"), "$db" : "academic" }})
db.mahasiswa.insert({nim:"003",nama:"Peter3",alamat:"Senayan",prodi:{ "$ref" : "prodi", "$id" : ObjectId("57eb79221ba1bd3975233629"), "$db" : "academic" }})
```

**9. Melihat isi collection mahasiswa**

`db.mahasiswa.find().pretty()`

**10. Menampilkan key nama dan alamat dalam collection mahasiswa**

`db.mahasiswa.find({},{nama:1,alamat:1}).pretty()`

**11. Menampilkan key nim, nama, dan alamat dari data mahasiswa yang mempunyai nim tertentu**

`db.mahasiswa.find({nim:"001"},{nim:1,nama:1,alamat:1}).pretty()`

**12. Menampilkan semua data mahasiswa secara urut berdasarkan nama secara dengan $orderby**

`db.mahasiswa.find().sort({"nama":1}).pretty()`

**13. Menampilkan semua data prodi secara urut berdasarkan nama_prodi secara ascending maupun descending**

```
db.prodi.find().sort({"nama_prodi":1}).pretty()
db.prodi.find().sort({"nama_prodi":-1}).pretty()
```