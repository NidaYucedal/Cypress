//npx cypress run: Electron headless (browser'ı açmadan) ile bütün testleri çalıştırır.
//Hata alınan testlerin ekran görüntülerini screeashots klasörüne koyar
//Bütün testlerin video kayıtlarını videos klasörüne koyar.

///npx cypress info: Bilgisayarınızda yüklü browser bilgilerini, cypress versionunu,
 //işletim sistemini, hafıza bilgileri gibi verileri gösterir.

//npx cypress verify: Cypress'in yüklü olduğunu onaylar

//npx cypress run --browser chrome: Chrome headless(browser'ı açmadan) ile bütün testleri çalıştırır.

//npx cypress run --browser chrome --headed: Chrome browser'ı açarak bütün testleri çalıştırır.

//İSTENEN KLASÖRDEKİ TÜM TESTLERİ ÇALIŞTIRMAK
//npx cypress run --spec 'cypress/e2e/day02/'
//* Default olarak Electron ile çalıştırır.

//npx cypress run --spec 'cypress/e2e/day02/' --browser chrome
//*day02 klasörüğndeki bütün testleri Chrome headless (browser açmadan) ile çalıştırır.

//npx cypress run --spec 'cypress/e2e/day02/' --browser chrome --headed
//*day02 klasöründeki bütün testleri Chrome browser'ı açarak çalıştırır.


//TEK BİR TESTİ ÇALIŞTIRMAK

//npx cypress run --spec 'cypress/e2e/day02/01_LoginTest1.cy.js'
//* Default olarak Electron ile çalıştırır.

//npx cypress run --spec 'cypress/e2e/day02/01_LoginTest1.cy.js' --browser chrome
//*day02 klasörüğndeki 01_LoginTest1.cy.js' dosyasını Chrome headless (browser açmadan) ile çalıştırır.

//npx cypress run --spec 'cypress/e2e/day02/01_LoginTest1.cy.js' --browser chrome --headed
//*day02 klasörüğndeki 01_LoginTest1.cy.js' dosyasını Chrome browser'ı açarak çalıştırır.


//ÇALIŞTIRMAK İÇİN KOD TANIMLAMA
//PACKAGE.JSON dosyası içerisindeki script bölümüne kendimizin belirleyeceği çalıştırma komutları ekleyebiliriz

//"cy:run_day02": "npx cypress run --spec 'cypress/e2e/day02/' --browser chrome"
//TERMİNALE: npm run cy:run_day02

//"mycode": "npx cypress run --spec 'cypress/e2e/day02/' --browser chrome --headed",

//"mycode" diye bir komut tanımlamış olduk

//Oluşturduğumuz bu komutu terminalde şu şekilde çalıştıracağız.

//TERMİNALDE: npm run mycode

//"test-dashboard" : "npx cypress run --record --key 2613e508-1d76-438c-ae48-ff4f48e054e6",
//npm run test_dashboard => bütün testlerim çalışıp dashboarda gönderilecek


//"dashboard_day02": "npx cypress run --spec 'cypress/e2e/day02/' --record --key 2613e508-1d76-438c-ae48-ff4f48e054e6"
//npm run dashboard_day02 => sadec day02 klasöründeki tetler çalışacak ve dashboarda gönderilecek


//BİRDEN FAZLA BROWSERDA TESTLERİ ÇALIŞTIRMAK İÇİN
//1) 2 tane terminal açıyoruyz
///2) 1. terminale npx cypress run --spec 'cypress/e2e/day02/' --browser chrome --headed
//3) 2. terminale npx cypress run --spec 'cypress/e2e/day02/' --browser firefox --headed
//4) 2 terminalde de entera bas