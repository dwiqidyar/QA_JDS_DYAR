/// <reference types="cypress" />
describe('Login Test', () => {
  it('should login with valid credentials', () => {
    // Kunjungi halaman login
    cy.visit('https://develop--portal-jabar-cms.netlify.app/login'); 
    // Masukkan email
    cy.get('#email').type('rekrutment1@gmail.com'); 
    cy.wait(1000);

    // Masukkan password
    cy.get('#password').type('jabarjuara'); 
    cy.wait(1000);

    // Klik tombol login
    cy.get('button[type="submit"]').click(); 
    cy.wait(1000);

    // Klik menu layanan
    cy.contains('Layanan').click();
    cy.contains('Daftar Layanan').click();
    cy.wait(1000);

    // Klik tombol "Tambah Layanan"
    cy.contains('Tambah Layanan').click();
    cy.wait(1000);  
  });

  describe('Select Dropdown Kategori Layanan SPBE (RAL Level 2)', () => {
    it('should select the option by typing keyword', () => {
        // Kunjungi halaman yang berisi dropdown Kategori Layanan SPBE (RAL Level 2)
        cy.visit('https://develop--portal-jabar-cms.netlify.app/layanan/master-data/tambah'); 
        
        // Klik dropdown Kategori Layanan SPBE (RAL Level 2) untuk membukanya
        cy.get('.select2-container').click();

        // Ketik keyword/search pada komponen select2
        cy.get('.select2-search__field').type('RAL Level 2');

        // Pilih opsi yang sesuai
        cy.get('.select2-results__option').contains('RAL Level 2').click();
        
        // Verifikasi bahwa opsi yang dipilih adalah "RAL Level 2"
        cy.get('.select2-selection__rendered').should('contain', 'RAL Level 2');
    });
});

describe('Select Teknis Layanan', () => {
  it('should select Teknis Layanan with value "Online"', () => {
      // Kunjungi halaman yang berisi formulir pembuatan layanan
      cy.visit('https://develop--portal-jabar-cms.netlify.app/layanan/master-data/tambah');
      
      // Klik dropdown Teknis Layanan untuk membukanya
      cy.get('.select2-container').click();

      // Ketik keyword/search pada komponen select2
      cy.get('.select2-search__field').type('Online');

      // Pilih opsi yang sesuai
      cy.get('.select2-results__option').contains('Online').click();
      
      // Verifikasi bahwa opsi yang dipilih adalah "Online"
      cy.get('.select2-selection__rendered').should('contain', 'Online');
  });
});

describe('Aktifkan Toggle Tarif Maksimal dan Input Tarif Layanan dan Tarif Maksimal', () => {
  it('should activate the Tarif Maksimal toggle and input Tarif Layanan and Tarif Maksimal', () => {
      // Kunjungi halaman yang berisi formulir pembuatan layanan
      cy.visit('https://develop--portal-jabar-cms.netlify.app/layanan/master-data/tambah'); // Ganti URL_FORM_PAGE dengan URL halaman yang sesuai
      
      // Aktifkan toggle Tarif Maksimal
      cy.get('#toggle-tarif-maksimal').check();

      // Input nilai untuk Tarif Layanan
      cy.get('input[name=tarif_layanan]').type('500000');

      // Input nilai untuk Tarif Maksimal
      cy.get('input[name=tarif_maksimal]').type('750000');

      // Verifikasi bahwa toggle Tarif Maksimal telah diaktifkan
      cy.get('#toggle-tarif-maksimal').should('be.checked');

      // Verifikasi bahwa nilai Tarif Layanan dan Tarif Maksimal telah dimasukkan dengan benar
      cy.get('input[name=tarif_layanan]').should('have.value', '500000');
      cy.get('input[name=tarif_maksimal]').should('have.value', '750000');
  });
});

describe('Checklist Semua Field di Bagian Waktu Operasional', () => {
  it('should checklist all fields in Waktu Operasional section', () => {
      // Kunjungi halaman yang berisi formulir pembuatan layanan
      cy.visit('https://develop--portal-jabar-cms.netlify.app/layanan/master-data/tambah'); // Ganti URL_FORM_PAGE dengan URL halaman yang sesuai
      
      // Verifikasi keberadaan semua field di bagian Waktu Operasional
      cy.get('.waktu-operasional-section').within(() => {
          cy.get('input[name=jam_buka]').should('exist');
          cy.get('input[name=jam_tutup]').should('exist');
          cy.get('input[name=libur]').should('exist');
      });
  });
});
describe('Mengisi Atribut Data yang Bersifat Tidak Mandatory (Lokasi Pelayanan)', () => {
  it('should fill non-mandatory attribute (Lokasi Pelayanan)', () => {
      // Kunjungi halaman yang berisi formulir pembuatan layanan
      cy.visit('https://develop--portal-jabar-cms.netlify.app/layanan/master-data/tambah'); // Ganti URL_FORM_PAGE dengan URL halaman yang sesuai
      
      // Cek keberadaan field Lokasi Pelayanan
      cy.get('input[name=lokasi_pelayanan]').should('exist');

      // Inputkan data ke field Lokasi Pelayanan
      cy.get('input[name=lokasi_pelayanan]').type('Nama Lokasi Pelayanan');
  });
});

describe('Buat 3 Data pada Halaman 2 Bagian Aplikasi', () => {
  it('should create 3 data in Application section on page 2', () => {
      // Kunjungi halaman yang berisi formulir pembuatan layanan
      cy.visit('https://develop--portal-jabar-cms.netlify.app/layanan/master-data/tambah'); // Ganti URL_PAGE_2 dengan URL halaman yang sesuai dengan halaman kedua
      
      // Klik tombol "Tambah Data" atau tindakan yang sesuai untuk menambah data baru
      cy.contains('Tambah Data').click();

      // Isi data pertama
      cy.get('input[name=field_data_1]').type('Data 1');

      // Klik tombol "Simpan" atau tindakan yang sesuai untuk menyimpan data pertama
      cy.contains('Simpan').click();

      // Ulangi proses untuk membuat data kedua dan ketiga dengan menggunakan data yang berbeda
      // Data kedua
      cy.contains('Tambah Data').click();
      cy.get('input[name=field_data_2]').type('Data 2');
      cy.contains('Simpan').click();

      // Data ketiga
      cy.contains('Tambah Data').click();
      cy.get('input[name=field_data_3]').type('Data 3');
      cy.contains('Simpan').click();
  });
});



  
});




