describe("檢查埋字",()=>{
    beforeEach('登入',function(){
        cy.visit('https://www.livenation.com.tw/event/allevents')
        cy.xpath('/html/body/div[1]/header/ul/li[3]/a/span').click()
        cy.wait(1500)
        cy.xpath('/html/body/div[1]/main/div/form/p[2]/input').type('a2492786091@gmail.com')
        cy.xpath('/html/body/div[1]/main/div/form/p[3]/span/input').type('Ac55665566')
        cy.xpath('/html/body/div[1]/main/div/form/button').click()
        
        }) 
        
    it('開始購買',function(){
        cy.xpath('/html/body/div[1]/main/div/div[3]/ul/li[2]/a/section/div[3]/div/div/span').click()//購買
        cy.scrollTo('bottom')//移到下方
        cy.xpath('/html/body/div[1]/main/div/div[2]/section[1]/ul/li/div[2]/a').click()
        cy.wait(1500)
        cy.xpath('/html/body/div[1]/section/div/div/div/ul/li[1]/a/div').click()
        cy.xpath('/html/body/div[1]/section/div/div/div/div[2]/div[1]/div[1]').click()
        cy.xpath('/html/body/div[1]/section/div/div/div/div[2]/div[1]/div[1]/select').click()
        
        
        }) 
    })