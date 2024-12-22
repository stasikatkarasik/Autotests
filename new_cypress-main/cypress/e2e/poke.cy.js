//зайти на сайт покемонов https://pokemonbattle.ru/
describe('Покупка аватара', function () {

    it('зайти на сайт', function () {
         cy.visit('https://pokemonbattle.ru/');
     
 
//ввести верный логин
cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
//ввести верный пароль 
cy.get('#password').type('USER_PASSWORD');
//нажать кнопку войти
cy.get('.auth__button').click();
//нажать на кнопку "трененры"
cy.get('.header__container > .header__id').click();
//нажать на кнопку "смена аватара"
cy.get('[href="/shop"]').click();
//найти аватар со свойством available
cy.get('.available > button').first().click()
//ввести номер карты
cy.get('.credit').type('4620869113632996');  
//ввести CVV
cy.get('.k_input_ccv').type('125');
//ввести срок действия карты                             
cy.get('.k_input_date').type('1127');
//ввести имя владельца                           
cy.get('.k_input_name').type('ANASTASIYA'); 
//нажать кнопку оплатить                        
cy.get('.pay-btn').click();
//ввести код подтверждения                                
cy.get('#cardnumber').type('56456'); 
//нажать кнопку "Отправить"                           
cy.get('.payment__submit-button').click(); 
//проверяем сообщение и его видимость                    
cy.contains('Покупка прошла успешно').should('be.visible'); 
})    
})

