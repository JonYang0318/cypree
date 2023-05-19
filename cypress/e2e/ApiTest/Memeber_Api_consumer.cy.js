describe("訊息模組API測試",()=>{
let token;
// it('將DB設置為嚴謹條款與簡訊登入',function(){
//     cy.task( "queryDb",`UPDATE telligent_member.company_setting SET login_type = '2' WHERE id = ('73efafaa-609e-11ed-aad0-0242ac170004');`)

//     cy.task( "queryDb",`UPDATE telligent_member.company_setting SET terms_policy_type= '1' WHERE id = ('73efafaa-609e-11ed-aad0-0242ac170004');`)
    
//     }) 
it('登入拿取Token',function(){
    cy.viewport(1500, 1250)
    cy.visit('https://qa-station-qa.telligentcrm.com/member')
    cy.xpath('/html/body/div[1]/div/header/div/div/div/button[2]', { timeout: 10000 }).should('exist').click()
    cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/label').type('0966548485')
    cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/button').click()
    cy.wait(4000)
    cy.task( "queryDb",`select code From telligent_member.member_captcha ORDER BY expired_time desc LIMIT 1;`).then(function (recordset) {
       var a = recordset[0]['code']
       var b=parseInt(a)
     
     cy.wait(2000)
     cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/div/label/div/div[1]/div/input').type(b) //想要把DB撈到的資料放入Type(裡面)只接收型別為string/number
     
    }) 
    cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[1]/div/div/div[8]', { timeout: 10000 }).should('exist').click()
    cy.wait(3000)
    
    cy.intercept
    ({
      method: 'POST',
      url: '**/graphql**'
    }, (req) => {
      // 检查请求头中的授权标头
      const authHeader = req.headers.authorization;
      token = authHeader
      console.log(token)
    })
    
 })
 //https://gw-qa.telligentcrm.com/consumer/qa-station/member/api/graphql
 //https://gw-qa.telligentbiz.com/qa-station/
 it.only('取得訊息模組api', { env: { hideCredentials: true } }, () => {
    cy.api({
        method: 'POST', //https://gw-qa.telligentcrm.com/qa-station/
        url: 'https://qa.telli.cc/consumer/QA-Station/member/api/memberNotice',
       //  qs: {
       //    startTime: '2023-03-16T00:00:00Z',
       //    endTime: '2023-03-24T23:59:59Z',
       //  },
       headers: {
          'Authorization':  `${token}`
        },
       body: {
            "templateCode": "ActivityGameFree",
            "parameters": [
                {
                    "code": "imageUrl",
                    "value": "https://cc.tvbs.com.tw/img/upload/2023/01/12/20230112135532-14c6907b.jpg"
                },
                {
                    "code": "linkUrl",
                    "value": "https://www.youtube.com/"
                }
            ],
            "localeParameters":[
                {
                    "code": "p1",
                    "languageCode": "zh-tw",
                    "value": "政府年前拍板全民普發現金6000元，民進黨立院黨團總召柯建銘透露，估最快4月10日當週可發放。外界關心發放方式？數位發展部昨（2）日指出，目前規劃3大發放管道，其中2族群可望免登記，直接將6000元入帳，其餘近8成民眾ATM領取。"
                },
                {
                    "code": "title",
                    "languageCode": "zh-tw",
                    "value": "經濟部今天表示，中國製從來沒有准許進口，若有市售商品，即屬走私或虛報，現已發函要求所有實體通路及電商平台依法立即下架，絕大多數電商及實體店家，也已主動配合下架不合格商品也已主動配合下架不合格商品也已主動配合下架不合格商品2"
                }
            ]
        }
      })

    })
})