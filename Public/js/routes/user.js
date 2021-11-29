//---------------------------------------------signup page call------------------------------------------------------
exports.signup = function(req, res){
   message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;
      var fname= post.first_name;
      var lname= post.last_name;
      var mob= post.mob_no;

      var sql = "INSERT INTO `users`(`first_name`,`last_name`,`mob_no`,`user_name`, `password`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "')";

      var query = db.query(sql, function(err, result) {

         message = "Succesfully! Your account has been created.";
         res.render('signup.ejs',{message: message});
      });

   } else {
      res.render('signup');
   }
};

//---------------------------------------------Criacao de pacotes------------------------------------------------------
exports.RegPacotes = function(req, res){
   message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var nome= post.nome;
      var descricao= post.descricao;
      var preco= post.preco;

      var sql = "INSERT INTO `pacotes`(`nome`,`descricao`,`preco`) VALUES ('" + nome + "','" + descricao + "','" + preco + "')";

      var query = db.query(sql, function(err, result) {

         message = "Pacote Cadastrado com successo.";
         res.render('RegPacotes.ejs',{message: message});
      });

   } else {
      res.render('RegPacotes');
   }
};


//---------------------------------------------Criacao de funcionario------------------------------------------------------
exports.RegFuncionario = function(req, res){
   message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var NomeFuncionario= post.NomeFuncionario;
      var Funcao= post.Funcao;
      var Salario= post.Salario;
      var DataSalario= post.DataSalario;
      var senha= post.senha;

      var sql = "INSERT INTO `Funcionario`(`NomeFuncionario`,`Funcao`,`Salario`,`DataSalario`,`senha`) VALUES ('" + NomeFuncionario + "','" + Funcao + "','" + Salario + "','" + DataSalario + "','" + senha + "')";

      var query = db.query(sql, function(err, result) {

         message = "Funcionario Cadastrado com successo.";
         res.render('RegFuncionario.ejs',{message: message});
      });

   } else {
      res.render('RegFuncionario');
   }
};
//---------------------------------------------Criacao de Tutor------------------------------------------------------
exports.RegTutor = function(req, res){
   message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var nomeTutor= post.nomeTutor;
      var Endereco= post.Endereco;
      var Email= post.Email;
      var Whatsapp= post.Whatsapp;
      var TelFixo= post.TelFixo;

      var sql = "INSERT INTO `Tutor`(`nomeTutor`,`Endereco`,`Email`,`Whatsapp`,`TelFixo`,`AutorizaMensagems`) VALUES ('" + nomeTutor + "','" + Endereco + "','" + Email + "','" + Whatsapp + "','" + TelFixo + "','" + AutorizaMensagems + "')";

      var query = db.query(sql, function(err, result) {

         message = "Tutor Cadastrado com successo.";
         res.render('RegTutor.ejs',{message: message});
      });

   } else {
      res.render('RegTutor');
   }
};

//---------------------------------------------Criacao de pet------------------------------------------------------
exports.RegPet = function(req, res){
   message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var Raca= post.Raca;
      var Especie= post.Especie;
      var Pelo= post.Pelo;
      var Porte= post.Porte;
      var Sexo= post.Sexo;

      var sql = "INSERT INTO `Pet`(`Raca`,`Especie`,`Pelo`,`Porte`,`Sexo`) VALUES ('" + Raca + "','" + Especie + "','" + Pelo + "','" + Porte + "','" + Sexo + "')";

      var query = db.query(sql, function(err, result) {

         message = "Pet cadastrado com successo.";
         res.render('RegPet.ejs',{message: message});
      });

   } else {
      res.render('RegPet');
   }
};

//---------------------------------------------Criacao de Despesas------------------------------------------------------
exports.RegDespesas = function(req, res){
   message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var Descricao= post.Descricao;
      var DataProgramada= post.DataProgramada;
      var Total= post.Total;

      var sql = "INSERT INTO `Despesas`(`Descricao`,`DataProgramada`,`Total`) VALUES ('" + Descricao + "','" + DataProgramada + "','" + Total + "')";

      var query = db.query(sql, function(err, result) {

         message = "Pet cadastrado com successo.";
         res.render('RegDespesas.ejs',{message: message});
      });

   } else {
      res.render('RegDespesas');
   }
};

//---------------------------------------------Criacao de ServicoContratado------------------------------------------------------
exports.RegServicoContratado = function(req, res){
   message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var Descricao= post.Descricao;
      var DataProgramada= post.DataProgramada;
      var Total= post.Total;

      var sql = "INSERT INTO `ServicoContratado`(`DataCriacao`,`DataServico`,`HoraServico`) VALUES ('" + DataCriacao + "','" + DataServico + "','" + HoraServico + "')";

      var query = db.query(sql, function(err, result) {

         message = "Pet cadastrado com successo.";
         res.render('RegDespesas.ejs',{message: message});
      });

   } else {
      res.render('RegDespesas');
   }
};

//---------------------------------------------Criacao de Servico------------------------------------------------------
exports.RegServico = function(req, res){
   message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var Descricao= post.Descricao;
      var DataProgramada= post.DataProgramada;
      var Total= post.Total;

      var sql = "INSERT INTO `Servico`(`Descricao`,`ValorServico`,`Total`) VALUES ('" + Descricao + "','" + ValorServico + "')";

      var query = db.query(sql, function(err, result) {

         message = "Pet cadastrado com successo.";
         res.render('RegServico.ejs',{message: message});
      });

   } else {
      res.render('RegServico');
   }
};
//-----------------------------------------------login page call------------------------------------------------------
exports.login = function(req, res){
   var message = '';
   var sess = req.session; 

   if(req.method == "POST"){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;
     
      var sql="SELECT id, first_name, last_name, user_name FROM `users` WHERE `user_name`='"+name+"' and password = '"+pass+"'";
      db.query(sql, function(err, results){      
         if(results.length){
            req.session.userId = results[0].id;
            req.session.user = results[0];
            console.log(results[0].id);
            res.redirect('/home/dashboard');
         }
         else{
            message = 'Wrong Credentials.';
            res.render('index.ejs',{message: message});
         }
                 
      });
   } else {
      res.render('index.ejs',{message: message});
   }
           
};

//-----------------------------------------------dashboard page functionality----------------------------------------------
           
exports.dashboard = function(req, res, next){
           
   var user =  req.session.user,
   userId = req.session.userId;
   console.log('ddd='+userId);
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";

   db.query(sql, function(err, results){
      res.render('dashboard.ejs', {user:user});    
   });       
};
//------------------------------------logout functionality----------------------------------------------
exports.logout=function(req,res){
   req.session.destroy(function(err) {
      res.redirect("/login");
   })
};
//--------------------------------render user details after login--------------------------------
exports.profile = function(req, res){

   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";          
   db.query(sql, function(err, result){  
      res.render('profile.ejs',{data:result});
   });
};

//--------------------------------render "pacote" details--------------------------------
exports.profile = function(req, res){

   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";          
   db.query(sql, function(err, result){  
      res.render('profile.ejs',{data:result});
   });
};

//--------------------------------render user details after login--------------------------------
exports.profile = function(req, res){

   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";          
   db.query(sql, function(err, result){  
      res.render('profile.ejs',{data:result});
   });
};
//---------------------------------edit users details after login----------------------------------
exports.editprofile=function(req,res){
   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";
   db.query(sql, function(err, results){
      res.render('edit_profile.ejs',{data:results});
   });
};
