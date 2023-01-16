describe("登入/DB檢查",()=>{
it('將DB設置為嚴謹條款與簡訊登入',function(){
      cy.task( "queryDb",`UPDATE telligent_member.company_setting SET login_type = '2' WHERE id = ('73efafaa-609e-11ed-aad0-0242ac170004');`)

      cy.task( "queryDb",`UPDATE telligent_member.company_setting SET terms_policy_type= '1' WHERE id = ('73efafaa-609e-11ed-aad0-0242ac170004');`)
      
      }) 
      
   it('註冊帳號',function(){
    cy.visit('https://qa.telli.cc/consumer/member/login')
    cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/label').type('0966548485')
    cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/button').click()
    cy.wait(4000)
    cy.task( "queryDb",`select code From telligent_member.member_captcha ORDER BY expired_time desc LIMIT 1;`).then(function (recordset) {
       var a = recordset[0]['code']
       //var b=parseInt(a)
       
       cy.wait(2000)
       cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/div/label/div/div[1]/div/input').type(a) //想要把DB撈到的資料放入Type(裡面)只接收型別為string/number
       cy.xpath('/html/body/div[3]/div/div[2]/div/div[2]/button[2]/span[2]').dblclick()
       cy.wait(3000)
       //進入會員條款
       cy.scrollTo('bottom') //滾動至下方
       cy.xpath('/html/body/div[1]/div/footer/div[1]/div[1]/div[2]').click() //點選checkbox
       cy.xpath('/html/body/div[1]/div/footer/div[1]/div[2]/div/button[2]/span[2]').click()//確認條款

       //輸入姓名
       cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[2]/div/div[1]/div/input').type('jimmy')
       //信箱
       cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[3]/div/div[1]/div/input').type('655@kk.com')
       //生日
       cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[4]/div/div[1]/div[1]/i').click()
       cy.xpath('/html/body/div[3]/div/div/div/div[1]/div/div[3]/div/div[9]/button/span[2]/span').click()

      //性別選擇
       cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[5]/div/div[1]/div[2]/i').click()
       cy.xpath('/html/body/div[3]/div/div[2]/div[2]/div[2]/div').click()

       cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[1]/div[1]/label/div/div[1]/div[2]/i').click()
      //地址1.按下地區 2.選擇地區
       cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[1]/div[1]/label').dblclick()
       cy.xpath('/html/body/div[3]/div/div[2]/div[1]/div[2]').dblclick()
       cy.wait(1000)
       //縣市
       
      //  cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[1]/div[1]/label/div/div[1]').dblclick()
      //  cy.xpath('/html/body/div[3]/div/div[2]/div[2]/div[1]').dblclick()

       //區域
      //  cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[1]/div[3]/label/div/div[1]/div[2]/i').click()
      //  cy.xpath('/html/body/div[3]/div/div[2]/div[3]/div[2]').click()
      //  cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[6]/div/div[1]/div/input').type('平一路158號')

       //自訂議會員資料
       cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[3]/div[4]/label/div/div[1]/div[2]/i').click()
       cy.xpath('/html/body/div[3]/div/div[2]/div[1]/div[2]/div').click()
       //確認註冊
       cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/button/span[2]').click()
       
    }) 
    
    //
    });
    
   it('登入測試',function(){
      cy.visit('https://qa.telli.cc/consumer/member/login')
      cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/label').type('0966548485')
      cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/button').click()
      cy.wait(4000)
      cy.task( "queryDb",`select code From telligent_member.member_captcha ORDER BY expired_time desc LIMIT 1;`).then(function (recordset) {
         var a = recordset[0]['code']
         var b=parseInt(a)
       
       cy.wait(2000)
       cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/div/label/div/div[1]/div/input').type(b) //想要把DB撈到的資料放入Type(裡面)只接收型別為string/number
       
      }) 
      
   });




   it.only('DB資料刪除讓資料能重新註冊/memeber/memeber_acount/profile_basic/extended',function(){
      cy.task( "queryDb",`DELETE From telligent_member.member ORDER BY registration_time desc LIMIT 1;`).then((result) => {
         expect(result.message).to.equal("")
      }) 

      cy.task( "queryDb",`DELETE From telligent_member.member_account ORDER BY creation_time desc LIMIT 1;`).then((result) => {
         expect(result.message).to.equal("")
      }) 

      cy.task( "queryDb",`DELETE From telligent_member.member_profile_basic ORDER BY creation_time desc LIMIT 1;`).then((result) => {
         expect(result.message).to.equal("")
      }) 

      cy.task( "queryDb",`DELETE From telligent_member.member_extended_profile ORDER BY creation_time desc LIMIT 1;`).then((result) => {
         expect(result.message).to.equal("")
      }) 
      
   });


    it('檢查會員權益條款按鍵功能是否正常',function(){
      cy.visit('https://qa.telli.cc/consumer/member/login')
      cy.wait(4000)
      cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/div[2]/p/a').click()
      cy.wait(3000)
      cy.xpath('/html/body/div[3]/div/div[2]/div/div[3]/button/span[2]/span').click()
      cy.wait(3000)
  
      
   });

   
   it('檢查LINE_按鍵檢查有無作用',function(){
      cy.visit('https://qa.telli.cc/consumer/member/login')
      cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[2]/div/button/span[2]/div/div').click()
      cy.wait(3000)
     
  
      
   });


   it('將DB設置為鬆散與一般登入',function(){
      cy.task( "queryDb",`UPDATE telligent_member.company_setting SET login_type = '1' WHERE id = ('73efafaa-609e-11ed-aad0-0242ac170004');`)

      cy.task( "queryDb",`UPDATE telligent_member.company_setting SET terms_policy_type= '2' WHERE id = ('73efafaa-609e-11ed-aad0-0242ac170004');`)
      
      }) 


   it('一般註冊帳號//DB撈驗證碼是否為正常',function(){
         cy.visit('https://qa.telli.cc/consumer/member/login')
         cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/div[1]/div/a[2]').click() //按下註冊的button
         cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/div[2]/form/button').click()

         cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/div[2]/form/label/div/div[1]/div[2]/input').type('0966548485')
         cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/div[2]/form/button').click()//輸入電話號碼
         cy.wait(3000)

         cy.task( "queryDb",`select code From telligent_member.member_captcha ORDER BY expired_time desc LIMIT 1;`).then(function (recordset) {
            var a = recordset[0]['code']
            //var b=parseInt(a)
            
         cy.wait(2000)
         cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/div[2]/form/div/label/div/div[1]/div/input').type(a) //想要把DB撈到的資料放入Type(裡面)只接收型別為string/number

         cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[1]/div/div[1]/div[1]/input').type('aB123456')//進入密碼輸入
         cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[2]').type('aB123456')
         cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/button/span[2]').click()
         cy.wait(2000)
         
     
            //輸入姓名
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[2]/div/div[1]/div/input').type('jimmy')
            //信箱
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[3]/div/div[1]/div/input').type('655@kk.com')
            //生日
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[4]/div/div[1]/div[1]/i').click()
            cy.xpath('/html/body/div[3]/div/div/div/div[1]/div/div[3]/div/div[9]/button/span[2]/span').click()
     
           //性別選擇
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[5]/div/div[1]/div[2]/i').click()
            cy.xpath('/html/body/div[3]/div/div[2]/div[2]/div[2]/div').click()
     
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[1]/div[1]/label/div/div[1]/div[2]/i').click()
           //地址1.按下地區 2.選擇地區
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[1]/div[1]/label').dblclick()
            cy.xpath('/html/body/div[3]/div/div[2]/div[1]/div[2]').dblclick()
            cy.wait(1000)
            //縣市
            
           //  cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[1]/div[1]/label/div/div[1]').dblclick()
           //  cy.xpath('/html/body/div[3]/div/div[2]/div[2]/div[1]').dblclick()
     
            //區域
           //  cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[1]/div[3]/label/div/div[1]/div[2]/i').click()
           //  cy.xpath('/html/body/div[3]/div/div[2]/div[3]/div[2]').click()
           //  cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[6]/div/div[1]/div/input').type('平一路158號')
     
            //自訂議會員資料
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[3]/div[4]/label/div/div[1]/div[2]/i').click()
            cy.xpath('/html/body/div[3]/div/div[2]/div[1]/div[2]/div').click()
            //確認註冊
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/button/span[2]').click()
            
         }) 
         
         //
         });

         it('登入測試',function(){
            cy.visit('https://qa.telli.cc/consumer/member/login')
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/div[2]/form/label[1]/div/div[1]/div[2]/input').type('0966548485')
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/div[2]/form/label[2]').type('aB123456')
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/div[2]/form/div/button/span[2]').click()
            
            
            }) 
            
         it('再次將DB資料刪除',function(){
               cy.task( "queryDb",`DELETE From telligent_member.member ORDER BY registration_time desc LIMIT 1;`).then((result) => {
                  expect(result.message).to.equal("")
               }) 
         
               cy.task( "queryDb",`DELETE From telligent_member.member_account ORDER BY creation_time desc LIMIT 1;`).then((result) => {
                  expect(result.message).to.equal("")
               }) 
         
               cy.task( "queryDb",`DELETE From telligent_member.member_profile_basic ORDER BY creation_time desc LIMIT 1;`).then((result) => {
                  expect(result.message).to.equal("")
               }) 
         
               cy.task( "queryDb",`DELETE From telligent_member.member_extended_profile ORDER BY creation_time desc LIMIT 1;`).then((result) => {
                  expect(result.message).to.equal("")
               }) 
               
            });


            it('檢查密碼show出不一致問題',function(){
               cy.visit('https://qa.telli.cc/consumer/member/login')
               cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[2]/div/button/span[2]/div/div').click()
               cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[1]/input').type('a2492786091@gmail.com')//輸入帳號
               cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[2]/input').type('Rulai1998')//輸入密碼
               cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[3]/button').click()

               cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label/div/div[1]/div[2]/input').type('0966548485')
               cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/button/span[2]').click()
               cy.wait(3000)
               cy.task( "queryDb",`select code From telligent_member.member_captcha ORDER BY expired_time desc LIMIT 1;`).then(function (recordset) {
                  var a = recordset[0]['code']
                  //var b=parseInt(a)
                  
               cy.wait(2000)
               cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div/label/div/div[1]/div/input').type(a) //拿取驗證碼

               // cy.scrollTo('bottom') //滾動至下方
               // cy.xpath('/html/body/div[1]/div/footer/div[1]/div[1]/div[1]').click() //點選checkbox
               // cy.xpath('/html/body/div[1]/div/footer/div[1]/div[2]/div/button[2]/span[2]').click()//確認條款

            //輸入姓名
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[2]/div/div[1]/div/input').type('jimmy')
            //信箱
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[3]/div/div[1]/div/input').type('655@kk.com')
            //生日
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[4]/div/div[1]/div[1]/i').click()
            cy.xpath('/html/body/div[3]/div/div/div/div[1]/div/div[3]/div/div[9]/button/span[2]/span').click()
     
           //性別選擇
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[5]/div/div[1]/div[2]/i').click()
            cy.xpath('/html/body/div[3]/div/div[2]/div[2]/div[2]/div').click()
     
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[1]/div[1]/label/div/div[1]/div[2]/i').click()
           //地址1.按下地區 2.選擇地區
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[1]/div[1]/label').dblclick()
            cy.xpath('/html/body/div[3]/div/div[2]/div[1]/div[2]').dblclick()
            cy.wait(1000)

            //自訂議會員資料
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[3]/div[4]/label/div/div[1]/div[2]/i').click()
            cy.xpath('/html/body/div[3]/div/div[2]/div[1]/div[2]/div').click()
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/button/span[2]').click()
            
            //註冊成功/檢查密碼
            cy.wait(5000)
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[1]').type('1234567890abcdefghijklmnopqrst')
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[2]').type('1234567890abcdefghijklmnopqrsq')
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/button[1]/span[2]').click()
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/div/p').contains('密碼不一致')
               }) 

            });
            it('Line註冊測試/省略密碼編輯',function(){
               cy.visit('https://qa.telli.cc/consumer/member/login')
               cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[2]/div/button/span[2]/div/div').click()
               cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[1]/input').type('a2492786091@gmail.com')//輸入帳號
               cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[2]/input').type('Rulai1998')//輸入密碼
               cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[3]/button').click()

               cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label/div/div[1]/div[2]/input').type('0966548485')
               cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/button/span[2]').click()
               cy.wait(3000)
               cy.task( "queryDb",`select code From telligent_member.member_captcha ORDER BY expired_time desc LIMIT 1;`).then(function (recordset) {
                  var a = recordset[0]['code']
                  //var b=parseInt(a)
                  
               cy.wait(2000)
               cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div/label/div/div[1]/div/input').type(a) //拿取驗證碼

               // cy.scrollTo('bottom') //滾動至下方
               // cy.xpath('/html/body/div[1]/div/footer/div[1]/div[1]/div[1]').click() //點選checkbox
               // cy.xpath('/html/body/div[1]/div/footer/div[1]/div[2]/div/button[2]/span[2]').click()//確認條款

            //輸入姓名
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[2]/div/div[1]/div/input').type('jimmy')
            //信箱
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[3]/div/div[1]/div/input').type('655@kk.com')
            //生日
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[4]/div/div[1]/div[1]/i').click()
            cy.xpath('/html/body/div[3]/div/div/div/div[1]/div/div[3]/div/div[9]/button/span[2]/span').click()
     
           //性別選擇
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[5]/div/div[1]/div[2]/i').click()
            cy.xpath('/html/body/div[3]/div/div[2]/div[2]/div[2]/div').click()
     
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[1]/div[1]/label/div/div[1]/div[2]/i').click()
           //地址1.按下地區 2.選擇地區
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[1]/div[1]/label').dblclick()
            cy.xpath('/html/body/div[3]/div/div[2]/div[1]/div[2]').dblclick()
            cy.wait(1000)

            //自訂議會員資料
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div[3]/div[4]/label/div/div[1]/div[2]/i').click()
            cy.xpath('/html/body/div[3]/div/div[2]/div[1]/div[2]/div').click()
            //註冊成功/密碼檢查
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/button/span[2]').click()
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/button[2]').click()

               }) 

            });


            it('Line註冊測試/省略密碼登入',function(){
               cy.visit('https://qa.telli.cc/consumer/member/login')
               cy.wait(8000)
               cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[2]/div/button/span[2]/div/div').click()
               cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[1]/input').type('a2492786091@gmail.com')//輸入帳號
               cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[2]/input').type('Rulai1998')//輸入密碼
               cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[3]/button').click()

              

               // cy.scrollTo('bottom') //滾動至下方
               // cy.xpath('/html/body/div[1]/div/footer/div[1]/div[1]/div[1]').click() //點選checkbox
               // cy.xpath('/html/body/div[1]/div/footer/div[1]/div[2]/div/button[2]/span[2]').click()//確認條款


               }) 
            

            it('再次將DB資料刪除',function(){
               cy.task( "queryDb",`DELETE From telligent_member.member ORDER BY registration_time desc LIMIT 1;`).then((result) => {
                  expect(result.message).to.equal("")
               }) 
         
               cy.task( "queryDb",`DELETE From telligent_member.member_account ORDER BY creation_time desc LIMIT 1;`).then((result) => {
                  expect(result.message).to.equal("")
               }) 

               cy.task( "queryDb",`DELETE From telligent_member.member_account ORDER BY creation_time desc LIMIT 2;`).then((result) => {
                  expect(result.message).to.equal("")
               }) 
         
               cy.task( "queryDb",`DELETE From telligent_member.member_profile_basic ORDER BY creation_time desc LIMIT 1;`).then((result) => {
                  expect(result.message).to.equal("")
               }) 
         
               cy.task( "queryDb",`DELETE From telligent_member.member_extended_profile ORDER BY creation_time desc LIMIT 1;`).then((result) => {
                  expect(result.message).to.equal("")
               }) 

               cy.task( "queryDb",`DELETE From telligent_member.member_extended_profile ORDER BY creation_time desc LIMIT 2;`).then((result) => {
                  expect(result.message).to.equal("")
               }) 
               
            });
            //npx cypress run
            //npx cypress open
      })