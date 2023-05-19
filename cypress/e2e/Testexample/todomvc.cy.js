import 'cypress-soft-assertions'
describe("登入/DB檢查驗證功能檢測", () => {


  it('練習使用', function () {
    let myText
    cy.visit('https://todomvc.com/examples/vue/')
    cy.xpath('/html/body/section/header/input')
    .type('12345{enter}', { force: true }); // 12345按下eneter{確實按下去}
    cy.xpath('/html/body/section/header/input')
    .type('12345{enter}')
    cy.xpath('/html/body/section/section/ul/li/div/label')
    .better('not.have.length', 3) //驗證有兩個label
    cy.log('檢查點')
    cy.xpath('/html/body/section/section/ul/li[1]/div/label')
    .invoke('text').then((text) => {
      // 将元素文本内容存储在变量中
      myText = text.trim()

    }).then(() => {
      // 在 .then() 之后，可以访问变量 myText 的值
    cy.xpath('/html/body/section/header/input')
    .type(myText + '{enter}')
    cy.wait(3500)
    cy.xpath('/html/body/section/section/ul/li/div/label')
    .should('have.length', 3)
      // 取得當前時間
    const now = new Date();

      // 格式化時間
    const formattedTime = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}`;

      // 輸入格式化後的時間
      // 使用 cypress 的 cy.type() 輸入字串
      cy.xpath('/html/body/section/header/input')
        .type(formattedTime);
    });





  })

  describe('Cypress Wrap Demo', () => {
    it.skip('should wrap a number', () => {
      const number = 42;
      const haha = 43;

      cy.wrap(number).should('equal', 42)
      cy.wrap(number).better('equal', 43)
      cy.wrap(haha).should('equal', 43)

    })
  })

  describe('Cypress Wrap Demo', () => {
    it.only('should wrap a number', () => {

      const url = `https://qa-station-qa.telligentcrm.com/member`;
      cy.visit(url)

    })
  })
})

describe('Test input boundary values', () => {
  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/vue/')
  })

  it('should handle empty input', () => {
    cy.get('.new-todo').clear()
  })

  it('should handle maximum input', () => {
    const maxLength = 100
    const longText = 'a'.repeat(maxLength)
    cy.get('.new-todo').type(longText)
    cy.get('.new-todo').should('have.value', longText)
  })

  it('should handle input that exceeds maximum length', () => {
    const maxLength = 100
    const longText = 'a'.repeat(maxLength + 1)
    cy.get('.new-todo').type(longText)
    cy.get('.new-todo').should('have.value', longText.slice(0, maxLength))
  
  })

 
 
  describe.only('Test input boundary values', () => {
   
    try {
      cy.visit('/my-page')
      cy.location('pathname').should('eq', '/expected-path')
    } catch (error) {
      // 如果頁面跳轉失敗，這裡可以處理錯誤或執行其他動作
      console.error('頁面跳轉失敗')
    }
  })
  



})
