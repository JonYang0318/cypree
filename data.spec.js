
it('登入帳號',function(){
cy.visit('https://qa.telli.cc/teconsole-sso-vue/login?companyid=326&membersourceid=196c971d-7f23-11ec-9c66-0242ac170002&redirect_url=https%253a%252f%252fshoptest.3rdchannel.com.tw%252fPlugins%252fSSOAuth%252fLoginCallback%253freturnurl%253d%252f')
cy.wait(4000)
cy.xpath('/html/body/div[1]/div/div/div[2]/div/div[2]/div/div[1]/fieldset/div/div[1]/input').type('0966548485')
cy.xpath('/html/body/div[1]/div/div/div[2]/div/div[2]/div/div[2]/button').click()
cy.wait(4000)
cy.task( "queryDb",`select verifycode From TE_SSO.SSO_MobileVerifyCode ORDER BY mobileVerifyCodeNo desc LIMIT 1;`).then(function (recordset) {
   var a = recordset[0]['verifycode']
   var b=parseInt(a)
   
   cy.wait(4000)
   cy.xpath('/html/body/div[1]/div/div/div[2]/div/div[2]/div/div[1]/fieldset').type(b) //想要把DB撈到的資料放入Type(裡面)只接收型別為string/number
}) 
//跳轉至商品搜尋頁1.點選搜尋2.輸入商品3.確認
cy.xpath('/html/body/div[6]/div[1]/div/div[2]').click()
cy.xpath('/html/body/div[6]/div[6]/form/input').type('雪莉_A商品')
cy.xpath('/html/body/div[6]/div[6]/form/button').click()

//
});



