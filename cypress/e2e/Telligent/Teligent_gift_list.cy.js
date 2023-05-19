import 'cypress-soft-assertions'
describe("禮品列表檢查", () => {


    it('禮品列表下單/檢查disabled/', function () {
        cy.viewport(1500, 1250)
        cy.clearCookies()
        cy.visit('https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179')
        .should('exist')
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input")
        .type('tpp07026@telexpress.com')
        cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input")
        .type('77887788')
        cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]')
        .click()
        //登入頁面
        cy.wait(2500)
        cy.log('判別')
        const maxRows = 10; // 設定最大數為10
        let found = false;

        // 循環檢查每一行直到條件符合
        for (let i = 1; i <= maxRows; i++) {
            // 選擇器調整一個變數做為搜尋參數
            const rowSelector = `:nth-child(${i}) > :nth-child(12) > .flex > .q-chip > .q-chip__content > .ellipsis`;

            //在當前尋找元素
            cy.get(rowSelector).then((element) => {
                // 如果找到符合条件的元素，则设置 found 为 true
                if (element.text() === '已成立') {
                    found = true;
                    // 在符合条件的行中点击编辑按钮
                    cy.wait(2000)
                    // cy.get(`:nth-child(${i}) > [style="width: 50px;"] > .q-btn > .q-btn__content > .q-icon`).better()
                    //  cy.get(`:nth-child(${i})) > [style="min-width: 70px;"] > .q-btn > .q-btn__content > .q-icon`).click()
                    cy.get(`:nth-child(${i}) > [style="min-width: 70px;"] > .q-btn`).click()
                    cy.log('已成立')
                    let myText
                    cy.xpath(`/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[3]/div[1]/div/table/tbody/tr[${i}]/td[2]`).invoke('text').then((text) => {
                        //將元素文本存在變量中消除空白值
                        myText = text.trim()
                        cy.get(':nth-child(6) > .q-btn').should('be.disabled');
                        cy.get(':nth-child(2) > :nth-child(2) > .q-checkbox > .q-checkbox__inner > .q-checkbox__bg').click()
                        cy.get(':nth-child(6) > .q-btn').should('not.be.disabled').click({ force: true })
                        cy.log('已出貨')
                        cy.get(':nth-child(6) > .q-btn').should('be.disabled');
                        cy.get(':nth-child(3) > :nth-child(2) > .q-checkbox > .q-checkbox__inner').click({ force: true })
                        cy.get(':nth-child(6) > .q-btn').should('not.be.disabled').click({ force: true })
                        cy.log('已完成')
                        cy.get(':nth-child(4) > :nth-child(6) > .q-btn').should('be.disabled');
                        cy.get(':nth-child(4) > :nth-child(2) > .q-checkbox > .q-checkbox__inner > .q-checkbox__bg').click({ force: true })
                        cy.get(':nth-child(4) > :nth-child(6) > .q-btn').click({ force: true })
                        cy.log('尋找訂單編號')
                        cy.get('.q-card__section.row > .q-btn > .q-btn__content > .q-icon').click({ force: true })
                        cy.wait(1500)
                        cy.log('檢查已完成項目')
                        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[1]/div/div[2]/div[2]').click({ force: true })
                        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[1]/div[2]/label/div/div/div[1]/input').type(myText)
                            .focused()
                            .type('{enter}')

                        cy.get('tbody > tr > :nth-child(2)').should('have.text', myText)
                        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[3]/div[1]/div/table/tbody/tr/td[12]/div/div/div/div').should('have.text', '已完成')

                        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[1]/div/div[3]').click({ force: true })
                        cy.log('檢查全部')
                        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[1]/div[2]/label/div/div/div[1]/input').type(myText)
                            .focused()
                            .type('{enter}')

                        cy.get('tbody > tr > :nth-child(2)').should('have.text', myText)
                        cy.get('tbody > tr > :nth-child(2)').better('have.text', myText + '1')
                        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[3]/div[1]/div/table/tbody/tr/td[12]/div/div/div/div').should('have.text', '已完成')



                    })

                    return false;
                }
            })

            // 如果符合需求退出
            if (found = true) {
                cy.log('請增加資料')
                break;
            }
        }
        //  cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[3]/div[1]/div/table/tbody/tr[1]/td[12]/div/div/div/div').within(() => {
        //     if (cy.contains('已成立').should('exist')) {
        //       cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[3]/div[1]/div/table/tbody/tr[1]/td[14]/button/span[2]/i').click()
        //     } else {
        //       // 如果找不到指定商品，使用 Cypress 的 .wrap() 函數將 Cypress 本身作為返回值，並調用 .should() 斷言判斷式為 true，這樣就會通過這個測試案例

        //     }
        //   });
        //按下第一個按紐處裡中



    })


})



describe("禮品篩選功能檢測", () => {

    it.only('篩選檢測', function () {

        cy.viewport(1500, 1250)
        cy.clearCookies()
        cy.visit('https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179')
   
        const emailID =cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input")
        emailID.type('tpp07026@telexpress.com')

        const PassWD =cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input")
        PassWD.type('77887788')

        const pwdBtn =cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]')
        pwdBtn.click()
        cy.log('篩選assert')
        cy.get('.items-center.q-px-md > :nth-child(2) > .q-btn > .q-btn__content > .block', { timeout: 10000 }).should('be.visible').better('have.text', '篩選').click()
        cy.get('.q-col-gutter-md > :nth-child(1) > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-icon').click() //月曆打開
        cy.get('.q-date__navigation > :nth-child(1) > .q-btn > .q-btn__content > .q-icon').better('exist').click() //上個月
        cy.get('.q-date__calendar-days > :nth-child(4) > .q-btn > .q-btn__content', { timeout: 10000 }).click({ multiple: true })
        cy.get('.q-date__calendar-days > :nth-child(31) > .q-btn > .q-btn__content', { timeout: 10000 }).click({ multiple: true })
        cy.get('.justify-end > .q-btn > .q-btn__content > .block').better('have.text', '關閉').click()
        cy.log('檢查狀態')
        const statusBtn=cy.get('.q-col-gutter-md > :nth-child(2) > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-icon')
        statusBtn.better('exist').click()
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div[1]/div[2]/div').contains('已成立').click()
        cy.get('.q-btn--unelevated > .q-btn__content > .block').better('have.text', '確定').click()
        cy.wait(3000)
        statusBtn.better('exist').click()
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div[2]/div[2]/div').better('exist').contains('處理中').click()
        cy.get('.q-col-gutter-md > :nth-child(2) > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-icon').better('exist').click()
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[2]/div/div[2]/div/button[2]/span[2]').click()
        cy.wait(2000)
        statusBtn.better('exist').click()
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div[3]/div[2]/div').better('exist').contains('已出貨').click()
        cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div/div/div/div[2]/div/div[2]/div/button[2]/span[2]').click()
        
    })
})
