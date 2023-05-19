const username = Cypress.env('id').username;
const password = Cypress.env('id').password;
const tel = Cypress.env('id').tel;
describe("登入/LineOnly/註冊時手機不須驗證碼/註冊時要放Line_ID",()=>{
    it('將DB設置為嚴謹條款與簡訊登入',function(){
          cy.task( "queryDb",`UPDATE telligent_member.company_setting SET login_type = '1' WHERE id = ('73efafaa-609e-11ed-aad0-0242ac170004');`)
          cy.task( "queryDb",`UPDATE telligent_member.corporation SET identity_type= '2' WHERE id = ('73efafaa-609e-11ed-aad0-0242ac170004');`)
          cy.task( "queryDb",`UPDATE telligent_member.corporation SET verification_type= '1' WHERE id = ('73efafaa-609e-11ed-aad0-0242ac170004');`)
          }) 
          
    it('註冊帳號',function(){
        cy.visit('https://qa.telli.cc/consumer/member/login')
        //Line帳號密碼輸入
        cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[1]/input').type(username)
        cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[2]/input').type(password)
        cy.xpath('/html/body/div/div/div/div/div/div[2]/div/form/fieldset/div[4]/button').click()
           
        }) 
    
      //   it('再次將DB資料刪除',function(){
      //       cy.task( "queryDb",`DELETE From telligent_member.member ORDER BY registration_time desc LIMIT 1;`).then((result) => {
      //          expect(result.message).to.equal("")
      //       }) 
      
      //       cy.task( "queryDb",`DELETE From telligent_member.member_account ORDER BY creation_time desc LIMIT 1;`).then((result) => {
      //          expect(result.message).to.equal("")
      //       }) 

      //       cy.task( "queryDb",`DELETE From telligent_member.member_account ORDER BY creation_time desc LIMIT 2;`).then((result) => {
      //          expect(result.message).to.equal("")
      //       }) 
      
      //       cy.task( "queryDb",`DELETE From telligent_member.member_profile_basic ORDER BY creation_time desc LIMIT 1;`).then((result) => {
      //          expect(result.message).to.equal("")
      //       }) 
      
      //       cy.task( "queryDb",`DELETE From telligent_member.member_extended_profile ORDER BY creation_time desc LIMIT 1;`).then((result) => {
      //          expect(result.message).to.equal("")
      //       }) 

      //       cy.task( "queryDb",`DELETE From telligent_member.member_extended_profile ORDER BY creation_time desc LIMIT 2;`).then((result) => {
      //          expect(result.message).to.equal("")
      //       }) 

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
               });
            
         });
    
        
