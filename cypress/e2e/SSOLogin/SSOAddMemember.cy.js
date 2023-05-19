describe("登入/DB檢查驗證功能檢測",()=>{
    it('將DB設置為LineOnly/註冊完時手機綁LineUID',function(){
            //一般登入
          cy.task( "queryDb",`UPDATE telligent_member.company_setting SET login_type = '3' WHERE id = ('73efafaa-609e-11ed-aad0-0242ac170004');`)
            //不需要驗證碼
          cy.task( "queryDb",`UPDATE telligent_member.corporation SET verification_type = '2' WHERE id = ('75d055f2-5f16-11ed-afa6-00ffaf2156c9');`)
          cy.task( "queryDb",`UPDATE telligent_member.corporation SET identity_type = '1' WHERE id = ('75d055f2-5f16-11ed-afa6-00ffaf2156c9');`)
          // cy.task( "queryDb",`UPDATE telligent_member.company_setting SET terms_policy_type= '1' WHERE id = ('73efafaa-609e-11ed-aad0-0242ac170004');`)
          }) 

       it('不需要驗證碼/註冊帳號',function(){
        cy.visit('https://qa.telli.cc/consumer/member/login')
        cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[1]/input').type('a2492786091@gmail.com')
        cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[2]/input').type('Rulai30126')
        cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[3]/button').click()
        cy.wait(3000)
        cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/label').type('0966548485')
        cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/button').click()
        cy.wait(4000)
      
        //不需要驗證碼
        // cy.task( "queryDb",`select code From telligent_member.member_captcha ORDER BY expired_time desc LIMIT 1;`).then(function (recordset) {
        //    var a = recordset[0]['code']
        //    //var b=parseInt(a)
        //    cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div[1]/form/div/label/div/div[1]/div/input').type(a) //想要把DB撈到的資料放入Type(裡面)只接收型別為string/number
        cy.xpath('/html/body/div[3]/div/div[2]/div/div[2]/button[2]/span[2]').dblclick()
        cy.wait(3000)
        //進入會員條款
        cy.scrollTo('bottom') //滾動至下方
        cy.xpath('/html/body/div[1]/div/footer/div[1]/div[1]/div[2]').click() //點選checkbox
        cy.xpath('/html/body/div[1]/div/footer/div[1]/div[2]/div/button[2]/span[2]').click()//確認條款
           function nickname() {
             const chars = "abcdefghyjklmnopqrstuvwxyz";
             let me = "";
             for (let i = 0; i < 2; i++) {
                 me += chars.charAt(Math.floor(Math.random() * chars.length));
             }
             return "TwiceMmeber"+me;
        }
           //輸入姓名
           cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[2]/div/div[1]/div/input').type(nickname())
           function mailname() {
             const chars = "abcdefghyjklmnopqrstuvwxyz";
             let me = "";
             for (let i = 0; i < 4; i++) {
                 me += chars.charAt(Math.floor(Math.random() * chars.length));
             }
             return me+'@'+me+'.com';
        }
           //信箱
           cy.xpath('/html/body/div[1]/div/div/main/div/div[2]/div/div/div/form/label[3]/div/div[1]/div/input').type(mailname())
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
        it('將DB定值還原既有設定值',function(){
          //需要驗證碼
        cy.task( "queryDb",`UPDATE telligent_member.corporation SET verification_type = '2' WHERE id = ('75d055f2-5f16-11ed-afa6-00ffaf2156c9');`)
          //一般登入
        cy.task( "queryDb",`UPDATE telligent_member.company_setting SET login_type = '1' WHERE id = ('73efafaa-609e-11ed-aad0-0242ac170004');`)

          //帳號建立時以手機為準
        cy.task( "queryDb",`UPDATE telligent_member.corporation SET identity_type = '1' WHERE id = ('75d055f2-5f16-11ed-afa6-00ffaf2156c9');`)
        }) 
        
        
        
        it('將DB資料刪除', function() {
          cy.task("queryDb",` DELETE FROM telligent_member.member_account WHERE member_id IN (SELECT id FROM telligent_member.member WHERE account ='886966548485');`)
          .then((result) => {
          expect(result.message).to.equal("");
          });
          
          cy.task("queryDb",` DELETE FROM telligent_member.member_extended_profile WHERE member_id IN (SELECT id FROM telligent_member.member WHERE account ='886966548485');`)
          .then((result) => {
          expect(result.message).to.equal("");
          });
          
          cy.task("queryDb", `DELETE FROM telligent_member.member_profile_basic WHERE member_id IN (SELECT id FROM telligent_member.member WHERE account ='886966548485');`)
          .then((result) => {
          expect(result.message).to.equal("");
          });
          
          cy.task("queryDb", `DELETE FROM telligent_member.member WHERE account ='886966548485';`)
          .then((result) => {
          expect(result.message).to.equal("");
          });
          })

        })