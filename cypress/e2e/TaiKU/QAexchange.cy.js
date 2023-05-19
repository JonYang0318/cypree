const username = Cypress.env('id').username;
const password = Cypress.env('id').password;
const tel = Cypress.env('id').tel;
describe.only("QA兌理商品", () => {
    // let url = 'https://qa-station-qa.telligentcrm.com/member';
    let url = 'https://iscoop-qa.telligentcrm.com/member'
    it('兌理', function () {
        cy.viewport(1500, 1250)
        cy.visit(url)
            .should('exist')
        cy.get('.q-btn--outline', { timeout: 20000 })
            .should('exist')
            .should('have.text', '登入/註冊')
            .click()
        // cy.get('.q-avatar__content > img', { timeout: 10000 })
        //     .should('exist')
        //     .click()
        cy.get('[data-v-2e49d00e=""][data-v-77c976ae=""] > input')
            .type(username)
        cy.get('[data-v-47e5f004=""][data-v-77c976ae=""] > input')
            .type(password)
        cy.get('.MdBtn01')
            .click()
        cy.get('#__BVID__9').select('1100030794')
        cy.get('.btn')
            .click()
        cy.wait(2000)
        cy.get('.btn')
            .click()


        cy.get(':nth-child(3) > .q-item-name', { timeout: 20000 })
            .should('exist').should('have.text', '兌禮中心')
            .click()

        cy.log('檢查如果是加入兌換的話會點擊按鈕')
        const maxRows = 20; // 尋找頁面元素最多20次
        let found = false;
        cy.wait(5000)
        // 循環檢查每一行直到條件符合
        for (let i = 1; i <= maxRows; i++) {
            // 選擇器調整一個變數做為搜尋參數
            const rowSelector = `:nth-child(${i}) > .grid-view > .gift-info > .w-100 > .q-btn > .q-btn__content > .block`;
            //在當前尋找元素
            cy.get(rowSelector).then((element) => {
                if (element.text() === '加入兌換', '已加入') {
                    found = true;
                    cy.wait(2000)
                    cy.get(rowSelector, { timeout: 10000 }).click();
                    cy.wait(500)

                    // cy.get('.text-h6', { timeout: 10000 }).should('have.text', '加入成功')
                    cy.get('.q-item__section--main > .flex > :nth-child(2) > .q-btn', { timeout: 10000 })
                        .should('have.text', '立刻兌換')
                        .click()

                    cy.wait(1000)
                    cy.log('檢查點數算數邏輯')
                    //花費金額
                    cy.wait(3000)
                    cy.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[1]/div/div[4]/div[2]')
                        .invoke('text')
                        .then(points => {
                            const purchasePoints = (points.replace(',', ''));
                            cy.xpath('/html/body/div[1]/div/div/main/div/form/div[2]/div/div[1]/div[2]/div[1]/div[2]')
                                .invoke('text')
                                .then(wallet => {
                                    const walletall = parseInt(wallet.replace(',', ''));

                                    const remaining = walletall - purchasePoints

                                    const remainingFormatted = remaining.toLocaleString();

                                    //程式金額與元素金額必須相符合
                                    cy.get('.q-pb-lg > .flex > .text-right')
                                        .should('have.text', remainingFormatted)

                                    cy.get('.col-9 > .q-field > .q-field__inner > .q-field__control')
                                        .type('0966547749')
                                    cy.get('.q-pb-lg > .q-btn')
                                        .should('have.text', '立刻兌換')
                                        .click()



                                    cy.get('.q-gutter-x-md > .q-btn--unelevated')
                                        .should('have.text', '兌禮紀錄')
                                        .click()
                                })

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


    })
})


describe("UAT", () => {
    // let url = 'https://qa-station-qa.telligentcrm.com/member';
    let url = 'https://iscoop-uat.telligentcrm.com/member'
    it('兌理', function () {
        cy.clearCookies()
        cy.viewport(1500, 1250)
        cy.visit(url)
            .should('exist')
        cy.get('.q-btn--outline', { timeout: 10000 })
            .should('exist')
            .should('have.text', '登入/註冊')
            .click()
        // cy.get('.q-avatar__content > img', { timeout: 10000 })
        //     .should('exist')
        //     .click()
        cy.get('[data-v-2e49d00e=""][data-v-77c976ae=""] > input')
            .type(username)
        cy.get('[data-v-47e5f004=""][data-v-77c976ae=""] > input')
            .type(password)
        cy.get('.MdBtn01')
            .click()
        cy.get('#__BVID__9').select('1100030794')
        cy.get('.btn')
            .click()
        cy.wait(2000)
        cy.get('.btn')
            .click()


        cy.get(':nth-child(3) > .q-item-name', { timeout: 10000 })
            .should('exist').should('have.text', '兌禮中心')
            .click()

        cy.log('檢查如果是加入兌換的話會點擊按鈕')
        const maxRows = 20; // 尋找頁面元素最多20次
        let found = false;
        cy.wait(5000)
        // 循環檢查每一行直到條件符合
        for (let i = 1; i <= maxRows; i++) {
            // 選擇器調整一個變數做為搜尋參數
            const rowSelector = `:nth-child(${i}) > .grid-view > .gift-info > .w-100 > .q-btn > .q-btn__content > .block`;
            //在當前尋找元素
            cy.get(rowSelector).then((element) => {

                if (element.text() === '加入兌換', '已加入') {
                    found = true;
                    cy.wait(2000)
                    cy.get(`:nth-child(${i}) > .grid-view > .gift-info > .w-100 > .q-btn > .q-btn__content > .block`, { timeout: 10000 })
                        .click()
                    cy.wait(500)
                    // cy.get('.text-h6', { timeout: 10000 }).should('have.text', '加入成功')
                    cy.get('.q-item__section--main > .flex > :nth-child(2) > .q-btn', { timeout: 10000 })
                        .should('have.text', '立刻兌換')
                        .click()

                    cy.wait(1000)
                    cy.log('檢查點數算數邏輯')
                    //花費金額
                    cy.xpath('/html/body/div[1]/div/div/main/div/form/div[1]/div[1]/div/div[4]/div[2]')
                        .invoke('text')
                        .then(points => {
                            const purchasePoints = (points.replace(',', ''));
                            cy.xpath('/html/body/div[1]/div/div/main/div/form/div[2]/div/div[1]/div[2]/div[1]/div[2]')
                                .invoke('text')
                                .then(wallet => {
                                    const walletall = parseInt(wallet.replace(',', ''));

                                    const remaining = walletall - purchasePoints

                                    const remainingFormatted = remaining.toLocaleString();

                                    //程式金額與元素金額必須相符合
                                    cy.get('.q-pb-lg > .flex > .text-right')
                                        .should('have.text', remainingFormatted)

                                    // cy.get('.col-9 > .q-field > .q-field__inner > .q-field__control')
                                    // .type('0966547749')
                                    cy.get('.q-pb-lg > .q-btn')
                                        .should('have.text', '立刻兌換')
                                        .click()



                                    cy.get('.q-gutter-x-md > .q-btn--unelevated')
                                        .should('have.text', '兌禮紀錄')
                                        .click()
                                })

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


    })
})