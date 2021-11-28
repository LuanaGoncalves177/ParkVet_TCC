$('#cadastro-tutor').click(function(){
    console.log('button clicked');
    $.ajax({url: 'cadastro-tutor', success:function(res){
        console.log('server response is', res);
    }});
});