describe("登入其他家公司(SuperAdmin)",()=>{
    var QATEST ='https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179'
    it('增加群組/停用群組/刪除',function(){
           cy.viewport(1280, 720)
           cy.visit(QATEST)
           cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input")
           .type('superadmin@telexpress.com')
           cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input")
           .type('123456')
           cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
           //選擇其他家公司
           cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[1]')
           .click()
           cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]')
           .click()
           //點選群組設定
           cy.xpath('/html/body/div[1]/div/div[1]/aside/div/div/div[3]/div[3]/div')
           .click()
           //新增群組紐
           cy.wait(2000)
           cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/h2/button/span[2]')
           .click()
           //輸入群組名稱
           var inputGroup = cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[1]/div[2]/div/div[1]/label/div/div[1]/div[1]/input').type('QA測試群組')
           var inputtext = cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[1]/div[2]/div/div[2]/label/div/div[1]/div[1]/textarea').type('測試')
           //功能權限
           cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div[1]/div/div')
           .click()
           //成員選擇_新增成員_確定__儲存
           cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[3]/div[1]/div[2]/button')
           .click()
           cy.wait(3000)
           cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div/div[2]/div[3]/div[1]/div/table/thead/tr/th[1]/div')
           .click()
           cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div/div[3]/button[2]/span[2]')
           .click()
           //儲存
           cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/h2/div/button[2]/span[2]/span')
           .click()
           //關閉權限
           cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[1]/div/div[2]/div[3]/div[2]/div[1]')
           .click()
           cy.wait(2000)
           cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div/div[2]/button[2]/span[2]/span')
           .click()
           cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[1]/div/div[1]/div/div[2]/button[1]/span[2]/div/div/i')
           .click()
           //刪除
           cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div/div[2]/button[2]/span[2]')
           .click()
                          
                  
                          }) 
    it('檢查權限',function(){  
        cy.clearCookies()         
        cy.viewport(1920, 1080)
        cy.visit(QATEST)
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input")
        .type('superadmin@telexpress.com')
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input")
        .type('123456')
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]')
        .click()
        //選擇其他家公司
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[1]')
        .click()
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]')
        .click()
        //管理員設定
        
        cy.xpath('/html/body/div[1]/div/div[1]/aside/div/div/div[3]/div[2]/div/span')
        .click()
        //邀請新成員
       
        cy.wait(3000)
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/main/div/h2/div/button/span[2]')
        .click()
        
        function generateRandomEmail() {
            const chars = "abcdefghijklmnopqrstuvwxyz";
            let email = "";
            for (let i = 0; i < 10; i++) {
                email += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return email + "@example.com";
       }
    
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div/form/div[1]/div[1]/div/div/div/div[1]/label[1]/div/div[1]/div[1]/input').type(generateRandomEmail())
        function phone() {
            const chars = "1234567890";
            let numtest = "";
            for (let i = 0; i < 10; i++) {
                numtest += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return numtest;
       }
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div/form/div[1]/div[1]/div/div/div/div[1]/label[2]/div/div[1]/div/input').type(phone())
         function nickname() {
                    const chars = "豪明花偉立建民子偉峻傑均軍";
                    let me = "";
                    for (let i = 0; i < 2; i++) {
                        me += chars.charAt(Math.floor(Math.random() * chars.length));
                    }
                    return "王"+me;
               }
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div/form/div[1]/div[1]/div/div/div/div[2]/label[2]/div/div[1]/div/input')
        .type(nickname())
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div/form/div[2]/button[2]')
        .click()
    })


    it('檢查取消停用群組功能按鍵/檢查建立時間是否相符合',function(){
        cy.clearCookies()  
        cy.viewport(1280, 720)
        cy.visit(QATEST)
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input")
        .type('superadmin@telexpress.com')
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input")
        .type('123456')
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]'
        ).click()
        //選擇其他家公司
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[1]')
        .click()
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]')
        .click()
        //點選群組設定
        cy.xpath('/html/body/div[1]/div/div[1]/aside/div/div/div[3]/div[3]/div')
        .click()
        //新增群組紐
        cy.wait(2000)
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/h2/button/span[2]')
        .click()
        //輸入群組名稱
        var inputGroup = cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[1]/div[2]/div/div[1]/label/div/div[1]/div[1]/input')
        .type('QA測試群組')
        var inputtext = cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[1]/div[2]/div/div[2]/label/div/div[1]/div[1]/textarea')
        .type('測試')
        //功能權限
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div[1]/div/div')
        .click()
        //成員選擇_新增成員_確定__儲存
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[3]/div[1]/div[2]/button')
        .click()
        cy.wait(3000)
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div/div[2]/div[3]/div[1]/div/table/thead/tr/th[1]/div')
        .click()
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div/div[3]/button[2]/span[2]')
        .click()
        //儲存
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/h2/div/button[2]/span[2]/span')
        .click()
        //檢查建立時間
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[1]/div/div[2]/div[4]/div[2]/div[2]').then(($el) => {
            const timestamp = new Date( $el.text()+'+08:00' )
            const now = new Date()
            const timeDiff = now - timestamp
            expect(timeDiff).to.be.lessThan(60000)
          });
        //關閉權限
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[1]/div/div[2]/div[3]/div[2]/div[1]')
        .click()
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div/div[2]/button[1]')
        .click()
        //檢查更新時間
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[1]/div/div[2]/div[3]/div[2]/div[1]')
        .click()
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div/div[2]/button[2]')
        .click()
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[1]/div/div[2]/div[4]/div[1]/div[2]').then(($el) => {
            const timestamp = new Date( $el.text()+'+08:00' )
            const now = new Date()
            const timeDiff = now - timestamp
            expect(timeDiff).to.be.lessThan(60000)
          });
                       
               
                       }) 
        describe("麵包屑檢查",()=>{
    
          
            it('檢查麵包屑',function(){
                cy.viewport(1280, 720)
                cy.visit(QATEST)
                cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input")
                .type('tpp07026@telexpress.com')
                cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input")
                .type('77887788')
                cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]')
                .click()
                //選擇公司 
                cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[1]/div[2]/div/div[2]')
                .click()    
                //確定 
                cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]')
                .click()
                //click 基點管理
                cy.xpath('/html/body/div[1]/div/div[1]/aside/div/div/div[1]/div[3]/div[1]/span')
                .click()
                cy.xpath('/html/body/div[1]/div/div[1]/aside/div/div/div[1]/div[3]/div[2]/div/span')
                .click()
                cy.xpath('/html/body/div[1]/div/div[2]/main/div/div').as('bread')
                cy.get('@bread').should('contain','客戶/積點管理/基本設定')
              

                      
                                      }) 
                               })        
        describe("管理員/帳戶設定修改+儲存",()=>{
    
          
            it('SuperAdmin修改個認人資料+儲存',function(){
                cy.viewport(1500, 1280)
                cy.visit(QATEST)
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
                //修改第一個人的資料在進行儲存
                function nickname() {
                    const chars = "豪明花偉立建民子偉峻傑均軍";
                    let me = "";
                    for (let i = 0; i < 2; i++) {
                        me += chars.charAt(Math.floor(Math.random() * chars.length));
                    }
                    return "王"+me;
               }
               cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/form/div/div/div[1]/div[2]/div/div/div[1]/div[3]/label/div/div[1]/div/input').clear()
               cy.wait(3000)
               cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/form/div/div/div[1]/div[2]/div/div/div[1]/div[3]/label/div/div[1]/div/input').type(nickname())
               cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/form/div/div/div[1]/div[2]/div/div/div[2]/div[1]/label/div/div[1]/div/input').clear()
               function tele() {
                const chars = "0123456789";
                let me = "";
                for (let i = 0; i < 6; i++) {
                    me += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                return "0933"+me;
           }
           cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/form/div/div/div[1]/div[2]/div/div/div[2]/div[1]/label/div/div[1]/div/input').type(tele())
           cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/form/h2/div/button[2]/span[2]/span').click()
                      
                                      }) 
                               })        

            it('Admin修改個認人資料+儲存',function(){
             cy.viewport(1500, 1280)
             cy.visit(QATEST)
             cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('tpp07026@telexpress.com')
             cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('77887788')
             cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
            //選擇公司 
            cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[1]/div[2]/div/div[2]').click()  
            //確定 
            cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]').click()
            //個人資料管理
            cy.xpath('/html/body/div[1]/div/header/div[2]/div[2]').click()    
            cy.xpath('/html/body/div[3]/div/div[2]/div[2]').click()    
                                
            cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div[1]/div[2]/div/div[1]/div/div[1]/label/div/div[1]/div/input').clear()
            cy.wait(3000)
                function nickname() {
                const chars = "豪明花偉立建民子偉峻傑均軍";
                let me = "";
                for (let i = 0; i < 2; i++) {
                    me += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                return "楊"+me;
           }      
            //編輯
            cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div[1]/div[2]/div/div[1]/div/div[1]/label/div/div[1]/div/input').type(nickname())
            cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div[1]/div[2]/div/div[2]/div/label/div/div[1]/div/input').clear()
            //修改聯絡方式
            function tele() {
                const chars = "0123456789";
                let me = "";
                for (let i = 0; i < 6; i++) {
                    me += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                return "0966"+me;
           }
            
            cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div[1]/div[2]/div/div[2]/div/label/div/div[1]/div/input').type(tele())               
                                //儲存
            cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div[1]/div[3]/button/span[2]').click()
                                      
                                                      }) 
                                               })        
                         
                         //

   
