$('#dugmePosalji').on('click',function() {
	var data = {
		"$class": "org.acme.biz.Drug",
		"name": $('#ime').val(),
		"owner": "org.acme.biz.Factory#"+$('#vlasnik').val(),
		"taxIsPaid": "false",
		"validTo":$('#datum').val(), 
		"serialNumber": $('#broj').val(), 
		"factory": "org.acme.biz.Factory#1", 
		"sold": "false"
	};
	console.log(data);
	$.ajax({
		type: "POST",
		url: "http://localhost:3000/api/Drug",
		data: data,
		success: console.log('Uspesno dodato')
	}); 
});