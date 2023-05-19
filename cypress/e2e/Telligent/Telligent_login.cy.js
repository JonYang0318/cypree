describe("登入功能(一般權限)", () => {
       var QATEST ='https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179'


       it('輸入正確帳號密碼能登入+登出', function () {
              cy.viewport(1500, 1280)
              cy.clearCookies()
              cy.visit(QATEST)
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('tpp07026@telexpress.com')
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('77887788')
              cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
              //  //選擇公司
              //  cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[2]').click()
              //  cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]').click()
              //  //重新整理

              //登出
              cy.xpath('/html/body/div[1]/div/header/div[2]/div[2]').click()
              cy.xpath('/html/body/div[3]/div/div[3]/div[2]').click()

       })

       //
});
describe("登入其他家公司(一般權限)", () => {

       var QATEST ='https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179'

       it.skip('登入', function () {
              cy.viewport(1500, 1280)
              cy.clearCookies()
              cy.visit(QATEST)
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('tpp07026@telexpress.com')
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('77887788')
              cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
              //選擇其他家公司
              cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[1]').click()
              cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]').click()



       })

       //
});
describe("登入其他家公司(SuperAdmin)", () => {
       var QATEST ='https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179'


       it.skip('登入+登出', function () {
              cy.viewport(1500, 1280)
              cy.clearCookies()
              cy.visit(QATEST)
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('superadmin@telexpress.com')
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('123456')
              cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
              //選擇其他家公司
              cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[1]').click()
              cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]').click()
              //登出
              cy.xpath('/html/body/div[1]/div/header/div[2]/div[2]/div[2]/div').click()
              cy.xpath('/html/body/div[3]/div/div[3]/div[2]').click()



       })

       //
});
describe("密碼檢查", () => {

       var QATEST ='https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179'

       it('密碼顯示功能開關鍵', function () {
              cy.viewport(1500, 1280)
              cy.clearCookies()
              cy.visit(QATEST)
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('tpp07026@telexpress.com')
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('123456')
              cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[3]/i').click()

       })
       it('輸入錯誤密碼必須防呆', function () {
              cy.viewport(1500, 1280)
              cy.clearCookies()
              cy.visit(QATEST)
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('tpp07026@telexpress.com')
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('123456')
              cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[3]/i').click()
              cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button').click()
              cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/div[2]/div/span').as('Med')
              cy.get("@Med").should("contain", '帳號密碼錯誤')
       })

       //
});
describe("重置密碼", () => {
       var QATEST ='https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179'


       it('檢查密碼三方有一方輸入錯誤', function () {
              cy.viewport(1500, 1250)
              cy.visit(QATEST)
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('tpp07026@telexpress.com')
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('77887788')
              cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
              //                //選擇公司
              // cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[2]').click()
              // cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]').click()
              //密碼變更          
              cy.xpath('/html/body/div[1]/div/header/div[2]/div[2]').click()
              cy.xpath('/html/body/div[3]/div/div[2]/div[2]').click()
              cy.get(':nth-child(3) > .q-item__section').click()
              cy.get('.q-btn--outline').click()
              //開始更改密碼
              cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div/div[2]/div/div[1]/div/div[1]/label/div/div[1]/div[1]/input').type('77887788')
              cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div/div[2]/div/div[1]/div/div[2]/label/div/div[1]/div[1]/input').type('55665566')
              cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div/div[2]/div/div[1]/div/div[3]/label/div/div[1]/div[1]/input').type('123456')
              cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div/div[2]/div/div[1]/div/div[3]/label/div/div[2]/div/div').as('chk')
              cy.get('@chk').should('contain', '請再輸入相同的密碼')
       })

       describe("不輸入密碼情況下變更", () => {

              it('檢查變更時應該談出警訊', function () {

                     cy.viewport(1500, 1250)
                     cy.visit(QATEST)
                     cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('tpp07026@telexpress.com')
                     cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('77887788')
                     cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
                     //                       //選擇公司
                     // cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[2]').click()
                     // cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]').click()
                     //密碼變更          
                     cy.xpath('/html/body/div[1]/div/header/div[2]/div[2]').click()
                     cy.xpath('/html/body/div[3]/div/div[2]/div[2]').click()
                     cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[1]/div/div[2]/button[2]/span[2]/span').click()
                     cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div/div[2]/div/div[1]/div/div[1]/label/div/div[1]/div[1]/input').clear()
                     cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div/div[2]/div/div[1]/div/div[2]/label/div/div[1]/div[1]/input').clear()
                     cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div/div[2]/div/div[1]/div/div[3]/label/div/div[1]/div[1]/input').clear()
                     cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div/div[3]/button/span[2]/span').click()
                     cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div/div[2]/div/div[1]/div/div[1]/label/div/div[2]/div/div').as('chk')
                     cy.get('@chk').should('contain', '請輸入6到30碼英數大小寫密碼')
              })
       })

       describe("變更密碼", () => {


              it('變更密碼成功', function () {
                     cy.viewport(1500, 1250)
                     cy.visit(QATEST)
                     cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('tpp07026@telexpress.com')
                     cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('77887788')
                     cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
                     //                                     //選擇公司
                     // cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[2]').click()
                     // cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]').click()
                     //密碼變更          
                     cy.xpath('/html/body/div[1]/div/header/div[2]/div[2]').click()
                     cy.xpath('/html/body/div[3]/div/div[2]/div[2]').click()
                     cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[1]/div/div[2]/button[2]/span[2]/span').click()
                     //開始更改密碼
                     cy.wait(2000)
                     cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div/div[2]/div/div[1]/div/div[1]/label/div/div[1]/div[1]/input').type('77887788')
                     cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div/div[2]/div/div[1]/div/div[2]/label/div/div[1]/div[1]/input').type('55665566')
                     cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div/div[2]/div/div[1]/div/div[3]/label/div/div[1]/div[1]/input').type('55665566')
                     cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div/div[3]/button/span[2]/span').click()
                     cy.xpath('/html/body/div[3]/div/div[2]/div/div[1]/div[2]').as('pwdsussful')
                     cy.get('@pwdsussful').should('contain', '變更密碼成功')
                     cy.wait(1000)
                     cy.xpath('/html/body/div[3]/div/div[2]/div/div[2]/button/span[2]').click()
              })
       })

       describe("變更密碼後登入能夠成功", () => {


              it('新的密碼登入成功', function () {
                     cy.viewport(1500, 1250)
                     cy.visit(QATEST)
                     cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('tpp07026@telexpress.com')
                     cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('55665566')
                     cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
                     //                                     //選擇公司
                     // cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[2]').click()
                     // cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]').click()
                     //密碼變更          
                     cy.xpath('/html/body/div[1]/div/header/div[2]/div[2]').click()
                     cy.xpath('/html/body/div[3]/div/div[2]/div[2]').click()
                     cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[1]/div/div[2]/button[2]/span[2]/span').click()
                     //開始更改密碼
                     cy.wait(2000)
                     cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div/div[2]/div/div[1]/div/div[1]/label/div/div[1]/div[1]/input').type('55665566')
                     cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div/div[2]/div/div[1]/div/div[2]/label/div/div[1]/div[1]/input').type('77887788')
                     cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div/div[2]/div/div[1]/div/div[3]/label/div/div[1]/div[1]/input').type('77887788')
                     cy.xpath('/html/body/div[1]/div/div[2]/main/div/div/div[2]/div/div[3]/button/span[2]/span').click()
                     cy.xpath('/html/body/div[3]/div/div[2]/div/div[1]/div[2]').as('pwdsussful')
                     cy.get('@pwdsussful').should('contain', '變更密碼成功')
                     cy.wait(1000)
                     cy.xpath('/html/body/div[3]/div/div[2]/div/div[2]/button/span[2]').click()
              })
       })
       //
});

describe("輸入錯誤帳號密碼必須彈出googlereCAPTCHA", () => {

       var QATEST ='https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179'
       it('輸入錯誤帳號與再次輸入正確帳號密碼', function () {
              cy.viewport(1500, 1250)
              cy.visit(QATEST)
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('tpp07026@telexpress.com')
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('755588')
              cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").clear()
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").clear()
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('tpp07026@telexpress.com')
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('77887788')
              cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()

       })

       //
});
describe("輸入錯誤帳號密碼必須彈出googlereCAPTCHA", () => {

       var QATEST ='https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179'
       it('輸入錯誤帳號與再次輸入正確帳號密碼', function () {
              cy.viewport(1500, 1250)
              cy.visit(QATEST)
              cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/div/a').click()
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/label/div/div[1]/div[2]/input").type('tpp0556s.com')
              cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]').click()
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/span").as('check')
              cy.get('@check').should('contain', '請輸入有效的Email')
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/label/div/div[1]/div[2]/input").clear()
              cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/label/div/div[1]/div[2]/input").type('tpp070@telexpress.com')
              cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]').click()
              cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]').as('mailcheck')
              cy.get('.q-pa-lg > .h-100 > .text-body1').should('contain', '此Email不存在')
       })




});



