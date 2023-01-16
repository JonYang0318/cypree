describe("重發邀請信/停權",()=>{
    
          
  
    it('重發邀請信',function(){
        cy.viewport(1500, 1280)
        cy.visit('https://qa.telli.cc/business/auth/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=171f5021-60d3-11ed-b3fa-00ffaf2156c9')
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('superadmin@telexpress.com')
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('123456')
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
        //選擇公司 
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[1]/div[2]/div/div[2]').click()    
        //確定 
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]').click()
        //click 管理員設定
        cy.xpath('/html/body/div[1]/div/div[1]/aside/div/div/div[3]/div[2]/div').click()

        cy.wait(3000)                //操作編輯
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/main/div/div/div/div[3]/div/div[1]/div/table/tbody/tr[1]/td[7]/div/div/button/span[2]').click()
        //重發邀請信
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/form/div/div/div[1]/div[2]/div/div/div[2]/div[2]/div[2]/button/span[2]/span').click()
        cy.get('.q-notification__wrapper > .q-notification__content > .q-notification__message > .flex > .text-h6').should('contain','成功')
                              }) 
                       })        
                       
                  
    it.only('停權帳戶',function(){
        cy.viewport(1500, 1280)
        cy.visit('https://qa.telli.cc/business/auth/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=171f5021-60d3-11ed-b3fa-00ffaf2156c9')
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('superadmin@telexpress.com')
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('123456')
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()

        //選擇公司 
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[1]/div[2]/div/div[2]').click()    
        //確定 
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]').click()
        //click 管理員設定
        cy.xpath('/html/body/div[1]/div/div[1]/aside/div/div/div[3]/div[2]/div').click()

        cy.wait(3000)                //操作編輯
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/main/div/div/div/div[1]/div[2]/label/div/div/div[1]/input').type('tpp07026@telexpress.com')
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/main/div/div/div/div[1]/div[2]/label/div/div/div[3]/i').click()
        cy.wait(2000)
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/main/div/div/div/div[3]/div/div[1]/div/table/tbody/tr/td[7]/div').click()


       
        //停權
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/form/div/div/div[1]/div[2]/div/div/div[2]/div[2]/div[2]/div[1]/div[2]').click()
        //儲存
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/form/h2/div/button[2]/span[2]').click()
        cy.wait(2000)
        cy.get('.q-notification__wrapper > .q-notification__content > .q-notification__message > .flex > .text-h6').should('contain','成功')
        //復權
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/form/div/div/div[1]/div[2]/div/div/div[2]/div[2]/div[2]/div[1]/div[2]').click()
        //儲存
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/form/h2/div/button[2]/span[2]').click()
        cy.wait(2000)
        cy.get('.q-notification__wrapper > .q-notification__content > .q-notification__message > .flex > .text-h6').should('contain','成功')
       
              
                              }) 


    
          
                                                   
                                              
    it('重複帳戶無法在註冊',function(){
        cy.viewport(1500, 1280)
        cy.visit('https://qa.telli.cc/business/auth/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=171f5021-60d3-11ed-b3fa-00ffaf2156c9')
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('superadmin@telexpress.com')
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('123456')
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
                                    //選擇公司 
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[1]/div[2]/div/div[2]').click()    
                                    //確定 
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]').click()
                                    //click 管理員設定
        cy.xpath('/html/body/div[1]/div/div[1]/aside/div/div/div[3]/div[2]/div').click()
                            
        cy.wait(3000)                //操作編輯
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/main/div/h2/div/button').click()
                                    //停權
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div/form/div[1]/div[1]/div/div/div/div[1]/label[1]/div/div[1]/div[1]/input').type('tpp07026@telexpress.com')
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div/form/div[2]/button[2]/span[2]').click()
        cy.wait(1000)
                                    // cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[2]/div/div[9]').as('loes')
        cy.get('.q-notification__wrapper > .q-notification__content > .q-notification__message > .flex > .text-h6').should('contain','失敗')
                                    
                                    
                                          
                                                          }) 
                              