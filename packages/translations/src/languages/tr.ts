import type { DefaultTranslationsObject, Language } from '../types.js'

export const trTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'Hesap',
    accountOfCurrentUser: 'Şu anki kullanıcının hesabı',
    accountVerified: 'Hesap başarıyla doğrulandı.',
    alreadyActivated: 'Hesap zaten etkinleştirildi',
    alreadyLoggedIn: 'Hesaba zaten giriş yapıldı',
    apiKey: 'API Anahtarı',
    authenticated: 'Doğrulandı',
    backToLogin: 'Giriş ekranına geri dön',
    beginCreateFirstUser: 'Başlamak için ilk kullanıcı hesabını oluşturun.',
    changePassword: 'Parolayı Değiştir',
    checkYourEmailForPasswordReset:
      'Parolanızı güvenli bir şekilde güncelleyebilmeniz için e-posta adresinize bir bağlantı gönderilmiştir.',
    confirmGeneration: 'Oluştumayı Onayla',
    confirmPassword: 'Parolayı Onayla',
    createFirstUser: 'İlk kullanıcı oluştur',
    emailNotValid: 'Girilen e-posta geçersiz',
    emailOrUsername: 'E-posta veya Kullanıcı Adı',
    emailSent: 'E-posta gönderildi',
    emailVerified: 'E-posta başarıyla doğrulandı.',
    enableAPIKey: 'Api anahtarını etkinleştir',
    failedToUnlock: 'Hesabı aktifleştirme başarısız oldu',
    forceUnlock: 'Hesabı Etkinleştir',
    forgotPassword: 'Parolamı Unuttum',
    forgotPasswordEmailInstructions:
      'Lütfen e-posta adresinizi aşağıdaki alana girin. Parolanızı nasıl sıfırlayacağınızı gösteren bir e-posta adresi alacaksınız.',
    forgotPasswordQuestion: 'Parolanızı mı unuttunuz?',
    forgotPasswordUsernameInstructions:
      'Lütfen kullanıcı adınızı aşağıya girin. Şifrenizi nasıl sıfırlayacağınıza dair talimatlar, kullanıcı adınızla ilişkilendirilmiş e-posta adresine gönderilecektir.',
    generate: 'Oluştur',
    generateNewAPIKey: 'Yeni bir API anahtarı oluştur',
    generatingNewAPIKeyWillInvalidate:
      'Yeni bir API anahtarı oluşturmak önceckini <1>geçersiz kılacaktır</1>. Devam etmek istiyor musunuz?',
    lockUntil: 'Lock Until',
    logBackIn: 'Tekrar giriş yapın',
    logOut: 'Çıkış',
    loggedIn:
      'Başka bir kullanıcı hesabıyla giriş yapabilmek için önce <0>çıkış yapmanız</0> gerekmektedir.',
    loggedInChangePassword: 'Parolanızı değiştirmek için <0>hesabınıza</0> gidebilirsiniz.',
    loggedOutInactivity: 'Uzun süre işlem yapmadığınız için oturumunuz kapatıldı.',
    loggedOutSuccessfully: 'Başarıyla çıkış yaptınız.',
    loggingOut: 'Çıkış yapılıyor...',
    login: 'Giriş',
    loginAttempts: 'Giriş Denemeleri',
    loginUser: 'Kullanıcı girişi',
    loginWithAnotherUser:
      'Başka bir kullanıcı hesabıyla giriş yapmak için önce <0>çıkış</0> yapmalısınız.',
    logout: 'Çıkış',
    logoutSuccessful: 'Çıkış başarılı.',
    logoutUser: 'Kullanıcıyı çıkış yapmaya zorla',
    newAPIKeyGenerated: 'Yeni API anahtarı oluşturuldu.',
    newAccountCreated:
      '<0>{{serverURL}}</0> sitesinde adınıza yeni bir hesap oluşturuldu. E-postanızı doğrulamak için bağlantıya tıklayabilirsiniz: <1>{{verificationURL}}</1><br> E-postanızı doğruladıktan sonra siteye hesap bilgilerinizle giriş yapabilirsiniz.',
    newPassword: 'Yeni Parola',
    passed: 'Doğrulama Başarılı',
    passwordResetSuccessfully: 'Parola başarıyla sıfırlandı.',
    resetPassword: 'Parolayı Sıfırla',
    resetPasswordExpiration: 'Parola Geçerlik Süresini Sıfırla',
    resetPasswordToken: 'Parola tokenini sıfırla',
    resetYourPassword: 'Parolanızı Sıfırlayın',
    stayLoggedIn: 'Oturumu açık tut',
    successfullyRegisteredFirstUser: 'İlk kullanıcının kaydı başarıyla tamamlandı.',
    successfullyUnlocked: 'Hesabın kilidi başarıyla açıldı',
    tokenRefreshSuccessful: 'Token yenileme başarılı.',
    unableToVerify: 'Doğrulama başarısız',
    username: 'Kullanıcı Adı',
    usernameNotValid: 'Sağlanan kullanıcı adı geçerli değil.',
    verified: 'Doğrulandı',
    verifiedSuccessfully: 'Hesap başarıyla doğrulandı',
    verify: 'Doğrula',
    verifyUser: 'Kullanıcıyı doğrula',
    verifyYourEmail: 'E-postanızı doğrulayın',
    youAreInactive:
      'Bir süredir işlem yapmadığınız için yakında oturumunuz kapatılacak. Oturumunuzun açık kalmasını istiyor musunuz?',
    youAreReceivingResetPassword:
      'Siz veya bir başkası hesabınızın parolasını sıfırlama isteğinde bulunduğu için bu e-postayı alıyorsunuz. İşlemi tamamlamak için lütfen aşağıdaki bağlantıya tıklayın veya bağlantı adresini tarayıcınızın adres yazma bölümüne kopyalayın.',
    youDidNotRequestPassword:
      'Eğer bu işlemi siz gerçekleştirmediyseniz bu e-postayı görmezden gelebilirsiniz.',
  },
  error: {
    accountAlreadyActivated: 'Hesap zaten etkinleştirildi.',
    autosaving: 'Otomatik kaydetme başarısız oldu',
    correctInvalidFields: 'Lütfen geçersiz alanları düzeltin.',
    deletingFile: 'Dosya silinirken bir hatayla karşılaşıldı.',
    deletingTitle:
      '{{title}} silinirken bir sorun yaşandı. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.',
    emailOrPasswordIncorrect: 'Girilen e-posta veya parola hatalı',
    followingFieldsInvalid_one: 'Lütfen geçersiz alanı düzeltin:',
    followingFieldsInvalid_other: 'Lütfen geçersiz alanları düzeltin:',
    incorrectCollection: 'Hatalı koleksiyon',
    invalidFileType: 'Geçersiz dosya türü',
    invalidFileTypeValue: 'Geçersiz dosya türü: {{value}}',
    loadingDocument: "{{id}} ID'ye sahip döküman yüklenirken bir sorun oluştu.",
    localesNotSaved_one: 'Aşağıdaki yerel ayar kaydedilemedi:',
    localesNotSaved_other: 'Aşağıdaki yerel ayarlar kaydedilemedi:',
    logoutFailed: 'Çıkış başarısız oldu.',
    missingEmail: 'E-posta adresi girilmedi.',
    missingIDOfDocument: "Güncellenecek döküman ID'si eksik.",
    missingIDOfVersion: "Versiyon ID'si geçersiz.",
    missingRequiredData: 'Gerekli veri eksik.',
    noFilesUploaded: 'Yüklenen dosya yok',
    noMatchedField: '"{{label}}" ile eşleşen alan bulunamadı.',
    noUser: 'Kullanıcı yok',
    notAllowedToAccessPage: 'Bu sayfaya erişim izniniz yok.',
    notAllowedToPerformAction: 'Bu işlemi gerçekleştirmek için izniniz yok.',
    notFound: 'Sayfa bulunamadı.',
    previewing: 'Önizleme başarısız oldu',
    problemUploadingFile: 'Dosya yüklenirken bir sorun oluştu.',
    tokenInvalidOrExpired: 'Geçersiz veya süresi dolmuş token.',
    tokenNotProvided: 'Jeton sağlanmadı.',
    unPublishingDocument: 'Geçerli döküman yayından kaldırılırken bir sorun oluştu.',
    unableToDeleteCount: '{{total}} {{label}} içinden {{count}} silinemiyor.',
    unableToUpdateCount: '{{total}} {{label}} içinden {{count}} güncellenemiyor.',
    unauthorized: 'Bu işlemi gerçekleştirmek için lütfen giriş yapın.',
    unknown: 'Bilinmeyen bir hata oluştu.',
    unspecific: 'Bir hata oluştu.',
    userEmailAlreadyRegistered: 'Verilen e-posta ile zaten kayıtlı bir kullanıcı var.',
    userLocked:
      'Hesabınız hatalı giriş denemeleri yüzünden geçici olarak kilitlendi. Lütfen daha sonra tekrar deneyin.',
    usernameAlreadyRegistered: 'Verilen kullanıcı adına sahip bir kullanıcı zaten kayıtlı.',
    usernameOrPasswordIncorrect: 'Sağlanan kullanıcı adı veya şifre yanlış.',
    valueMustBeUnique: 'Değer benzersiz olmalıdır',
    verificationTokenInvalid: 'Doğrulama tokeni geçersiz.',
  },
  fields: {
    addLabel: '{{label}} ekle',
    addLink: 'Link Ekle',
    addNew: 'Yeni',
    addNewLabel: 'Yeni {{label}}',
    addRelationship: 'İlişki Ekle',
    addUpload: 'Yükleme Ekle',
    block: 'blok',
    blockType: 'Blok tipi',
    blocks: 'blok',
    chooseBetweenCustomTextOrDocument:
      'Choose between entering a custom text URL or linking to another document.',
    chooseDocumentToLink: 'Bağlantı verilecek bir döküman seçin.',
    chooseFromExisting: 'Varolanlardan seç',
    chooseLabel: '{{label}} seç',
    collapseAll: 'Tümünü daralt',
    customURL: 'Özel URL',
    editLabelData: '{{label}} düzenle',
    editLink: 'Bağlantıyı Düzenle',
    editRelationship: 'İlişkiyi Ekle',
    enterURL: 'Bir URL girin',
    internalLink: 'İç bağlantı',
    itemsAndMore: '{{items}} and {{count}} more',
    labelRelationship: '{{label}} Relationship',
    latitude: 'Enlem',
    linkType: 'Bağlantı türü',
    linkedTo: '<0>label</0> için bağlantı verildi',
    longitude: 'Boylam',
    newLabel: 'Yeni {{label}}',
    openInNewTab: 'Yeni sekmede aç',
    passwordsDoNotMatch: 'Parolalar eşleşmiyor.',
    relatedDocument: 'İlişkili döküman',
    relationTo: 'Relation To',
    removeRelationship: 'İlişkiyi Kaldır',
    removeUpload: 'Dosyayı Sil',
    saveChanges: 'Değişiklikleri kaydet',
    searchForBlock: 'Blok ara',
    selectExistingLabel: 'Varolan {{label}} seç',
    selectFieldsToEdit: 'Düzenlenecek alanları seçin',
    showAll: 'Tümünü göster',
    swapRelationship: 'Takas Ilişkisi',
    swapUpload: 'Karşıya Yüklemeyi Değiştir',
    textToDisplay: 'Görüntülenecek metin',
    toggleBlock: 'Bloğu aç/kapat',
    uploadNewLabel: 'Karşıya {{label}} yükle',
  },
  general: {
    aboutToDelete:
      '<1>{{title}}</1> {{label}} silinmek üzere. Silme işlemine devam etmek istiyor musunuz?',
    aboutToDeleteCount_many: '{{count}} {{label}} silmek üzeresiniz',
    aboutToDeleteCount_one: '{{count}} {{label}} silmek üzeresiniz',
    aboutToDeleteCount_other: '{{count}} {{label}} silmek üzeresiniz',
    addBelow: 'Altına ekle',
    addFilter: 'Filtre ekle',
    adminTheme: 'Admin arayüzü',
    and: 've',
    applyChanges: 'Değişiklikleri Uygula',
    ascending: 'artan',
    automatic: 'Otomatik',
    backToDashboard: 'Anasayfaya geri dön',
    cancel: 'İptal',
    changesNotSaved:
      'Değişiklikleriniz henüz kaydedilmedi. Eğer bu sayfayı terk ederseniz değişiklikleri kaybedeceksiniz.',
    clearAll: undefined,
    close: 'Kapat',
    collapse: 'Daralt',
    collections: 'Koleksiyonlar',
    columnToSort: 'Sıralanacak Sütunlar',
    columns: 'Sütunlar',
    confirm: 'Onayla',
    confirmDeletion: 'Silmeyi onayla',
    confirmDuplication: 'Çoğaltmayı onayla',
    copied: 'Kopyalandı',
    copy: 'Kopyala',
    create: 'Oluştur',
    createNew: 'Yeni oluştur',
    createNewLabel: 'Yeni bir {{label}} oluştur',
    created: 'Oluşturma tarihi',
    createdAt: 'Oluşturma tarihi',
    creating: 'Oluşturuluyor',
    creatingNewLabel: 'Yeni bir {{label}} oluşturuluyor',
    currentlyEditing:
      'şu anda bu belgeyi düzenliyor. Devralırsanız, düzenlemeye devam etmeleri engellenecek ve kaydedilmemiş değişiklikleri de kaybedebilirler.',
    custom: 'Özel',
    dark: 'Karanlık',
    dashboard: 'Anasayfa',
    delete: 'Sil',
    deletedCountSuccessfully: '{{count}} {{label}} başarıyla silindi.',
    deletedSuccessfully: 'Başarıyla silindi.',
    deleting: 'Siliniyor...',
    depth: 'Derinlik',
    descending: 'Azalan',
    deselectAllRows: 'Tüm satırların seçimini kaldır',
    document: 'Belge',
    documentLocked: 'Belge kilitlendi',
    documents: 'Belgeler',
    duplicate: 'Çoğalt',
    duplicateWithoutSaving: 'Ayarları kaydetmeden çoğalt',
    edit: 'Düzenle',
    editLabel: '{{label}} düzenle',
    editedSince: 'O tarihten itibaren düzenlendi',
    editing: 'Düzenleniyor',
    editingLabel_many: '{{count}} {{label}} düzenleniyor',
    editingLabel_one: '{{count}} {{label}} düzenleniyor',
    editingLabel_other: '{{count}} {{label}} düzenleniyor',
    email: 'E-posta',
    emailAddress: 'E-posta adresi',
    enterAValue: 'Değer girin',
    error: 'Hata',
    errors: 'Hatalar',
    fallbackToDefaultLocale: 'Varsayılan yerel ayara geri dönme',
    false: 'Yanlış',
    filter: 'Filtrele',
    filterWhere: '{{label}} filtrele:',
    filters: 'Filtreler',
    globals: 'Globaller',
    goBack: 'Geri dön',
    isEditing: 'düzenliyor',
    language: 'Dil',
    lastModified: 'Son değiştirme',
    leaveAnyway: 'Yine de ayrıl',
    leaveWithoutSaving: 'Kaydetmeden ayrıl',
    light: 'Aydınlık',
    livePreview: 'Önizleme',
    loading: 'Yükleniyor',
    locale: 'Yerel ayar',
    locales: 'Diller',
    menu: 'Menü',
    moveDown: 'Aşağı taşı',
    moveUp: 'Yukarı taşı',
    newPassword: 'Yeni parola',
    next: 'Sonraki',
    noFiltersSet: 'Tanımlı filtre yok',
    noLabel: '<{{label}} yok>',
    noOptions: 'Seçenek yok',
    noResults:
      '{{label}} bulunamadı. Henüz bir {{label}} eklenmemiş olabilir veya seçtiğiniz filtrelerle eşleşen bir sonuç bulunamamış olabilir.',
    noValue: 'Değer yok',
    none: 'Hiç',
    notFound: 'Bulunamadı',
    nothingFound: 'Hiçbir şey bulunamadı',
    of: 'of',
    open: 'Aç',
    or: 'Or',
    order: 'Order',
    pageNotFound: 'Sayfa bulunamadı',
    password: 'Parola',
    payloadSettings: 'Ayarlar',
    perPage: 'Sayfa başına: {{limit}}',
    previous: 'Önceki',
    remove: 'Kaldır',
    reset: 'Sıfırla',
    row: 'Satır',
    rows: 'Satır',
    save: 'Kaydet',
    saving: 'Kaydediliyor...',
    searchBy: 'Şuna göre sırala: {{label}}',
    selectAll: "Tüm {{count}} {{label}}'ı seçin",
    selectAllRows: 'Tüm satırları seçin',
    selectValue: 'Bir değer seçin',
    selectedCount: '{{count}} {{label}} seçildi',
    showAllLabel: 'Tüm {{label}} göster',
    sorryNotFound: 'Üzgünüz, isteğinizle eşleşen bir sonuç bulunamadı.',
    sort: 'Sırala',
    sortByLabelDirection: '{{label}} göre sırala {{direction}}',
    stayOnThisPage: 'Bu sayfada kal',
    submissionSuccessful: 'Gönderme başarılı',
    submit: 'Gönder',
    submitting: 'Gönderiliyor...',
    success: 'Başarı',
    successfullyCreated: '{{label}} başarıyla oluşturuldu.',
    successfullyDuplicated: '{{label}} başarıyla kopyalandı.',
    takeOver: 'Devralmak',
    thisLanguage: 'Türkçe',
    titleDeleted: '{{label}} {{title}} başarıyla silindi.',
    true: 'Doğru',
    unauthorized: 'Yetkisiz',
    unsavedChangesDuplicate:
      'Kaydedilmemiş değişiklikler var. Çoğaltma işlemine devam etmek istiyor musunuz?',
    untitled: 'Başlıksız',
    updatedAt: 'Güncellenme tarihi',
    updatedCountSuccessfully: '{{count}} {{label}} başarıyla güncellendi.',
    updatedSuccessfully: 'Başarıyla güncellendi.',
    updating: 'Güncelleniyor',
    uploading: 'Yükleniyor',
    user: 'kullanıcı',
    username: 'Kullanıcı Adı',
    users: 'kullanıcı',
    value: 'Değer',
    viewReadOnly: 'Salt okunur olarak görüntüle',
    welcome: 'Hoşgeldiniz',
  },
  operators: {
    contains: 'içerir',
    equals: 'eşittir',
    exists: 'var',
    intersects: 'kesişir',
    isGreaterThan: 'şundan büyüktür',
    isGreaterThanOrEqualTo: 'büyüktür veya eşittir',
    isIn: 'içinde',
    isLessThan: 'küçüktür',
    isLessThanOrEqualTo: 'küçüktür veya eşittir',
    isLike: 'gibidir',
    isNotEqualTo: 'eşit değildir',
    isNotIn: 'içinde değil',
    near: 'yakın',
    within: 'içinde',
  },
  upload: {
    addFile: 'Dosya ekle',
    addFiles: 'Dosya Ekle',
    bulkUpload: 'Toplu Yükleme',
    crop: 'Mahsulat',
    cropToolDescription:
      'Seçilen alanın köşelerini sürükleyin, yeni bir alan çizin ya da aşağıdaki değerleri ayarlayın.',
    dragAndDrop: 'Bir dosya sürükleyip bırakabilirsiniz',
    dragAndDropHere: 'veya buraya bir dosya sürükleyip bırakabilirsiniz',
    editImage: 'Görüntüyü Düzenle',
    fileName: 'Dosya adı',
    fileSize: 'Dosya boyutu',
    fileToUpload: 'Yüklenecek Dosya',
    filesToUpload: 'Yüklemek için Dosyalar',
    focalPoint: 'Odak Noktası',
    focalPointDescription:
      'Önizlemeye odak noktasını doğrudan sürükleyin veya aşağıdaki değerleri ayarlayın.',
    height: 'Yükseklik',
    lessInfo: 'Daha az bilgi',
    moreInfo: 'Daha fazla bilgi',
    pasteURL: 'URL yapıştır',
    previewSizes: 'Önizleme Boyutları',
    selectCollectionToBrowse: 'Görüntülenecek bir koleksiyon seçin',
    selectFile: 'Dosya seç',
    setCropArea: 'Mahsul alanını ayarla',
    setFocalPoint: 'Odak noktasını ayarla',
    sizes: 'Boyutlar',
    sizesFor: '{{label}} için boyutlar',
    width: 'Genişlik',
  },
  validation: {
    emailAddress: 'Lütfen geçerli bir e-posta adresi girin.',
    enterNumber: 'Lütfen geçerli bir sayı girin.',
    fieldHasNo: 'Bu alanda {{label}} girili değil.',
    greaterThanMax: '{{value}} izin verilen maksimum {{label}} değerinden daha büyük.',
    invalidInput: 'Bu alanda geçersiz bir giriş mevcut.',
    invalidSelection: 'Bu alanda geçersiz bir seçim mevcut.',
    invalidSelections: "'Bu alan şu geçersiz seçimlere sahip:'",
    lessThanMin: '{{value}} izin verilen minimum {{label}} değerinden daha küçük.',
    limitReached: 'Sınır aşıldı, yalnızca {{max}} öğe eklenebilir.',
    longerThanMin: 'Bu değer minimum {{minLength}} karakterden uzun olmalıdır.',
    notValidDate: '"{{value}}" geçerli bir tarih değil.',
    required: 'Bu alan gereklidir.',
    requiresAtLeast: 'Bu alan en az {{count}} adet {{label}} gerektirmektedir.',
    requiresNoMoreThan: 'Bu alana {{count}} adetten fazla {{label}} girilemez.',
    requiresTwoNumbers: 'Bu alana en az iki rakam girilmesi zorunludur.',
    shorterThanMax: 'Bu alan {{maxLength}} karakterden daha kısa olmalıdır.',
    trueOrFalse: 'Bu alan yalnızca doğru ve yanlış olabilir.',
    username:
      'Lütfen geçerli bir kullanıcı adı girin. Harfler, numaralar, kısa çizgiler, noktalar ve alt çizgiler içerebilir.',
    validUploadID: "'Bu alan geçerli bir karşıya yükleme ID'sine sahip değil.'",
  },
  version: {
    type: 'Tür',
    aboutToPublishSelection: "Seçimdeki tüm {{label}}'i yayınlamak üzeresiniz. Emin misin?",
    aboutToRestore: 'Döküman {{label}}, {{versionDate}} tarihindeki sürümüne geri döndürülecek.',
    aboutToRestoreGlobal:
      'Global {{label}}, {{versionDate}} tarihindeki sürümüne geri döndürülecek.',
    aboutToRevertToPublished:
      'Bu dökümanın değişikliklerini yayınladığı haline geri getirmek üzeresiniz. Devam etmek istiyor musunuz?',
    aboutToUnpublish: 'Bu dökümanı yayından kaldırmak üzeresiniz. Devam etmek istiyor musunuz?',
    aboutToUnpublishSelection: 'Seçimdeki tüm {{label}} yayınını kaldırmak üzeresiniz. Emin misin?',
    autosave: 'Otomatik kaydet',
    autosavedSuccessfully: 'Otomatik kaydetme başarılı',
    autosavedVersion: 'Otomatik kayıtlı sürüm',
    changed: 'Değişiklik yapıldı',
    compareVersion: 'Sürümü şununla karşılaştır:',
    confirmPublish: 'Yayınlamayı onayla',
    confirmRevertToSaved: 'Confirm revert to saved',
    confirmUnpublish: 'Yayından kaldırmayı onayla',
    confirmVersionRestoration: 'Sürümü Geri Getirmeyi Onayla',
    currentDocumentStatus: 'Şu an {{docStatus}} döküman',
    currentDraft: 'Mevcut Taslak',
    currentPublishedVersion: 'Mevcut Yayınlanan Sürüm',
    draft: 'Taslak',
    draftSavedSuccessfully: 'Taslak başarıyla kaydedildi.',
    lastSavedAgo: 'Son kaydedildi {{distance}} önce',
    noFurtherVersionsFound: 'Başka sürüm bulunamadı.',
    noRowsFound: '{{label}} bulunamadı',
    noRowsSelected: undefined,
    preview: 'Önizleme',
    previouslyPublished: 'Daha Önce Yayınlanmış',
    problemRestoringVersion: 'Bu sürüme geri döndürürken bir hatayla karşılaşıldı.',
    publish: 'Yayınla',
    publishChanges: 'Değişiklikleri yayınla',
    published: 'Yayınlandı',
    publishing: 'Yayınlama',
    restoreAsDraft: 'Taslak olarak geri yükle',
    restoreThisVersion: 'Bu sürüme geri döndür',
    restoredSuccessfully: 'Geri getirme başarılı.',
    restoring: 'Geri döndürülüyor...',
    revertToPublished: 'Yayınlanana geri döndür',
    reverting: 'Değişiklikler geri alınıyor...',
    saveDraft: 'Taslağı kaydet',
    selectLocales: 'Görüntülenecek yerel ayarları seçin',
    selectVersionToCompare: 'Karşılaştırılacak bir sürüm seçin',
    showLocales: 'Yerel ayarları göster:',
    showingVersionsFor: 'Şunun için sürümler gösteriliyor:',
    status: 'Durum',
    unpublish: 'Yayından Kaldır',
    unpublishing: 'Yayından kaldırılıyor...',
    version: 'Sürüm',
    versionCount_many: '{{count}} sürüm bulundu',
    versionCount_none: 'Sürüm bulunamadı',
    versionCount_one: '{{count}} sürüm bulundu',
    versionCount_other: '{{count}} sürüm bulundu',
    versionCreatedOn: '{{version}} oluşturma tarihi:',
    versionID: 'Sürüm ID',
    versions: 'Sürümler',
    viewingVersion: '{{entityLabel}} {{documentTitle}} için sürümler gösteriliyor',
    viewingVersionGlobal: '`Global {{entityLabel}} için sürümler gösteriliyor',
    viewingVersions: '{{entityLabel}} {{documentTitle}} için sürümler gösteriliyor',
    viewingVersionsGlobal: '`Global {{entityLabel}} için sürümler gösteriliyor',
  },
}

export const tr: Language = {
  dateFNSKey: 'tr',
  translations: trTranslations,
}
