describe("檢查群組字串", () => {
    var QATEST ='https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179'

    it('檢查建立群組時的字串不得為空值', function () {
        cy.clearCookies()
        cy.viewport(1280, 720)
        cy.visit(QATEST)
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('superadmin@telexpress.com')
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('123456')
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
        //選擇其他家公司
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[1]').click()
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]').click()
        //點選群組設定
        cy.xpath('/html/body/div[1]/div/div[1]/aside/div/div/div[3]/div[3]/div').click()
        //新增群組紐
        cy.wait(2000)
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/h2/button/span[2]').click()
        //權限打開
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div[1]/div/div/div').click()
        //儲存
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/h2/div/button[2]').click()
        //檢查
        cy.wait(2000)
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[1]/div[2]/div/div[1]/label/div/div[2]').as('title')
        cy.get('@title').should('contain', '請輸入有效的群組名稱')

        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[1]/div[2]/div/div[2]/label/div/div[2]').as('textarea')
        cy.get('@textarea').should('contain', '請輸入有效的簡述說明')
    })
});

describe("搜尋檢查", () => {

    it('搜尋管理當前為6筆', function () {
        cy.clearCookies()
        cy.viewport(1280, 720)
        cy.visit(QATEST)     
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('superadmin@telexpress.com')
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('123456')
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
        //選擇其他家公司
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[1]').click()
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]').click()
        //點選搜尋
        cy.wait(1800)
        cy.xpath('/html/body/div[1]/div/header/div[1]/div[2]/label/div/div/div[1]/input').click().type('管理')

        //按下確定
        cy.get('.q-btn__content > .q-icon').click()
        //assert6筆
        cy.get('.text-subtitle1').should('have.text', '共有 6 個項目')

    })


    it('搜尋為空值則產生0筆', function () {
        cy.clearCookies()
        cy.viewport(1280, 720)
        cy.visit(QATEST)
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('superadmin@telexpress.com')
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('123456')
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
        //選擇其他家公司
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[1]').click()
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[1]').click()
        cy.wait(1800)

        //按下確定
        cy.get('.q-btn__content > .q-icon').click()
        //assert6筆
        cy.get('.text-subtitle1').should('have.text', '共有 0 個項目')
        //按下確定
        //assert6筆
        // cy.get('.q-page-container > .q-page > .te-page > .q-pt-lg > .text-grey-7').as('result0')
        // cy.get('@result0').should('contain', '共有 0 個項目')
    })
});

describe("檢查帳號/姓名/聯絡方式為必填不得為空值", () => {

    it('檢查建立帳號機制', function () {
        cy.clearCookies()
        cy.viewport(1280, 720)
        cy.visit(QATEST)      
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('superadmin@telexpress.com')
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('123456')
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
        //選擇其他家公司
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/label[1]').click()
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[3]/button/span[2]').click()
        //點選管理員設定
        cy.xpath('/html/body/div[1]/div/div[1]/aside/div/div/div[3]/div[2]/div/span').click()
        //邀請新成員
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/main/div/h2/div/button/span[2]').click()
        //新增群組紐
        cy.wait(2000)
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/h2/button/span[2]').click()
        //權限打開
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[2]/div[2]/div/div[1]/div[1]/div/div/div').click()
        //儲存
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/h2/div/button[2]').click()
        //檢查
        cy.wait(2000)
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[1]/div[2]/div/div[1]/label/div/div[2]').as('title')
        cy.get('@title').should('contain', '請輸入有效的群組名稱')

        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[1]/div[2]/div/div[2]/label/div/div[2]').as('textarea')
        cy.get('@textarea').should('contain', '請輸入有效的簡述說明')
    })
});