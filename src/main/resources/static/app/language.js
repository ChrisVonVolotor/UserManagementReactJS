var languageJSON;
function changeLanguage(language) {


    if (language == "en") {
        var ACCOUNT_NO = "Account No";
        var FIRST_NAME = "First Name";
        var FULL_NAME = "Full Name";
        var LAST_NAME = "Last Name";
        var CONFIG = "Configuration";
        var ADD = "Add";
        var SEARCH = "Search";
        var USER_MANAGER = "User Manager";
        var ALERT = "Please Enter a First and Last Name";
        var EDIT = "Edit";
        var DELETE = "Delete";
        var SAVE = "Save";
        var CANCEL = "Cancel";
    }
    else if (language == "fr") {
        var ACCOUNT_NO = "N ° de compte";
        var FIRST_NAME = "Prénom";
        var FULL_NAME = "Nom complet";
        var LAST_NAME = "Nom de famille";
        var CONFIG = "Configurer";
        var ADD = "Ajouter";
        var SEARCH = "Chercher";
        var USER_MANAGER = "Gestionnaire des utilisateurs";
        var ALERT = "Veuillez entrer un prénom et un nom de famille";
        var EDIT = "Modifier";
        var DELETE = "Effacer";
        var SAVE = "Enregistrer";
        var CANCEL = "Annuler";
    }else if (language == "it") {
        var ACCOUNT_NO = "Numero conto";
        var FIRST_NAME = "Nome";
        var FULL_NAME = "Nome completo";
        var LAST_NAME = "Cognome";
        var CONFIG = "modificare";
        var ADD = "Aggiungi";
        var SEARCH = "Cerca";
        var USER_MANAGER = "Utente gestore";
        var ALERT = "Per favore inserisci un nome e cognome";
        var EDIT = "Modifica";
        var DELETE = "Elimina";
        var SAVE = "Salva";
        var CANCEL = "Annulla";
    }else if (language == "jp"){
        var ACCOUNT_NO = "アカウント番号";
        var FIRST_NAME = "名";
        var FULL_NAME = "フルネーム";
        var LAST_NAME = "姓";
        var CONFIG = "編集";
        var ADD = "追加する";
        var SEARCH = "検索";
        var USER_MANAGER = "ユーザーマネージャ";
        var ALERT = "姓と名を入力してください";
        var EDIT = "編集";
        var DELETE = "削除";
        var SAVE = "保存";
        var CANCEL = "キャンセル";
    }else if(language == "es"){
        var ACCOUNT_NO = "Cuenta No";
        var FIRST_NAME = "Nombre";
        var FULL_NAME = "Nombre completo";
        var LAST_NAME = "Apellido";
        var CONFIG = "configurar";
        var ADD = "Agregar";
        var SEARCH = "Buscar";
        var USER_MANAGER = "Administrador de usuarios";
        var ALERT = "Por favor ingrese un nombre y apellido";
        var EDIT = "Editar";
        var DELETE = "Eliminar";
        var SAVE = "Guardar";
        var CANCEL = "Cancelar";

    }else if(language == "zh"){

        var ACCOUNT_NO ="帐号否";
        var FIRST_NAME ="名字";
        var FULL_NAME ="全名";
        var LAST_NAME ="姓氏";
        var CONFIG ="配置";
        var ADD ="加";
        var SEARCH ="搜索";
        var USER_MANAGER ="用户管理器";
        var ALERT ="请输入名字和姓氏";
        var EDIT ="编辑";
        var DELETE ="删除";
        var SAVE ="保存";
        var CANCEL ="取消";

    }else if(language == "ko"){
        var ACCOUNT_NO = "계정 번호";
        var FIRST_NAME = "이름";
        var FULL_NAME = "성명";
        var LAST_NAME = "성";
        var CONFIG = "구성하다";
        var ADD = "추가";
        var SEARCH = "검색";
        var USER_MANAGER = "사용자 관리자";
        var ALERT = "이름을 입력하십시오.";
        var EDIT = "편집";
        var DELETE = "삭제";
        var SAVE = "저장";
        var CANCEL = "취소";

    }else if(language == "pt"){
        var ACCOUNT_NO = "Conta Não";
        var FIRST_NAME = "Primeiro Nome";
        var FULL_NAME = "Nome Completo";
        var LAST_NAME = "Sobrenome";
        var CONFIG = "configurar";
        var ADD = "Adicionar";
        var SEARCH = "Pesquisar";
        var USER_MANAGER = "Gerenciador de usuários";
        var ALERT = "Por favor, insira um nome e sobrenome";
        var EDIT = "Editar";
        var DELETE = "Excluir";
        var SAVE = "Sallet";
        var CANCEL = "Cancelar";

    }else if(language == "ar"){
        var ACCOUNT_NO = "رقم الحساب";
        var FIRST_NAME = "الاسم الأول";
        var FULL_NAME = "الاسم الكامل";
        var LAST_NAME = "اسم العائلة";
        var CONFIG = "تهيئة";
        var ADD = "إضافة";
        var SEARCH = "بحث";
        var USER_MANAGER = "إدارةالمستخدم";
        var ALERT = "الرجاء إدخال الاسم الأول واسم العائلة";
        var EDIT = "تصحيح";
        var DELETE = "حذف";
        var SAVE = "حفظ";
        var CANCEL = "إلغاء";

    }else if(language == "sw"){
        var ACCOUNT_NO = "Akaunti ya Akaunti";
        var FIRST_NAME = "Jina la kwanza";
        var FULL_NAME = "Jina Kamili";
        var LAST_NAME = "Jina la Mwisho";
        var CONFIG = "sanidi";
        var ADD = "Ongeza";
        var SEARCH = "Tafuta";
        var USER_MANAGER = "Meneja wa Watumiaji";
        var ALERT = "Tafadhali Ingiza Jina la Kwanza na la Mwisho";
        var EDIT = "Hariri";
        var DELETE = "Futa";
        var SAVE = "Hifadhi";
        var CANCEL = "Futa";
    }
    else if(language == "bg"){
        var ACCOUNT_NO = "Номер на профила";
        var FIRST_NAME = "Първо име";
        var FULL_NAME = "Пълно име";
        var LAST_NAME = "Фамилия";
        var CONFIG = "конфигуриране";
        var ADD = "Добавяне";
        var SEARCH = "Търсене";
        var USER_MANAGER = "Мениджър на потребител";
        var ALERT = "Моля, въведете първото и фамилното име";
        var EDIT = "Редактиране";
        var DELETE = "Изтриване";
        var SAVE = "Запазване";
        var CANCEL = "Отказ";

    }else if(language == "ro"){
        var ACCOUNT_NO = "Numărul contului";
        var FIRST_NAME = "Prenume";
        var FULL_NAME = "Numele complet";
        var LAST_NAME = "Nume de familie";
        var CONFIG = "configurați";
        var ADD = "Adăugați";
        var SEARCH = "Căutare";
        var USER_MANAGER = "Manager de utilizator";
        var ALERT = "Introduceți numele și prenumele";
        var EDIT = "Editare";
        var DELETE = "Șterge";
        var SAVE = "Sallete";
        var CANCEL = "Anulare";
    }else if (language == "ru"){
        var ACCOUNT_NO = "Номер учетной записи";
        var FIRST_NAME = "Имя";
        var FULL_NAME = "Полное имя";
        var LAST_NAME = "Фамилия";
        var CONFIG = "конфигурировать";
        var ADD = "Добавить";
        var SEARCH = "Поиск";
        var USER_MANAGER = "Менеджер пользователей";
        var ALERT = "Пожалуйста, введите имя и фамилию";
        var EDIT = "Изменить";
        var DELETE = "Удалить";
        var SAVE = "Сохранить";
        var CANCEL = "Отмена";
    }else if (language == "po"){
        var ACCOUNT_NO = "Nr konta";
        var FIRST_NAME = "Imię";
        var FULL_NAME = "Pełna nazwa";
        var LAST_NAME = "Nazwisko";
        var CONFIG = "Konfiguracja";
        var ADD = "Dodaj";
        var SEARCH = "Wyszukaj";
        var USER_MANAGER = "Menedżer użytkowników";
        var ALERT = "Proszę podać imię i nazwisko";
        var EDIT = "Edytuj";
        var DELETE = "Usuń";
        var SAVE = "Zapisz";
        var CANCEL = "Anuluj";
    }else if(language == "hi"){
        var ACCOUNT_NO = "खाता संख्या";
        var FIRST_NAME = "पहला नाम";
        var FULL_NAME = "पूर्ण नाम";
        var LAST_NAME = "अंतिम नाम";
        var CONFIG = "कॉन्फ़िगरेशन";
        var ADD = "जोड़ें";
        var SEARCH = "खोज";
        var USER_MANAGER = "उपयोगकर्ता प्रबंधक";
        var ALERT = "कृपया पहला और अंतिम नाम दर्ज करें";
        var EDIT = "संपादित करें";
        var DELETE = "हटाएं";
        var SAVE = "सहेजें";
        var CANCEL = "रद्द करें";
    }else if(language == "de" ){
        var ACCOUNT_NO = "Konto Nr.";
        var FIRST_NAME = "Vorname";
        var FULL_NAME = "Vollständiger Name";
        var LAST_NAME = "Nachname";
        var CONFIG = "Konfiguration";
        var ADD = "Hinzufügen";
        var SEARCH = "Suchen";
        var USER_MANAGER = "Benutzermanager";
        var ALERT = "Bitte geben Sie einen Vor- und Nachnamen ein";
        var EDIT = "Bearbeiten";
        var DELETE = "Löschen";
        var SAVE = "Speichern";
        var CANCEL = "Abbrechen";
    }else if(language == "iw"){
        var ACCOUNT_NO = "חשבון לא";
        var FIRST_NAME = "שם פרטי";
        var FULL_NAME = "שם מלא";
        var LAST_NAME = "שם משפחה";
        var CONFIG = "תצורה";
        var ADD = "הוסף";
        var SEARCH = "חפש";
        var USER_MANAGER = "מנהל משתמש";
        var ALERT = "נא להזין שם פרטי ושם משפחה";
        var EDIT = "ערוך";
        var DELETE = "מחק";
        var SAVE = "שמור";
        var CANCEL = "ביטול";
    }else if (language == "wl"){
        var ACCOUNT_NO = "Rhif y Cyfrif";
        var FIRST_NAME = "Enw Cyntaf";
        var FULL_NAME = "Enw Llawn";
        var LAST_NAME = "Enw olaf";
        var CONFIG = "Ffurfweddiad";
        var ADD = "Ychwanegu";
        var SEARCH = "Chwilio";
        var USER_MANAGER = "Rheolwr Defnyddiwr";
        var ALERT = "Rhowch enw cyntaf a diwethaf";
        var EDIT = "Golygu";
        var DELETE = "Dileu";
        var SAVE = "Cadw";
        var CANCEL = "Diddymu";
    }else if (language == "sg"){
        var ACCOUNT_NO = "Àireamh Cunntais";
        var FIRST_NAME = "Ciad Ainm";
        var FULL_NAME = "Ainm Làn";
        var LAST_NAME = "Ainm mu dheireadh";
        var CONFIG = "rèiteachadh";
        var ADD = "Cuir ris";
        var SEARCH = "Rannsaich";
        var USER_MANAGER = "Manaidsear Cleachdaiche";
        var ALERT = "Cuir a-steach a 'chiad ainm is an t-ainm mu dheireadh";
        var EDIT = "Deasaich";
        var DELETE = "Sguab às às";
        var SAVE = "Sàbhail";
        var CANCEL = "Sguir dheth";
    }else if(language == "am"){
        var ACCOUNT_NO = "መለያ ቁጥር";
        var FIRST_NAME = "የመጀመሪያ ስም";
        var FULL_NAME = "ሙሉ ስም";
        var LAST_NAME = "የአያት ሥም";
        var CONFIG = "ውቅር";
        var ADD = "አክል";
        var SEARCH = "ፍለጋ";
        var USER_MANAGER = "የተጠቃሚ አስተዳዳሪ";
        var ALERT = "እባክዎ የመጀመሪያ እና የመጨረሻ ስም ያስገቡ";
        var EDIT = "አርትዕ";
        var DELETE = "ሰርዝ";
        var SAVE = "አስቀምጥ";
        var CANCEL = "ሰርዝ";
    }else if(language == "ms"){
        var ACCOUNT_NO = "Tiada Akaun";
        var FIRST_NAME = "Nama Pertama";
        var FULL_NAME = "Nama Penuh";
        var LAST_NAME = "Nama Akhir";
        var CONFIG = "Konfigurasi";
        var ADD = "Tambah";
        var SEARCH = "Cari";
        var USER_MANAGER = "Pengurus Pengguna";
        var ALERT = "Sila masukkan nama pertama dan terakhir";
        var EDIT = "Edit";
        var DELETE = "Padam";
        var SAVE = "Simpan";
        var CANCEL = "Batal";
    }else if(language == "el" ){
        var ACCOUNT_NO = "Αριθμός λογαριασμού";
        var FIRST_NAME = "Όνομα";
        var FULL_NAME = "Πλήρες όνομα";
        var LAST_NAME = "Επίθετο";
        var CONFIG = "Ρύθμιση";
        var ADD = "Προσθήκη";
        var ΑΝΑΖΗΤΗΣΗ = "Αναζήτηση";
        var USER_MANAGER = "Διαχειριστής χρήστη";
        var ALERT = "Εισαγάγετε ένα πρώτο και τελευταίο όνομα";
        var EDIT = "Επεξεργασία";
        var DELETE = "Διαγραφή";
        var SAVE = "Αποθήκευση";
        var CANCEL = "Ακύρωση";

    }else if(language == "hu" ){
        var ACCOUNT_NO = "Számlaszám";
        var FIRST_NAME = "Keresztnév";
        var FULL_NAME = "Teljes név";
        var LAST_NAME = "Utónév";
        var CONFIG = "Konfiguráció";
        var ADD = "Hozzáadás";
        var SEARCH = "Keresés";
        var USER_MANAGER = "Felhasználó kezelő";
        var ALERT = "Kérem adja meg az első és a vezetéknevet";
        var EDIT = "Szerkesztés";
        var DELETE = "Törlés";
        var SAVE = "Mentés";
        var CANCEL = "Mégse";

    }else if(language == "sv" ){
        var ACCOUNT_NO = "Kontonummer";
        var FIRST_NAME = "Förnamn";
        var FULL_NAME = "Fullständigt namn";
        var LAST_NAME = "Efternamn";
        var CONFIG = "Konfiguration";
        var ADD = "Add";
        var SEARCH = "Sök";
        var USER_MANAGER = "Användarhanterare";
        var ALERT = "Vänligen ange ett för- och efternamn";
        var EDIT = "Redigera";
        var DELETE = "Radera";
        var SAVE = "Spara";
        var CANCEL = "Cancel";

    }else if(language == "fi" ){
        var ACCOUNT_NO = "Tilin numero";
        var FIRST_NAME = "Etunimi";
        var FULL_NAME = "Täydellinen nimi";
        var LAST_NAME = "Sukunimi";
        var CONFIG = "Konfigurointi";
        var ADD = "Lisää";
        var SEARCH = "Haku";
        var USER_MANAGER = "Käyttäjän hallinta";
        var ALERT = "Anna etu- ja sukunimi";
        var EDIT = "Muokkaa";
        var DELETE = "Poista";
        var SAVE = "Tallenna";
        var CANCEL = "Peruuta";

    }else if(language == "no" ){
        var ACCOUNT_NO = "Kontonummer";
        var FIRST_NAME = "Fornavn";
        var FULL_NAME = "Fullt navn";
        var LAST_NAME = "Etternavn";
        var CONFIG = "Konfigurasjon";
        var ADD = "Legg til";
        var SEARCH = "Søk";
        var USER_MANAGER = "Brukerbehandling";
        var ALERT = "Vennligst skriv inn for- og etternavn";
        var EDIT = "Rediger";
        var DELETE = "Slett";
        var SAVE = "Save";
        var CANCEL = "Cancel";

    }else if(language == "is" ){
        var ACCOUNT_NO = "Reikningsnúmer";
        var FIRST_NAME = "Fornafn";
        var FULL_NAME = "Fullt nafn";
        var LAST_NAME = "Eftirnafn";
        var CONFIG = "Stillingar";
        var ADD = "Bæta við";
        var SEARCH = "Leita";
        var USER_MANAGER = "User Manager";
        var ALERT = "Vinsamlegast sláðu inn fornafn og eftirnafn";
        var EDIT = "Breyta";
        var DELETE = "Eyða";
        var SAVE = "Vista";
        var CANCEL = "Cancel";

    }else if(language == "gl" ){
        var ACCOUNT_NO = "Non conta";
        var FIRST_NAME = "Nome";
        var FULL_NAME = "Nome completo";
        var LAST_NAME = "Apelido";
        var CONFIG = "Configuración";
        var ADD = "Engadir";
        var SEARCH = "Buscar";
        var USER_MANAGER = "Xestor de usuarios";
        var ALERT = "Por favor, introduza un primeiro e un apelido";
        var EDIT = "Editar";
        var DELETE = "Eliminar";
        var SAVE = "Gardar";
        var CANCEL = "Cancelar";

    }else if(language == "ka" ){
        var ACCOUNT_NO = "ანგარიში არა";
        var FIRST_NAME = "პირველი სახელი";
        var FULL_NAME = "სრული სახელი";
        var LAST_NAME = "გვარი";
        var CONFIG = "კონფიგურაცია";
        var ADD = "დამატება";
        var SEARCH = "ძებნა";
        var USER_MANAGER = "მომხმარებელი მენეჯერი";
        var ALERT = "გთხოვთ შეიყვანოთ სახელი და გვარი";
        var EDIT = "რედაქტირება";
        var DELETE = "წაშლა";
        var SAVE = "შენახვა";
        var CANCEL = "გაუქმება";

    }else if(language == "eu" ){
        var ACCOUNT_NO = "Αριθμός λογαριασμού";
        var FIRST_NAME = "Όνομα";
        var FULL_NAME = "Πλήρες όνομα";
        var LAST_NAME = "Επίθετο";
        var CONFIG = "Ρύθμιση";
        var ADD = "Προσθήκη";
        var SEARCH = "Αναζήτηση";
        var USER_MANAGER = "Διαχειριστής χρήστη";
        var ALERT = "Εισαγάγετε ένα πρώτο και τελευταίο όνομα";
        var EDIT = "Επεξεργασία";
        var DELETE = "Διαγραφή";
        var SAVE = "Αποθήκευση";
        var CANCEL = "Ακύρωση";

    }else if(language == "ca" ){
        var ACCOUNT_NO = "Compte no";
        var FIRST_NAME = "Nom";
        var FULL_NAME = "Nom complet";
        var LAST_NAME = "Cognom";
        var CONFIG = "Configuració";
        var ADD = "Afegir";
        var SEARCH = "Cerca";
        var USER_MANAGER = "Administrador d'usuaris";
        var ALERT = "Introduïu un nom i cognom";
        var EDIT = "Edita";
        var DELETE = "Eliminar";
        var SAVE = "Desa";
        var CANCEL = "Cancel·lar";

    }else if(language == "da" ){
        var ACCOUNT_NO = "Kontonummer";
        var FIRST_NAME = "Fornavn";
        var FULL_NAME = "Fuldt navn";
        var LAST_NAME = "Efternavn";
        var CONFIG = "Konfiguration";
        var ADD = "Tilføj";
        var SEARCH = "Søg";
        var USER_MANAGER = "User Manager";
        var ALERT = "Indtast venligst et fornavn og efternavn";
        var EDIT = "Rediger";
        var DELETE = "Slet";
        var SAVE = "Gem";
        var CANCEL = "Cancel";

    }else if(language == "hr" ){
        var ACCOUNT_NO = "Ne račun";
        var FIRST_NAME = "Ime";
        var FULL_NAME = "Puni naziv";
        var LAST_NAME = "Prezime";
        var CONFIG = "Konfiguracija";
        var ADD = "Dodaj";
        var SEARCH = "Traži";
        var USER_MANAGER = "Korisnički upravitelj";
        var ALERT = "Unesite ime i prezime";
        var EDIT = "Uredi";
        var DELETE = "Izbriši";
        var SAVE = "Spremi";
        var CANCEL = "Odustani";

    }else if(language == "cz" ){
        var ACCOUNT_NO = "Číslo účtu";
        var FIRST_NAME = "Křestní jméno";
        var FULL_NAME = "Celé jméno";
        var LAST_NAME = "Příjmení";
        var CONFIG = "Konfigurace";
        var ADD = "Přidat";
        var SEARCH = "Hledání";
        var USER_MANAGER = "Správce uživatelů";
        var ALERT = "Zadejte prosím jméno a příjmení";
        var EDIT = "Upravit";
        var DELETE = "Smazat";
        var SAVE = "Uložit";
        var CANCEL = "Zrušit";

    }else if(language == "mn" ){
        var ACCOUNT_NO = "Данс байхгүй";
        var FIRST_NAME = "Эхний нэр";
        var FULL_NAME = "Бүтэн нэр";
        var LAST_NAME = "Сүүлийн нэр";
        var CONFIG = "Тохиргоо";
        var ADD = "Нэмэх";
        var SEARCH = "Хайлт";
        var USER_MANAGER = "Хэрэглэгчийн менежер";
        var ALERT = "Эхлээд овог нэр оруулна уу";
        var EDIT = "Засварлах";
        var DELETE = "Устгах";
        var SAVE = "Хадгалах";
        var CANCEL = "Цуцлах";

    }else if(language == "eo" ){
        var ACCOUNT_NO = "Kontrolu Ne";
        var FIRST_NAME = "Unua nomo";
        var FULL_NAME = "Plena Nomo";
        var LAST_NAME = "Lasta Nomo";
        var CONFIG = "Agordo";
        var ADD = "Aldonu";
        var SEARCH = "Serĉo";
        var USER_MANAGER = "Uzanto-Administranto";
        var ALERT = "Bonvolu Enmeti Unua kaj Lastan nomon";
        var EDIT = "Redakti";
        var DELETE = "Forigi";
        var SAVE = "Konservi";
        var CANCEL = "Nuligi";

    }else if(language == "et" ){
        var ACCOUNT_NO = "konto nr";
        var FIRST_NAME = "eesnimi";
        var FULL_NAME = "täisnimi";
        var LAST_NAME = "perekonnanimi";
        var CONFIG = "Konfiguratsioon";
        var ADD = "Lisa";
        var SEARCH = "Otsi";
        var USER_MANAGER = "Kasutajahaldur";
        var ALERT = "Palun sisestage ees- ja perekonnanimi";
        var EDIT = "Muuda";
        var DELETE = "Kustuta";
        var SAVE = "Salvesta";
        var CANCEL = "tühistada";

    }else if(language == "lv" ){
        var ACCOUNT_NO = "konta numurs";
        var FIRST_NAME = "Vārds";
        var FULL_NAME = "Pilns vārds";
        var LAST_NAME = "Uzvārds";
        var CONFIG = "Konfigurācija";
        var ADD = "Pievienot";
        var SEARCH = "Meklēt";
        var USER_MANAGER = "Lietotāju pārvaldnieks";
        var ALERT = "Lūdzu ievadiet vārdu un uzvārdu";
        var EDIT = "rediģēt";
        var DELETE = "Dzēst";
        var SAVE = "Saglabāt";
        var CANCEL = "Atcelt";

    }else if(language == "la" ){
        var ACCOUNT_NO = "quare nusquam";
        var FIRST_NAME = "Primum nomen";
        var FULL_NAME = "Full Name";
        var LAST_NAME = "Nomen";
        var CONFIG = "configurationis";
        var ADD = "addere";
        var SEARCH = "Quaero";
        var USER_MANAGER = "User Procurator";
        var ALERT= "Intra ad primum et Nomen quaeso";
        var EDIT = "recensere";
        var DELETE = "delere";
        var SAVE = 'nisi';
        var CANCEL = "libero";

    }else if(language == "nl" ){
        var ACCOUNT_NO = "Accountnr.";
        var FIRST_NAME = "Voornaam";
        var FULL_NAME = "Volledige naam";
        var LAST_NAME = "Achternaam";
        var CONFIG = "Configuratie";
        var ADD = "Toevoegen";
        var SEARCH = "Zoeken";
        var USER_MANAGER = "Gebruikersbeheerder";
        var ALERT = "Voer een voor- en achternaam in";
        var EDIT = "Bewerken";
        var DELETE = "Verwijderen";
        var SAVE = "Opslaan";
        var CANCEL = "Annuleren";

    }else if(language == "fy" ){
        var ACCOUNT_NO = "Kont No";
        var FIRST_NAME = "Foarnamme";
        var FULL_NAME = "Folsleine namme";
        var LAST_NAME = "Namme";
        var CONFIG = "Konfiguraasje";
        var ADD = "taheakje";
        var SEARCH = "Sykje";
        var USER_MANAGER = "brûkersbehear";
        var ALERT = "Fier in earste en lêste namme yn";
        var EDIT = "bewurkje";
        var DELETE = "Wiskje";
        var SAVE = "bewarje";
        var CANCEL = "Ofbrekke";
    }else if(language == "lt" ){
        var ACCOUNT_NO = "Sąskaitos Nr.";
        var FIRST_NAME = "vardas";
        var FULL_NAME = "pilnas vardas";
        var LAST_NAME = "Pavardė";
        var CONFIG = "konfigūracija";
        var ADD = "Pridėti";
        var SEARCH = "Ieškoti";
        var USER_MANAGER = "Vartotojo tvarkytuvė";
        var ALERT = "Prašome įvesti pirmąjį ir pavardę";
        var EDIT = "redaguoti";
        var DELETE = "Ištrinti";
        var SAVE = "Išsaugoti";
        var CANCEL = "Atšaukti";
    }


    return {
        "accNo":ACCOUNT_NO,
        "fName":FIRST_NAME,
        "lName":LAST_NAME,
        "fullName": FULL_NAME,
        "config": CONFIG,
        "add":ADD,
        "search":SEARCH,
        "title": USER_MANAGER,
        "alert":ALERT,
        "edit":EDIT,
        "delete":DELETE,
        "save": SAVE,
        "canc": CANCEL
    };
}

