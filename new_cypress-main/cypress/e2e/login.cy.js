describe('Тестирование сайта', function () {

    it('найти сайт', function () {
         cy.visit('https://login.qa.studio/');
     })
     

     //Напиши проверку на позитивный кейс авторизации:
     it('позитивный кейс авторизации', function () {
       cy.visit('https://login.qa.studio/');
     //а) Ввести правильный логин
       cy.get('#mail').type('german@dolnikov.ru');
     //б) Ввести правильный пароль
       cy.get('#pass').type('iLoveqastudio1');
     //в) Нажать войти
       cy.get('#loginButton').click();
     //г) Проверить нужный текст и наличие кнопки крестик
       cy.get('#messageHeader').contains('Авторизация прошла успешно');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
     
     
     
     //Напиши автотест на проверку логики восстановления пароля:
     it('восстановление пароля', function () {
       cy.visit('https://login.qa.studio/');
     //а) Нажать «Забыли пароль»
       cy.get('#forgotEmailButton').click();
     //б) Ввести любой имейл
       cy.get('#mailForgot').type('email@yandex.ru');
       cy.get('#restoreEmailButton').click();
     //в) Проверка, что получили нужный текст и есть кнопка крестика
       cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
     
     
     //Напиши проверку на негативный кейс авторизации:
     it('неверный пароль', function () {
      cy.visit('https://login.qa.studio/');
     //а) Ввести правильный логин
      cy.get('#mail').type('german@dolnikov.ru');
     //б) Ввести НЕправильный пароль
      cy.get('#pass').type('iLoveqastudio2');
     //в) Нажать войти
      cy.get('#loginButton').click();
     //г) Проверить нужный текст и наличие кнопки крестик
      cy.get('#messageHeader').contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
     
     
     
     //Напиши проверку на негативный кейс авторизации:
     it('неверный логин', function () {
      cy.visit('https://login.qa.studio/');
     //а) Ввести НЕправильный логин
      cy.get('#mail').type('false@dolnikov.ru');
     //б) Ввести правильный пароль
      cy.get('#pass').type('iLoveqastudio1');
     //в) Нажать войти
      cy.get('#loginButton').click();
     //г) Проверить нужный текст и наличие кнопки крестик
      cy.get('#messageHeader').contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
     
     
     
     //Напиши проверку на негативный кейс валидации:
     it('негативный кейс валидации', function () {
      cy.visit('https://login.qa.studio/');
     //а) Ввести логин без @
      cy.get('#mail').type('germandolnikov.ru');
     //б) Ввести правильный пароль
      cy.get('#pass').type('iLoveqastudio1');
     //в) Нажать войти
      cy.get('#loginButton').click();
     //г) Проверить, что получаем текст с ошибкой
      cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
     
     
     
     //Напиши проверку на приведение к строчным буквам в логине:
     it('приведение к строчным буквам', function () {
      cy.visit('https://login.qa.studio/');
     //а) Ввести логин GerMan@Dolnikov.ru
      cy.get('#mail').type('GerMan@Dolnikov.ru');
     //б) Ввести правильный пароль
      cy.get('#pass').type('iLoveqastudio1');
     //в) Нажать войти
     //г) Проверить, что авторизация успешна (текст именно «Авторизация прошла успешно» и наличие кнопки крестик)
      cy.get('#messageHeader').contains('Авторизация прошла успешно');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })


 }) 


 