describe("增加禮品",()=>{
    
          
    it('增加商品需要顯示安全通知庫存量',function(){
     cy.viewport(1500, 1280)
     cy.clearCookies()
     cy.visit('https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=14648f00-60cb-11ed-b3fa-00ffaf2156c9&t=1677747063078')
     cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('tpp07026@telexpress.com')
     cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('77887788')
     cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
     //登入頁面
     cy.xpath('/html/body/div[1]/div/div[1]/aside/div/div/div[1]/div[4]/div[2]/div/span').click()
     cy.xpath('/html/body/div[1]/div/div[1]/aside/div/div/div[1]/div[4]/div[2]/div/span').click()
     cy.log('檢查狀態顏色')
     //禮品管理新增
    //  cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[3]/div[1]/div/table/tbody/tr[11]/td[8]/div/div').should('have.css', 'background-color','#E5F3FF')
     cy.wait(9000)
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/h2/div/button[2]/span[2]').click()
        
    
    function telephon() {
           const chars = "1234567890";
           let me = "";
           for (let i = 0; i < 5; i++) {
               me += chars.charAt(Math.floor(Math.random() * chars.length));
           }
           return "TestRebot"+me;
    }
    let telephoneValue = telephon();

    //編號
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div/div[1]/div[2]/div/div[2]/div/label[1]/div/div[1]/div/input').type(telephoneValue)
    //點選
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div/div[1]/div[2]/div/div[2]/div/div[3]/div[1]/label/div/div[1]/div[1]').click()
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div[1]/div[2]/div/span').click()
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div/div[1]/div[2]/div/div[2]/div/div[3]/div[2]/label/div/div[1]/div[1]/div[1]').click()
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div[1]/div[2]/div').click()
     //特標
     
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
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div/div[1]/div[2]/div/div[2]/div/label[2]/div/div[1]/div/input').type('青春鹿skiii'+assertname)

     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div/div[1]/div[2]/div/div[2]/div/label[3]/div/div[1]/div/input').type('限量特價中')
     //影片設置
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div/div[1]/div[2]/div/div[2]/div/div[10]/label/div/div/div[2]/input').type('CJ1sL82pXmY')
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div/div[1]/div[2]/div/div[2]/div/div[10]/div/div[2]').click()
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div/div[1]/div[2]/div/div[2]/div/div[12]/form/div/div[2]').type('測試中')
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div/div[1]/div[2]/div/div[2]/div/div[15]/form/div/div[2]').type('測試中')
     //立即上架下價
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div/div[3]/div[2]/div/div[1]/div[1]/div[2]/div').click()
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div/div[3]/div[2]/div/div[1]/div[2]/div[2]/div/div[2]').click()
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div/div[3]/div[2]/div/div[2]/div[1]/div[2]/label[1]/div/div[1]/div/input').type('{backspace}{backspace}')
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div/div[3]/div[2]/div/div[2]/div[1]/div[2]/label[1]/div/div[1]/div/input').type('13')
     //顯示以兌換完畢
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div/div[3]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[2]').click()
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div/div[3]/div[2]/div/div[2]/div[3]/div[2]/div/div[2]').click()
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div/div[3]/div[2]/div/div[2]/div[3]/div[2]/label/div/div[1]/div[1]/input').type('5')
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/div/div[4]/div[2]/div/div[1]/div[1]/div[2]/label/div/div[1]/div[1]/input').type('5')
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/h2/div/button[3]').click()
     //儲存
     cy.wait(3000)
     cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/form/h2/div/button[2]').dblclick()
    //  cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[3]/div[1]/div/table/tbody/tr[1]/td[2]').should('have.text', telephoneValue)
    //  cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[3]/div[1]/div/table/tbody/tr[1]/td[3]').should('have.text', '青春鹿skiii'+assertname)
    //檢視按鈕檢查
    cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[3]/div[1]/div/table/tbody/tr[1]/td[11]/div/div/button[1]/span[2]/i').click()
    //再次檢查表格文字確認返回鍵有用處
    cy.wait(3000)
    // cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div/div[2]/div/div[1]/div/div/form/div/div[1]/div[2]/div/div[2]/div/div[2]').should('have.text', telephoneValue)
    // cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div/div[2]/div/div[1]/div/div/form/div/div[1]/div[2]/div/div[2]/div/div[6]').should('have.text', '青春鹿skiii'+assertname)
    cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div/div[3]/button/span[2]').click()
    //檢查搜尋功能
    cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[1]/div[2]/label/div/div/div[1]/input').type('青春鹿skiii'+assertname+'{enter}')
    //再次assert確保東西有正確
    cy.wait(1500)
    cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[3]/div[1]/div/table/tbody/tr/td[2]').should('have.text',telephoneValue)
    cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[3]/div[1]/div/table/tbody/tr/td[3]').should('have.text','青春鹿skiii'+assertname)
})
     
})