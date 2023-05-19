describe("新增標籤/刪除標籤", () => {


  it('登入/標籤', function () {
    cy.viewport(1500, 1280)
    cy.clearCookies()
    cy.visit('https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179')
    cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input")
      .type('tpp07026@telexpress.com')
    cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input")
      .type('77887788')
    cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]')
      .click()
    //登入頁面
    cy.get(':nth-child(5) > .menu-secondary-content')
      .click()
    cy.get(':nth-child(5) > .menu-tertiary > .menu-tertiary-content > .menu-tertiary-title', { timeout: 10000 })
      .dblclick()


    cy.get(':nth-child(4) > .q-btn__content > .q-icon').click()
    cy.get(':nth-child(4) > .q-btn__content > .q-icon').click()
    cy.wait(4000)
    function tagname() {
      const chars = "采源小櫻花恩采洪允珍沅瑛有珍本田仁美史吹奈子曹柔理";
      let me = "";
      for (let i = 0; i < 2; i++) {
        me += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return "Test金" + me;
    }
    const tags = tagname();
    cy.get('.q-item__section--main > .q-field > .q-field__inner > .q-field__control')
      .type(tags)

    cy.get('.text-accent > .q-btn__content > .q-icon')
      .click()

    cy.get('.q-item--active > .q-item__section--main > .q-item__label')
      .should('have.text', tags)
    cy.log('檢查')
    cy.get('.q-card > .flex > :nth-child(2) > .q-btn__content > .q-icon')
      .click()
    //按返回
    cy.get('.q-card > .q-gutter-x-sm > .q-btn > .q-btn__content')
      .click()
    cy.get('.q-card > .flex > :nth-child(2) > .q-btn__content > .q-icon')
      .click()
    cy.get(':last-child > .q-item__section--side > .flex > :nth-child(2) > .q-btn__content > .q-icon').click()
    cy.get(':nth-child(1) > .q-item__section--side > .flex > :nth-child(2) > .q-btn__content > .q-icon').click()
    cy.get('.q-card__actions > .q-btn--unelevated > .q-btn__content').click()
    cy.log('assert 刪除完成')
    cy.wait(3000)


  })


  it.only('增加標籤', function () {
    cy.viewport(1500, 1280)
    cy.clearCookies()
    cy.visit('https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179')
    cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input")
      .type('tpp07026@telexpress.com')
    cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input")
      .type('77887788')
    cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]')
      .click()
    //登入頁面
    cy.get(':nth-child(5) > .menu-secondary-content')
      .click()
    cy.get(':nth-child(5) > .menu-tertiary > .menu-tertiary-content > .menu-tertiary-title', { timeout: 10000 })
      .dblclick()
    //指定增加標籤
    cy.get('.q-gutter-md > .q-btn--unelevated', { timeout: 10000 })
      .click()

    //編輯姓名
    function nickname() {
      const chars = "權恩妃崔瑞娜采源小櫻花恩采洪允珍沅瑛有珍本田仁美史吹奈子曹柔理";
      let me = "";
      for (let i = 0; i < 3; i++) {
        me += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return "Test" + me;
    }
    cy.get('.q-gutter-y-xs > :nth-child(1) > .q-field > .q-field__inner > .q-field__control')
      .type(nickname())
    cy.get(':nth-child(1) > :nth-child(1) > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-icon').click()
    cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[3]/div/div[2]/div[7]').click()
    cy.get('.q-col-gutter-x-xl > :nth-child(1) > :nth-child(2) > .q-field > .q-field__inner > .q-field__control')
      .type('This is a very long text that exceeds the 50-character limit')
      .invoke('val').then((value) => {
        expect(value.length).to.be.at.most(50);
      });
      cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div/div/div[2]/div/div[1]/div[2]/label/div/div[1]/div/textarea')
      .should('have.attr', 'maxlength')
      .and('eq', '50');
    cy.get('.q-gutter-md > .q-btn--unelevated').click().log('儲存成功')

    //cy.get('.q-notification__message > .flex > .text-subtitle1').should('have.text','建立成功')
    cy.wait(3000)
  })

  it('刪除標籤', function () {
    cy.viewport(1500, 1280)
    cy.clearCookies()
    cy.visit('https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179')
    cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input")
      .type('tpp07026@telexpress.com')
    cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input")
      .type('77887788')
    cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]')
      .click()
    //登入頁面
    cy.get(':nth-child(5) > .menu-secondary-content')
      .click()
    cy.get(':nth-child(5) > .menu-tertiary > .menu-tertiary-content > .menu-tertiary-title', { timeout: 10000 })
      .dblclick()
    //指定增加標籤
    cy.get(':first-child > :nth-child(8) > .flex.justify-center > .flex > .q-btn').click()
    cy.get('.q-toggle__label').should('have.text', '啟用中')
    cy.get('.q-toggle__inner').click()
    cy.get('.q-toggle__label').should('have.text', '停用中')
    cy.get(':nth-child(2) > .q-btn__content > .block').click()
    cy.get('.q-card__actions > .q-btn--unelevated').click()
    cy.wait(3000)
  })

  it('新舊排序', function () {
    cy.viewport(1500, 1280)
    cy.clearCookies()
    cy.visit('https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179')
    cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input")
      .type('tpp07026@telexpress.com')
    cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input")
      .type('77887788')
    cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]')
      .click()
    //登入頁面
    cy.get(':nth-child(5) > .menu-secondary-content')
      .click()
    cy.get(':nth-child(5) > .menu-tertiary > .menu-tertiary-content > .menu-tertiary-title', { timeout: 10000 })
      .dblclick()
    //排序比較
    cy.wait(2000)
    cy.get(':first-child > [style="width: 180px;"]')
      .invoke('text')
      .then((firstTimestamp) => {
        cy.get(':last-child > [style="width: 180px;"]')
          .invoke('text')
          .then((lastTimestamp) => {
            // 比較兩個時間戳的順序
            assert.isTrue(new Date(firstTimestamp) > new Date(lastTimestamp));
          });
      });
  })

  it('舊排序新', function () {
    cy.viewport(1500, 1280)
    cy.clearCookies()
    cy.visit('https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179')
    cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input")
      .type('tpp07026@telexpress.com')
    cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input")
      .type('77887788')
    cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]')
      .click()
    //登入頁面
    cy.get(':nth-child(5) > .menu-secondary-content')
      .click()
    cy.get(':nth-child(5) > .menu-tertiary > .menu-tertiary-content > .menu-tertiary-title', { timeout: 10000 })
      .dblclick()
    //排序比較
    cy.wait(2000)
    cy.get('.sortable > .q-icon').click()
    cy.wait(2000)
    cy.get(':first-child > [style="width: 180px;"]')
      .invoke('text')
      .then((firstTimestamp) => {
        cy.get(':last-child > [style="width: 180px;"]')
          .invoke('text')
          .then((lastTimestamp) => {
            // 比較兩個時間戳的順序
            assert.isTrue(new Date(firstTimestamp) < new Date(lastTimestamp));
          });
      });
  })


  it.skip('標籤分類新舊測試', function () {
    cy.viewport(1500, 1280)
    cy.clearCookies()
    cy.visit('https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179')

    cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input")
      .type('tpp07026@telexpress.com')

    cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input")
      .type('77887788')

    cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]')
      .click()

    // 登入頁面
    cy.get(':nth-child(5) > .menu-secondary-content')
      .click()

    cy.get(':nth-child(5) > .menu-tertiary > .menu-tertiary-content > .menu-tertiary-title', { timeout: 10000 })
      .dblclick()

    // 點選Fearnot
    cy.get(':last-child > .q-item__section--main > .q-item__label').click()

    cy.intercept('POST', 'graphql', (req) => {
      req.reply((res) => {
        // 取得回應的內容
        const responseText = res.body;

        // 解析回應的 JSON
        const responseJson = JSON.parse(responseText);

        // 取得所有 items
        const items = responseJson.data.tag.items;

        // 取得最新的一筆資料
        const latestItem = items[items.length - 1];

        // 取得 creationTime 的值
        const creationTime = latestItem.creationTime;

        // 在 Cypress 命令日誌中輸出 creationTime
        cy.log('Creation Time:', creationTime);
      });
    });
  });

  it('多到少標籤分類驗證', function () {
    cy.viewport(1500, 1280)
    cy.clearCookies()
    cy.visit('https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179')

    cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input")
      .type('tpp07026@telexpress.com')

    cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input")
      .type('77887788')

    cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]')
      .click()

    // 登入頁面
    cy.get(':nth-child(5) > .menu-secondary-content')
      .click()

    cy.get(':nth-child(5) > .menu-tertiary > .menu-tertiary-content > .menu-tertiary-title', { timeout: 10000 })
      .dblclick()

    // 點選排序標籤
    cy.get(':nth-child(3) > .q-btn__content > .q-icon').click()
    cy.get('.q-menu > .q-list > :nth-child(3) > .q-item__section').should('have.text', '多到少').click()

    cy.get(':first-child > .q-item__section--side > .q-chip')
      .should('have.text', '21')
      .invoke('text')
      .then((first) => {
        cy.get(':last-child > .q-item__section--side > .q-chip')
          .should('have.text', '1')
          .invoke('text')
          .then((last) => {
            const firstNumber = parseInt(first);
            const lastNumber = parseInt(last);

            // 比較兩個時間戳的順序
            assert.isAbove(firstNumber, lastNumber, 'firstNumber is greater than lastNumber');
          });


      });
  });


  it('少到多標籤分類驗證', function () {
    cy.viewport(1500, 1280)
    cy.clearCookies()
    cy.visit('https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179')

    cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input")
      .type('tpp07026@telexpress.com')

    cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input")
      .type('77887788')

    cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]')
      .click()

    // 登入頁面
    cy.get(':nth-child(5) > .menu-secondary-content')
      .click()

    cy.get(':nth-child(5) > .menu-tertiary > .menu-tertiary-content > .menu-tertiary-title', { timeout: 10000 })
      .dblclick()

    // 點選排序標籤
    cy.get(':nth-child(3) > .q-btn__content > .q-icon').click()
    cy.get('.q-menu > .q-list > :nth-child(4) > .q-item__section')
      .should('have.text', '少到多')
      .click()
    cy.wait(3000)
    cy.get(':first-child > .q-item__section--side > .q-chip')
      .invoke('text')
      .then((first) => {
        cy.get(':last-child > .q-item__section--side > .q-chip')
          .invoke('text')
          .then((last) => {
            const firstNumber = parseInt(first);
            const lastNumber = parseInt(last);

            // 比較兩個時間戳的順序
            assert.isBelow(firstNumber, lastNumber, 'firstNumber is greater than lastNumber');
          });


      });
  });
  it.skip('重複頁籤防呆', function () {
    cy.viewport(1500, 1280)
    cy.clearCookies()
    cy.visit('https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=45862651-6016-11ed-b3fa-00ffaf2156c9&t=1678160109179')

    cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input")
      .type('tpp07026@telexpress.com')

    cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input")
      .type('77887788')

    cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]')
      .click()

    // 登入頁面
    cy.get(':nth-child(5) > .menu-secondary-content')
      .click()

    cy.get(':nth-child(5) > .menu-tertiary > .menu-tertiary-content > .menu-tertiary-title', { timeout: 10000 })
      .dblclick()

    // 點選Fearnot
     
  });
});
