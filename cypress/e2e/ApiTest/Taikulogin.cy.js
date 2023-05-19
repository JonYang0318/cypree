describe("太古站登入測試",()=>{
    // it('將db設置為太古登入',function(){
    //       cy.log('DB 斷言確定')
    //       cy.task( "queryDb",`UPDATE telligent_member.company_setting SET login_type = '4' WHERE id = ('af71ca3a-bd7c-11ed-b145-00ffaf2156c9');`)

    //       }) 
    it('太古登入測試',function(){
            cy.visit('https://iscoop-qa.telligentcrm.com/member')
            cy.get('.q-ml-lg > .q-btn').click()
            cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[1]/input').type('a2492786091@gmail.com')//輸入帳號
            cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[2]/input').type('Rulai30126')//輸入密碼
            cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[3]/button').click()
            //進入太古頁面
            cy.wait(5000)
       
 
         

    })
})