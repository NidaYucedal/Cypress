const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://www.google.com",

    projectId: "rieh9h",

    "video":false,
    //testlerin videolari kaydetmiyor
    //default olarak video true dur

    //"retries":2
    //test Fail olunca anu kac kere calismasini tanimlariz
    //hata aldiginda 1 kere calistikdan sonra 2 kere daha dener









  },
});
