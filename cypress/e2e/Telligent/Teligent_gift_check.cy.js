describe("複製禮品/刪除商品",()=>{
    
          
    it('複製禮品/檢查禮品SKU格式',function(){
     cy.viewport(1500, 1280)
     cy.clearCookies()
     cy.visit('https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179')
     cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('tpp07026@telexpress.com')
     cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('77887788')
     cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
     //登入頁面
     cy.xpath('/html/body/div[1]/div/div[1]/aside/div/div/div[1]/div[4]/div[2]/div/span').click()
     cy.xpath('/html/body/div[1]/div/div[1]/aside/div/div/div[1]/div[4]/div[2]/div/span').click()
     //SKU碼檢查
     cy.xpath(2000)
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[3]/div[1]/div/table/tbody/tr[1]/td[11]/div/div/button[3]/span[2]/i').click()
     cy.wait(2000)
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/h2/div/button[3]/span[2]').click()
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div[2]/div[1]/div[2]/div/div[2]/div/label[1]/div/div[1]/div[1]/input').type('我123')
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/h2/div/button[3]/span[2]').click()
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div[2]/div[1]/div[2]/div/div[2]/div/label[1]/div/div[2]/div[1]').should('have.text','禮品SKU只能輸入英數字。')
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div[2]/div[1]/div[2]/div/div[2]/div/label[1]/div/div[1]/div[1]/input').type('{backspace}{backspace}{backspace}{backspace}')
     function prename() {
        const chars = "1234567890";
        let me = "";
        for (let i = 0; i < 4; i++) {
            me += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return me;
     }

     let assertname = prename();
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div/div[1]/div[2]/div/div[2]/div/label[2]/div/div[1]/div/input').click()
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div[2]/div[1]/div[2]/div/div[2]/div/label[1]/div/div[1]/div[1]/input').type('copy'+assertname)
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div[2]/div[3]/div[2]/div/div[1]/div[1]/div[2]/div/div[2]').click()
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div[2]/div[3]/div[2]/div/div[1]/div[2]/div[2]/div/div[2]').click()
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/h2/div/button[3]/span[2]').click()
     cy.wait(3000)
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/h2/div/button[2]').click()
     cy.wait(2000)

    //  cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div[2]/div[1]/div[2]/div/div[2]/div/label[1]/div/div[2]/div[1]/div')
    //  cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[1]/div/div[3]/div[2]').click()
    //  cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[1]/div/div[3]/div[2]').should('have.text','已下架')
    //  cy.wait(2000)
    //  cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[3]/div[1]/div/table/tbody/tr[1]/td[11]/div/div/button[4]').click()
    //  cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div/div[2]/button[2]/span[2]').dblclick()
    // //
    //  cy.xpath('')
    
})

describe("檢查禮品防呆/全部匯出功能檢查",()=>{
    
          
    it('下架禮品/刪除禮品',function(){
     cy.viewport(1500, 1280)
     cy.clearCookies()
     cy.visit('https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179')
     cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('tpp07026@telexpress.com')
     cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('77887788')
     cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
     //登入頁面
     cy.xpath('/html/body/div[1]/div/div[1]/aside/div/div/div[1]/div[4]/div[2]/div/span').click()
     cy.xpath('/html/body/div[1]/div/div[1]/aside/div/div/div[1]/div[4]/div[2]/div/span').click()
     //禮品管理下架商品
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[3]/div[1]/div/table/tbody/tr[1]/td[11]/div/div/button[4]/span[2]/i').click()
     //下架標籤
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[3]/div[1]/div/table/tbody/tr[1]/td[11]/div/div/button[4]').click()
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[1]/div/div[3]/div[2]').click()
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[1]/div/div[3]/div[2]').should('have.text','已下架')
     cy.wait(2000)
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[3]/div[1]/div/table/tbody/tr[1]/td[11]/div/div/button[4]').click()
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div/div[2]/button[2]/span[2]').dblclick()
    //
    //  cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/h2/div/button[1]/span[2]').as('export')
     //匯出csv
     cy.wait(3000)
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/h2/div/button[1]/span[2]').click()
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[1]/div[2]').click()
      //檢查頁籤是否正確
    // cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[1]/div/div[1]/div[3]').should('have.text','已上架')
    cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[1]/div/div[2]').should('have.text','待上架')
    cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[1]/div/div[3]/div[2]').should('have.text','已下架')
    cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[1]/div/div[4]').should('have.text','草稿')
    cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[1]/div/div[5]/div[2]').should('have.text','全部')
        })
   

     
    })

})