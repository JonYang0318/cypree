it('my secret test', { env: { hideCredentials: true } }, () => {
cy.api({
    method: 'POST', 
    url: 'https://reqres.in/api/users', 
    body: {   "name": "morpheus",
    "job": "leader" }
  })
 })
 it('測試',function(){

 cy.request({
    method: 'GET',
    url: 'https://reqres.in/api/users',
    headers: {
        'Accept': 'application/json'
    }
}).then((response) => {
    // 檢查請求的響應狀態是否為 200
    expect(response.status).to.eq(200)
  for (let i = 0; i < response.body.data.length; i++) {
            console.log(response.body.data[i].email)
        }
       
      })
    
    
})
// it('測試',function(){
// cy.request({
//     method: 'POST',
//     url: 'https://qa.telli.cc/consumer/QA_Station/member/api/graphql',
//     headers: {
//       'Authorization': 'Bearer YOUR_TOKEN'
//     },
//     body: {
//       foo: 'bar'
//     }
//   })
//   })
// it.skip('將DB設置為嚴謹條款與簡訊登入',function(){
//     cy.task( "queryDb",`UPDATE telligent_member.company_setting SET login_type = '2' WHERE id = ('73efafaa-609e-11ed-aad0-0242ac170004');`)

//     cy.task( "queryDb",`UPDATE telligent_member.company_setting SET terms_policy_type= '1' WHERE id = ('73efafaa-609e-11ed-aad0-0242ac170004');`)
    
//     }) 

//  it('註冊帳號{i}',function(){
//   cy.visit('https://qa.telli.cc/consumer/member/login')
//  //  function telephon() {
//  //    const chars = "1234567890";
//  //    let me = "";
//  //    for (let i = 0; i < 1; i++) {
//  //        me += chars.charAt(Math.floor(Math.random() * chars.length));
//  //    }
//  //    return "097777777"+me;
//  //  }
//   cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/label').type('0966548485')
//   cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/button').click()
//   cy.wait(4000)
//   cy.task( "queryDb",`select code From telligent_member.member_captcha ORDER BY expired_time desc LIMIT 1;`).then(function (recordset) {
//      var a = recordset[0]['code']
//      //var b=parseInt(a)
     
//      cy.wait(2000)
//      cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/div/label/div/div[1]/div/input').type(a) //想要把DB撈到的資料放入Type(裡面)只接收型別為string/number
//      cy.xpath('/html/body/div[3]/div/div[2]/div/div[2]/button[2]/span[2]').dblclick()
//      cy.wait(3000)
//      //進入會員條款
//      cy.scrollTo('bottom') //滾動至下方
//      cy.xpath('/html/body/div[1]/div/footer/div[1]/div[1]/div[2]').click() //點選checkbox
//      cy.xpath('/html/body/div[1]/div/footer/div[1]/div[2]/div/button[2]/span[2]').click()//確認條款
//  //     function nickname() {
//  //       const chars = "abcdefghyjklmnopqrstuvwxyz";
//  //       let me = "";
//  //       for (let i = 0; i < 2; i++) {
//  //           me += chars.charAt(Math.floor(Math.random() * chars.length));
//  //       }
//  //       return "TwiceMmeber"+me;
//  //  }
//      //輸入姓名
//      cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[2]/div/div[1]/div/input').type('JIMMY')
//      function mailname() {
//        const chars = "abcdefghyjklmnopqrstuvwxyz";
//        let me = "";
//        for (let i = 0; i < 4; i++) {
//            me += chars.charAt(Math.floor(Math.random() * chars.length));
//        }
//        return me+'@'+me+'.com';
//   }
//      //信箱
//      cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[3]/div/div[1]/div/input').type('TPP07026@Telexpress.com')
//      //生日
//      cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[4]/div/div[1]/div[1]/i').click()
//      cy.xpath('/html/body/div[3]/div/div/div/div[1]/div/div[3]/div/div[9]/button/span[2]/span').click()

//     //性別選擇
//      cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[5]/div/div[1]/div[2]/i').click()
//      cy.xpath('/html/body/div[3]/div/div[2]/div[2]/div[2]/div').click()

//      cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[1]/div[1]/label/div/div[1]/div[2]/i').click()
//     //地址1.按下地區 2.選擇地區
//      cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[1]/div[1]/label').dblclick()
//      cy.xpath('/html/body/div[3]/div/div[2]/div[1]/div[2]').dblclick()
//      cy.wait(1000)
//      //縣市
     
//     //  cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[1]/div[1]/label/div/div[1]').dblclick()
//     //  cy.xpath('/html/body/div[3]/div/div[2]/div[2]/div[1]').dblclick()

//      //區域
//     //  cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[1]/div[3]/label/div/div[1]/div[2]/i').click()
//     //  cy.xpath('/html/body/div[3]/div/div[2]/div[3]/div[2]').click()
//     //  cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[6]/div/div[1]/div/input').type('平一路158號')

//      //自訂議會員資料
//      cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[3]/div[4]/label/div/div[1]/div[2]/i').click()
//      cy.xpath('/html/body/div[3]/div/div[2]/div[1]/div[2]/div').click()
//      //確認註冊
//      cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/button/span[2]').click()
     
//   }) 
 
//   //
//   });
 
//  it('登入測試',function(){
//     cy.visit('https://qa.telli.cc/consumer/member/login')
//     cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/label').type('0966548485')
//     cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/button').click()
//     cy.wait(4000)
//     cy.task("queryDb",`select code From telligent_member.member_captcha ORDER BY expired_time desc LIMIT 1;`).then(function (recordset)
//      {
//         var a = recordset[0]['code']
//         //var b=parseInt(a)
        
//     cy.wait(2000)
//     cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/div/label/div/div[1]/div/input').type(a) //想要把DB撈到的資料放入Type(裡面)只接收型別為string/number
     
//     }) 
    
//  });