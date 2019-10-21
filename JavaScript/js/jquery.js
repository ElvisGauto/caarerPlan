$(document).ready(function(){
    // $('#btn1').click(function(){
    //     alert('Button Click');
    // });

    // $('#btn1').on('click', function(){
    //     // $('.para1').hide();
    //     $('.para1').toggle();
    // });

    // $('#btn2').on('click', function(){
    //     $('.para1').show();
    // });

    // $('#btn1').dblclick(function(){
    //     $('.para1').toggle();
    // });
    
    // $('#btn2').hover(function(){
    //     $('.para1').toggle();
    // });

    // $('#btn2').on('mouseup', function(){
    //     $('.para1').toggle();
    // });
    
    // $('#btn2').on('mousedown', function(){
    //     $('.para1').toggle();
    // });

    // $('#btn1').click(function(e){
        // alert(e.currentTarget.id);
        // alert(e.currentTarget.innerHTML);
        // alert(e.currentTarget.outerHTML);
        // alert(e.currentTarget.className);
    // });

    // $('#btn1').on('mousemove', function(e) {
    //     $('.para1').toggle();
    // });

    // $('input').focus(function(){
    //     // $('input#name').css('background', 'pink');
    //     $(this).css('background', 'pink');
    // });

    // $('input').blur(function(){
    //     // $('input#name').css('background', 'pink');
    //     $(this).css('background', 'white');
    // });

    // $('input').keyup(function(e) {
    //     console.log(e.target.value);
    // });

    // $('select#gender').change(function(){
    //     alert('Changed');
    // });

    $('#form').submit(function(e){
        e.preventDefault();
        console.log('Submitted');
    });
});
