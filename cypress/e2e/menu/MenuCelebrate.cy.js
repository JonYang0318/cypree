import 'cypress-file-upload';
it('取得兌禮訂單API_Token', { env: { hideCredentials: true } }, () => {
    // Visit the page that generates the token and get it from the dev tools
    cy.viewport(1500, 1250)
    cy.visit('https://qa.telligentbiz.com/auth/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9')
    const mail = cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input')
    const pwd = cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input')

    mail
    .type('tpp07026@telexpress.com')
    pwd
    .type('77887788{enter}')

    cy.wait(5000)
    //  cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div[3]/div[1]/div/table/tbody/tr[7]/td[6]/div/div/button/span[2]/i',{ timeout: 10000 }).dblclick()
    cy.get(':nth-child(2) > :nth-child(2) > .menu-secondary-content > .expand-more')
    .click()
    cy.get(':nth-child(2) > :nth-child(2) > .menu-tertiary > .menu-tertiary-content > .menu-tertiary-title')
    .click()
    cy.get('.te-title-main > .q-gutter-md > .q-btn', { timeout: 10000 })
    .click()
    cy.log('新增活動')
    function RandomName() {
        const chars = "abcdefghyjklmnopqrstuvwxyz";
        let me = "";
        for (let i = 0; i < 4; i++) {
            me += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return 'test' + me;
    }
    cy.get(':nth-child(2) > .q-gutter-y-xs > :nth-child(4) > .q-field > .q-field__inner')
    .click()
    cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[2]/div/div/div/div/form/div/div[1]/div/div[2]/label/div/div[1]/div/input')
    .type(RandomName())

    cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[2]/div/div/div/div/form/div/div[1]/div/div[3]/label/div/div[1]/div/input')
    .type('測試名稱' + RandomName())
    const now = new Date();

    // 將日期時間轉換為字串格式
    const dateString = now.toISOString().slice(0, 16);
    cy.get(':nth-child(1) > .q-gutter-y-xs > :nth-child(4) > .q-field > .q-field__inner > .q-field__control')
    .type(dateString)
    cy.get(':nth-child(5) > .q-field > .q-field__inner > .q-field__control')
    .type('2023-03-31T05:03')
    cy.log('頁面設計')
    cy.get(':nth-child(2) > .q-stepper__label > .q-stepper__title')
    .click()
    // cy.window().then(win => { // 切換到彈出的視窗
    //   // 執行彈出視窗中的操作
    //   win.document.querySelector('#file-input').value = 'Users\TPP07026\Pictures\ZUZU.jpg' 
    //   win.document.querySelector('#confirm-button').click()
    // })

    
    cy.get('.q-gutter-y-xs > :nth-child(2) > .q-field > .q-field__inner > .q-field__control')
        .selectFile('cypress/fixtures/ZUZU.jpg', { force: true })
        });
      
       
       
