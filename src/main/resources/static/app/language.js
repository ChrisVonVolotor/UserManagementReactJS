var languageJSON;
function changeLanguage(language) {


    if (language == "en") {
        var ACCOUNT_NO = "Account No";
        var FIRST_NAME = "First Name";
        var FULL_NAME = "Full Name";
        var LAST_NAME = "Last Name";
        var CONFIG = "Config";
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
        var SAVE = "Salvar";
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
        var SAVE = "Salvare";
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
    }else if(language == "hb"){
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
        var CONFIG = "Configuration";
        var ADD = "Cuir ris";
        var SEARCH = "Rannsaich";
        var USER_MANAGER = "Manaidsear Cleachdaiche";
        var ALERT = "Cuir a-steach a 'chiad ainm is an t-ainm mu dheireadh";
        var EDIT = "Deasaich";
        var DELETE = "Sguab às às";
        var SAVE = "Sàbhail";
        var CANCEL = "Sguir dheth";
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

