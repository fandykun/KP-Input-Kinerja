# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Category(models.Model):
    category_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'category'


class Departemen(models.Model):
    id = models.BigAutoField(primary_key=True)
    nama = models.CharField(max_length=300, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    fakultas = models.OneToOneField('Fakultas', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'departemen'


class Fakultas(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fakultas'


class Jurnal(models.Model):
    id = models.BigAutoField(primary_key=True)
    judul = models.CharField(max_length=500, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    author = models.CharField(max_length=1000, blank=True, null=True)
    pulished_at = models.CharField(max_length=1000, blank=True, null=True)
    jurnal_vol = models.CharField(max_length=100, blank=True, null=True)
    jurnal_no = models.CharField(max_length=100, blank=True, null=True)
    url = models.CharField(max_length=500, blank=True, null=True)
    tahun = models.CharField(max_length=4, blank=True, null=True)
    tingkat = models.CharField(max_length=45, blank=True, null=True)
    pi = models.IntegerField(db_column='PI', blank=True, null=True)  # Field name made lowercase.
    pn = models.IntegerField(db_column='PN', blank=True, null=True)  # Field name made lowercase.
    jurnalnasional = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'jurnal'


class Konferensi(models.Model):
    id = models.BigAutoField(primary_key=True)
    judul = models.CharField(max_length=500, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    author = models.CharField(max_length=1000, blank=True, null=True)
    pulished_at = models.CharField(max_length=1000, blank=True, null=True)
    url = models.CharField(max_length=500, blank=True, null=True)
    tahun = models.CharField(max_length=4, blank=True, null=True)
    tingkat = models.CharField(max_length=45, blank=True, null=True)
    pi = models.IntegerField(db_column='PI', blank=True, null=True)  # Field name made lowercase.
    pn = models.IntegerField(db_column='PN', blank=True, null=True)  # Field name made lowercase.
    konf_hal = models.CharField(max_length=500, blank=True, null=True)
    tempat = models.CharField(max_length=500, blank=True, null=True)
    tanggal_mulai = models.DateField(blank=True, null=True)
    tanggal_selesai = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'konferensi'


class KonferensiHasMasterDosen(models.Model):
    konferensi = models.OneToOneField(Konferensi, models.DO_NOTHING, primary_key=True)
    master_dosen = models.OneToOneField('MasterDosen', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'konferensi_has_master_dosen'
        unique_together = (('konferensi', 'master_dosen'),)


class KuliahTamu(models.Model):
    id = models.BigAutoField(primary_key=True)
    topik = models.CharField(max_length=500, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    tanggal = models.DateField(blank=True, null=True)
    pemateri = models.CharField(max_length=500, blank=True, null=True)
    institusi = models.CharField(max_length=500, blank=True, null=True)
    filepath = models.CharField(max_length=500, blank=True, null=True)
    tingkat = models.CharField(max_length=255, blank=True, null=True)
    departemen = models.OneToOneField(Departemen, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'kuliah_tamu'


class MasterDosen(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    departemen = models.OneToOneField(Departemen, models.DO_NOTHING)
    nip = models.CharField(max_length=20, blank=True, null=True)
    golongan = models.CharField(max_length=10, blank=True, null=True)
    jabatan_fungsional = models.CharField(max_length=45, blank=True, null=True)
    pendidikan_tertinggi = models.CharField(max_length=45, blank=True, null=True)
    ijazah = models.CharField(max_length=45, blank=True, null=True)
    jabatan = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'master_dosen'


class MasterDosenHasJurnal(models.Model):
    master_dosen = models.OneToOneField(MasterDosen, models.DO_NOTHING, primary_key=True)
    jurnal = models.OneToOneField(Jurnal, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'master_dosen_has_jurnal'
        unique_together = (('master_dosen', 'jurnal'),)


class MasterMahasiswa(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    departemen = models.OneToOneField(Departemen, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'master_mahasiswa'


class MasterTendik(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    departemen = models.OneToOneField(Departemen, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'master_tendik'


class Prestasi(models.Model):
    name = models.CharField(max_length=1500, blank=True, null=True)
    id = models.BigAutoField(primary_key=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    tingkat = models.CharField(max_length=80, blank=True, null=True)
    peringkat = models.CharField(max_length=500, blank=True, null=True)
    tanggal = models.DateField(blank=True, null=True)
    url = models.CharField(max_length=200, blank=True, null=True)
    filepath = models.CharField(max_length=500, blank=True, null=True)
    is_validated = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'prestasi'


class PrestasiHasMasterDosen(models.Model):
    prestasi = models.OneToOneField(Prestasi, models.DO_NOTHING, primary_key=True)
    master_dosen = models.OneToOneField(MasterDosen, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'prestasi_has_master_dosen'
        unique_together = (('prestasi', 'master_dosen'),)


class PrestasiHasMasterMahasiswa(models.Model):
    prestasi = models.OneToOneField(Prestasi, models.DO_NOTHING, primary_key=True)
    master_mahasiswa = models.OneToOneField(MasterMahasiswa, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'prestasi_has_master_mahasiswa'
        unique_together = (('prestasi', 'master_mahasiswa'),)


class PrestasiHasMasterTendik(models.Model):
    prestasi = models.OneToOneField(Prestasi, models.DO_NOTHING, primary_key=True)
    master_tendik = models.OneToOneField(MasterTendik, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'prestasi_has_master_tendik'
        unique_together = (('prestasi', 'master_tendik'),)


class Roles(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'roles'


class TrainingDosen(models.Model):
    id = models.BigAutoField(primary_key=True)
    judul = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    date_start = models.DateField(blank=True, null=True)
    date_end = models.DateField(blank=True, null=True)
    tempat = models.CharField(max_length=255, blank=True, null=True)
    filepath = models.CharField(max_length=500, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'training_dosen'


class TrainingDosenHasMaster(models.Model):
    training_dosen = models.OneToOneField(TrainingDosen, models.DO_NOTHING, primary_key=True)
    master = models.OneToOneField(MasterDosen, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'training_dosen_has_master'
        unique_together = (('training_dosen', 'master'),)


class TrainingKaryawan(models.Model):
    id = models.BigAutoField(primary_key=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    jenis_pelatihan = models.CharField(max_length=255, blank=True, null=True)
    tanggal = models.CharField(max_length=255, blank=True, null=True)
    tempat = models.CharField(max_length=500, blank=True, null=True)
    filepath = models.CharField(max_length=500, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'training_karyawan'


class TrainingKaryawanHasMasterTendik(models.Model):
    training_karyawan = models.OneToOneField(TrainingKaryawan, models.DO_NOTHING, primary_key=True)
    master_tendik = models.OneToOneField(MasterTendik, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'training_karyawan_has_master_tendik'
        unique_together = (('training_karyawan', 'master_tendik'),)


class User(models.Model):
    id = models.BigIntegerField(primary_key=True)
    username = models.CharField(max_length=16)
    password = models.CharField(max_length=32)
    created_at = models.DateTimeField(blank=True, null=True)
    master_dosen = models.OneToOneField(MasterDosen, models.DO_NOTHING, blank=True, null=True)
    master_tendik = models.OneToOneField(MasterTendik, models.DO_NOTHING, blank=True, null=True)
    master_mahasiswa = models.OneToOneField(MasterMahasiswa, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user'


class UserHasRoles(models.Model):
    user = models.OneToOneField(User, models.DO_NOTHING, primary_key=True)
    roles = models.ForeignKey(Roles, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'user_has_roles'
        unique_together = (('user', 'roles'),)
