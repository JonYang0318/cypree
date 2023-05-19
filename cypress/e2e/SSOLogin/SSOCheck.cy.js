describe("檢查埋字",()=>{
    it('將DB設置為嚴謹條款與簡訊登入',function(){
        cy.task( "queryDb",`UPDATE telligent_member.company_setting SET login_type = '2' WHERE id = ('73efafaa-609e-11ed-aad0-0242ac170004');`)

        cy.task( "queryDb",`UPDATE telligent_member.company_setting SET terms_policy_type= '1' WHERE id = ('73efafaa-609e-11ed-aad0-0242ac170004');`)
        
        }) 
        
    it('手機號碼格式檢查',function(){
        cy.visit('https://qa.telli.cc/consumer/member/login')
        cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/label').type('1234678')

        cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/button/span[2]').click()
        cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/label/div/div[2]/div').contains('請輸入有效手機號碼');
        }) 
    })


describe("檢查驗證碼錯誤時訊息",()=>{      
    it('驗證碼防呆檢查',function(){
        cy.visit('https://qa.telli.cc/consumer/member/login')
        cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/label').type('0966548485')
    
        cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/button/span[2]').click()
        cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/div/label/div/div[1]/div/input').type('{enter}') //亂輸入
        cy.xpath("/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/div/label/div/div[2]/div").as("VertifCon2")  //取值
        cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/div/label/div/div[2]/div').contains('驗證碼不得為空');
        cy.get("@VertifCon2").should("contain", '驗證碼不得為空')


        cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/div/label/div/div[1]/div/input').type('5555') //亂輸入
        cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/div/p').contains('驗證碼錯誤，請重新輸入');

        cy.xpath("/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/div/p").as("VertifCon2")  //取值
        cy.get("@VertifCon2").should("contain", '驗證碼錯誤，請重新輸入')
        }) 
    })
    
describe("驗證未註冊帳號時彈跳視窗",()=>{      
    it('彈跳視窗功能檢查',function(){
            cy.visit('https://qa.telli.cc/consumer/member/login')
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/label').type('0966548485')
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/button/span[2]').click()
            cy.wait(4000)
            cy.task( "queryDb",`select code From telligent_member.member_captcha ORDER BY expired_time desc LIMIT 1;`).then(function (recordset) {
               var a = recordset[0]['code']
               //var b=parseInt(a)
            cy.wait(2000)
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/div/label/div/div[1]/div/input').type(a)
            cy.xpath("/html/body/div[3]/div/div[2]/div/div[1]/div[2]").as("VertifySuc")  //取值
            cy.get("@VertifySuc").should("contain", '驗證成功')
            

            }) 
        })
    
           
      

        
describe("資料庫重製",()=>{      
    it('DB資料刪除讓資料能重新註冊/memeber/memeber_acount/profile_basic/extended',function(){
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

     it('將DB設置為嚴謹條款與簡訊登入',function(){
        cy.task( "queryDb",`UPDATE telligent_member.company_setting SET login_type = '1' WHERE id = ('73efafaa-609e-11ed-aad0-0242ac170004');`)

        cy.task( "queryDb",`UPDATE telligent_member.company_setting SET terms_policy_type= '2' WHERE id = ('73efafaa-609e-11ed-aad0-0242ac170004');`)
        
        }) 
  
        })
        
    })

describe("密碼強度檢查",()=>{      
        it('密碼安全:強',function(){
            cy.visit('https://qa.telli.cc/consumer/member/login')
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[2]/div/button').click()
            cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[1]/input').type('a2492786091@gmail.com')
            cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[2]/input').type('Rulai30126')
            cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[3]/button').click()
            cy.wait(3000)
            
                //var b=parseInt(a)
                

             cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label/div/div[1]/div[2]/input').type('0966548485') //拿取驗證碼
             cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/button/span[2]').click()
             cy.wait(5000)
             cy.task( "queryDb",`select code From telligent_member.member_captcha ORDER BY expired_time desc LIMIT 1;`).then(function (recordset) {
                var a = recordset[0]['code']
             
             cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div/label/div/div[1]/div/input').type(a)
           
            cy.wait(5000)
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
             cy.wait(2000)
             cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[1]/div').type('1A2a3B4b5c6C#@')
             cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[1]/div/div[1]/div[2]/i').click()
             cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/p').as('High')
             cy.get("@High").should("contain", '密碼強度: 強')
           
            }) 
        })

        it('密碼強度中',function(){
            cy.visit('https://qa.telli.cc/consumer/member/login')
            cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[2]/div/button').click()
            cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[1]/input').type('a2492786091@gmail.com')
            cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[2]/input').type('Rulai30126')
            cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[3]/button').click()
            cy.wait(3000)
            
                //var b=parseInt(a)
                

             cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label/div/div[1]/div[2]/input').type('0966548485') //拿取驗證碼
             cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/button/span[2]').click()
             cy.wait(5000)
             cy.task( "queryDb",`select code From telligent_member.member_captcha ORDER BY expired_time desc LIMIT 1;`).then(function (recordset) {
                var a = recordset[0]['code']
             
             cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div/label/div/div[1]/div/input').type(a)
   
             cy.wait(5000)
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
             cy.wait(2000)
             cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[1]/div').type('123456@')
             cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[1]/div/div[1]/div[2]/i').click()
             cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/p').as('Med')
             cy.get("@Med").should("contain", '密碼強度: 中')
           
            }) 
        })
            
    it('密碼強度低',function(){
        cy.visit('https://qa.telli.cc/consumer/member/login')
        cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[2]/div/button').click()
        cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[1]/input').type('a2492786091@gmail.com')
        cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[2]/input').type('Rulai30126')
        cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[3]/button').click()
        cy.wait(3000)
        
            //var b=parseInt(a)
            

         cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label/div/div[1]/div[2]/input').type('0966548485') //拿取驗證碼
         cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/button/span[2]').click()
         
         
         cy.wait(5000)
         cy.task( "queryDb",`select code From telligent_member.member_captcha ORDER BY expired_time desc LIMIT 1;`).then(function (recordset) {
            var a = recordset[0]['code']
         
         cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/div/label/div/div[1]/div/input').type(a)

         cy.wait(5000)
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
         cy.wait(2000)
         cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[1]/div').type('123456')
         cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[1]/div/div[1]/div[2]/i').click()
         cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/p').as('low')
         cy.get("@low").should("contain", '密碼強度: 弱')
       
        }) 
    
    
})
})
