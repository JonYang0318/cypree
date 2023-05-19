describe('测试套件', () => {
  let session;

  beforeEach(() => {
    // 在每个测试用例之前创建一个session
    session = Cypress.env('session') || {};
    cy.visit('https://qa.telligentbiz.com/auth/login?corporationId=75d055f2-5f16-11ed-afa6-00ffaf2156c9&functionId=14648f00-60cb-11ed-b3fa-00ffaf2156c9&t=1677747063078')
    if (session.loggedIn) {
      // 如果已经登录，则直接跳转到目标页面
      cy.visit('https://qa.telligentbiz.com/auth/index/?functionId=3733a0b9-600e-11ed-b3fa-00ffaf2156c9&t=1678433141466');
    } else {
      // 否则，输入用户名和密码进行登录
      cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input").type('tpp07026@telexpress.com')
      cy.xpath("/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input").type('77887788')
      cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[2]/button/span[2]').click()
      session.loggedIn = true;
      // 将新的session存储在Cypress.env中，以便后续使用
      Cypress.env('session', session);
    }
  });
 
  //登入頁面
  

  it('测试用例1', () => {
    // 可以在这里使用session进行测试
  cy.viewport(1280, 720)
  cy.xpath('/html/body/div[1]/div/div[1]/aside/div/div/div[1]/div[4]/div[2]/div/span').click()
  });

  it('测试用例2', () => {
    // 可以在这里使用session进行测试
  cy.viewport(1280, 720)
  cy.xpath('/html/body/div[1]/div/div[1]/aside/div/div/div[1]/div[4]/div[2]/div/span').click()
  });
});