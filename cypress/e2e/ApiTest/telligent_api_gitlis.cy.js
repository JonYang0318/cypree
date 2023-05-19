let token;

it('取得兌禮訂單API_Token', { env: { hideCredentials: true } }, () => {
  // Visit the page that generates the token and get it from the dev tools
  cy.viewport(1500, 1250)
  cy.visit('https://qa.telligentbiz.com/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9')
  const mail = cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input')
  const pwd = cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input')

  mail.type('tpp07026@telexpress.com')
  pwd.type('77887788{enter}')

  cy.wait(3000)
  //  cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div[3]/div[1]/div/table/tbody/tr[7]/td[6]/div/div/button/span[2]/i',{ timeout: 10000 }).dblclick()
  cy.get(':nth-child(1) > :nth-child(4) > .menu-secondary-content > .expand-more', { timeout: 10000 }).dblclick().click()
  cy.xpath('/html/body/div[1]/div/div[1]/aside/div/div/div[1]/div[4]/div[3]/div', { timeout: 10000 }).click().click()
  cy.wait(3000)

  cy.intercept
    ({
      method: 'GET',
      url: '**/list?Keyword=&StartTime=&EndTime=&Page=1&Limit=20&Desc=true&PhoneNumber=&SortingField=creationTime&ShipmentStatus=1&ShipmentStatus=2&ShipmentStatus=3**'
    }, (req) => {
      // 检查请求头中的授权标头
      const authHeader = req.headers.authorization;
      token = authHeader
      console.log(token)
    })
  cy.wait(4000)

});

it('取得兌理api', { env: { hideCredentials: true } }, () => {
  cy.api({
    method: 'GET',
    url: 'https://gw-qa.telligentbiz.com/qa-station/gift/api/RedeemOrder/company/97d288ac-5f17-11ed-afa6-00ffaf2156c9?startTime=2023-03-15T00:00:00Z&endTime=2023-03-25T23:59:59Z',
     qs: {
       startTime: '2023-03-16T00:00:00Z',
       endTime: '2023-03-24T23:59:59Z',
     },
    headers: {
      'Authorization': `${token}`
    }
  })
})