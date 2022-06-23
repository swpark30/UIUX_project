/**
 * 
 */
 
 $(document).ready(function(){
	$('img').on('mouseover', function(){
		$(this).attr('src', 'image/logo-w2.png').animate({top:-90},500)
		
	})
	.on('mouseout', function(){
		$(this).attr('src', 'image/logo-w.png').animate({top:-70},500)
		
	})
	.on('click', function(){
		location.href = "메인메뉴";
	});
	
	$('#loginForm').on('submit', function(){
		if($('#idBox').val() == ""){
			alert("아이디를 입력해주세요")
			$('#idBox').focus();
			return false;
		}
		
		if($('#pwdBox').val() == ""){
			alert("비밀번호를 입력해주세요")
			$('#pwdBox').focus();
			return false;
		}
	});
	
	$('#join').on('click', function(){
		var ask = confirm("화원가입을 하시겠습니까?");
		if(ask == true){
		}else{
			return false;
		}
	});
	
	$('#idBox').on('keyup', function(){
		$(this).attr('maxlength', '10');
	});
	
	$('#pwdBox').on('keyup', function(){
		$(this).attr('maxlength', '20');
	});
	
	
});
 
 