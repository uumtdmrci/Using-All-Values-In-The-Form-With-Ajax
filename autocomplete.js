 
	$('.loadingg').html('')// Features I added in terms of UI
   $('#loading_gif').css("display","none")
  document.getElementById("full-data-include").style.display = "";

	 function submitt(q_id){ 
		var option_value = $(`input[name="answer_${q_id}"]:checked`).val();
		var detail = $(`#detail_${q_id}_1`).val();
		var photo = $('#file_text_'+ q_id+'_1_1').val();
		var wrk_visit_id = $('#wrk_visit_id').val();
  		if(document.getElementById('file_text_'+ q_id+'_1_1')!=undefined)
			{
				var listdata = []; 
				if(document.getElementById('c_'+ q_id+'_1_1').getAttribute("src")!='/extra/storeassessment/images/white_table_bg.png')
				{	 
					fbase = document.getElementById('c_'+ q_id+'_1_1').getAttribute("src");
					fname ='file_text_'+ q_id+'_1_1';
					vid='<cfoutput>#wrk_visit_id#</cfoutput>';
					data={visit_id:vid,file_name:fname,file_base:fbase,adres_info:"storeassessment"};
					listdata.push(data);
					savePhoto(listdata);
					
				}
				
			}
		 

		document.getElementById("submit_btn").disabled = true;  
		$("#submit_btn").html("Kaydediliyor");
		$('#loading_gif').css("display","")
		$("#back_").html("Yükleniyor");
 		var x = $("#add_web_denetim_sorular12 :input[value!='']").serialize()
		console.log(x)
 		$.ajax({
           type: "POST",
           url: 'your-worksheet',
			success: function (response) {
                 $("#back_").html(response);
				 
 				
            }
         });
	}
 
