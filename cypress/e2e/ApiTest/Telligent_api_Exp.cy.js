it.skip('測是api樣本', { env: { hideCredentials: true } }, () => {
cy.api({
    method: 'POST', 
    url: 'https://reqres.in/api/users', 
    body: {   "name": "morpheus",
    "job": "leader" }
  })
 })
 it.skip('測試reqest',function(){

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

let token;

it('取得點數Token', { env: { hideCredentials: true } }, () => {
// Visit the page that generates the token and get it from the dev tools
  cy.viewport(1500, 1250)
  cy.visit('https://uat.telligentbiz.com/login?corporationId=51ae9a0b-953f-11ed-bc60-00ffaf2156c9')
  const mail =cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[1]/div/div[1]/div[2]/input')
  const pwd = cy.xpath('/html/body/div[1]/div/div/main/div[2]/div/div[2]/div/div/div[1]/div/label[2]/div/div[1]/div[2]/input')

  mail.type('vickey.huang@telexpress.com')
  pwd.type('123456{enter}')
  cy.xpath('/html/body/div[1]/div/div[2]/main/micro-app/micro-app-body/div[1]/div/div[2]/div/div[3]/div[1]/div/table/tbody/tr[7]/td[6]/div/div/button/span[2]/i',{ timeout: 10000 }).dblclick()
 
  cy.intercept({
    method: 'GET',
    url: '**/08db13f0-e528-4d3e-8ca3-dfe8b810ee36**'
  }, (req) => {
    // 检查请求头中的授权标头
    const authHeader = req.headers.authorization;
    token = authHeader.replace('Bearer ', '').replace(/\s/g, '');
    console.log(token);
    
  })

  cy.wait(2000)
});



it('取得到期點數資訊', { env: { hideCredentials: true } }, () => {
  cy.viewport(1500, 1250)
  cy.api({
      method: 'GET', 
      url: 'https://gw-uat.telligentbiz.com/iscoop/point/api/point/member/08db13f0-e528-4d3e-8ca3-dfe8b810ee36',
      headers: {
        'Authorization':  `${token}`
      }
    }).then((response) => {
      expect(response.status).to.eq(200); 
    });
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